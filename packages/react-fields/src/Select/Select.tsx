import React, {useCallback, useMemo} from 'react'
import ReactSelect, {components} from 'react-select'
import PropTypes from 'prop-types'
import {Icon, Label} from '@recylink/react-components'
import {useDeepEffect} from '@recylink/react-hooks'
import isEqual from 'lodash.isequal'
import isNil from 'lodash.isnil'

import selectStyles from './styles'
import '../styles.css'

const Select = props => {
  const {value, options, multi, extraOptions, filter, onChange} = props

  const getOptions = useMemo(() => {
    let returnOptions = options || []
    if (extraOptions.length) {
      returnOptions.concat(extraOptions)
    }
    if (filter) {
      returnOptions = returnOptions.filter(item => !filter.includes(item.value))
    }
    return returnOptions
  }, [options, filter, extraOptions])

  const calculateValue = useCallback(
    value => {
      if (!isNil(value)) {
        if (multi) {
          const selectedOptions = (value || [])
            .filter(optionValue => getOptions.find(o => o.value === optionValue))
            .reduce((acc, optionValue) => {
              const option = (options || []).find(option => option.value === optionValue)
              if (option) {
                acc.push(option)
              }
              return acc
            }, [])
          return selectedOptions.filter(option => !!option)
        } else {
          const selectedOption = options.find(option => option.value === value)
          if (filter.includes(value)) {
            return null
          }
          if (isNil(selectedOption)) return null
          return selectedOption
        }
      } else {
        return null
      }
    },
    [getOptions, multi, options, filter]
  )

  useDeepEffect(() => {
    if (!multi && filter.includes(value)) {
      onChange(null)
    }
  }, [filter, onChange, multi])

  useDeepEffect(() => {
    if (multi && filter && value) {
      const calculatedValue = calculateValue(value).map(v => v.value)
      if (!isEqual(calculatedValue, value)) {
        return onChange(calculatedValue.filter(v => !filter.includes(v)))
      }
    }
  }, [filter, multi, calculateValue, value, onChange])

  const onChangeSelect = params => {
    if (params) {
      props.onBrandedSelect(params.isBranded)
    }
    if (multi) {
      onChange(params.map(item => item.value))
    } else {
      if (params && !isNil(params.value)) {
        onChange(params.value)
      } else {
        onChange(null)
      }
    }
  }

  const DropdownIndicator = selectProps => {
    if (selectProps.options.length > 3) {
      return (
        <div
          className="recylink-select-icon-container"
          {...(selectProps.isFocused ? {style: {color: '#999999'}} : {})}>
          <Icon icon="FiCode" library="fi" className="recylink-select-icon" />
        </div>
      )
    }
    return <components.DropdownIndicator {...selectProps} />
  }

  const Option = selectProps => {
    const {label, innerRef, innerProps, isSelected} = selectProps
    return (
      <div ref={innerRef} className="recylink-select-option" {...innerProps}>
        <div
          className={
            isSelected
              ? 'recylink-select-selected-option-colored'
              : 'recylink-select-non-selected-option-colored'
          }>
          <div
            className={isSelected ? 'recylink-select-selected-check' : 'recylink-select-check'}
          />
        </div>
        {label}
      </div>
    )
  }

  const renderIcon = () => {
    if (props.icon) {
      return (
        <div className="recylink-select-props-icon-container">
          <Icon
            icon={props.icon}
            library={props.iconLibrary}
            className="recylink-select-props-icon"
          />
        </div>
      )
    }
  }

  const getMultiProps = multi
    ? {
        closeMenuOnSelect: props.closeMenuOnSelect,
        hideSelectedOptions: props.hideSelectedOptions,
        blurInputOnSelect: props.blurInputOnSelect
      }
    : {}

  const getMultiComponents = multi ? {DropdownIndicator, Option} : {DropdownIndicator}

  return (
    <div
      className={`recylink-select-container ${props.containerClassName}`}
      style={props.containerStyle}>
      <Label
        label={props.label}
        isOptional={props.isOptional}
        isOptionalLabel={props.isOptionalLabel}
        isRequired={props.isRequired}
        isRequiredLabel={props.isRequiredLabel}
      />
      {renderIcon()}
      <div className={props.multi ? 'os-multi-container' : 'recylink-input-container'}>
        <ReactSelect
          styles={selectStyles({
            errorMessage: props.errorMessage,
            icon: props.icon,
            propsStyle: props.style,
            brandedStyle: props.brandedStyle,
            menuListStyle: props.menuListStyle,
            multiValueStyle: props.multiValueStyle,
            multiValueLabelStyle: props.multiValueLabelStyle,
            multiValueContainerStyle: props.multiValueContainerStyle,
            valueContainerStyle: props.valueContainerStyle
          })}
          components={{...getMultiComponents, ...props.components}}
          classNamePrefix={props.multi ? 'rl-multi-select' : 'rl-select'}
          isMulti={props.multi}
          isSearchable={props.isSearchable}
          isClearable={props.isClearable}
          isDisabled={props.disabled}
          name={props.fieldName}
          value={calculateValue(value)}
          onChange={params => onChangeSelect(params)}
          options={getOptions}
          placeholder={props.placeholder || 'Seleccionar...'}
          noOptionsMessage={() => props.noOptionsMessage}
          onBlur={() => props.onBlur()}
          {...getMultiProps}
          {...(props.onInputChange ? {onInputChange: props.onInputChange} : {})}
          {...(props.inputValue ? {inputValue: props.inputValue} : {})}
          {...props.passProps}
        />
        <div className="recylink-description">{props.description}</div>
        <div className="recylink-input-error">{props.errorMessage}</div>
      </div>
    </div>
  )
}

Select.propTypes = {
  fieldName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  passProps: PropTypes.object,
  errorMessage: PropTypes.node,
  label: PropTypes.node,
  description: PropTypes.node,
  placeholder: PropTypes.any,
  multi: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  extraOptions: PropTypes.array,
  filter: PropTypes.array,
  icon: PropTypes.string,
  style: PropTypes.object,
  noOptionsMessage: PropTypes.node,
  brandedStyle: PropTypes.object,
  onBrandedSelect: PropTypes.func,
  onInputChange: PropTypes.func,
  inputValue: PropTypes.string,
  components: PropTypes.object,
  onBlur: PropTypes.func,
  closeMenuOnSelect: PropTypes.bool,
  hideSelectedOptions: PropTypes.bool,
  blurInputOnSelect: PropTypes.bool,
  menuListStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  containerClassName: PropTypes.string,
  multiValueStyle: PropTypes.object,
  multiValueContainerStyle: PropTypes.object,
  multiValueLabelStyle: PropTypes.object,
  valueContainerStyle: PropTypes.object,

  isOptional: PropTypes.bool,
  isOptionalLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  isRequiredlabel: PropTypes.string
}
Select.defaultProps = {
  options: [],
  extraOptions: [],
  isClearable: false,
  isSearchable: false,
  filter: [],
  style: {},
  noOptionsMessage: 'Sin opciones',
  brandedStyle: {},
  onBrandedSelect: () => {},
  onBlur: () => {},
  menuListStyle: {},
  containerStyle: {},
  components: {},
  closeMenuOnSelect: false,
  hideSelectedOptions: false,
  blurInputOnSelect: false
}

export default Select

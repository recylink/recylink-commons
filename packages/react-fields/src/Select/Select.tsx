import React, {useCallback, useMemo} from 'react'
import ReactSelect from 'react-select'
import {InferProps} from 'prop-types'
import {Icon, Label} from '@recylink/react-components'
import {useDeepEffect} from '@recylink/react-hooks'
import isEqual from 'lodash.isequal'
import isNil from 'lodash.isnil'
import {OptionInterface} from './interfaces'
import SelectPropTypes from './SelectPropTypes'
import selectStyles from './styles'
import '../styles.css'

const defaultProps = {
  fieldName: undefined,
  label: undefined,
  options: [],
  extraOptions: [],
  isClearable: false,
  isSearchable: false,
  disabled: false,
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
  blurInputOnSelect: false,
  multi: false
}

const Select = (props: InferProps<typeof SelectPropTypes> & typeof defaultProps) => {
  const {value, options, multi, extraOptions, filter, onChange} = props

  const getOptions = useMemo(() => {
    let returnOptions: any[] = options || []
    if (extraOptions.length) {
      returnOptions.concat(extraOptions)
    }
    if (filter) {
      returnOptions = returnOptions.filter(item => !filter.includes(item.value))
    }
    return returnOptions
  }, [options, filter, extraOptions])

  const calculateValue = useCallback(
    (value?: string | string[]) => {
      if (!isNil(value)) {
        if (multi) {
          const selectedOptions = (value as string[] || [])
            .filter(optionValue => getOptions.find(o => o.value === optionValue))
            .reduce((acc, optionValue) => {
              const option = (options || []).find((option: OptionInterface) => option.value === optionValue)
              if (option) {
                acc.push(option)
              }
              return acc
            }, [])
          return selectedOptions.filter(option => !!option)
        } else {
          const selectedOption = options.find((option: OptionInterface) => option.value === value)
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
    if (multi && filter) {
      if (!isNil(value)) {
        const calculatedValue = calculateValue(value as string[])
        if (calculatedValue && !isEqual(calculatedValue.map((v: OptionInterface) => v.value), value)) {
          return onChange(calculatedValue.filter(v => !filter.includes(v)))
        }
      }
    }
  }, [filter, multi, calculateValue, value, onChange])

  const onChangeSelect = (params: any) => {
    if (params) {
      props.onBrandedSelect(params.isBranded)
    }
    if (multi) {
      onChange(params.map((item: OptionInterface) => item.value))
    } else {
      if (params && !isNil(params.value)) {
        onChange(params.value)
      } else {
        onChange(null)
      }
    }
  }

  const DropdownIndicator = (selectProps: any) => {
    const className =
      selectProps.options.length > 3
        ? 'recylink-select-icon-multi rotate-90'
        : 'recylink-select-icon'
    const icon = selectProps.options.length > 3 ? 'FiCode' : 'FiChevronDown'
    return (
      <div
        className="recylink-select-icon-container"
        {...(selectProps.isFocused ? {style: {color: '#999999'}} : {})}>
        <Icon icon={icon} library="fi" className={className} />
      </div>
    )
  }

  const Option = (selectProps: any) => {
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
    if (props.icon && props.iconLibrary) {
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
          value={calculateValue(value as string | string[])}
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


Select.propTypes = SelectPropTypes
Select.defaultProps = defaultProps
export default Select

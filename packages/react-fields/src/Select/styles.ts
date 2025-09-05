import {FontFamily} from './../theme'
export default function ({
  errorMessage,
  icon,
  propsStyle,
  brandedStyle,
  valueContainerStyle,
  multiValueStyle,
  multiValueContainerStyle,
  multiValueLabelStyle,
  menuListStyle
}: any) {
  const style = {
    container: (provided: any) => ({...provided, transition: 'all 0ms', width: '100%'}),
    control: (provided: any, state: any) => {
      let style = {
        ...provided,
        height: state.isMulti ? 'auto' : '36px',
        minHeight: '36px',
        transition: 'all 0ms',
        borderColor: '#E6EDF2'
      }
      if (state.menuIsOpen) {
        return {
          ...style,
          borderRadius: '4px 4px 0px 0px',
          borderColor: '#99CFFF',
          borderWidth: '3px',
          borderStyle: 'solid',
          boxShadow: 'none'
        }
      }
      if (state.isDisabled) {
        return {...style, backgroundColor: '#bfc0c5'}
      }
      if (errorMessage) {
        return {...style, border: '2px solid', borderColor: 'var(--red) !important'}
      }
      return style
    },
    option: (provided: any, state: any) => {
      const {data} = state
      let optionStyle = {
        ...provided,
        fontSize: '14px',
        padding: '8px 12px',
        lineHeight: '16px'
      }
      if (state.isSelected) {
        return {...optionStyle, backgroundColor: '#E5F3FF', color: '#007FF1'}
      }
      if (data.isBranded) {
        return {...optionStyle, ...brandedStyle}
      }
      return {...optionStyle, color: '#424242'}
    },
    indicatorContainer: (provided: any) => ({...provided, padding: '0px 4px'}),
    indicatorSeparator: () => ({display: 'none'}),
    clearIndicator: (provided: any) => ({...provided, padding: ' 6px 8px', cursor: 'pointer'}),
    dropdownIndicator: (provided: any) => ({...provided, padding: '7px 8px', cursor: 'pointer'}),
    placeholder: (provided: any, state: any) => {
      let style = {
        ...provided,
        fontSize: 14,
        color: '#c0c1c6',
        margin: 0,
        fontWeight: 400,
        fontFamily: 'Inter'
      }
      if (state.isDisabled) {
        return {...style, color: '#cccccc'}
      }
      return style
    },
    valueContainer: (provided: any, state: any) => {
      if (state.isMulti) {
        return {
          ...provided,
          padding: state.hasValue ? '5px 6px 0px 12px;' : '0px 6px 0px 12px;',
          height: 'auto',
          transition: 'all 0ms',
          width: '300px',
          flexWrap: 'unset',
          overflowX: 'auto',
          ...valueContainerStyle,
          ...multiValueContainerStyle
        }
      } else {
        return {
          ...provided,
          padding: icon ? '0px 0px 0px 38px' : '0px 6px 0px 12px',
          height: '36px',
          ...valueContainerStyle
        }
      }
    },
    singleValue: (provided: any) => ({...provided, fontSize: '14px', margin: 0}),
    multiValue: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.children === 'Eliminado' ? 'var(--red)' : 'var(--blue)',
      color: '#fff',
      borderRadius: '12px',
      margin: '0px 12px 5px 0px',
      minWidth: 'auto',
      ...multiValueStyle
    }),
    multiValueContainer: (provided: any) => ({
      ...provided,
      ...multiValueContainerStyle
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      borderRadius: '4px',
      padding: '0px 4px 0px 8px',
      paddingLeft: '8px',
      fontSize: '12px',
      height: '24px',
      lineHeight: '24px',
      color: '#fff',
      ...multiValueLabelStyle
    }),
    multiValueRemove: (provided: any) => ({...provided, cursor: 'pointer'}),
    menu: (provided: any) => ({
      ...provided,
      top: '92%',
      margin: 0,
      boxShadow: 'none',
      borderLeft: 'solid 3px #99CFFF',
      borderRight: 'solid 3px #99CFFF',
      borderBottom: 'solid 3px #99CFFF',
      boxSizing: 'content-box',
      left: '0px',
      width: 'calc(100% - 6px)',
      borderRadius: '0px 0px 4px 4px',
      zIndex: 2
    }),
    menuList: (provided: any) => ({
      ...provided,
      maxHeight: '108px',
      padding: 0,
      ...menuListStyle
    })
  }
  return {...style, ...propsStyle}
}

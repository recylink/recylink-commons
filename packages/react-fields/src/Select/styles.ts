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
}) {
  const style = {
    container: (provided, state) => ({...provided, transition: 'all 0ms', width: '100%'}),
    control: (provided, state) => {
      let style = {
        ...provided,
        height: state.isMulti ? 'auto' : '36px',
        minHeight: '36px',
        transition: 'all 0ms'
      }
      if (state.menuIsOpen) {
        return {...style, borderRadius: '4px 4px 0px 0px', borderColor: 'var(--blue)'}
      }
      if (state.isDisabled) {
        return {...style, backgroundColor: '#bfc0c5'}
      }
      if (errorMessage) {
        return {...style, border: '2px solid', borderColor: 'var(--red) !important'}
      }
      return style
    },
    option: (provided, state) => {
      const {data} = state
      let optionStyle = {...provided, fontSize: '14px', padding: '8px 12px', lineHeight: '16px'}
      if (state.isSelected) {
        return {...optionStyle, backgroundColor: 'var(--blue)'}
      }
      if (data.isBranded) {
        return {...optionStyle, ...brandedStyle}
      }
      return {...optionStyle, color: '#111'}
    },
    indicatorContainer: provided => ({...provided, padding: '0px 4px'}),
    indicatorSeparator: () => ({display: 'none'}),
    clearIndicator: provided => ({...provided, padding: ' 6px 8px', cursor: 'pointer'}),
    dropdownIndicator: provided => ({...provided, padding: '7px 8px', cursor: 'pointer'}),
    placeholder: (provided, state) => {
      let style = {...provided, fontSize: 14, color: '#c0c1c6', margin: 0}
      if (state.isDisabled) {
        return {...style, color: '#cccccc'}
      }
      return style
    },
    valueContainer: (provided, state) => {
      if (state.isMulti) {
        return {
          ...provided,
          padding: '5px 6px 0px 12px;',
          height: 'auto',
          transition: 'all 0ms',
          width: '100%',
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
    singleValue: provided => ({...provided, fontSize: '14px', margin: 0}),
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: state.children === 'Eliminado' ? 'var(--red)' : 'var(--blue)',
      color: '#fff',
      borderRadius: '12px',
      margin: '0px 12px 5px 0px',
      minWidth: 'auto',
      ...multiValueStyle
    }),
    multiValueContainer: provided => ({
      ...provided,
      ...multiValueContainerStyle
    }),
    multiValueLabel: provided => ({
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
    multiValueRemove: provided => ({...provided, cursor: 'pointer'}),
    menu: (provided, state) => ({
      ...provided,
      top: '97%',
      margin: 0,
      boxShadow: 'none',
      borderLeft: 'solid 2px var(--blue)',
      borderRight: 'solid 2px var(--blue)',
      borderBottom: 'solid 2px var(--blue)',
      boxSizing: 'content-box',
      left: '-1px',
      width: 'calc(100% - 2px)',
      borderRadius: '0px 0px 4px 4px',
      zIndex: 2
    }),
    menuList: provided => ({
      ...provided,
      maxHeight: '108px',
      padding: 0,
      ...menuListStyle
    })
  }
  return {...style, ...propsStyle}
}

import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import Card from '../Card'
import Label from '../Label'
import Muted from '../Muted'
import Button from '../Button'
import ds from '../common/designSystem'
import {
  labelStyles,
  labelStylesSmall
} from '../common/typography'
import {
  styleValueToPX
} from '../../utils/measures'

const getLabel = (val, options) => {
  let result = val
  for (const o of options) {
    if (o.value === val) {
      result = o.label
      break
    }
  }
  return result
}

const normalizeOptions = (options) => {
  return options.map(x => typeof x === 'object'
    ? ({ value: x.value, label: (x.label !== undefined ? x.label : x.value).toString() })
    : ({ value: x, label: x.toString() })
  )
}

const PROP_VALUE = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])),
  PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
])
const PROP_OPTION = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
})
const PROP_NORMALIZED_OPTIONS = PropTypes.arrayOf(PROP_OPTION)
const PROP_OPTIONS = PropTypes.arrayOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PROP_OPTION
]))

const Popup = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 10;
  left: 0;
`

const inputStyle = css`
  ${labelStyles}
  padding: 0 ${ds.measures.inputSpacerH}rem;
  font-size: ${ds.measures.inputFont};
  border: 1px solid ${ds.colors.inputBorder};
  background-color: ${ds.colors.inputBg};
  color: ${ds.colors.inputFg};
  border-radius: ${ds.measures.inputRadius};
  box-sizing: border-box;
  flex-shrink: 1;

  &:hover {
    border-color: ${ds.colors.inputBorderActive};
    background-color: ${ds.colors.inputBgHover};
    outline: none;
  }
  &:focus,
  &:active,
  &.active {
    border-color: ${ds.colors.inputBorderActive};
    background-color: ${ds.colors.inputBgFocus};
    outline: none;
  }

  &.disabled,
  &:disabled {
    color: ${ds.colors.inputFgDisabled};
    border-color: ${ds.colors.inputBorderDisabled};
    background-color: ${ds.colors.inputBgDisabled};
    cursor: default;

    &:hover,
    &:focus {
      border-color: ${ds.colors.inputBorderDisabled};
    }
  }
`

const Actionable = styled.div`
  ${inputStyle}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const StyledInput = styled.input`
  ${inputStyle}
`

const StyledSelect = styled.select`
  ${inputStyle}
`

const StyledTextarea = styled.textarea`
  ${inputStyle}
  width: 100%;
  height: auto; /* fixes labelStyles fixed height */
`

// ---------------------------------------------------------------------------------------------------------------------
// MultiselectActionable
// ---------------------------------------------------------------------------------------------------------------------
const MultiselectActionable = React.forwardRef((props, ref) => {
  const { id, label, value, defaultValue, onChange, disabled, normalizedOptions, placeholder } = props
  const popupRef = useRef()
  const actionableRef = useRef()
  const openRef = useRef(false)
  const [popupStyle, setPopupStyle] = useState({
    position: 'fixed',
    display: 'none',
    width: '400px'
  })
  const [open, setOpen] = useState(false)
  const [_value, setValue] = useState(value === undefined ? defaultValue : value)

  // -------------------------------------------------------------------------------------------------------------------
  // Memos
  // -------------------------------------------------------------------------------------------------------------------
  const openPopup = React.useCallback(
    (val) => {
      if (!disabled) {
        setOpen(val)
        openRef.current = val
        if (val) actionableRef.current.focus()
      }
    },
    [disabled]
  )

  // -------------------------------------------------------------------------------------------------------------------
  // Reducers
  // -------------------------------------------------------------------------------------------------------------------
  const dispatchSelected = React.useCallback(
    (action) => {
      let v
      let index
      let result
      switch (action.type) {
        case 'reset':
          result = []
          break
        default:
          // adds or removes action.value from selected
          v = ((!ref ? value : _value) || [])
          index = v.indexOf(action.value)
          if (index === -1) {
            result = [...v, action.value]
          } else {
            result = [...v]
            result.splice(index, 1)
          }
      }
      if (ref) ref.current = { value: result }
      setValue(result)
      onChange(result)
    },
    [_value, value, onChange, ref]
  )

  const checkPosition = React.useCallback(
    () => {
      // bottom: 157.15625
      // height: 40
      // left: 196.546875
      // right: 506.578125
      // top: 117.15625
      // width: 310.03125
      // x: 196.546875
      // y: 117.15625
      const rect = actionableRef.current.getBoundingClientRect()
      const winH = window.innerHeight
      const winW = window.innerWidth
      const pad = window.getComputedStyle(popupRef.current.children[0].children[0], null)
        .getPropertyValue('padding-top')
      const clientH = popupRef.current.children[0].children[0].children[0].offsetHeight + styleValueToPX(pad) * 2 + 2
      const width = 400
      let height
      let top
      let left = rect.left
      let dirBottom
      if (winH - (rect.top + rect.height) > clientH) {
        height = clientH
        top = rect.top + rect.height
        dirBottom = true
      } else if (winH - (rect.top + rect.height) > rect.top) {
        height = winH - (rect.top + rect.height) - 16
        top = rect.top + rect.height
        dirBottom = true
      } else if (rect.top > clientH) {
        height = clientH
        top = rect.top - height - 16
        dirBottom = false
      } else {
        height = rect.top - 16
        top = 0
        dirBottom = false
      }
      if (rect.left + width < winW) {
        left = rect.left
      } else {
        left = rect.left - (width - rect.width)
      }
      setPopupStyle({
        top,
        left,
        height,
        width,
        position: 'fixed',
        boxSizing: 'content-box',
        padding: dirBottom ? '0 0 16px' : '16px 0 0',
        display: openRef.current ? 'block' : 'none',
        overflowY: 'scroll'
      })
      popupRef.current.style.top = rect.top
      popupRef.current.style.left = rect.left
      if (openRef.current) {
        setTimeout(checkPosition, 30)
      }
    },
    []
  )

  // -------------------------------------------------------------------------------------------------------------------
  // Effects
  // -------------------------------------------------------------------------------------------------------------------
  React.useEffect(
    () => {
      const x = Array.isArray(defaultValue) ? defaultValue : []
      setValue(x)
      if (ref) ref.current = { value: x }
    },
    [defaultValue, ref]
  )

  React.useEffect(
    () => {
      if (openRef.current) checkPosition()
    },
    [open, checkPosition]
  )

  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <>
      {label && (
        <Label
          as='label'
          htmlFor={id}
          style={{ pointerEvents: 'none' }}
          onClick={() => { openPopup(!open) }}
          onMouseDown={e => e.preventDefault()}
        >
          {label}
        </Label>
      )}
      <Actionable
        ref={actionableRef}
        tabIndex={0}
        className={`nui-actionable${disabled ? ' disabled' : ''}`}
        onBlur={(evt) => {
          const contained = popupRef.current.contains(evt.relatedTarget)
          if (!contained) openPopup(false)
        }}
        onClick={() => openPopup(!open)}
      >
        {((!ref ? value : _value) || []).map(x => getLabel(x, normalizedOptions)).join(', ') ||
          (<Muted>{placeholder}</Muted>)}
      </Actionable>
      <Popup
        ref={popupRef}
        style={popupStyle}
      >
        <Card mini forceShadow low height='full'>
          <div>
            {normalizedOptions.length ? normalizedOptions.map(x => (
              <Button
                fill
                small
                key={x.value}
                variant='plain'
                selected={((!ref ? value : _value) || []).includes(x.value)}
                extraStyles={{ base: { textAlign: 'left' } }}
                onClick={() => {
                  dispatchSelected({ value: x.value })
                  actionableRef.current.focus()
                }}
              >
                {x.label}
              </Button>
            )) : (
              <Label small><Muted>Empty</Muted></Label>
            )}
          </div>
        </Card>
      </Popup>
    </>
  )
})
MultiselectActionable.propTypes = {
  id: PropTypes.string,
  label: PropTypes.node,
  value: PROP_VALUE,
  defaultValue: PROP_VALUE,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  normalizedOptions: PROP_NORMALIZED_OPTIONS
}
MultiselectActionable.defaultProps = {
  onChange: () => {}
}

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
const StyledControl = styled.div`
  border-radius: ${ds.measures.inputRadius};
  display: flex;
  ${props => props.flexGrow && `flex-grow: ${props.flexGrow};`}
  /* TODO: move these margin props to the style attribute to optimize the classes generated by styled-components */
  ${props => props.marginLeft &&
    (props.marginLeft === true
      ? `margin-left: ${ds.measures.spacer(props) / 4}rem;`
      : `margin-left: ${props.marginLeft}rem;`)}
  ${props => props.marginRight &&
    (props.marginRight === true
      ? `margin-right: ${ds.measures.spacer(props) / 4}rem;`
      : `margin-right: ${props.marginRight}rem;`)}
  ${props => props.marginTop &&
    (props.marginTop === true
      ? `margin-top: ${ds.measures.spacer(props)}rem;`
      : `margin-top: ${props.marginTop}rem;`)}
  ${props => props.marginBottom &&
    (props.marginBottom === true
      ? `margin-bottom: ${ds.measures.spacer(props)}rem;`
      : `margin-bottom: ${props.marginBottom}rem;`)}
  background-color: ${props => props.withLabel ? ds.colors.controlBg : 'transparent'};
  position: relative;
  min-width: 10em;
  max-width: 32em;

  ${props => (props.type === 'checkbox' || props.type === 'bool') && (css`
    align-items: center;
  `)}

  & > ${Label} {
    ${props => props.small && css`
      ${labelStylesSmall}
      font-size: ${ds.measures.inputFontSmall};
    `}
    padding-left: ${ds.measures.inputSpacerH}rem;
    padding-right: ${ds.measures.inputSpacerH}rem;
    font-weight: ${ds.weights.controlLabel};
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    color: ${ds.colors.SLATE};

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${props => props.labelInside && props.type !== 'checkbox' && props.type !== 'bool' && (css`
      position: absolute;
      top: 0;
      left: 0;
      font-size: .8em;
      white-space: nowrap;
      user-select: none;
      padding: 0 ${ds.measures.spacer}rem 0 ${ds.measures.inputSpacerH}rem;
      width: 100%;
      box-sizing: border-box;

      ${props => !props.comfort && (css`
        line-height: 2em;
      `)}
      ${props => props.comfort && (css`
        line-height: 3em;
      `)}
    `)}

    ${props => props.comfort && !props.labelInside && css`
      line-height: calc(${ds.measures.spacer}rem * 3);
      height: calc(${ds.measures.spacer}rem * 3);
    `}
  }

  & > ${Actionable},
  & > ${StyledInput},
  & > ${StyledTextarea},
  & > ${StyledSelect} {
    font-family: ${ds.fonts.controls};
    ${props => props.small && css`
      ${labelStylesSmall}
      font-size: ${ds.measures.inputFontSmall};
    `}
    flex-grow: 1;
    margin: 0;
    max-width: 100%;
    ${props => props.comfort && props.labelInside && css`
      height: calc(${ds.measures.spacer}rem * 3);
      padding-top: 1rem;
      line-height: calc((${ds.measures.spacer}rem * 3) - 1rem);
    `}
    ${props => props.comfort && !props.labelInside && css`
      line-height: calc(${ds.measures.spacer}rem * 3);
      height: calc(${ds.measures.spacer}rem * 3);
    `}
    ${props => !props.comfort && props.labelInside && css`
      padding-top: 1rem;
      line-height: calc((${ds.measures.spacer}rem * 2) - 1rem);
    `}
  }

  &.invalid > ${Actionable},
  &.invalid > ${StyledInput},
  &.invalid > ${StyledTextarea},
  &.invalid > ${StyledSelect} {
    border-color: ${ds.colors.inputBorderInvalid};
    &:hover,
    &:focus,
    &:active,
    &.active {
      border-color: ${ds.colors.inputBorderActive};
    }
  }

  &.disabled {
    ${Label} {
      color: ${ds.colors.inputFgDisabled};
    }
  }
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Control = React.forwardRef((props, ref) => {
  const {
    type,
    label,
    value,
    placeholder,
    defaultValue,
    onChange,
    invalid,
    disabled,
    labelInside,
    comfort,
    small,
    options,
    min,
    max,
    rows,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    flexGrow
  } = props
  const uid = useRef(Math.random().toString(36).substr(2, 9))
  const normalizedOptions = React.useMemo(
    () => normalizeOptions(options),
    [options]
  )

  const _onChangeCheckbox = React.useCallback(
    (val) => {
      if (ref && ref.current) {
        ref.current.value = val
      }
      onChange(val)
    },
    [ref, onChange]
  )

  React.useEffect(
    () => {
      if (ref && !ref.current) {
        ref.current = {}
        if (type === 'checkbox' || type === 'bool') {
          ref.current.value = defaultValue
          document.getElementById(uid.current).checked = defaultValue
        }
      }
    },
    [ref, type, defaultValue]
  )

  return (
    <StyledControl
      type={type}
      withLabel={label}
      className={[invalid && 'invalid', disabled && 'disabled'].join(' ')}
      labelInside={labelInside}
      comfort={comfort}
      small={small}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      marginLeft={marginLeft}
      flexGrow={flexGrow}
    >
      {type === 'select'
        ? (
          <>
            {label && (
              <Label as='label' htmlFor={uid.current} style={{ pointerEvents: labelInside && 'none' }} noShrink>
                {label}
              </Label>
            )}
            <StyledSelect
              id={uid.current}
              value={value}
              defaultValue={ref === undefined && value !== undefined ? value : defaultValue}
              disabled={disabled}
              onChange={evt => onChange(evt.target.value)}
              ref={ref}
            >
              {normalizedOptions.map(x => (
                <option key={x.value} value={x.value}>{x.label}</option>
              ))}
            </StyledSelect>
          </>
        )
        : type === 'multiselect' ? (
          <MultiselectActionable
            id={uid.current}
            label={label}
            value={value}
            defaultValue={ref === undefined && value !== undefined ? value : defaultValue}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            normalizedOptions={normalizedOptions}
            ref={ref}
          />
        )
          : (type === 'checkbox' || type === 'bool') ? (
            <>
              {label && (
                <Label as='label' htmlFor={uid.current} noShrink>
                  {label}
                </Label>
              )}
              <input
                type='checkbox'
                id={uid.current}
                disabled={disabled}
                placeholder={placeholder}
                checked={
                  value !== undefined
                    ? value
                    : undefined
                }
                onChange={evt => _onChangeCheckbox(evt.target.checked)}
              />
            </>
          )
            : type === 'textarea' ? (
              <>
                {label && (
                  <Label
                    noShrink
                    as='label'
                    htmlFor={uid.current}
                    style={{ pointerEvents: labelInside && 'none' }}
                  >
                    {label}
                  </Label>
                )}
                <StyledTextarea
                  id={uid.current}
                  placeholder={placeholder}
                  value={value}
                  defaultValue={ref === undefined && value !== undefined ? value : defaultValue}
                  disabled={disabled}
                  onChange={evt => onChange(evt.target.value)}
                  ref={ref}
                  rows={rows}
                />
              </>
            )
              : (
                <>
                  {label && (
                    <Label
                      noShrink
                      as='label'
                      htmlFor={uid.current}
                      style={{ pointerEvents: labelInside && 'none' }}
                    >
                      {label}
                    </Label>
                  )}
                  <StyledInput
                    id={uid.current}
                    type={type || 'text'}
                    value={value}
                    placeholder={placeholder}
                    defaultValue={ref === undefined && value !== undefined ? value : defaultValue}
                    disabled={disabled}
                    onChange={evt => onChange(evt.target.value)}
                    ref={ref}
                    {...{ min, max }}
                  />
                </>
              )}
    </StyledControl>
  )
})

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Control.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.node,
  value: PROP_VALUE,
  defaultValue: PROP_VALUE,
  onChange: PropTypes.func,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  labelInside: PropTypes.bool,
  comfort: PropTypes.bool,
  small: PropTypes.bool,
  options: PROP_OPTIONS,
  min: PropTypes.number,
  max: PropTypes.number,
  rows: PropTypes.number,
  marginTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  flexGrow: PropTypes.number
}
Control.defaultProps = {
  onChange: () => {},
  options: [],
  marginBottom: true,
  marginRight: true
}

export default Control

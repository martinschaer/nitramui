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
  labelStylesSmall
} from '../common/typography'

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
  PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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
  position: absolute;
  z-index: 10;
  left: calc(${ds.measures.spacer}rem / 4);
  right: calc(${ds.measures.spacer}rem / 4);
`

const Actionable = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

// ---------------------------------------------------------------------------------------------------------------------
// MultiselectActionable
// ---------------------------------------------------------------------------------------------------------------------
const MultiselectActionable = React.forwardRef((props, ref) => {
  const popupRef = useRef()
  const actionableRef = useRef()
  const { id, label, value = [], onChange, disabled, normalizedOptions } = props
  const [open, setOpen] = useState(false)
  // TODO: set top
  const [top] = useState('2.5rem')
  const [_value, setValue] = useState(Array.isArray(value) ? value : [])

  // -------------------------------------------------------------------------------------------------------------------
  // Memos
  // -------------------------------------------------------------------------------------------------------------------
  const openPopup = React.useCallback(
    (val) => {
      if (!disabled) {
        setOpen(val)
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
      let index
      let result
      switch (action.type) {
        case 'reset':
          result = []
          break
        default:
          // adds or removes action.value from selected
          index = _value.indexOf(action.value)
          if (index === -1) {
            result = [..._value, action.value]
          } else {
            result = [..._value]
            result.splice(index, 1)
          }
      }
      if (ref) ref.current = { value: result }
      setValue(result)
      onChange(result)
    },
    [_value, onChange, ref]
  )

  // -------------------------------------------------------------------------------------------------------------------
  // Effects
  // -------------------------------------------------------------------------------------------------------------------
  React.useEffect(
    () => {
      if (ref) ref.current = { value: _value }
    },
    [ref, _value]
  )

  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <>
      {label && (
        <Label as='label' htmlFor={id} onClick={() => { openPopup(!open) }} onMouseDown={e => e.preventDefault()}>
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
        {_value.map(x => getLabel(x, normalizedOptions)).join(', ')}
      </Actionable>
      <Popup
        ref={popupRef}
        style={{
          display: open ? 'block' : 'none',
          width: '32em',
          top: top
        }}
      >
        <Card mini forceShadow low>
          {normalizedOptions.length ? normalizedOptions.map(x => (
            <Button
              fill
              small
              key={x.value}
              variant='plain'
              selected={_value.indexOf(x.value) !== -1}
              extraStyles={{ base: { textAlign: 'left' } }}
              onClick={(evt) => {
                dispatchSelected({ value: x.value })
                actionableRef.current.focus()
              }}
            >
              {x.label}
            </Button>
          )) : (
            <Label small><Muted>Empty</Muted></Label>
          )}
        </Card>
      </Popup>
    </>
  )
})
MultiselectActionable.propTypes = {
  id: PropTypes.string,
  label: PropTypes.node,
  value: PROP_VALUE,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
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
  margin: 0 calc(${ds.measures.spacer}rem / 4);
  background-color: ${props => props.withLabel ? ds.colors.controlBg : 'transparent'};
  position: relative;
  padding: calc(${ds.measures.spacer}rem / 4) calc(${ds.measures.spacer}rem / 4);
  min-width: 10em;
  max-width: 32em;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  & > ${Label} {
    ${props => props.small && css`
      ${labelStylesSmall}
      font-size: ${ds.measures.inputFontSmall};
    `}
    padding-left: calc(${ds.measures.inputSpacerH}rem + (${ds.measures.spacer}rem / 4));
    padding-right: calc(${ds.measures.spacer}rem);
    font-weight: ${ds.weights.controlLabel};
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    color: ${ds.colors.SLATE};

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${props => !props.comfort && props.labelInside && (`
      position: absolute;
      top: 0;
      left: 0;
      font-size: .8em;
      white-space: nowrap;
      user-select: none;
      line-height: 3em;
    `)}
    ${props => props.comfort && props.labelInside && (`
      position: absolute;
      top: 0;
      left: 0;
      font-size: .8em;
      white-space: nowrap;
      user-select: none;
      line-height: 4em;
    `)}
    ${props => props.comfort && !props.labelInside && css`
      line-height: calc(${ds.measures.spacer}rem * 3);
      height: calc(${ds.measures.spacer}rem * 3);
    `}
  }

  & > input,
  & > select,
  & > div.nui-actionable {
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

  &.invalid > input,
  &.invalid > select,
  &.invalid > div.nui-actionable {
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
    max
  } = props
  const uid = useRef(Math.random().toString(36).substr(2, 9))
  const normalizedOptions = React.useMemo(
    () => normalizeOptions(options),
    [options]
  )
  return (
    <StyledControl
      withLabel={label}
      className={[invalid && 'invalid', disabled && 'disabled'].join(' ')}
      labelInside={labelInside}
      comfort={comfort}
      small={small}
    >
      {type === 'select'
        ? (
          <>
            {label && (<Label as='label' htmlFor={uid.current}>{label}</Label>)}
            <select
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
            </select>
          </>
        )
        : type === 'multiselect' ? (
          <MultiselectActionable
            id={uid.current}
            label={label}
            value={ref === undefined ? value : defaultValue}
            disabled={disabled}
            onChange={onChange}
            normalizedOptions={normalizedOptions}
            ref={ref}
          />
        )
          : (
            <>
              {label && (<Label as='label' htmlFor={uid.current}>{label}</Label>)}
              <input
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
  max: PropTypes.number
}
Control.defaultProps = {
  onChange: () => {},
  options: []
}

export default Control

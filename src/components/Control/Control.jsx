import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import Card from '../Card'
import Label from '../Label'
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

const PROP_VALUE = PropTypes.oneOfType([PropTypes.string, PropTypes.number])
const PROP_OPTIONS = PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string }))

const Popup = styled.div`
  position: absolute;
  z-index: 10;
  left: calc(${ds.measures.spacer}rem / 4);
  right: calc(${ds.measures.spacer}rem / 4);
`

// ---------------------------------------------------------------------------------------------------------------------
// MultiselectActionable
// ---------------------------------------------------------------------------------------------------------------------
const MultiselectActionable = React.forwardRef((props, ref) => {
  const popupRef = useRef()
  const actionableRef = useRef()
  const { id, value, onChange, disabled, options } = props
  const [open, setOpen] = useState(false)
  // const [tempValue, setTempValue] = useState(value)
  const [top] = useState('2.5rem')

  // -------------------------------------------------------------------------------------------------------------------
  // Reducers
  // -------------------------------------------------------------------------------------------------------------------
  const [selected, dispatchSelected] = React.useReducer(
    (state, action) => {
      let index
      let result
      switch (action.type) {
        case 'reset':
          result = []
          break
        default:
          index = state.indexOf(action.value)
          if (index === -1) {
            result = [...state, action.value]
          } else {
            result = [...state]
            result.splice(index, 1)
          }
      }
      onChange(result)
      return result
    },
    [...(value || [])]
  )

  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <div
        ref={actionableRef}
        tabIndex={0}
        className={`nui-actionable${disabled ? ' disabled' : ''}`}
        onBlur={(evt) => {
          const contained = popupRef.current.contains(evt.relatedTarget)
          console.log(contained, popupRef.current, evt.relatedTarget, evt.currentTarget, evt.target)
          if (!contained) setOpen(false)
          else actionableRef.current.focus()
        }}
        onClick={() => setOpen(!open)}
      >
        {selected.map(x => getLabel(x, options)).join(', ')}
      </div>
      <Popup
        ref={popupRef}
        style={{
          display: open ? 'block' : 'none',
          width: '32em',
          top: top
        }}
      >
        <Card compact forceShadow low selected>
          {options.map(x => (
            <Button
              fill
              small
              key={x.value}
              variant='plain'
              selected={selected.indexOf(x.value) !== -1}
              extraStyles={{ base: { textAlign: 'left' } }}
              onClick={(evt) => {
                dispatchSelected({ value: x.value })
                evt.target.blur()
              }}
            >
              {x.label}
            </Button>
          ))}
          <select
            style={{ display: 'none' }}
            multiple
            id={id}
            disabled
            ref={ref}
          >
            {options.map(x => (
              <option
                key={x.value}
                value={x.value}
                selected={selected.indexOf(x.value) !== -1}
              >
                {x.label}
              </option>
            ))}
          </select>
        </Card>
      </Popup>
    </>
  )
})
MultiselectActionable.propTypes = {
  id: PropTypes.string,
  value: PROP_VALUE,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  options: PROP_OPTIONS
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
    padding-left: calc(${ds.measures.spacer}rem / 2);
    padding-right: calc(${ds.measures.spacer}rem / 4);
    font-weight: ${ds.weights.controlLabel};
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    ${props => props.labelInside && (`
      position: absolute;
      top: -.2em;
      font-size: .8em;
      white-space: nowrap;
      user-select: none;
    `)}
    ${props => props.comfort && !props.labelInside && css`
      line-height: calc(${ds.measures.spacer}rem * 3);
      height: calc(${ds.measures.spacer}rem * 3);
      padding: 0 ${ds.measures.spacer * (3 / 2)}rem;
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
    ${props => props.labelInside && (`
      padding-top: 0.8em;
    `)}
    ${props => props.comfort && css`
      line-height: calc(${ds.measures.spacer}rem * 3);
      height: calc(${ds.measures.spacer}rem * 3);
      padding: 0 ${ds.measures.spacer * (3 / 2)}rem;
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
  const { type, label, value, onChange, invalid, disabled, labelInside, comfort, small, options, min, max } = props
  const uid = useRef(Math.random().toString(36).substr(2, 9))
  return (
    <StyledControl
      withLabel={label}
      className={[invalid && 'invalid', disabled && 'disabled'].join(' ')}
      labelInside={labelInside}
      comfort={comfort}
      small={small}
    >
      {label && (<Label as='label' htmlFor={uid.current}>{label}</Label>)}
      {type === 'select'
        ? (
          <select
            id={uid.current}
            value={value}
            disabled={disabled}
            onChange={evt => onChange(evt.target.value)}
            ref={ref}
          >
            {options.map(x => (
              <option key={x.value} value={x.value}>{x.label}</option>
            ))}
          </select>
        )
        : type === 'multiselect' ? (
          <MultiselectActionable
            id={uid.current}
            value={value}
            disabled={disabled}
            onChange={value => onChange(value)}
            options={options}
            ref={ref}
          />
        )
          : (
            <input
              id={uid.current}
              type={type || 'text'}
              value={value}
              disabled={disabled}
              onChange={evt => onChange(evt.target.value)}
              ref={ref}
              {...{ min, max }}
            />
          )}
    </StyledControl>
  )
})

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Control.propTypes = {
  type: PropTypes.string,
  label: PropTypes.node,
  value: PROP_VALUE,
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
  onChange: () => {}
}

export default Control

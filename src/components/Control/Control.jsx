import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import Label from '../Label'
import ds from '../common/designSystem'

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

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  & > ${Label} {
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
    `)}
  }

  & > input,
  & > select {
    flex-grow: 1;
    margin: 0;
    max-width: 100%;
    ${props => props.labelInside && (`
      padding-top: 0.8em;
    `)}
  }

  &.invalid > input,
  &.invalid > select {
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
const Control = ({ type, label, value, onChange, invalid, disabled, labelInside, options }) => {
  const uid = useRef(Math.random().toString(36).substr(2, 9))
  return (
    <StyledControl
      withLabel={label}
      className={[invalid && 'invalid', disabled && 'disabled'].join(' ')}
      labelInside={labelInside}
    >
      {label && (<Label as='label' htmlFor={uid.current}>{label}</Label>)}
      {type === 'select'
        ? (
          <select id={uid.current} value={value} disabled={disabled} onChange={evt => onChange(evt.target.value)}>
            {options.map(x => (
              <option key={x.value} value={x.value}>{x.label}</option>
            ))}
          </select>
        )
        : (
          <input
            id={uid.current}
            type={type || 'text'}
            value={value}
            disabled={disabled}
            onChange={evt => onChange(evt.target.value)}
          />
        )}
    </StyledControl>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Control.propTypes = {
  type: PropTypes.string,
  label: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  labelInside: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string }))
}
Control.defaultProps = {
  onChange: () => {}
}

export default Control

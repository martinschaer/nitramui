import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import Label from '../Label'
import ds from '../common/designSystem'
import {
  labelStylesSmall
} from '../common/typography'

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
  & > select {
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  labelInside: PropTypes.bool,
  comfort: PropTypes.bool,
  small: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })),
  min: PropTypes.number,
  max: PropTypes.number
}
Control.defaultProps = {
  onChange: () => {}
}

export default Control

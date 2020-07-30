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
    ${props => props.labelInside && (`
      position: absolute;
      top: -.8em;
      font-size: .8em;
    `)}
  }

  & > input,
  & > select {
    flex-grow: 1;
    ${props => props.labelInside && (`
      padding-top: 0.8em;
    `)}
  }
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Control = ({ type, label, value, onChange, labelInside, options }) => {
  const uid = useRef(Math.random().toString(36).substr(2, 9))
  return (
    <StyledControl withLabel={label} labelInside={labelInside}>
      {label && (<Label as='label' htmlFor={uid.current}>{label}</Label>)}
      {type === 'select'
        ? (
          <select id={uid.current} value={value} onChange={evt => onChange(evt.target.value)}>
            {options.map(x => (
              <option key={x.value} value={x.value}>{x.label}</option>
            ))}
          </select>
        )
        : (
          <input id={uid.current} type={type || 'text'} value={value} onChange={evt => onChange(evt.target.value)} />
        )}
    </StyledControl>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Control.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  labelInside: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string }))
}
Control.defaultProps = {}

export default Control

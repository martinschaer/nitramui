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
  border-radius: 0.5rem;
  display: flex;
  margin: 0 .25rem;
  background-color: ${props => props.withLabel ? ds.colors.tableStripe : 'transparent'};

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  & > ${Label} {
    padding-left: 0.5rem;
    padding-right: 0.25rem;
  }

  & > input,
  & > select {
    flex-grow: 1;
  }
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Control = ({ type, label, value, onChange, options }) => {
  const uid = useRef(Math.random().toString(36).substr(2, 9))
  return (
    <StyledControl withLabel={label}>
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
          <input id={uid.current} type='text' value={value} onChange={evt => onChange(evt.target.value)} />
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
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string }))
}
Control.defaultProps = {}

export default Control
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ds from '../common/designSystem'

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
// StyledCard height property is called h so that it doesn’t appear in the resulting DOM node.
const StyledCard = styled.div`
  background-color: ${ds.colors.card};
  box-sizing: border-box;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border: 1px solid ${ds.colors.cardBorder};
  border-radius: 0.5rem;
  padding: 2rem;
  height: ${props =>
    props.h === 'full'
    ? '100%'
    : typeof props.h === 'number'
    ? `${props.h}rem`
    : 'auto'
  };
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Card = ({
  height,
  children
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <StyledCard
      h={height}
    >
      {children}
    </StyledCard>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Card.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.oneOf(['default', 'full']), PropTypes.number])
}
Card.defaultProps = {
  height: 'default'
}

export default Card

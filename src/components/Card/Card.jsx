import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'
import Container from '../Container'
import {
  preHeadingStyles
} from '../common/typography'

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
// StyledCard height property is called h so that it doesn’t appear in the resulting DOM node.
const StyledCard = styled.div`
  background-color: ${ds.colors.card};
  box-sizing: border-box;
  box-shadow: 0 0 1rem ${ds.colors.shadow};
  border: 1px solid ${ds.colors.cardBorder};
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  height: ${props =>
    props.h === 'full'
    ? '100%'
    : typeof props.h === 'number'
    ? `${props.h}rem`
    : 'auto'
  };
  min-width: ${props =>
    props.size === 'small'
    ? '32rem'
    : 'auto'
  };
  width: ${props =>
    props.size === 'small'
    ? '33%'
    : 'auto'
  };

  ${Container} > & {
    margin: 1rem;
  }

  & & {
    background-color: ${ds.colors.card};
    border: 1px solid ${ds.colors.border};
    box-shadow: 0 0 0.5rem ${ds.colors.nestedShadow};
  }

  .pre-heading {
    margin-top: 0;
  }

  & *:first-child {
    margin-top: 0;
  }

  & *:last-child {
    margin-bottom: 0;
  }
`

const StyledCardHeader = styled.header`
  border-bottom: 1px solid ${ds.colors.cardBorder};
  padding: 0.5rem;
  ${preHeadingStyles}
`

const StyledCardBody = styled.main`
  padding: 2rem;
`

const StyledCardFooter = styled.footer`
  border-top: 1px solid ${ds.colors.cardBorder};
  padding: 0.5rem;
  text-align: right;
  margin-top: auto;
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Card = ({
  size,
  header,
  footer,
  height,
  children,
  noPadding
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <StyledCard
      size={size}
      h={height}
    >
      {header && (<StyledCardHeader>{header}</StyledCardHeader>)}
      {noPadding ? (
        children
      ) : (
        <StyledCardBody>
          {children}
        </StyledCardBody>
      )}
      {footer && (<StyledCardFooter>{footer}</StyledCardFooter>)}
    </StyledCard>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Card.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node,
  size: PropTypes.oneOf([
    'auto',
    'small'
  ]),
  height: PropTypes.oneOfType([PropTypes.oneOf(['default', 'full']), PropTypes.number]),
  noPadding: PropTypes.bool
}
Card.defaultProps = {
  height: 'default'
}

export default Card

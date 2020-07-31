import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
// StyledCard height property is called h so that it doesn’t appear in the resulting DOM node.
const StyledCard = styled.div`
  background-color: ${ds.colors.card};
  box-sizing: border-box;
  box-shadow: 0 0 1rem ${ds.colors.shadow};
  border: 1px solid ${ds.colors.cardBorder};
  border-radius: ${ds.measures.radius};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  transition-property: 'border-color';
  transition-duration: .1s;

  ${props => props.color &&
    (`border-${props.colorBorderPosition}: ${ds.measures.radius(props)} solid ${props.color} !important;`)}

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

  ${props => props.marginBottom &&
    (props.marginBottom === true ? 'margin-bottom: 1rem;' : `margin-bottom: ${props.marginBottom}rem;`)}

  ${props => props.marginTop &&
    (props.marginTop === true ? 'margin-top: 1rem;' : `margin-top: ${props.marginTop}rem;`)}

  ${props => props.margin && (props.margin === true ? 'margin: 1rem;' : `margin: ${props.margin}rem;`)}

  & & {
    background-color: ${ds.colors.card};
    border: 1px solid ${ds.colors.border};
    box-shadow: none;
  }

  .pre-heading {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    min-width: -webkit-fill-available;
  }

  ${props => props.hoverable === true ? `&:hover { border-color: ${ds.colors.cardBorderHover(props)}; }` : ''}
`

const StyledCardHeader = styled.header`
  align-items: center;
  border-bottom: 1px solid ${ds.colors.cardHeaderBorder};
  display: flex;
  flex-wrap: wrap;
  padding: 0.25rem;
`

const StyledCardBody = styled.main`
  padding: ${props => props.noPadding ? '0' : props.compact ? '1rem' : '2rem'};
  overflow: scroll;
  min-height: 100%;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: ${props => props.noPadding ? '0' : '1rem'};
  }
`

const StyledCardFooter = styled.footer`
  align-items: center;
  border-top: 1px solid ${ds.colors.cardHeaderBorder};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: auto;
  padding: 0.25rem;
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Card = ({
  size,
  color,
  colorBorderPosition,
  header,
  footer,
  height,
  children,
  noPadding,
  compact,
  hoverable,
  margin,
  marginTop,
  marginBottom,
  onClick
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <StyledCard
      size={size}
      color={color}
      colorBorderPosition={colorBorderPosition}
      h={height}
      hoverable={hoverable}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      onClick={onClick && (() => onClick())}
    >
      {header && (<StyledCardHeader>{header}</StyledCardHeader>)}
      {children && (
        <StyledCardBody noPadding={noPadding} compact={compact}>
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
  color: PropTypes.string,
  colorBorderPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  height: PropTypes.oneOfType([PropTypes.oneOf(['default', 'full']), PropTypes.number]),
  noPadding: PropTypes.bool,
  compact: PropTypes.bool,
  hoverable: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  onClick: PropTypes.func
}
Card.defaultProps = {
  height: 'default',
  colorBorderPosition: 'top'
}

export default Card

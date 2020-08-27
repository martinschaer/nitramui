import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
// StyledCard height property is called h so that it doesn’t appear in the resulting DOM node.
const StyledCard = styled.div`
  background-color: ${props => props.selected ? ds.colors.cardSelected : ds.colors.card};
  box-sizing: border-box;
  box-shadow: 0 0 1rem ${ds.colors.shadow};
  border: 1px solid ${props => props.selected ? ds.colors.cardBorderSelected : ds.colors.cardBorder};
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
    box-shadow: none;
  }

  .pre-heading {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    min-width: -webkit-fill-available;
  }

  ${props => props.hoverable === true ? css`&:hover {
    border-color: ${ds.colors.cardBorderHover};
    ${props.extraStyles?.hover}
  }` : ''}

  ${props => props.selected && props.extraStyles?.selected}

  ${props => props.extraStyles?.base}
`

const StyledCardHeader = styled.header`
  align-items: center;
  border-bottom: 1px solid ${ds.colors.cardHeaderBorder};
  display: flex;
  flex-wrap: wrap;
  padding: ${props => props.compactHeader ? '0' : '0.25rem'};
`

const StyledCardBody = styled.main`
  padding: ${props => props.noPadding ? '0' : props.compact ? '1rem' : '2rem'};
  overflow-y: auto;
  height: 100%;

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
  padding: ${props => props.compactFooter ? '0' : '0.25rem'};
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
  compactHeader,
  compactFooter,
  hoverable,
  selected,
  margin,
  marginTop,
  marginBottom,
  extraStyles,
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
      selected={selected}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      extraStyles={extraStyles}
      onClick={onClick && (() => onClick())}
    >
      {header && (<StyledCardHeader compactHeader={compactHeader}>{header}</StyledCardHeader>)}
      {children && (
        <StyledCardBody noPadding={noPadding} compact={compact}>
          {children}
        </StyledCardBody>
      )}
      {footer && (<StyledCardFooter compactFooter={compactFooter}>{footer}</StyledCardFooter>)}
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
  compactHeader: PropTypes.bool,
  compactFooter: PropTypes.bool,
  hoverable: PropTypes.bool,
  selected: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  onClick: PropTypes.func,
  extraStyles: PropTypes.shape({
    base: PropTypes.any,
    hover: PropTypes.any,
    selected: PropTypes.any
  })
}
Card.defaultProps = {
  height: 'default',
  colorBorderPosition: 'top'
}

export default Card

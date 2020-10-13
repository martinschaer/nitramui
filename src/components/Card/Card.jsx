import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'

const POSITIONS = [
  'top',
  'right',
  'bottom',
  'left',
  'top left',
  'top right',
  'bottom right',
  'bottom left',
  'with text'
]

const Dot = styled.div`
  position: absolute;
  background-color: ${props => props.color || ds.colors.link};
  border-radius: ${ds.measures.radius};
  width: ${ds.measures.radius};
  height: ${ds.measures.radius};
  ${props => props.position === 'top' && css`
    top: ${props.separation};
    left: 50%;
    margin-top: calc(${ds.measures.radius} / -2);
    margin-left: calc(${ds.measures.radius} / -2);
  `}
  ${props => props.position === 'right' && css`
    top: 50%;
    right: ${props.separation};
    margin-top: calc(${ds.measures.radius} / -2);
    margin-right: calc(${ds.measures.radius} / -2);
  `}
  ${props => props.position === 'bottom' && css`
    bottom: ${props.separation};
    left: 50%;
    margin-bottom: calc(${ds.measures.radius} / -2);
    margin-left: calc(${ds.measures.radius} / -2);
  `}
  ${props => props.position === 'left' && css`
    top: 50%;
    left: ${props.separation};
    margin-top: calc(${ds.measures.radius} / -2);
    margin-left: calc(${ds.measures.radius} / -2);
  `}
  ${props => props.position === 'top right' && css`
    top: ${props.separation};
    right: ${props.separation};
    margin-top: calc(${ds.measures.radius} / -2);
    margin-right: calc(${ds.measures.radius} / -2);
  `}
  ${props => props.position === 'top left' && css`
    top: ${props.separation};
    left: ${props.separation};
    margin-top: calc(${ds.measures.radius} / -2);
    margin-left: calc(${ds.measures.radius} / -2);
  `}
  ${props => props.position === 'bottom right' && css`
    bottom: ${props.separation};
    right: ${props.separation};
    margin-bottom: calc(${ds.measures.radius} / -2);
    margin-right: calc(${ds.measures.radius} / -2);
  `}
  ${props => props.position === 'bottom left' && css`
    bottom: ${props.separation};
    left: ${props.separation};
    margin-bottom: calc(${ds.measures.radius} / -2);
    margin-left: calc(${ds.measures.radius} / -2);
  `}
  ${props => props.position === 'with text' && css`
    top: calc((${props.separation} * 2) + 0.66rem);
    left: ${props.separation};
    margin-top: calc(${ds.measures.radius} / -2);
    margin-left: calc(${ds.measures.radius} / -2);
  `}
`

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
// StyledCard height property is called h so that it doesn’t appear in the resulting DOM node.
const StyledCard = styled.div`
  background-color: ${props => props.selected ? ds.colors.cardSelected : props.hollow ? ds.colors.bg : ds.colors.card};
  box-sizing: border-box;
  border: 1px solid ${props => props.selected ? ds.colors.cardBorderSelected : ds.colors.cardBorder};
  border-radius: ${ds.measures.radius};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  transition-property: 'border-color';
  transition-duration: .1s;
  position: relative;

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
    : props.size === 'xs'
    ? '12rem'
    : 'auto'
  };

  ${props => props.marginBottom &&
    (props.marginBottom === true ? 'margin-bottom: 1rem;' : `margin-bottom: ${props.marginBottom}rem;`)}

  ${props => props.marginTop &&
    (props.marginTop === true ? 'margin-top: 1rem;' : `margin-top: ${props.marginTop}rem;`)}

  ${props => props.margin && (props.margin === true ? 'margin: 1rem;' : `margin: ${props.margin}rem;`)}

  box-shadow: 0 0 ${p => p.low ? '0.5rem' : '1rem'} ${ds.colors.shadow}${p => p.forceShadow ? ' !important' : ''};
  & & {
    box-shadow: none;
  }
  .hollow & {
    box-shadow: 0 0 ${p => p.low ? '0.5rem' : '1rem'} ${ds.colors.shadow};
  }

  .pre-heading {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    min-width: -webkit-fill-available;
  }

  ${props => props.hoverable === true ? css`&:hover {
    border-color: ${ds.colors.cardBorderHover};
    ${({ extraStyles = {} }) => extraStyles.hover}
  }` : ''}

  ${({ selected, extraStyles = {} }) => selected && extraStyles.selected}

  ${({ extraStyles = {} }) => extraStyles.base}
`

const StyledCardHeader = styled.header`
  align-items: center;
  border-bottom: 1px solid ${ds.colors.cardHeaderBorder};
  display: flex;
  flex-wrap: wrap;
  padding: ${props => props.compactHeader ? '0' : '0.25rem'};
`

const StyledCardBody = styled.main`
  padding: ${props => props.noPadding ? '0' : props.mini ? '0.5rem' : props.compact ? '1rem' : '2rem'};
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
  mini,
  compact,
  compactHeader,
  compactFooter,
  hollow,
  low,
  forceShadow,
  hoverable,
  selected,
  margin,
  marginTop,
  marginBottom,
  extraStyles,
  stickers,
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
      low={low ? 1 : 0}
      hollow={hollow}
      forceShadow={forceShadow}
      selected={selected}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      extraStyles={extraStyles}
      onClick={onClick && (() => onClick())}
      className={hollow ? 'hollow' : null}
    >
      {header && (<StyledCardHeader compactHeader={compactHeader}>{header}</StyledCardHeader>)}
      {children && (
        <StyledCardBody noPadding={noPadding} compact={compact} mini={mini}>
          {children}
        </StyledCardBody>
      )}
      {footer && (<StyledCardFooter compactFooter={compactFooter}>{footer}</StyledCardFooter>)}
      {stickers && stickers.dot && (
        <Dot
          position={typeof stickers.dot === 'string' ? stickers.dot : stickers.dot.p}
          color={color}
          separation={noPadding ? '0' : compact ? '0.5rem' : '1rem'}
        />
      )}
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
    'small',
    'xs'
  ]),
  color: PropTypes.string,
  colorBorderPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  height: PropTypes.oneOfType([PropTypes.oneOf(['default', 'full']), PropTypes.number]),
  noPadding: PropTypes.bool,
  mini: PropTypes.bool,
  compact: PropTypes.bool,
  compactHeader: PropTypes.bool,
  compactFooter: PropTypes.bool,
  hollow: PropTypes.bool,
  low: PropTypes.bool,
  forceShadow: PropTypes.bool,
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
  }),
  stickers: PropTypes.shape({
    dot: PropTypes.oneOfType([
      // either specify the position as a value for dot…
      PropTypes.oneOf(POSITIONS),
      // …or pass an object with the position (p) and color (c)
      PropTypes.shape({
        // p for position
        p: PropTypes.oneOf(POSITIONS),
        // c for color
        c: PropTypes.string
      })
    ])
  })
}
Card.defaultProps = {
  height: 'default',
  colorBorderPosition: 'top',
  extraStyles: {}
}

export default Card

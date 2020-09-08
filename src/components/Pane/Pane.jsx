import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'

import {
  GOLDEN_RATIO,
  styleValueToPX
} from '../../utils/measures'
import { debounce } from '../../utils/functions'

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
const StyledPane = styled.div`
  box-sizing: border-box;
  height: ${props =>
    props.h === 'half'
    ? '50%'
    : typeof props.h === 'number'
    ? `${props.h}rem`
    : '100%'
  };
  flex-shrink: 0;
  padding: ${props => props.noPadding ? '0' : '1rem'};
  outline: 1px dashed ${ds.colors.borderLight};
  ${props => props.shadow && css`box-shadow: 0 0 1rem ${ds.colors.shadow};`}
  overflow: auto;
  max-width: 100%;
  width: ${
    props => props.size === 'full'
    ? '100%'
    : props.size === 'small'
    ? '16rem'
    : props.size === 'full-minus-small'
    ? 'calc(100vw - 16rem)'
    : props.size === 'golden-width'
    ? `${100 / GOLDEN_RATIO}%`
    : props.size === 'golden-width-rest'
    ? `${100 - (100 / GOLDEN_RATIO)}%`
    : props.size === 'half'
    ? '50%'
    : props.size === 'third'
    ? '33.3%'
    : props.size === 'fourth'
    ? '25%'
    // default:
    : '50rem'
  };

  @media (max-width: 768px) {
    ${props => props.size === 'small' ? '' : 'min-width: 100vw;'}
    max-width: 100vw;
  }
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Pane = ({
  size,
  height,
  shadow,
  noPadding,
  children
}) => {
  const uid = React.useRef(`pane-${Math.random().toString(36).substr(2, 9)}`)

  // -------------------------------------------------------------------------------------------------------------------
  // Effect
  // -------------------------------------------------------------------------------------------------------------------
  React.useEffect(
    () => {
      let debouncedHandleResize
      let handleResize
      if (
        window && (
          size === 'square' ||
          size === 'golden-horizontal' ||
          size === 'golden-vertical'
        )
      ) {
        handleResize = () => {
          const el = document.querySelector(`#${uid.current}`)
          const elStyle = window.getComputedStyle(el)
          const h = el.offsetHeight
          const winW = window.innerWidth
          switch (size) {
            case 'golden-horizontal':
              el.style.width = `${parseInt(h * GOLDEN_RATIO, 10)}px`
              break
            case 'golden-vertical':
              el.style.width = `${parseInt(h / GOLDEN_RATIO, 10)}px`
              break
            case 'square':
            default:
              el.style.width = `${Math.min(h, winW)}px`
              el.style.paddingBottom = `${h - Math.min(h, winW) + styleValueToPX(elStyle.paddingTop)}px`
          }
        }
        debouncedHandleResize = debounce(handleResize, 250)
        window.addEventListener('resize', debouncedHandleResize)
        handleResize()
      }
      return () => {
        if (debouncedHandleResize) window.removeEventListener('resize', debouncedHandleResize)
      }
    }
  )

  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <StyledPane
      id={uid.current}
      size={size}
      h={height}
      shadow={shadow}
      noPadding={noPadding}
    >
      {children}
    </StyledPane>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Pane.propTypes = {
  size: PropTypes.oneOf([
    'default',
    'small',
    'full',
    'full-minus-small',
    'square',
    'golden-horizontal',
    'golden-vertical',
    'golden-width',
    'golden-width-rest',
    'half',
    'third',
    'fourth'
  ]),
  height: PropTypes.oneOfType([PropTypes.oneOf(['half', 'full']), PropTypes.number]),
  shadow: PropTypes.bool,
  noPadding: PropTypes.bool,
  children: PropTypes.node
}
Pane.defaultProps = {
  size: 'default',
  height: 'full'
}

export default Pane

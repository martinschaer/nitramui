import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'

import {
  GOLDEN_RATIO,
  widths,
  getCSSWidth,
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
    : props.h === 'auto'
    ? 'auto'
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
  width: ${props => getCSSWidth(props.size)};

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
          const h = el.offsetHeight
          const winW = window.innerWidth
          let elStyle
          switch (size) {
            case 'golden-horizontal':
              el.style.width = `${parseInt(h * GOLDEN_RATIO, 10)}px`
              break
            case 'golden-vertical':
              el.style.width = `${parseInt(h / GOLDEN_RATIO, 10)}px`
              break
            case 'square':
            default:
              elStyle = window.getComputedStyle(el)
              console.log(el, h, winW, styleValueToPX(elStyle.paddingTop))
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
  size: PropTypes.oneOf(widths),
  height: PropTypes.oneOfType([PropTypes.oneOf(['half', 'full', 'auto']), PropTypes.number]),
  shadow: PropTypes.bool,
  noPadding: PropTypes.bool,
  children: PropTypes.node
}
Pane.defaultProps = {
  size: 'default',
  height: 'full'
}

export default Pane

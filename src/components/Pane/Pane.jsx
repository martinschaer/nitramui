import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ds from '../common/designSystem'

const GOLDEN_RATIO = 1.61803398875

// TODO: if used by another component, move to common file
const debounce = (func, wait, immediate) => {
  var timeout
  return function () {
    var context = this; var args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }, wait)
    if (immediate && !timeout) func.apply(context, args)
  }
}

const convertRemToPixels = (rem) => {
  return rem * parseFloat(window.getComputedStyle(document.documentElement).fontSize)
}

const styleValueToPX = (value) => {
  if (value.indexOf('px') !== -1) {
    return parseFloat(value)
  } else if (value.indexOf('rem') !== -1) {
    return convertRemToPixels(parseFloat(value))
  } else {
    return parseFloat(value)
  }
}

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
const StyledPane = styled.div`
  box-sizing: border-box;
  height: 100%;
  flex-shrink: 0;
  padding: 1rem;
  outline: 1px dashed ${ds.colors.border};
  overflow: scroll;
  max-width: 100%;
  width: ${
    props => props.size === 'full'
    ? '100%'
    : props.size === 'small'
    ? '16rem'
    : props.size === 'golden-width'
    ? `${100 / GOLDEN_RATIO}%`
    : props.size === 'golden-width-rest'
    ? `${100 - (100 / GOLDEN_RATIO)}%`
    : props.size === 'third'
    ? '33.3%'
    : props.size === 'fourth'
    ? '25%'
    : '50em'
  };
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Pane = ({
  size,
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
    'square',
    'golden-horizontal',
    'golden-vertical',
    'golden-width',
    'golden-width-rest',
    'third',
    'fourth'
  ]),
  children: PropTypes.node
}
Pane.defaultProps = {
  size: 'default'
}

export default Pane

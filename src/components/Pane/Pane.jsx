import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
const StyledPane = styled.div`
  outline: 1px dashed #E0E0E0;
  padding: 1rem;
  overflow: scroll;
  height: 100%;
  box-sizing: border-box;
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
  flex-shrink: 0;
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
        size === 'square' ||
        size === 'golden-horizontal' ||
        size === 'golden-vertical'
      ) {
        handleResize = () => {
          const el = document.querySelector(`#${uid.current}`)
          const h = el.offsetHeight
          switch (size) {
            case 'golden-horizontal':
              el.style.width = `${parseInt(h * GOLDEN_RATIO, 10)}px`
              break
            case 'golden-vertical':
              el.style.width = `${parseInt(h / GOLDEN_RATIO, 10)}px`
              break
            case 'sqaure':
            default:
              el.style.width = `${h}px`
          }
        }
        debouncedHandleResize = debounce(handleResize, 250)
        window.addEventListener('resize', debouncedHandleResize)
      }
      if (handleResize) handleResize()
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

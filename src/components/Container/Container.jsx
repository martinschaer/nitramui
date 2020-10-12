import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-start;
  ${props => props.scroll === 'vertical'
    ? `
      overflow-y: auto;
      overflow-x: hidden;
      flex-wrap: wrap;
    `
    : `
      overflow-y: hidden;
      overflow-x: auto;
      /* Fixes nested overflow scroll: */
      /* https://stackoverflow.com/questions/43539284/overflow-hidden-with-nested-overflow-scroll-not-working */
      height: 100%;
    `
  }
  height: 100%;
  min-width: 100%;
`

const Container = ({ children, scroll }) => {
  return (
    <StyledContainer
      scroll={scroll}
    >
      {children}
    </StyledContainer>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Container.propTypes = {
  children: PropTypes.node,
  scroll: PropTypes.oneOf(['horizontal', 'vertical'])
}
Container.defaultProps = {
  scroll: 'horizontal'
}

export default Container

import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StyledHeader = styled.header`
  border-bottom: 1px solid #000;
`

const StyledMain = styled.main`
  flex-grow: 1;
  overflow: scroll;
`

const StyledFooter = styled.header`
  border-top: 1px solid #000;
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Layout = ({ children }) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <StyledLayout>
      <StyledHeader>
        {/* TODO: Move to prop */}
        <h1 className='pre-heading'>Nitram UI</h1>
      </StyledHeader>
      <StyledMain>
        {children}
      </StyledMain>
      <StyledFooter>
        {/* TODO: Move to prop */}
        <h5 className='pre-heading'>Footer</h5>
      </StyledFooter>
    </StyledLayout>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Layout.propTypes = {
  children: PropTypes.node
}
Layout.defaultProps = {}

export default Layout

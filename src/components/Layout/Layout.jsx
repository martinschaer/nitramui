import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StyledHeader = styled.header`
  border-bottom: 1px solid #E0E0E0;
  box-sizing: border-box;
  padding: 0 1rem;
`

const StyledMain = styled.main`
  background-color: #F0F0F0;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow-y: hidden;
  overflow-x: scroll;
`

const StyledFooter = styled.header`
  border-top: 1px solid #E0E0E0;
  box-sizing: border-box;
  padding: 0 1rem;
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

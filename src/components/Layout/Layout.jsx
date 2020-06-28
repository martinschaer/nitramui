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
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StyledHeader = styled.header`
  background-color: ${ds.colors.card};
  border-bottom: 1px solid ${ds.colors.border};
  box-sizing: border-box;
  padding: 0 1rem;
`

const StyledMain = styled.main`
  background-color: ${ds.colors.bg};
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow-y: hidden;
  overflow-x: scroll;
`

const StyledFooter = styled.header`
  background-color: ${ds.colors.card};
  border-top: 1px solid ${ds.colors.border};
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

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'
import Container from '../Container'

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

const StyledMain = styled(Container)`
  background-color: ${ds.colors.bg};
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
const Layout = ({ brand, children }) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <StyledLayout>
      {brand && (
        <StyledHeader>
          {/* TODO: Move to prop */}
          <h1 className='pre-heading'>{brand}</h1>
        </StyledHeader>
      )}
      <StyledMain>
        {children}
      </StyledMain>
      <StyledFooter>
        {/* TODO: Move to prop */}
        <h5 className='pre-heading'>Copyright © 2020</h5>
      </StyledFooter>
    </StyledLayout>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Layout.propTypes = {
  brand: PropTypes.node,
  children: PropTypes.node
}
Layout.defaultProps = {}

export default Layout

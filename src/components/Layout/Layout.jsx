import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'
import Container from '../Container'
import Label from '../Label'

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
  align-items: center;
  padding: 0.25rem;
  display: flex;
  flex-wrap: wrap;
`

const StyledMain = styled(Container)`
  background-color: ${ds.colors.bg};
`

const StyledFooter = styled.header`
  background-color: ${ds.colors.card};
  border-top: 1px solid ${ds.colors.border};
  box-sizing: border-box;
  align-items: center;
  padding: 0.25rem;
  display: flex;
  flex-wrap: wrap;
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Layout = ({ brand, children, headerSlot, footerSlot, menu, menuB, footerMenu, footerMenuB }) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <StyledLayout>
      {(headerSlot || brand) && (
        <StyledHeader>
          <Label heading>{headerSlot || brand}</Label>
          {menu}
          {menuB && (
            <div style={{ display: 'flex', marginLeft: 'auto' }}>
              {menuB}
            </div>
          )}
        </StyledHeader>
      )}
      <StyledMain>
        {children}
      </StyledMain>
      {(footerSlot || brand) && (
        <StyledFooter>
          <Label heading>{footerSlot || `Copyright © 2020 ${brand}`}</Label>
          {footerMenu}
          {footerMenuB && (
            <div style={{ display: 'flex', marginLeft: 'auto' }}>
              {menuB}
            </div>
          )}
        </StyledFooter>
      )}
    </StyledLayout>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Layout.propTypes = {
  brand: PropTypes.string,
  menu: PropTypes.node,
  menuB: PropTypes.node,
  children: PropTypes.node,
  headerSlot: PropTypes.node,
  footerSlot: PropTypes.node,
  footerMenu: PropTypes.node,
  footerMenuB: PropTypes.node
}
Layout.defaultProps = {}

export default Layout

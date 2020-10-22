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
  padding: ${props => ds.measures.spacer(props) / 4}rem;
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
  padding: ${props => ds.measures.spacer(props) / 4}rem;
  display: flex;
  flex-wrap: wrap;
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Layout = ({
  brand,
  scroll,
  children,
  headerSlot,
  toolbar,
  footerSlot,
  menu,
  menuB,
  footerMenu,
  footerMenuB
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <StyledLayout>
      {(headerSlot || brand || menu || menuB) && (
        <StyledHeader>
          {headerSlot || <Label heading>{brand}</Label>}
          {menu}
          {menuB && (
            <div style={{ display: 'flex', marginLeft: 'auto' }}>
              {menuB}
            </div>
          )}
        </StyledHeader>
      )}
      {toolbar && (
        <StyledHeader>
          {toolbar}
        </StyledHeader>
      )}
      <StyledMain scroll={scroll}>
        {children}
      </StyledMain>
      {(footerSlot || brand) && (
        <StyledFooter>
          <Label heading>{footerSlot || `Copyright © 2020 ${brand}`}</Label>
          {footerMenu}
          {footerMenuB && (
            <div style={{ display: 'flex', marginLeft: 'auto' }}>
              {footerMenuB}
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
  toolbar: PropTypes.node,
  footerSlot: PropTypes.node,
  footerMenu: PropTypes.node,
  footerMenuB: PropTypes.node,
  scroll: PropTypes.oneOf(['horizontal', 'vertical'])
}
Layout.defaultProps = {
  scroll: 'horizontal'
}

export default Layout

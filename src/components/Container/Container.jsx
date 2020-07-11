import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-start;
  margin: ${props => props.pushMargin ? '-1rem' : '0'};
  ${props => props.scroll === 'vertical'
    ? `
      overflow-y: scroll;
      overflow-x: hidden;
      flex-wrap: wrap;
    `
    : `
      overflow-y: hidden;
      overflow-x: scroll;
      /* Fixes nested overflow scroll: */
      /* https://stackoverflow.com/questions/43539284/overflow-hidden-with-nested-overflow-scroll-not-working */
      height: 100%;
    `
  }
  min-width: 100%;
`

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Container.propTypes = {
  children: PropTypes.node,
  pushMargin: PropTypes.bool,
  scroll: PropTypes.oneOf(['horizontal', 'vertical'])
}
Container.defaultProps = {
  pushMargin: false,
  scroll: 'horizontal'
}

export default Container

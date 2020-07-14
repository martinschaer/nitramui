import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import {
  labelStyles,
  headingStyles,
  preHeadingStyles
} from '../common/typography'

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
const Label = styled.span`
  ${labelStyles}
  ${props => props.heading && headingStyles}
  ${props => props.heading && preHeadingStyles}
  ${props => props.heading && 'line-height: 2.2em;'}
  padding-top: 1px;
  padding-bottom: 1px ;
  /* &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  } */
`

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Label.propTypes = {
  heading: PropTypes.bool,
  children: PropTypes.node
}
Label.defaultProps = {}

export default Label
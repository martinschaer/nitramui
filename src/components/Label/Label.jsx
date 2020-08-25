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
import ds from '../common/designSystem'

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
const Label = styled.span`
  ${props => props.compact ? `line-height: calc(${ds.measures.spacer(props)}rem * 2);
  height: calc(${ds.measures.spacer(props)}rem * 2);` : labelStyles}
  ${props => props.heading && headingStyles}
  ${props => props.heading && preHeadingStyles}
  &:first-child {
    padding-left: 0.25rem;
  }
  &:last-child {
    padding-right: 0.25rem;
  }
`

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Label.propTypes = {
  heading: PropTypes.bool,
  compact: PropTypes.bool,
  children: PropTypes.node
}
Label.defaultProps = {}

export default Label

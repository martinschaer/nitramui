import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import {
  labelStyles,
  labelStylesSmall,
  headingStyles,
  preHeadingStyles
} from '../common/typography'
import ds from '../common/designSystem'

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
const Label = styled.span`
  ${props => props.small || props.compact
    ? labelStylesSmall
    : labelStyles}
  ${props => props.compact && 'padding: 0;'}
  font-size: ${props => props.small ? ds.measures.fontSmall : ds.measures.font};
  ${props => props.heading && headingStyles}
  ${props => props.heading && preHeadingStyles}

  ${props => props.noWrap && `
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
`}

  &:first-child {
    /* padding-left: 0rem; */
  }
  &:last-child {
    /* padding-right: 0rem; */
  }
`

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Label.propTypes = {
  small: PropTypes.bool,
  heading: PropTypes.bool,
  compact: PropTypes.bool,
  noWrap: PropTypes.bool,
  children: PropTypes.node
}
Label.defaultProps = {}

export default Label

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
  ${props => props.small
    ? labelStylesSmall
    : props => props.compact
      ? `line-height: calc(${ds.measures.spacer(props)}rem * 2);
  height: calc(${ds.measures.spacer(props)}rem * 2);`
      : labelStyles}
  font-size: ${props => props.small ? ds.measures.fontSmall : ds.measures.font};
  ${props => props.heading && headingStyles}
  ${props => props.heading && preHeadingStyles}

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;

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
  small: PropTypes.bool,
  heading: PropTypes.bool,
  compact: PropTypes.bool,
  children: PropTypes.node
}
Label.defaultProps = {}

export default Label

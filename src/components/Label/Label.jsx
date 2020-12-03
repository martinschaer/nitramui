import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mix, readableColor } from 'polished'

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
const Label = styled.span.attrs((props) => {
  const bg = props.color && ds.colors.light(props) ? mix(0.1, props.color, ds.colors.light(props)) : 'transparent'
  return {
    style: {
      backgroundColor: bg || 'transparent',
      color: props.color ? readableColor(bg, ds.colors.dark(props), ds.colors.light(props), true) : undefined,
      borderColor: props.color
    }
  }
})`
  ${props => props.small || props.compact
    ? labelStylesSmall
    : labelStyles}
  ${props => props.compact && 'padding: 0;'}
  font-size: ${props => props.small ? ds.measures.fontSmall : ds.measures.font};
  ${props => props.heading && headingStyles}
  ${props => props.heading && preHeadingStyles}
  border-radius: ${props => props.small ? ds.measures.buttonRadiusSmall : ds.measures.buttonRadius};

  ${props => props.noWrap && `
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
`}
  ${props => props.noShrink && `
flex-shrink: 0;
`}
`

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Label.propTypes = {
  color: PropTypes.string,
  small: PropTypes.bool,
  heading: PropTypes.bool,
  compact: PropTypes.bool,
  noWrap: PropTypes.bool,
  noShrink: PropTypes.bool,
  children: PropTypes.node
}
Label.defaultProps = {}

export default Label

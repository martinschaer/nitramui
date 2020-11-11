import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Divider = styled.span`
  ${props => props.horizontal
    ? css`
      display: block;
      margin: ${props => props.noMargin ? 0 : `${props.spacing * ds.measures.spacer(props)}em 0`};
      border-top: 1px solid ${ds.colors.border};
    `
    : css`
      display: inline-block;
      margin: ${props => props.noMargin ? 0 : `0 ${props.spacing * ds.measures.spacer(props) / 4}rem`};
      border-right: 1px solid ${ds.colors.border};
      height: 1.8em;
    `
  }
  ${props => props.invisible && 'border: none;'}
  vertical-align: middle;
`

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Divider.propTypes = {
  noMargin: PropTypes.bool,
  horizontal: PropTypes.bool,
  invisible: PropTypes.bool,
  spacing: PropTypes.number
}
Divider.defaultProps = {
  spacing: 1
}

export default Divider

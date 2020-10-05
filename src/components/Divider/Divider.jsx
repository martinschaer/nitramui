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
      margin: ${props => props.noMargin ? 0 : '1em 0'};
      border-top: 1px solid ${ds.colors.border};
    `
    : css`
      display: inline-block;
      margin: ${props => props.noMargin ? 0 : `0 ${ds.measures.spacer(props) / 4}rem`};
      border-right: 1px solid ${ds.colors.border};
      height: 1.8em;
    `
  }
  vertical-align: middle;
`

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Divider.propTypes = {
  noMargin: PropTypes.bool,
  horizontal: PropTypes.bool
}
Divider.defaultProps = {}

export default Divider

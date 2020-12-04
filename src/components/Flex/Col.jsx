import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Col = styled.div.attrs((props) => {
  return {
    style: {
      width: props.width
    }
  }
})`
  width: ${prop => 100 / prop.count}%;
  min-width: calc(50rem / 4 - 4px);
  padding: ${props => props.noPadding ? '0' : props.compact ? '0.5rem' : '1rem'};
  box-sizing: border-box;
`

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Col.propTypes = {
  count: PropTypes.oneOf([2, 3, 4, 5, 6, 7, 8]),
  width: PropTypes.string,
  noPadding: PropTypes.bool,
  compact: PropTypes.bool
}
Col.defaultProps = {
  count: 8
}

export default Col

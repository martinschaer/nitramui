import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Flex = styled.div`
  height: ${({ fullHeight }) => fullHeight ? '100%' : 'auto'};
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justifyContent = 'normal' }) => justifyContent};
  justify-items: ${({ justifyItems = 'normal' }) => justifyItems};
  align-content: ${({ alignContent = 'normal' }) => alignContent};
  align-items: ${({ alignItems = 'normal' }) => alignItems};
  flex-wrap: ${({ flexWrap = 'nowrap' }) => flexWrap};
  flex-grow: ${({ flexGrow = 0 }) => flexGrow};
  flex-shrink: ${({ flexShrink = 1 }) => flexShrink};
`

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
const iiu = ['inherit', 'initial', 'unset']
const baseline = ['baseline', 'first baseline', 'last baseline']
const space = ['space-between', 'space-around', 'space-evenly']
const safeCenter = ['safe center', 'unsafe center']
const align = ['normal', 'center', 'start', 'end', 'flex-start', 'flex-end']
Flex.propTypes = {
  fullHeight: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse', ...iiu]),
  justifyContent: PropTypes.oneOf([
    'auto', 'self-start', 'self-end', 'stretch',
    'left', 'right',
    ...align,
    ...space,
    ...safeCenter,
    ...iiu
  ]),
  justifyItems: PropTypes.oneOf([
    'auto', 'self-start', 'self-end', 'stretch',
    'left', 'right',
    ...align,
    ...baseline,
    ...safeCenter,
    ...iiu
  ]),
  alignContent: PropTypes.oneOf([
    'stretch',
    ...align,
    ...baseline,
    ...space,
    ...safeCenter,
    ...iiu
  ]),
  alignItems: PropTypes.oneOf([
    'stretch',
    ...align,
    ...baseline,
    ...safeCenter,
    ...iiu
  ]),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse', ...iiu]),
  flexGrow: PropTypes.oneOf([PropTypes.objectOf(PropTypes.number), ...iiu]),
  flexShrink: PropTypes.oneOf([PropTypes.objectOf(PropTypes.number), ...iiu])
}
Flex.defaultProps = {}

export default Flex

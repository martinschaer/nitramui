import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'

// ---------------------------------------------------------------------------------------------------------------------
// Styled components
// ---------------------------------------------------------------------------------------------------------------------
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  17% {
    transform: rotate(180deg);
  }

  51% {
    transform: rotate(180deg);
  }

  68% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const StyledLoadingInline = styled.span`
  animation: ${rotate} 2s linear infinite;
  display: inline-block;
`

const StyledLoading = styled.div`
  font-size: 4em;
  text-align: center;
  color: ${ds.colors.fgMuted};
  padding: 0.5em 0;
  animation: ${rotate} 2s linear infinite;
`
// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Loading = ({ inline, icon }) => {
  return inline
    ? (<StyledLoadingInline>{icon}</StyledLoadingInline>)
    : (
      <StyledLoading>{icon}</StyledLoading>
    )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Loading.propTypes = {
  inline: PropTypes.bool,
  icon: PropTypes.node
}
Loading.defaultProps = {
  icon: '⏳' // ⧗
}

export default Loading

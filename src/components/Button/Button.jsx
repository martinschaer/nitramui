import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'
import {
  labelStyles
} from '../common/typography'

export const buttonStyle = css`
  ${labelStyles}
  padding: 0 ${ds.measures.buttonSpacerH}rem;
  font-size: ${ds.measures.inputFont};
  border: 1px solid ${props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBorder};
  background-color: ${props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBg};
  color: ${ds.colors.buttonFg};
  border-radius: ${ds.measures.buttonRadius};
  box-sizing: border-box;
  cursor: pointer;
  transform: perspective(100rem);

  &:hover,
  &:focus,
  &:active,
  &.active {
    border-color: ${ds.colors.buttonBorderHover};
    background-color: ${ds.colors.buttonBgHover};
    outline: none;
  }

  &:active,
  &.active {
    transform: perspective(100rem) translateZ(-2rem);
    box-shadow: inset 0 0 .25rem 2px ${ds.colors.shadow};
  }

  &:disabled {
    color: ${ds.colors.buttonFgDisabled};
    border-color: ${ds.colors.buttonBorderDisabled};
    background-color: ${ds.colors.buttonBgDisabled};
    cursor: default;

    &:hover,
    &:focus {
      border-color: ${ds.colors.buttonBorderDisabled};
    }
  }

  &.selected {
    background-color: ${ds.colors.buttonBgSelected};
    transform: perspective(100rem) translateZ(-2rem);
    box-shadow: inset 0 0 .25rem 0 ${ds.colors.buttonShadow};
  }
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Button = styled.button`
  ${buttonStyle}
`
// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Button.propTypes = {
  variant: PropTypes.oneOf([
    'plain',
    'default'
  ])
}
Button.defaultProps = {
  variant: 'default'
}

export default Button

import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'
import {
  labelStyles,
  labelStylesSmall
} from '../common/typography'

export const buttonStyle = css`
  ${props => props.small ? labelStylesSmall : labelStyles}
  font-size: ${props => props.small ? ds.measures.inputFontSmall : ds.measures.inputFont};
  vertical-align: bottom; /* fixes issue when font-size is in rems */
  border: 1px solid ${props => props.variant === 'plain' ? ds.colors.buttonBorderPlain : ds.colors.buttonBorder};
  background-color: ${
    props => props.variant === 'plain'
      ? ds.colors.buttonBgPlain
      : props.variant === 'inverted'
        ? ds.colors.buttonFg
        : ds.colors.buttonBg
  };
  color: ${
    props => props.variant === 'plain'
      ? ds.colors.buttonFgPlain
      : props.variant === 'inverted'
        ? ds.colors.buttonBg(props) !== 'transparent' ? ds.colors.buttonBg : ds.colors.bg
        : ds.colors.buttonFg
  };
  border-radius: ${props => props.small ? ds.measures.buttonRadiusSmall : ds.measures.buttonRadius};
  box-sizing: border-box;
  cursor: pointer;
  transform: perspective(100rem);

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${
      props => props.variant === 'plain'
        ? ds.colors.buttonFgHoverPlain
        : ds.colors.buttonFgHover
    };
    background-color: ${
      props => props.variant === 'plain'
        ? ds.colors.buttonBgHoverPlain
        : ds.colors.buttonBgHover
    };
    border-color: ${
      props => props.variant === 'plain'
        ? ds.colors.buttonBorderHoverPlain
        : ds.colors.buttonBorderHover};
    outline: none;
  }

  &:active,
  &.active {
    transform: perspective(100rem) translateZ(-2rem);
    box-shadow: inset 0 0 .25rem 2px ${ds.colors.shadow};
  }

  &:disabled {
    color: ${ds.colors.buttonFgDisabled};
    border-color: ${props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBorderDisabled};
    background-color: ${props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBgDisabled};
    cursor: default;

    &:hover,
    &:focus {
      border-color: ${props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBorderDisabled};
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
    'inverted',
    'default'
  ]),
  small: PropTypes.bool
}
Button.defaultProps = {
  variant: 'default'
}

export default Button

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

  &:visited {
    color: inherit;
  }

  &:hover,
  &:focus,
  &:active,
  &.active {
    ${props => props.variant === 'plain'
      ? `color: ${ds.colors.buttonFgHoverPlain(props)};
        background-color: ${ds.colors.buttonBgHoverPlain(props)};
        border-color: ${ds.colors.buttonBorderHoverPlain(props)};`
      : `color: ${ds.colors.buttonFgHover(props)};
        background-color: ${ds.colors.buttonBgHover(props)};
        border-color: ${ds.colors.buttonBorderHover(props)};`
    }
    outline: none;
    text-decoration: none;
    ${({ extraStyles = {} }) => extraStyles.hover}
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
    color: ${ds.colors.buttonFgSelected};
    background-color: ${ds.colors.buttonBgSelected};
    transform: perspective(100rem) translateZ(-2rem);
    box-shadow: inset 0 0 .25rem 0 ${ds.colors.buttonShadow};
    ${({ extraStyles = {} }) => extraStyles.selected}
  }

  ${({ extraStyles = {} }) => extraStyles.base}
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
  small: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  extraStyles: PropTypes.shape({
    base: PropTypes.any,
    hover: PropTypes.any,
    selected: PropTypes.any
  })
}
Button.defaultProps = {
  variant: 'default',
  type: 'button',
  extraStyles: {}
}

export default Button

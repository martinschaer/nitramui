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

const selectedCSS = css`
  border-color: ${props => props.variant === 'plain'
    ? ds.colors.buttonBorderPlainSelected
    : ds.colors.buttonBorderSelected};
  background: ${
    props => props.variant === 'plain'
      ? ds.colors.buttonBgPlainSelected
      : ds.colors.buttonBgSelected
  };
  color: ${
    props => props.variant === 'plain'
      ? ds.colors.buttonFgPlainSelected
      : ds.colors.buttonFgSelected
  };

  box-shadow: inset 0 0 .25rem 0 ${ds.colors.buttonShadow};
`

export const buttonStyle = css`
  ${props => props.small ? labelStylesSmall : labelStyles}
  font-size: ${props => props.small ? ds.measures.inputFontSmall : ds.measures.inputFont};
  border: 1px solid ${props => props.variant === 'plain' ? ds.colors.buttonBorderPlain : ds.colors.buttonBorder};
  background: ${
    props => props.variant === 'plain'
      ? ds.colors.buttonBgPlain
      : props.variant === 'inverted'
        ? (ds.colors.buttonBg(props) && ds.colors.buttonBg(props).indexOf('gradient') !== -1
          ? ds.colors.fg : ds.colors.buttonFg)
        : ds.colors.buttonBg
  };
  color: ${
    props => props.variant === 'plain'
      ? ds.colors.buttonFgPlain
      : props.variant === 'inverted'
        ? ds.colors.buttonBg(props) === 'transparent'
          ? ds.colors.bg
          : (ds.colors.buttonBg(props) && ds.colors.buttonBg(props).indexOf('gradient') !== -1
            ? ds.colors.bg : ds.colors.buttonBg)
        : ds.colors.buttonFg
  };
  border-radius: ${props => props.small ? ds.measures.buttonRadiusSmall : ds.measures.buttonRadius};
  box-sizing: border-box;
  ${props => props.fill ? 'width: 100%; margin-left: 0; margin-right: 0;' : null}
  cursor: pointer;

  ${props => props.fixedWidth && (
    /* 2px for the border */
    css`
width: calc(${props => ds.measures.spacer(props) * 2}rem + 2px);
padding: 0;
overflow: hidden;
text-overflow: ellipsis;
`
  )}

  &:visited {
    color: inherit;
  }

  &:hover,
  &:focus {
    ${props => props.variant === 'plain'
      ? props.selected
        ? `color: ${ds.colors.buttonFgPlainHoverSelected(props)};
          background: ${ds.colors.buttonBgPlainHoverSelected(props)};
          border-color: ${ds.colors.buttonBorderPlainHoverSelected(props)};`
        : `color: ${ds.colors.buttonFgHoverPlain(props)};
          background: ${ds.colors.buttonBgHoverPlain(props)};
          border-color: ${ds.colors.buttonBorderHoverPlain(props)};`
      : `color: ${ds.colors.buttonFgHover(props)};
        background: ${ds.colors.buttonBgHover(props)};
        border-color: ${ds.colors.buttonBorderHover(props)};`
    }
    outline: none;
    text-decoration: none;
    ${({ extraStyles = {} }) => extraStyles.hover}
  }

  &:active,
  &.active {
    outline: none;
    text-decoration: none;
    ${selectedCSS}
    ${({ extraStyles = {} }) => extraStyles.selected}
  }

  &:disabled {
    color: ${ds.colors.buttonFgDisabled};
    border-color: ${props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBorderDisabled};
    background: ${props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBgDisabled};
    cursor: default;

    &:hover,
    &:focus {
      border-color: ${props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBorderDisabled};
    }
  }

  ${props => props.selected ? selectedCSS : null}
  ${props => props.selected ? ({ extraStyles = {} }) => extraStyles.selected : null}
  &.selected {
    ${selectedCSS}
    ${({ extraStyles = {} }) => extraStyles.selected}
  }

  ${({ extraStyles = {} }) => extraStyles.base}
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Button = styled.button
  // https://github.com/styled-components/styled-components/releases/tag/v5.1.0
  .withConfig({ shouldForwardProp: (prop) => !['fill', 'small', 'extraStyles'].includes(prop) })`
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
  fill: PropTypes.bool,
  small: PropTypes.bool,
  selected: PropTypes.bool,
  fixedWidth: PropTypes.bool,
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

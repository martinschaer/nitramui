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
import { readableColor, mix } from 'polished'

const _mix = (a, c1, c2, props) => {
  if (!c1 || !c2) return 'inherit'
  if (c1 === 'transparent') {
    c1 = ds.colors.bg(props)
  }
  if (c2 === 'transparent') {
    c2 = ds.colors.fg(props)
  }
  return mix(a, c1, c2)
}

const selectedCSS = css`
  border-color: ${props => props.variant === 'plain'
    ? _mix(0.1, props.color || ds.colors.buttonBorderPlain(props), ds.colors.dark(props), props)
    : _mix(0.9, props.color || ds.colors.buttonBorder(props), ds.colors.dark(props), props)};
  background: ${
    props => props.variant === 'plain'
      ? _mix(0.9, props.color || ds.colors.buttonBgPlain(props), ds.colors.dark(props), props)
      : props.variant === 'inverted'
      ? _mix(0.9, ds.colors.buttonFg(props), ds.colors.buttonBg(props), props)
      : _mix(0.9, props.color || ds.colors.buttonBg(props), ds.colors.dark(props), props)
  };

  box-shadow: inset 0 0 .25rem 0 ${ds.colors.buttonShadow};
`

export const buttonStyle = css`
  ${props => props.small ? labelStylesSmall : labelStyles}
  padding: 0 ${props => props.small ? ds.measures.buttonSpacerHSmall : ds.measures.buttonSpacerH}rem;
  font-size: ${props => props.small ? ds.measures.inputFontSmall : ds.measures.inputFont};
  border: 1px solid ${props => props.variant === 'plain'
    ? ds.colors.buttonBorderPlain
    : props.color
      ? props.color
      : ds.colors.buttonBorder};
  background: ${
    props => props.variant === 'plain'
      ? ds.colors.buttonBgPlain
      : props.variant === 'inverted'
        ? (ds.colors.buttonBg(props) && ds.colors.buttonBg(props).indexOf('gradient') !== -1
          ? ds.colors.fg : ds.colors.buttonFg)
        : props.color ? props.color : ds.colors.buttonBg
  };
  color: ${
    props => props.variant === 'plain'
      ? ds.colors.buttonFgPlain
      : props.variant === 'inverted'
        ? ds.colors.buttonBg(props) === 'transparent'
          ? ds.colors.bg
          : (ds.colors.buttonBg(props) && ds.colors.buttonBg(props).indexOf('gradient') !== -1
            ? ds.colors.bg : ds.colors.buttonBg)
        : props.color
          ? readableColor(props.color, ds.colors.dark(props), ds.colors.light(props), true)
          : ds.colors.buttonFg
  };
  border-radius: ${props => props.small ? ds.measures.buttonRadiusSmall : ds.measures.buttonRadius};
  box-sizing: border-box;
  ${props => props.fill ? 'width: 100%; margin-left: 0; margin-right: 0;' : null}
  cursor: pointer;

  ${props => props.fixedWidth && (
    css`
width: calc(${props => (props.small ? 3 / 2 : 2) * Math.max(ds.measures.spacer(props), 1)}rem + 2px);
padding: 0;
overflow: hidden;
text-overflow: ellipsis;
flex-shrink: 0;
`
  )}

  &:visited {
    color: inherit;
  }

  &:hover,
  &:focus {
    ${props => props.variant === 'plain'
      ? `background: ${_mix(0.9, ds.colors.buttonBgPlain(props), ds.colors.dark(props), props)};`
      : props.variant === 'inverted'
      ? `background: ${_mix(0.9, ds.colors.buttonFg(props), ds.colors.buttonBg(props), props)};`
      : props.color
      ? `background: ${_mix(
           0.8,
           props.color,
           readableColor(props.color, ds.colors.dark(props), ds.colors.light(props), true),
           props
         )};`
      : `background: ${_mix(0.9, ds.colors.buttonBg(props), ds.colors.buttonFg(props), props)};`
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
  .withConfig({ shouldForwardProp: (prop) => !['fill', 'small', 'color', 'extraStyles', 'fixedWidth'].includes(prop) })`
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
  color: PropTypes.string,
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

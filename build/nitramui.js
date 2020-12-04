'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var polished = require('polished');
var o = require('use-persisted-state');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var o__default = /*#__PURE__*/_interopDefaultLegacy(o);

function getThemeValue(name, props, values) {
  var value = (
    props.theme &&
    props.theme[name]
  );

  var themeValue;

  if (typeof value === 'function') {
    themeValue = value(values);
  } else {
    themeValue = values[value];
  }

  if (typeof themeValue === 'function') {
    return themeValue(props);
  } else {
    return themeValue;
  }
}

function theme(name, values) {
  return function(props) {
    return getThemeValue(name, props, values);
  };
}

theme.variants = function(name, prop, values) {
  return function(props) {
    var variant = props[prop] && values[props[prop]];
    return variant && getThemeValue(name, props, variant);
  };
};

var styledTheming = theme;

// COLORS
// ---------------------------------------------------------------------------------------------------------------------

const WHITE = '#fff';
const GALLERY = '#f0f0f0';
const MERCURY = '#E5E5E5';
const EMPEROR = '#535353';
const DUNE = '#252321';
const COD_GRAY = '#1C1917';
const BLACK = '#000';
const BLACK_3 = 'rgba(0, 0, 0, 0.03)';
const BLACK_10 = 'rgba(0, 0, 0, 0.1)';
const BLACK_30 = 'rgba(0, 0, 0, 0.3)';
const YELLOW = '#ff0';
const BLUE = '#00f';
const LIMA = '#75d41d';
const RED = '#f22';
const BLUEVIOLET = 'blueviolet'; // #8A2BE2
// ---------------------------------------------------------------------------------------------------------------------
// FONTS
// ---------------------------------------------------------------------------------------------------------------------

const FONT_INTER = '\'Inter\', \'Helvetica Neue\', Helvetica, Arial, sans-serif';
const FONT_MONO = '\'Inconsolata\', monospace'; // ---------------------------------------------------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------------------------------------------------

const themes = {
  smooth: 'smooth',
  hiContrast: 'hiContrast'
};
const modes = {
  light: 'light',
  dark: 'dark'
};

const tryToGetArr = (obj, path, def) => {
  if (!path.length) {
    return obj;
  }

  const newObj = obj[path[0]];
  if (newObj === undefined) return def;
  return tryToGetArr(newObj, path.slice(1), def);
};

const buildCustomProp = (group, prop, lightDefault, darkDefault) => darkDefault !== undefined ? styledTheming('mode', {
  [modes.light]: ({
    theme
  }) => tryToGetArr(theme.customThemes, [theme.customTheme, group, prop, 'light'], lightDefault),
  [modes.dark]: ({
    theme
  }) => tryToGetArr(theme.customThemes, [theme.customTheme, group, prop, 'dark'], darkDefault)
}) : ({
  theme
}) => tryToGetArr(theme.customThemes, [theme.customTheme, group, prop], lightDefault);

var ds = {
  colors: {
    // -----------------------------------------------------------------------------------------------------------------
    // FG & BG
    // -----------------------------------------------------------------------------------------------------------------
    light: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: GALLERY,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'light', GALLERY, GALLERY)
    }),
    dark: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: BLACK
      }),
      custom: buildCustomProp('colors', 'dark', EMPEROR, EMPEROR)
    }),
    fg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'fg', EMPEROR, GALLERY)
    }),
    fgMuted: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_30,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: EMPEROR
      }),
      custom: buildCustomProp('colors', 'fgMuted', BLACK_30, EMPEROR)
    }),
    bg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: GALLERY,
        [modes.dark]: COD_GRAY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: BLACK
      }),
      custom: buildCustomProp('colors', 'bg', GALLERY, COD_GRAY)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Border
    // -----------------------------------------------------------------------------------------------------------------
    border: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: MERCURY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'border', MERCURY, EMPEROR)
    }),
    borderLight: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: DUNE
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: DUNE
      }),
      custom: buildCustomProp('colors', 'borderLight', BLACK_3, DUNE)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Button
    // -----------------------------------------------------------------------------------------------------------------
    buttonFg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonFg', EMPEROR, GALLERY)
    }),
    buttonFgPlain: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonFgPlain', EMPEROR, GALLERY)
    }),
    buttonFgPlainSelected: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonFgPlainSelected', EMPEROR, GALLERY)
    }),
    buttonFgSelected: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonFgSelected', EMPEROR, GALLERY)
    }),
    buttonBg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'buttonBg', 'transparent', 'transparent')
    }),
    buttonBgPlain: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'buttonBgPlain', 'transparent', 'transparent')
    }),
    buttonBgDisabled: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'buttonBgDisabled', 'transparent', 'transparent')
    }),
    buttonBorder: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: MERCURY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonBorder', MERCURY, EMPEROR)
    }),
    buttonBorderPlain: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'buttonBorderPlain', 'transparent', 'transparent')
    }),
    buttonBorderPlainHoverSelected: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonBorderPlainHoverSelected', EMPEROR, GALLERY)
    }),
    buttonBorderDisabled: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: DUNE
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: DUNE
      }),
      custom: buildCustomProp('colors', 'buttonBorderDisabled', BLACK_3, DUNE)
    }),
    buttonBorderSelected: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: MERCURY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'buttonBorderSelected', MERCURY, EMPEROR)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Controls
    // -----------------------------------------------------------------------------------------------------------------
    controlBg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: BLACK_30
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: GALLERY,
        [modes.dark]: COD_GRAY
      }),
      custom: buildCustomProp('colors', 'controlBg', BLACK_3, BLACK_30)
    }),
    inputBorder: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: MERCURY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'inputBorder', MERCURY, EMPEROR)
    }),
    inputBorderActive: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'inputBorderActive', EMPEROR, GALLERY)
    }),
    inputBorderDisabled: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: DUNE
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: DUNE
      }),
      custom: buildCustomProp('colors', 'inputBorderDisabled', BLACK_3, DUNE)
    }),
    inputBorderInvalid: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: RED,
        [modes.dark]: RED
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: RED,
        [modes.dark]: RED
      }),
      custom: buildCustomProp('colors', 'inputBorderInvalid', RED, RED)
    }),
    inputBg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'inputBg', 'transparent', 'transparent')
    }),
    inputBgFocus: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'inputBgFocus', 'transparent', 'transparent')
    }),
    inputBgDisabled: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'inputBgDisabled', 'transparent', 'transparent')
    }),
    inputBgHover: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'transparent',
        [modes.dark]: 'transparent'
      }),
      custom: buildCustomProp('colors', 'inputBgHover', 'transparent', 'transparent')
    }),
    inputFg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'inputFg', EMPEROR, GALLERY)
    }),
    inputFgDisabled: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_30,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: EMPEROR
      }),
      custom: buildCustomProp('colors', 'inputFgDisabled', BLACK_30, EMPEROR)
    }),
    labelFg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'labelFg', EMPEROR, GALLERY)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Card
    // -----------------------------------------------------------------------------------------------------------------
    card: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: DUNE
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: BLACK
      }),
      custom: buildCustomProp('colors', 'card', WHITE, DUNE)
    }),
    cardSelected: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: DUNE
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: BLACK
      }),
      custom: buildCustomProp('colors', 'cardSelected', WHITE, DUNE)
    }),
    cardBorder: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: GALLERY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: COD_GRAY,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'cardBorder', GALLERY, EMPEROR)
    }),
    cardBorderHover: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'cardBorderHover', EMPEROR, GALLERY)
    }),
    cardBorderSelected: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'cardBorderSelected', EMPEROR, GALLERY)
    }),
    cardHeaderBorder: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: GALLERY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: COD_GRAY,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'cardHeaderBorder', GALLERY, EMPEROR)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Shadow
    // -----------------------------------------------------------------------------------------------------------------
    shadow: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_10,
        [modes.dark]: BLACK_10
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'none',
        [modes.dark]: 'none'
      }),
      custom: buildCustomProp('colors', 'shadow', BLACK_10, BLACK_10)
    }),
    buttonShadow: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_10,
        [modes.dark]: BLACK_10
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: 'none',
        [modes.dark]: 'none'
      }),
      custom: buildCustomProp('colors', 'buttonShadow', BLACK_10, BLACK_10)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Link
    // -----------------------------------------------------------------------------------------------------------------
    link: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLUE,
        [modes.dark]: YELLOW
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLUE,
        [modes.dark]: YELLOW
      }),
      custom: buildCustomProp('colors', 'link', BLUE, YELLOW)
    }),
    linkVisited: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLUEVIOLET,
        [modes.dark]: LIMA
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLUEVIOLET,
        [modes.dark]: LIMA
      }),
      custom: buildCustomProp('colors', 'linkVisited', BLUEVIOLET, LIMA)
    }),
    // -----------------------------------------------------------------------------------------------------------------
    // Table
    // -----------------------------------------------------------------------------------------------------------------
    tableStripe: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: BLACK_3,
        [modes.dark]: BLACK_30
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: GALLERY,
        [modes.dark]: COD_GRAY
      }),
      custom: buildCustomProp('colors', 'tableStripe', BLACK_3, BLACK_30)
    }),
    tableHoverBg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: MERCURY,
        [modes.dark]: EMPEROR
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: BLACK,
        [modes.dark]: WHITE
      }),
      custom: buildCustomProp('colors', 'tableHoverBg', MERCURY, EMPEROR)
    }),
    tableHoverFg: styledTheming('theme', {
      [themes.smooth]: styledTheming('mode', {
        [modes.light]: EMPEROR,
        [modes.dark]: GALLERY
      }),
      [themes.hiContrast]: styledTheming('mode', {
        [modes.light]: WHITE,
        [modes.dark]: BLACK
      }),
      custom: buildCustomProp('colors', 'tableHoverFg', EMPEROR, GALLERY)
    })
  },
  // -------------------------------------------------------------------------------------------------------------------
  // Fonts
  // -------------------------------------------------------------------------------------------------------------------
  fonts: {
    body: styledTheming('theme', {
      [themes.smooth]: FONT_INTER,
      [themes.hiContrast]: FONT_INTER,
      custom: buildCustomProp('fonts', 'body', FONT_INTER)
    }),
    heading: styledTheming('theme', {
      [themes.smooth]: FONT_INTER,
      [themes.hiContrast]: FONT_INTER,
      custom: buildCustomProp('fonts', 'heading', FONT_INTER)
    }),
    controls: styledTheming('theme', {
      [themes.smooth]: FONT_MONO,
      [themes.hiContrast]: FONT_MONO,
      custom: buildCustomProp('fonts', 'controls', FONT_MONO)
    })
  },
  // -------------------------------------------------------------------------------------------------------------------
  // Weights
  // -------------------------------------------------------------------------------------------------------------------
  weights: {
    normal: styledTheming('theme', {
      [themes.smooth]: '400',
      [themes.hiContrast]: '400',
      custom: buildCustomProp('weights', 'normal', '400')
    }),
    strong: styledTheming('theme', {
      [themes.smooth]: '600',
      [themes.hiContrast]: '600',
      custom: buildCustomProp('weights', 'strong', '600')
    }),
    heading: styledTheming('theme', {
      [themes.smooth]: '200',
      [themes.hiContrast]: '200',
      custom: buildCustomProp('weights', 'heading', '200')
    }),
    preheading: styledTheming('theme', {
      [themes.smooth]: '600',
      [themes.hiContrast]: '600',
      custom: buildCustomProp('weights', 'preheading', '600')
    }),
    controlLabel: styledTheming('theme', {
      [themes.smooth]: '400',
      [themes.hiContrast]: '400',
      custom: buildCustomProp('weights', 'controlLabel', '400')
    })
  },
  // -------------------------------------------------------------------------------------------------------------------
  // Measures
  // -------------------------------------------------------------------------------------------------------------------
  measures: {
    radius: styledTheming('theme', {
      [themes.smooth]: '0.5rem',
      [themes.hiContrast]: '0.5rem',
      custom: buildCustomProp('measures', 'radius', '0.5rem')
    }),
    inputRadius: styledTheming('theme', {
      [themes.smooth]: '0.25rem',
      [themes.hiContrast]: '0.25rem',
      custom: buildCustomProp('measures', 'inputRadius', '0.25rem')
    }),
    buttonRadius: styledTheming('theme', {
      [themes.smooth]: '0.25rem',
      [themes.hiContrast]: '0.25rem',
      custom: buildCustomProp('measures', 'buttonRadius', '0.25rem')
    }),
    buttonRadiusSmall: styledTheming('theme', {
      [themes.smooth]: '0.25rem',
      [themes.hiContrast]: '0.25rem',
      custom: buildCustomProp('measures', 'buttonRadiusSmall', '0.25rem')
    }),
    font: styledTheming('theme', {
      [themes.smooth]: '0.875rem',
      [themes.hiContrast]: '0.875rem',
      custom: buildCustomProp('measures', 'font', '0.875rem')
    }),
    fontSmall: styledTheming('theme', {
      [themes.smooth]: '0.66rem',
      [themes.hiContrast]: '0.66rem',
      custom: buildCustomProp('measures', 'fontSmall', '0.66rem')
    }),
    inputFont: styledTheming('theme', {
      [themes.smooth]: '0.875rem',
      [themes.hiContrast]: '0.875rem',
      custom: buildCustomProp('measures', 'inputFont', '0.875rem')
    }),
    inputFontSmall: styledTheming('theme', {
      [themes.smooth]: '0.66rem',
      [themes.hiContrast]: '0.66rem',
      custom: buildCustomProp('measures', 'inputFontSmall', '0.66rem')
    }),
    unit: styledTheming('theme', {
      [themes.smooth]: '16px',
      [themes.hiContrast]: '16px',
      custom: buildCustomProp('measures', 'unit', '16px')
    }),
    spacer: styledTheming('theme', {
      [themes.smooth]: 1,
      [themes.hiContrast]: 1,
      custom: buildCustomProp('measures', 'spacer', 1)
    }),
    buttonSpacerH: styledTheming('theme', {
      [themes.smooth]: 1,
      [themes.hiContrast]: 1,
      custom: buildCustomProp('measures', 'buttonSpacerH', 1)
    }),
    buttonSpacerHSmall: styledTheming('theme', {
      [themes.smooth]: 0.5,
      [themes.hiContrast]: 0.5,
      custom: buildCustomProp('measures', 'buttonSpacerHSmall', 0.5)
    }),
    inputSpacerH: styledTheming('theme', {
      [themes.smooth]: 0.5,
      [themes.hiContrast]: 0.5,
      custom: buildCustomProp('measures', 'inputSpacerH', 0.5)
    })
  }
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

const POSITIONS = ['top', 'right', 'bottom', 'left', 'top left', 'top right', 'bottom right', 'bottom left', 'with text'];
const Dot = styled__default['default'].div`
  position: absolute;
  background-color: ${props => props.color || ds.colors.link};
  border-radius: ${ds.measures.radius};
  width: ${ds.measures.radius};
  height: ${ds.measures.radius};
  ${props => props.position === 'top' && styled.css(["top:", ";left:50%;margin-top:calc(", " / -2);margin-left:calc(", " / -2);"], props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'right' && styled.css(["top:50%;right:", ";margin-top:calc(", " / -2);margin-right:calc(", " / -2);"], props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'bottom' && styled.css(["bottom:", ";left:50%;margin-bottom:calc(", " / -2);margin-left:calc(", " / -2);"], props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'left' && styled.css(["top:50%;left:", ";margin-top:calc(", " / -2);margin-left:calc(", " / -2);"], props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'top right' && styled.css(["top:", ";right:", ";margin-top:calc(", " / -2);margin-right:calc(", " / -2);"], props.separation, props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'top left' && styled.css(["top:", ";left:", ";margin-top:calc(", " / -2);margin-left:calc(", " / -2);"], props.separation, props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'bottom right' && styled.css(["bottom:", ";right:", ";margin-bottom:calc(", " / -2);margin-right:calc(", " / -2);"], props.separation, props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'bottom left' && styled.css(["bottom:", ";left:", ";margin-bottom:calc(", " / -2);margin-left:calc(", " / -2);"], props.separation, props.separation, ds.measures.radius, ds.measures.radius)}
  ${props => props.position === 'with text' && styled.css(["top:calc((", " * 2) + 0.66rem);left:", ";margin-top:calc(", " / -2);margin-left:calc(", " / -2);"], props.separation, props.separation, ds.measures.radius, ds.measures.radius)}
`; // ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
// StyledCard height property is called h so that it doesn’t appear in the resulting DOM node.

const StyledCard = styled__default['default'].div`
  background-color: ${props => props.selected ? ds.colors.cardSelected : props.hollow ? ds.colors.bg : ds.colors.card};
  box-sizing: border-box;
  border: 1px solid ${props => props.selected ? ds.colors.cardBorderSelected : ds.colors.cardBorder};
  border-radius: ${ds.measures.radius};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  transition-property: 'border-color';
  transition-duration: .1s;
  position: relative;

  ${props => props.color && `border-${props.colorBorderPosition}: ${ds.measures.radius(props)} solid ${props.color} !important;`}

  height: ${props => props.h === 'full' ? '100%' : typeof props.h === 'number' ? `${props.h}rem` : 'auto'};
  min-width: ${props => props.size === 'small' ? '32rem' : 'auto'};
  width: ${props => props.size === 'small' ? '33%' : props.size === 'xs' ? '12rem' : 'auto'};

  ${props => props.marginBottom && (props.marginBottom === true ? `margin-bottom: ${ds.measures.spacer(props)}rem;` : `margin-bottom: ${props.marginBottom}rem;`)}

  ${props => props.marginTop && (props.marginTop === true ? `margin-top: ${ds.measures.spacer(props)}rem;` : `margin-top: ${props.marginTop}rem;`)}

  ${props => props.margin && (props.margin === true ? `margin: ${ds.measures.spacer(props)}rem;` : `margin: ${props.margin}rem;`)}

  box-shadow: 0 0 ${p => p.low ? '0.5rem' : '1rem'} ${ds.colors.shadow}${p => p.forceShadow ? ' !important' : ''};
  & & {
    box-shadow: none;
  }
  .hollow & {
    box-shadow: 0 0 ${p => p.low ? '0.5rem' : '1rem'} ${ds.colors.shadow};
  }

  .pre-heading {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    min-width: -webkit-fill-available;
  }

  ${props => props.hoverable === true ? styled.css(["&:hover{border-color:", ";", "}"], ds.colors.cardBorderHover, ({
  extraStyles = {}
}) => extraStyles.hover) : ''}

  ${({
  selected,
  extraStyles = {}
}) => selected && extraStyles.selected}

  ${({
  extraStyles = {}
}) => extraStyles.base}
`;
const StyledCardHeader = styled__default['default'].header`
  align-items: center;
  border-bottom: 1px solid ${props => props.noBorder ? 'transparent' : ds.colors.cardHeaderBorder};
  display: flex;
  flex-wrap: ${props => props.noWrapHeader ? 'nowrap' : 'wrap'};
  padding: ${props => props.compactHeader ? '0' : '0.25rem'};
`;
const StyledCardBody = styled__default['default'].main`
  padding: ${props => props.noPadding ? '0' : props.mini ? ds.measures.spacer(props) / 2 : props.compact ? ds.measures.spacer : ds.measures.spacer(props) * 2}rem;
  overflow-y: auto;
  height: 100%;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: ${props => props.noPadding ? '0' : ds.measures.spacer}rem;
  }
`;
const StyledCardFooter = styled__default['default'].footer`
  align-items: center;
  border-top: 1px solid ${props => props.noBorder ? 'transparent' : ds.colors.cardHeaderBorder};
  display: flex;
  flex-wrap: ${props => props.noWrapFooter ? 'nowrap' : 'wrap'};
  justify-content: flex-end;
  margin-top: auto;
  padding: ${props => props.compactFooter ? '0' : '0.25rem'};
`; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Card = ({
  size,
  color,
  colorBorderPosition,
  header,
  footer,
  height,
  children,
  noPadding,
  mini,
  compact,
  compactHeader,
  compactFooter,
  noWrapHeader,
  noWrapFooter,
  noBorderHeader,
  noBorderFooter,
  hollow,
  low,
  forceShadow,
  hoverable,
  selected,
  margin,
  marginTop,
  marginBottom,
  extraStyles,
  stickers,
  onClick
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return /*#__PURE__*/React__default['default'].createElement(StyledCard, {
    size: size,
    color: color,
    colorBorderPosition: colorBorderPosition,
    h: height,
    hoverable: hoverable,
    low: low ? 1 : 0,
    hollow: hollow,
    forceShadow: forceShadow,
    selected: selected,
    margin: margin,
    marginTop: marginTop,
    marginBottom: marginBottom,
    extraStyles: extraStyles,
    onClick: onClick && (() => onClick()),
    className: hollow ? 'hollow' : null
  }, header && /*#__PURE__*/React__default['default'].createElement(StyledCardHeader, {
    compactHeader: compactHeader,
    noWrapHeader: noWrapHeader,
    noBorder: noBorderHeader
  }, header), children && /*#__PURE__*/React__default['default'].createElement(StyledCardBody, {
    noPadding: noPadding,
    compact: compact,
    mini: mini
  }, children), footer && /*#__PURE__*/React__default['default'].createElement(StyledCardFooter, {
    compactFooter: compactFooter,
    noWrapFooter: noWrapFooter,
    noBorder: noBorderFooter
  }, footer), stickers && stickers.dot && /*#__PURE__*/React__default['default'].createElement(Dot, {
    position: typeof stickers.dot === 'string' ? stickers.dot : stickers.dot.p,
    color: color,
    separation: noPadding ? '0' : compact ? '0.5rem' : '1rem'
  }));
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


Card.propTypes = {
  children: propTypes.node,
  header: propTypes.node,
  footer: propTypes.node,
  size: propTypes.oneOf(['auto', 'small', 'xs']),
  color: propTypes.string,
  colorBorderPosition: propTypes.oneOf(['top', 'right', 'bottom', 'left']),
  height: propTypes.oneOfType([propTypes.oneOf(['default', 'full']), propTypes.number]),
  noPadding: propTypes.bool,
  mini: propTypes.bool,
  compact: propTypes.bool,
  compactHeader: propTypes.bool,
  compactFooter: propTypes.bool,
  noWrapHeader: propTypes.bool,
  noWrapFooter: propTypes.bool,
  noBorderHeader: propTypes.bool,
  noBorderFooter: propTypes.bool,
  hollow: propTypes.bool,
  low: propTypes.bool,
  forceShadow: propTypes.bool,
  hoverable: propTypes.bool,
  selected: propTypes.bool,
  margin: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  marginTop: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  marginBottom: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  onClick: propTypes.func,
  extraStyles: propTypes.shape({
    base: propTypes.any,
    hover: propTypes.any,
    selected: propTypes.any
  }),
  stickers: propTypes.shape({
    dot: propTypes.oneOfType([// either specify the position as a value for dot…
    propTypes.oneOf(POSITIONS), // …or pass an object with the position (p) and color (c)
    propTypes.shape({
      // p for position
      p: propTypes.oneOf(POSITIONS),
      // c for color
      c: propTypes.string
    })])
  })
};
Card.defaultProps = {
  height: 'default',
  colorBorderPosition: 'top',
  extraStyles: {}
};

// Component
// ---------------------------------------------------------------------------------------------------------------------

const Flex = styled__default['default'].div`
  height: ${({
  fullHeight
}) => fullHeight ? '100%' : 'auto'};
  display: flex;
  flex-direction: ${({
  direction = 'row'
}) => direction};
  justify-content: ${({
  justifyContent = 'normal'
}) => justifyContent};
  justify-items: ${({
  justifyItems = 'normal'
}) => justifyItems};
  align-content: ${({
  alignContent = 'normal'
}) => alignContent};
  align-items: ${({
  alignItems = 'normal'
}) => alignItems};
  flex-wrap: ${({
  flexWrap = 'nowrap'
}) => flexWrap};
  flex-grow: ${({
  flexGrow = 0
}) => flexGrow};
  flex-shrink: ${({
  flexShrink = 1
}) => flexShrink};
`; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

const iiu = ['inherit', 'initial', 'unset'];
const baseline = ['baseline', 'first baseline', 'last baseline'];
const space = ['space-between', 'space-around', 'space-evenly'];
const safeCenter = ['safe center', 'unsafe center'];
const align = ['normal', 'center', 'start', 'end', 'flex-start', 'flex-end'];
Flex.propTypes = {
  fullHeight: propTypes.bool,
  direction: propTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse', ...iiu]),
  justifyContent: propTypes.oneOf(['auto', 'self-start', 'self-end', 'stretch', 'left', 'right', ...align, ...space, ...safeCenter, ...iiu]),
  justifyItems: propTypes.oneOf(['auto', 'self-start', 'self-end', 'stretch', 'left', 'right', ...align, ...baseline, ...safeCenter, ...iiu]),
  alignContent: propTypes.oneOf(['stretch', ...align, ...baseline, ...space, ...safeCenter, ...iiu]),
  alignItems: propTypes.oneOf(['stretch', ...align, ...baseline, ...safeCenter, ...iiu]),
  flexWrap: propTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse', ...iiu]),
  flexGrow: propTypes.oneOfType([propTypes.number, propTypes.string]),
  flexShrink: propTypes.oneOfType([propTypes.number, propTypes.string])
};
Flex.defaultProps = {};

// Component
// ---------------------------------------------------------------------------------------------------------------------

const Col = styled__default['default'].div`
  width: ${prop => 100 / prop.count}%;
  min-width: calc(50rem / 4 - 4px);
  padding: ${props => props.noPadding ? '0' : props.compact ? '0.5rem' : '1rem'};
  box-sizing: border-box;
`; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

Col.propTypes = {
  count: propTypes.oneOf([2, 3, 4, 5, 6, 7, 8]),
  noPadding: propTypes.bool,
  compact: propTypes.bool
};
Col.defaultProps = {
  count: 8
};

Flex.Col = Col;

const GOLDEN_RATIO = 1.61803398875;
const convertRemToPixels = rem => {
  return rem * parseFloat(window.getComputedStyle(document.documentElement).fontSize);
};
const styleValueToPX = value => {
  if (value.indexOf('px') !== -1) {
    return parseFloat(value);
  } else if (value.indexOf('rem') !== -1) {
    return convertRemToPixels(parseFloat(value));
  } else {
    return parseFloat(value);
  }
};
const widths = ['default', 'small', 'fill', 'full', 'full-minus-small', 'square', 'golden-horizontal', 'golden-vertical', 'golden-width', 'golden-width-rest', 'half', 'third', 'fourth'];
const getCSSWidth = size => size === 'full' || size === 'square' || size === 'fill' ? '100%' : size === 'small' ? '16rem' : size === 'full-minus-small' ? 'calc(100vw - 16rem)' : size === 'golden-width' ? `${100 / GOLDEN_RATIO}%` : size === 'golden-width-rest' ? `${100 - 100 / GOLDEN_RATIO}%` : size === 'half' ? '50%' : size === 'third' ? '33.3%' : size === 'fourth' ? '25%' // default:
: '50rem';

const debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};

// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const StyledPane = styled__default['default'].div`
  box-sizing: border-box;
  height: ${props => props.h === 'half' ? '50%' : props.h === 'auto' ? 'auto' : typeof props.h === 'number' ? `${props.h}rem` : '100%'};
  flex-shrink: ${props => props.size === 'fill' ? 1 : 0};
  padding: ${props => props.noPadding ? '0' : `${ds.measures.spacer(props)}rem`};
  outline: 1px dashed ${ds.colors.borderLight};
  ${props => props.shadow && styled.css(["box-shadow:0 0 1rem ", ";"], ds.colors.shadow)}
  overflow: auto;
  max-width: 100%;
  width: ${props => getCSSWidth(props.size)};
  ${props => props.center && 'margin: 0 auto;'}

  @media (max-width: 768px) {
    ${props => props.size === 'small' ? '' : 'min-width: 100vw;'}
    max-width: 100vw;
  }
`; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Pane = ({
  size,
  center,
  height,
  shadow,
  noPadding,
  children
}) => {
  const uid = React__default['default'].useRef(`pane-${Math.random().toString(36).substr(2, 9)}`); // -------------------------------------------------------------------------------------------------------------------
  // Effect
  // -------------------------------------------------------------------------------------------------------------------

  React__default['default'].useEffect(() => {
    let debouncedHandleResize;
    let handleResize;

    if (window && (size === 'square' || size === 'golden-horizontal' || size === 'golden-vertical')) {
      handleResize = () => {
        const el = document.querySelector(`#${uid.current}`);
        const h = el.offsetHeight;
        const winW = window.innerWidth;
        let elStyle;

        switch (size) {
          case 'golden-horizontal':
            el.style.width = `${parseInt(h * GOLDEN_RATIO, 10)}px`;
            break;

          case 'golden-vertical':
            el.style.width = `${parseInt(h / GOLDEN_RATIO, 10)}px`;
            break;

          case 'square':
          default:
            elStyle = window.getComputedStyle(el);
            el.style.width = `${Math.min(h, winW)}px`;
            el.style.paddingBottom = `${h - Math.min(h, winW) + styleValueToPX(elStyle.paddingTop)}px`;
        }
      };

      debouncedHandleResize = debounce(handleResize, 250);
      window.addEventListener('resize', debouncedHandleResize);
      handleResize();
    }

    return () => {
      if (debouncedHandleResize) window.removeEventListener('resize', debouncedHandleResize);
    };
  }); // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------

  return /*#__PURE__*/React__default['default'].createElement(StyledPane, {
    id: uid.current,
    size: size,
    h: height,
    center: center,
    shadow: shadow,
    noPadding: noPadding
  }, children);
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


Pane.propTypes = {
  size: propTypes.oneOf(widths),
  height: propTypes.oneOfType([propTypes.oneOf(['half', 'full', 'auto']), propTypes.number]),
  shadow: propTypes.bool,
  noPadding: propTypes.bool,
  children: propTypes.node,
  center: propTypes.bool
};
Pane.defaultProps = {
  size: 'default',
  height: 'full'
};

// Component
// ---------------------------------------------------------------------------------------------------------------------

const Wrapper = styled__default['default'].div`
  margin: 0 auto;
`; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

Wrapper.propTypes = {};
Wrapper.defaultProps = {};

Pane.Wrapper = Wrapper;

const headingStyles = styled.css(["font-family:", ";font-weight:", ";margin-right:", "rem;"], ds.fonts.heading, ds.weights.heading, ds.measures.spacer);
const preHeadingStyles = styled.css(["color:", ";font-size:.8rem;font-weight:", ";margin:calc(", "rem / 4) calc(", "rem / 4);"], ds.colors.fgMuted, ds.weights.preheading, ds.measures.spacer, ds.measures.spacer);
const labelStyles = styled.css(["line-height:", "rem;min-height:", "rem;padding:0 ", "rem;display:inline-block;margin:calc(", "rem / 4) calc(", "rem / 4);"], props => Math.max(2, ds.measures.spacer(props) * 2), props => Math.max(2, ds.measures.spacer(props) * 2), ds.measures.spacer, ds.measures.spacer, ds.measures.spacer);
const labelStylesSmall = styled.css(["line-height:", "rem;min-height:", "rem;padding:0 ", "rem;display:inline-block;margin:calc(", "rem / 4) calc(", "rem / 4);"], props => Math.max(1.5, ds.measures.spacer(props) * 1.5), props => Math.max(1.5, ds.measures.spacer(props) * 1.5), props => ds.measures.spacer(props) / 2, ds.measures.spacer, ds.measures.spacer);

// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const Label = styled__default['default'].span.attrs(props => {
  const bg = props.color && ds.colors.light(props) ? polished.mix(0.1, props.color, ds.colors.light(props)) : 'transparent';
  return {
    style: {
      backgroundColor: bg || 'transparent',
      color: props.color ? polished.readableColor(bg, ds.colors.dark(props), ds.colors.light(props), true) : undefined,
      borderColor: props.color
    }
  };
})`
  ${props => props.small || props.compact ? labelStylesSmall : labelStyles}
  ${props => props.compact && 'padding: 0;'}
  font-size: ${props => props.small ? ds.measures.fontSmall : ds.measures.font};
  ${props => props.heading && headingStyles}
  ${props => props.heading && preHeadingStyles}
  border-radius: ${props => props.small ? ds.measures.buttonRadiusSmall : ds.measures.buttonRadius};

  ${props => props.noWrap && `
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
`}
  ${props => props.noShrink && `
flex-shrink: 0;
`}
`; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

Label.propTypes = {
  color: propTypes.string,
  small: propTypes.bool,
  heading: propTypes.bool,
  compact: propTypes.bool,
  noWrap: propTypes.bool,
  noShrink: propTypes.bool,
  children: propTypes.node
};
Label.defaultProps = {};

// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const Muted = styled__default['default'].span`
  color: ${ds.colors.fgMuted};
`; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

Muted.propTypes = {};
Muted.defaultProps = {};

// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const StyledTableContainer = styled__default['default'].div`
  overflow-x: auto;
`;
const StyledTable = styled__default['default'].table`
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  width: max-content;
  min-width: 100%;
  table-layout: ${props => props.layout};

  thead, tfoot {
    background-color: ${ds.colors.tableStripe};
    color: ${ds.colors.fg};
  }

  th, td {
    border: 1px solid ${ds.colors.border};
    padding: 0.5em;
    word-wrap: break-word;
    min-width: 4em;
    max-width: 20em;
  }

  th {
    ${preHeadingStyles}
    text-align: left;
  }

  tr:nth-child(2n) {
    background-color: ${ds.colors.tableStripe};
  }

  ${props => props.hoverable === true && `tbody tr:hover {
    background-color: ${ds.colors.tableHoverBg(props)};
    color: ${ds.colors.tableHoverFg(props)}
  }`}
`; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Table = ({
  hoverable,
  layout,
  children
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return /*#__PURE__*/React__default['default'].createElement(StyledTableContainer, null, /*#__PURE__*/React__default['default'].createElement(StyledTable, {
    hoverable: hoverable
  }, children));
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


Table.propTypes = {
  children: propTypes.node,
  layout: propTypes.oneOf(['fixed', 'auto']),
  hoverable: propTypes.bool
};
Table.defaultProps = {
  layout: 'auto'
};

const _mix = (a, c1, c2, props) => {
  if (!c1 || !c2) return 'inherit';

  if (c1 === 'transparent') {
    c1 = ds.colors.bg(props);
  }

  if (c2 === 'transparent') {
    c2 = ds.colors.fg(props);
  }

  return polished.mix(a, c1, c2);
};

const selectedCSS = styled.css(["border-color:", ";background:", ";box-shadow:inset 0 0 .25rem 0 ", ";"], props => props.variant === 'plain' ? _mix(0.1, props.color || ds.colors.buttonBorderPlain(props), ds.colors.dark(props), props) : _mix(0.9, props.color || ds.colors.buttonBorder(props), ds.colors.dark(props), props), props => props.variant === 'plain' ? _mix(0.9, props.color || ds.colors.buttonBgPlain(props), ds.colors.dark(props), props) : props.variant === 'inverted' ? _mix(0.9, ds.colors.buttonFg(props), ds.colors.buttonBg(props), props) : _mix(0.9, props.color || ds.colors.buttonBg(props), ds.colors.dark(props), props), ds.colors.buttonShadow);
const buttonStyle = styled.css(["", " padding:0 ", "rem;font-size:", ";border:1px solid ", ";background:", ";color:", ";border-radius:", ";box-sizing:border-box;", " cursor:pointer;", " &:visited{color:inherit;}&:hover,&:focus{", " outline:none;text-decoration:none;", "}&:active,&.active{outline:none;text-decoration:none;", " ", "}&:disabled{color:", ";border-color:", ";background:", ";cursor:default;&:hover,&:focus{border-color:", ";}}", " ", " &.selected{", " ", "}", ""], props => props.small ? labelStylesSmall : labelStyles, props => props.small ? ds.measures.buttonSpacerHSmall : ds.measures.buttonSpacerH, props => props.small ? ds.measures.inputFontSmall : ds.measures.inputFont, props => props.variant === 'plain' ? ds.colors.buttonBorderPlain : props.color ? props.color : ds.colors.buttonBorder, props => props.variant === 'plain' ? ds.colors.buttonBgPlain : props.variant === 'inverted' ? ds.colors.buttonBg(props) && ds.colors.buttonBg(props).indexOf('gradient') !== -1 ? ds.colors.fg : ds.colors.buttonFg : props.color ? props.color : ds.colors.buttonBg, props => props.variant === 'plain' ? ds.colors.buttonFgPlain : props.variant === 'inverted' ? ds.colors.buttonBg(props) === 'transparent' ? ds.colors.bg : ds.colors.buttonBg(props) && ds.colors.buttonBg(props).indexOf('gradient') !== -1 ? ds.colors.bg : ds.colors.buttonBg : props.color ? polished.readableColor(props.color, ds.colors.dark(props), ds.colors.light(props), true) : ds.colors.buttonFg, props => props.small ? ds.measures.buttonRadiusSmall : ds.measures.buttonRadius, props => props.fill ? 'width: 100%; margin-left: 0; margin-right: 0;' : null, props => props.fixedWidth && styled.css(["width:calc(", "rem + 2px);padding:0;overflow:hidden;text-overflow:ellipsis;flex-shrink:0;"], props => (props.small ? 3 / 2 : 2) * Math.max(ds.measures.spacer(props), 1)), props => props.variant === 'plain' ? `background: ${_mix(0.9, ds.colors.buttonBgPlain(props), ds.colors.dark(props), props)};` : props.variant === 'inverted' ? `background: ${_mix(0.9, ds.colors.buttonFg(props), ds.colors.buttonBg(props), props)};` : props.color ? `background: ${_mix(0.8, props.color, polished.readableColor(props.color, ds.colors.dark(props), ds.colors.light(props), true), props)};` : `background: ${_mix(0.9, ds.colors.buttonBg(props), ds.colors.buttonFg(props), props)};`, ({
  extraStyles = {}
}) => extraStyles.hover, selectedCSS, ({
  extraStyles = {}
}) => extraStyles.selected, ds.colors.fgMuted, props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBorderDisabled, props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBgDisabled, props => props.variant === 'plain' ? 'transparent' : ds.colors.buttonBorderDisabled, props => props.selected ? selectedCSS : null, props => props.selected ? ({
  extraStyles = {}
}) => extraStyles.selected : null, selectedCSS, ({
  extraStyles = {}
}) => extraStyles.selected, ({
  extraStyles = {}
}) => extraStyles.base); // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Button = styled__default['default'].button // https://github.com/styled-components/styled-components/releases/tag/v5.1.0
.withConfig({
  shouldForwardProp: prop => !['fill', 'small', 'color', 'extraStyles', 'fixedWidth'].includes(prop)
})`
  ${buttonStyle}
`; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

Button.propTypes = {
  variant: propTypes.oneOf(['plain', 'inverted', 'default']),
  fill: propTypes.bool,
  small: propTypes.bool,
  color: propTypes.string,
  selected: propTypes.bool,
  fixedWidth: propTypes.bool,
  type: propTypes.oneOf(['button', 'submit']),
  extraStyles: propTypes.shape({
    base: propTypes.any,
    hover: propTypes.any,
    selected: propTypes.any
  })
};
Button.defaultProps = {
  variant: 'default',
  type: 'button',
  extraStyles: {}
};

// Local imports
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const StyledContainer = styled__default['default'].div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-start;
  ${props => props.scroll === 'vertical' ? `
      overflow-y: auto;
      overflow-x: hidden;
      flex-wrap: wrap;
    ` : `
      overflow-y: hidden;
      overflow-x: auto;
      /* Fixes nested overflow scroll: */
      /* https://stackoverflow.com/questions/43539284/overflow-hidden-with-nested-overflow-scroll-not-working */
      height: 100%;
    `}
  height: 100%;
  min-width: 100%;
`;

const Container = ({
  children,
  scroll
}) => {
  return /*#__PURE__*/React__default['default'].createElement(StyledContainer, {
    scroll: scroll
  }, children);
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


Container.propTypes = {
  children: propTypes.node,
  scroll: propTypes.oneOf(['horizontal', 'vertical'])
};
Container.defaultProps = {
  scroll: 'horizontal'
};

// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const StyledLayout = styled__default['default'].div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const StyledHeader = styled__default['default'].header`
  background-color: ${ds.colors.card};
  border-bottom: 1px solid ${ds.colors.border};
  box-sizing: border-box;
  align-items: center;
  padding: ${props => ds.measures.spacer(props) / 4}rem;
  display: flex;
  flex-wrap: wrap;
`;
const StyledMain = styled__default['default'](Container)`
  background-color: ${ds.colors.bg};
`;
const StyledFooter = styled__default['default'].header`
  background-color: ${ds.colors.card};
  border-top: 1px solid ${ds.colors.border};
  box-sizing: border-box;
  align-items: center;
  padding: ${props => ds.measures.spacer(props) / 4}rem;
  display: flex;
  flex-wrap: wrap;
`; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Layout = ({
  brand,
  scroll,
  children,
  headerSlot,
  toolbar,
  footerSlot,
  menu,
  menuB,
  footerMenu,
  footerMenuB
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return /*#__PURE__*/React__default['default'].createElement(StyledLayout, null, (headerSlot || brand || menu || menuB) && /*#__PURE__*/React__default['default'].createElement(StyledHeader, null, headerSlot || /*#__PURE__*/React__default['default'].createElement(Label, {
    heading: true
  }, brand), menu, menuB && /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'flex',
      marginLeft: 'auto'
    }
  }, menuB)), toolbar && /*#__PURE__*/React__default['default'].createElement(StyledHeader, null, toolbar), /*#__PURE__*/React__default['default'].createElement(StyledMain, {
    scroll: scroll
  }, children), (footerSlot || brand) && /*#__PURE__*/React__default['default'].createElement(StyledFooter, null, footerSlot || /*#__PURE__*/React__default['default'].createElement(Label, {
    heading: true
  }, "\xA9 ", new Date().getFullYear(), " ", brand), footerMenu, footerMenuB && /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'flex',
      marginLeft: 'auto'
    }
  }, footerMenuB)));
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


Layout.propTypes = {
  brand: propTypes.string,
  menu: propTypes.node,
  menuB: propTypes.node,
  children: propTypes.node,
  headerSlot: propTypes.node,
  toolbar: propTypes.node,
  footerSlot: propTypes.node,
  footerMenu: propTypes.node,
  footerMenuB: propTypes.node,
  scroll: propTypes.oneOf(['horizontal', 'vertical'])
};
Layout.defaultProps = {
  scroll: 'horizontal'
};

// Component
// ---------------------------------------------------------------------------------------------------------------------

const Divider = styled__default['default'].span`
  ${props => props.horizontal ? styled.css(["display:block;margin:", ";border-top:1px solid ", ";"], props => props.noMargin ? 0 : `${props.spacing * ds.measures.spacer(props)}em 0`, ds.colors.border) : styled.css(["display:inline-block;margin:", ";border-right:1px solid ", ";height:1.8em;"], props => props.noMargin ? 0 : `0 ${props.spacing * ds.measures.spacer(props) / 4}rem`, ds.colors.border)}
  ${props => props.invisible && 'border: none;'}
  vertical-align: middle;
`; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

Divider.propTypes = {
  noMargin: propTypes.bool,
  horizontal: propTypes.bool,
  invisible: propTypes.bool,
  spacing: propTypes.number
};
Divider.defaultProps = {
  spacing: 1
};

// Styled components
// ---------------------------------------------------------------------------------------------------------------------

const rotate = styled.keyframes(["0%{transform:rotate(0deg);}17%{transform:rotate(180deg);}51%{transform:rotate(180deg);}68%{transform:rotate(360deg);}100%{transform:rotate(360deg);}"]);
const StyledLoadingInline = styled__default['default'].span`
  animation: ${rotate} 2s linear infinite;
  display: inline-block;
  height: 1em;
  line-height: 1em;
`;
const StyledLoading = styled__default['default'].div`
  font-size: 4em;
  text-align: center;
  color: ${ds.colors.fgMuted};
  padding: 0.5em 0;
  animation: ${rotate} 2s linear infinite;
`; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Loading = ({
  inline,
  icon
}) => {
  return inline ? /*#__PURE__*/React__default['default'].createElement(StyledLoadingInline, null, icon) : /*#__PURE__*/React__default['default'].createElement(StyledLoading, null, icon);
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


Loading.propTypes = {
  inline: propTypes.bool,
  icon: propTypes.node
};
Loading.defaultProps = {
  icon: '⏳' // ⧗

};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const getLabel = (val, options) => {
  let result = val;

  for (const o of options) {
    if (o.value === val) {
      result = o.label;
      break;
    }
  }

  return result;
};

const normalizeOptions = options => {
  return options.map(x => typeof x === 'object' ? {
    value: x.value,
    label: (x.label !== undefined ? x.label : x.value).toString()
  } : {
    value: x,
    label: x.toString()
  });
};

const PROP_VALUE = propTypes.oneOfType([propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool])), propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool])]);
const PROP_OPTION = propTypes.shape({
  label: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number])
});
const PROP_NORMALIZED_OPTIONS = propTypes.arrayOf(PROP_OPTION);
const PROP_OPTIONS = propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number, PROP_OPTION]));
const Popup = styled__default['default'].div`
  box-sizing: border-box;
  position: absolute;
  z-index: 10;
  left: 0;
`;
const inputStyle = styled.css(["", " padding:0 ", "rem;font-size:", ";border:1px solid ", ";background-color:", ";color:", ";border-radius:", ";box-sizing:border-box;flex-shrink:1;&:hover{border-color:", ";background-color:", ";outline:none;}&:focus,&:active,&.active{border-color:", ";background-color:", ";outline:none;}&.disabled,&:disabled{color:", ";border-color:", ";background-color:", ";cursor:default;&:hover,&:focus{border-color:", ";}}"], labelStyles, ds.measures.inputSpacerH, ds.measures.inputFont, ds.colors.inputBorder, ds.colors.inputBg, ds.colors.inputFg, ds.measures.inputRadius, ds.colors.inputBorderActive, ds.colors.inputBgHover, ds.colors.inputBorderActive, ds.colors.inputBgFocus, ds.colors.inputFgDisabled, ds.colors.inputBorderDisabled, ds.colors.inputBgDisabled, ds.colors.inputBorderDisabled);
const Actionable = styled__default['default'].div`
  ${inputStyle}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledInput = styled__default['default'].input`
  ${inputStyle}
`;
const StyledSelect = styled__default['default'].select`
  ${inputStyle}
`;
const StyledTextarea = styled__default['default'].textarea`
  ${inputStyle}
  width: 100%;
  height: auto; /* fixes labelStyles fixed height */
`; // ---------------------------------------------------------------------------------------------------------------------
// MultiselectActionable
// ---------------------------------------------------------------------------------------------------------------------

const MultiselectActionable = /*#__PURE__*/React__default['default'].forwardRef((props, ref) => {
  const {
    id,
    label,
    value,
    defaultValue,
    onChange,
    disabled,
    normalizedOptions,
    placeholder
  } = props;
  const popupRef = React.useRef();
  const actionableRef = React.useRef();
  const openRef = React.useRef(false);
  const [popupStyle, setPopupStyle] = React.useState({
    position: 'fixed',
    display: 'none',
    width: '400px'
  });
  const [open, setOpen] = React.useState(false);
  const [_value, setValue] = React.useState(value === undefined ? defaultValue : value); // -------------------------------------------------------------------------------------------------------------------
  // Memos
  // -------------------------------------------------------------------------------------------------------------------

  const openPopup = React__default['default'].useCallback(val => {
    if (!disabled) {
      setOpen(val);
      openRef.current = val;
      if (val) actionableRef.current.focus();
    }
  }, [disabled]); // -------------------------------------------------------------------------------------------------------------------
  // Reducers
  // -------------------------------------------------------------------------------------------------------------------

  const dispatchSelected = React__default['default'].useCallback(action => {
    let v;
    let index;
    let result;

    switch (action.type) {
      case 'reset':
        result = [];
        break;

      default:
        // adds or removes action.value from selected
        v = (!ref ? value : _value) || [];
        index = v.indexOf(action.value);

        if (index === -1) {
          result = [...v, action.value];
        } else {
          result = [...v];
          result.splice(index, 1);
        }

    }

    if (ref) ref.current = {
      value: result
    };
    setValue(result);
    onChange(result);
  }, [_value, value, onChange, ref]);
  const checkPosition = React__default['default'].useCallback(() => {
    // bottom: 157.15625
    // height: 40
    // left: 196.546875
    // right: 506.578125
    // top: 117.15625
    // width: 310.03125
    // x: 196.546875
    // y: 117.15625
    const rect = actionableRef.current.getBoundingClientRect();
    const winH = window.innerHeight;
    const winW = window.innerWidth;
    const pad = window.getComputedStyle(popupRef.current.children[0].children[0], null).getPropertyValue('padding-top');
    const clientH = popupRef.current.children[0].children[0].children[0].offsetHeight + styleValueToPX(pad) * 2 + 2;
    const width = 400;
    let height;
    let top;
    let left = rect.left;
    let dirBottom;

    if (winH - (rect.top + rect.height) > clientH) {
      height = clientH;
      top = rect.top + rect.height;
      dirBottom = true;
    } else if (winH - (rect.top + rect.height) > rect.top) {
      height = winH - (rect.top + rect.height) - 16;
      top = rect.top + rect.height;
      dirBottom = true;
    } else if (rect.top > clientH) {
      height = clientH;
      top = rect.top - height - 16;
      dirBottom = false;
    } else {
      height = rect.top - 16;
      top = 0;
      dirBottom = false;
    }

    if (rect.left + width < winW) {
      left = rect.left;
    } else {
      left = rect.left - (width - rect.width);
    }

    setPopupStyle({
      top,
      left,
      height,
      width,
      position: 'fixed',
      boxSizing: 'content-box',
      padding: dirBottom ? '0 0 16px' : '16px 0 0',
      display: openRef.current ? 'block' : 'none',
      overflowY: 'scroll'
    });
    popupRef.current.style.top = rect.top;
    popupRef.current.style.left = rect.left;

    if (openRef.current) {
      setTimeout(checkPosition, 30);
    }
  }, []); // -------------------------------------------------------------------------------------------------------------------
  // Effects
  // -------------------------------------------------------------------------------------------------------------------

  React__default['default'].useEffect(() => {
    const x = Array.isArray(defaultValue) ? defaultValue : [];
    setValue(x);
    if (ref) ref.current = {
      value: x
    };
  }, [defaultValue, ref]);
  React__default['default'].useEffect(() => {
    if (openRef.current) checkPosition();
  }, [open, checkPosition]); // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, label && /*#__PURE__*/React__default['default'].createElement(Label, {
    as: "label",
    htmlFor: id,
    style: {
      pointerEvents: 'none'
    },
    onClick: () => {
      openPopup(!open);
    },
    onMouseDown: e => e.preventDefault()
  }, label), /*#__PURE__*/React__default['default'].createElement(Actionable, {
    ref: actionableRef,
    tabIndex: 0,
    className: `nui-actionable${disabled ? ' disabled' : ''}`,
    onBlur: evt => {
      const contained = popupRef.current.contains(evt.relatedTarget);
      if (!contained) openPopup(false);
    },
    onClick: () => openPopup(!open)
  }, ((!ref ? value : _value) || []).map(x => getLabel(x, normalizedOptions)).join(', ') || /*#__PURE__*/React__default['default'].createElement(Muted, null, placeholder)), /*#__PURE__*/React__default['default'].createElement(Popup, {
    ref: popupRef,
    style: popupStyle
  }, /*#__PURE__*/React__default['default'].createElement(Card, {
    mini: true,
    forceShadow: true,
    low: true,
    height: "full"
  }, /*#__PURE__*/React__default['default'].createElement("div", null, normalizedOptions.length ? normalizedOptions.map(x => /*#__PURE__*/React__default['default'].createElement(Button, {
    fill: true,
    small: true,
    key: x.value,
    variant: "plain",
    selected: ((!ref ? value : _value) || []).includes(x.value),
    extraStyles: {
      base: {
        textAlign: 'left'
      }
    },
    onClick: () => {
      dispatchSelected({
        value: x.value
      });
      actionableRef.current.focus();
    }
  }, x.label)) : /*#__PURE__*/React__default['default'].createElement(Label, {
    small: true
  }, /*#__PURE__*/React__default['default'].createElement(Muted, null, "Empty"))))));
});
MultiselectActionable.propTypes = {
  id: propTypes.string,
  label: propTypes.node,
  value: PROP_VALUE,
  defaultValue: PROP_VALUE,
  disabled: propTypes.bool,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  normalizedOptions: PROP_NORMALIZED_OPTIONS
};
MultiselectActionable.defaultProps = {
  onChange: () => {}
}; // ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------

const StyledControl = styled__default['default'].div`
  border-radius: ${ds.measures.inputRadius};
  display: flex;
  /* TODO: move these margin props to the style attribute to optimize the classes generated by styled-components */
  ${props => props.marginLeft && (props.marginLeft === true ? `margin-left: ${ds.measures.spacer(props) / 4}rem;` : `margin-left: ${props.marginLeft}rem;`)}
  ${props => props.marginRight && (props.marginRight === true ? `margin-right: ${ds.measures.spacer(props) / 4}rem;` : `margin-right: ${props.marginRight}rem;`)}
  ${props => props.marginTop && (props.marginTop === true ? `margin-top: ${ds.measures.spacer(props)}rem;` : `margin-top: ${props.marginTop}rem;`)}
  ${props => props.marginBottom && (props.marginBottom === true ? `margin-bottom: ${ds.measures.spacer(props)}rem;` : `margin-bottom: ${props.marginBottom}rem;`)}
  background-color: ${props => props.withLabel ? ds.colors.controlBg : 'transparent'};
  position: relative;
  min-width: 10em;
  max-width: 32em;

  ${props => (props.type === 'checkbox' || props.type === 'bool') && styled.css(["align-items:center;"])}

  & > ${Label} {
    ${props => props.small && styled.css(["", " font-size:", ";"], labelStylesSmall, ds.measures.inputFontSmall)}
    padding-left: ${ds.measures.inputSpacerH}rem;
    padding-right: ${ds.measures.inputSpacerH}rem;
    font-weight: ${ds.weights.controlLabel};
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    color: ${ds.colors.SLATE};

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${props => props.labelInside && props.type !== 'checkbox' && props.type !== 'bool' && styled.css(["position:absolute;top:0;left:0;font-size:.8em;white-space:nowrap;user-select:none;padding:0 ", "rem 0 ", "rem;width:100%;box-sizing:border-box;", " ", ""], ds.measures.spacer, ds.measures.inputSpacerH, props => !props.comfort && styled.css(["line-height:2em;"]), props => props.comfort && styled.css(["line-height:3em;"]))}

    ${props => props.comfort && !props.labelInside && styled.css(["line-height:calc(", "rem * 3);height:calc(", "rem * 3);"], ds.measures.spacer, ds.measures.spacer)}
  }

  & > ${Actionable},
  & > ${StyledInput},
  & > ${StyledTextarea},
  & > ${StyledSelect} {
    font-family: ${ds.fonts.controls};
    ${props => props.small && styled.css(["", " font-size:", ";"], labelStylesSmall, ds.measures.inputFontSmall)}
    flex-grow: 1;
    margin: 0;
    max-width: 100%;
    ${props => props.comfort && props.labelInside && styled.css(["height:calc(", "rem * 3);padding-top:1rem;line-height:calc((", "rem * 3) - 1rem);"], ds.measures.spacer, ds.measures.spacer)}
    ${props => props.comfort && !props.labelInside && styled.css(["line-height:calc(", "rem * 3);height:calc(", "rem * 3);"], ds.measures.spacer, ds.measures.spacer)}
    ${props => !props.comfort && props.labelInside && styled.css(["padding-top:1rem;line-height:calc((", "rem * 2) - 1rem);"], ds.measures.spacer)}
  }

  &.invalid > ${Actionable},
  &.invalid > ${StyledInput},
  &.invalid > ${StyledTextarea},
  &.invalid > ${StyledSelect} {
    border-color: ${ds.colors.inputBorderInvalid};
    &:hover,
    &:focus,
    &:active,
    &.active {
      border-color: ${ds.colors.inputBorderActive};
    }
  }

  &.disabled {
    ${Label} {
      color: ${ds.colors.inputFgDisabled};
    }
  }
`; // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const Control = /*#__PURE__*/React__default['default'].forwardRef((props, ref) => {
  const {
    type,
    label,
    value,
    placeholder,
    defaultValue,
    onChange,
    invalid,
    disabled,
    labelInside,
    comfort,
    small,
    options,
    min,
    max,
    rows,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft
  } = props;
  const uid = React.useRef(Math.random().toString(36).substr(2, 9));
  const normalizedOptions = React__default['default'].useMemo(() => normalizeOptions(options), [options]);

  const _onChangeCheckbox = React__default['default'].useCallback(val => {
    if (ref && ref.current) {
      ref.current.value = val;
    }

    onChange(val);
  }, [ref, onChange]);

  React__default['default'].useEffect(() => {
    if (ref && !ref.current) {
      ref.current = {};

      if (type === 'checkbox' || type === 'bool') {
        ref.current.value = defaultValue;
        document.getElementById(uid.current).checked = defaultValue;
      }
    }
  }, [ref, type, defaultValue]);
  return /*#__PURE__*/React__default['default'].createElement(StyledControl, {
    type: type,
    withLabel: label,
    className: [invalid && 'invalid', disabled && 'disabled'].join(' '),
    labelInside: labelInside,
    comfort: comfort,
    small: small,
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginRight: marginRight,
    marginLeft: marginLeft
  }, type === 'select' ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, label && /*#__PURE__*/React__default['default'].createElement(Label, {
    as: "label",
    htmlFor: uid.current,
    style: {
      pointerEvents: labelInside && 'none'
    },
    noShrink: true
  }, label), /*#__PURE__*/React__default['default'].createElement(StyledSelect, {
    id: uid.current,
    value: value,
    defaultValue: ref === undefined && value !== undefined ? value : defaultValue,
    disabled: disabled,
    onChange: evt => onChange(evt.target.value),
    ref: ref
  }, normalizedOptions.map(x => /*#__PURE__*/React__default['default'].createElement("option", {
    key: x.value,
    value: x.value
  }, x.label)))) : type === 'multiselect' ? /*#__PURE__*/React__default['default'].createElement(MultiselectActionable, {
    id: uid.current,
    label: label,
    value: value,
    defaultValue: ref === undefined && value !== undefined ? value : defaultValue,
    disabled: disabled,
    onChange: onChange,
    placeholder: placeholder,
    normalizedOptions: normalizedOptions,
    ref: ref
  }) : type === 'checkbox' || type === 'bool' ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, label && /*#__PURE__*/React__default['default'].createElement(Label, {
    as: "label",
    htmlFor: uid.current,
    noShrink: true
  }, label), /*#__PURE__*/React__default['default'].createElement("input", {
    type: "checkbox",
    id: uid.current,
    disabled: disabled,
    placeholder: placeholder,
    checked: value !== undefined ? value : undefined,
    onChange: evt => _onChangeCheckbox(evt.target.checked)
  })) : type === 'textarea' ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, label && /*#__PURE__*/React__default['default'].createElement(Label, {
    noShrink: true,
    as: "label",
    htmlFor: uid.current,
    style: {
      pointerEvents: labelInside && 'none'
    }
  }, label), /*#__PURE__*/React__default['default'].createElement(StyledTextarea, {
    id: uid.current,
    placeholder: placeholder,
    value: value,
    defaultValue: ref === undefined && value !== undefined ? value : defaultValue,
    disabled: disabled,
    onChange: evt => onChange(evt.target.value),
    ref: ref,
    rows: rows
  })) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, label && /*#__PURE__*/React__default['default'].createElement(Label, {
    noShrink: true,
    as: "label",
    htmlFor: uid.current,
    style: {
      pointerEvents: labelInside && 'none'
    }
  }, label), /*#__PURE__*/React__default['default'].createElement(StyledInput, _extends({
    id: uid.current,
    type: type || 'text',
    value: value,
    placeholder: placeholder,
    defaultValue: ref === undefined && value !== undefined ? value : defaultValue,
    disabled: disabled,
    onChange: evt => onChange(evt.target.value),
    ref: ref
  }, {
    min,
    max
  }))));
}); // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------

Control.propTypes = {
  type: propTypes.string,
  placeholder: propTypes.string,
  label: propTypes.node,
  value: PROP_VALUE,
  defaultValue: PROP_VALUE,
  onChange: propTypes.func,
  invalid: propTypes.bool,
  disabled: propTypes.bool,
  labelInside: propTypes.bool,
  comfort: propTypes.bool,
  small: propTypes.bool,
  options: PROP_OPTIONS,
  min: propTypes.number,
  max: propTypes.number,
  rows: propTypes.number,
  marginTop: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  marginBottom: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  marginRight: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  marginLeft: propTypes.oneOfType([propTypes.bool, propTypes.number])
};
Control.defaultProps = {
  onChange: () => {},
  options: [],
  marginBottom: true,
  marginRight: true
};

function e$1(t,r,i,o){void 0===i&&(i=global),void 0===o&&(o={});var c=React.useRef(),u=o.capture,a=o.passive,v=o.once;React.useEffect(function(){c.current=r;},[r]),React.useEffect(function(){if(i&&i.addEventListener){var e=function(e){return c.current(e)},n={capture:u,passive:a,once:v};return i.addEventListener(t,e,n),function(){i.removeEventListener(t,e,n);}}},[t,i,u,a,v]);}

var i=function(){},u={classList:{add:i,remove:i}},d$1=function(e,r,n){void 0===n&&(n=global);var a=e?o__default['default'](e,r):React.useState,i=n.matchMedia?n.matchMedia("(prefers-color-scheme: dark)"):{},d={addEventListener:function(e,t){return i.addListener&&i.addListener(t)},removeEventListener:function(e,t){return i.removeListener&&i.removeListener(t)}},s="(prefers-color-scheme: dark)"===i.media,c=n.document&&n.document.body||u;return {usePersistedDarkModeState:a,getDefaultOnChange:function(e,t,r){return void 0===e&&(e=c),void 0===t&&(t="dark-mode"),void 0===r&&(r="light-mode"),function(n){e.classList.add(n?t:r),e.classList.remove(n?r:t);}},mediaQueryEventTarget:d,getInitialValue:function(e){return s?i.matches:e}}};function useDarkMode(t,o){void 0===t&&(t=!1),void 0===o&&(o={});var i=o.element,u=o.classNameDark,s=o.classNameLight,c=o.onChange,m=o.storageKey;void 0===m&&(m="darkMode");var l=o.storageProvider,f=o.global,v=React.useMemo(function(){return d$1(m,l,f)},[m,l,f]),g=v.getDefaultOnChange,h=v.mediaQueryEventTarget,L=(0, v.usePersistedDarkModeState)((0, v.getInitialValue)(t)),k=L[0],p=L[1],b=React.useMemo(function(){return c||g(i,u,s)},[c,i,u,s,g]);return React.useEffect(function(){b(k);},[b,k]),e$1("change",function(e){return p(e.matches)},h),{value:k,enable:React.useCallback(function(){return p(!0)},[p]),disable:React.useCallback(function(){return p(!1)},[p]),toggle:React.useCallback(function(){return p(function(e){return !e})},[p])}}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n";
styleInject(css_248z);

const NitramUIContext = /*#__PURE__*/React__default['default'].createContext({
  mode: modes.light,
  setMode: () => {},
  theme: themes.smooth,
  setTheme: () => {}
});

const GlobalStyle = styled.createGlobalStyle`
html, body {
  height: 100%;
}

html {
  font-size: ${ds.measures.unit};
}

body {
  color: ${ds.colors.fg};
  background-color: ${ds.colors.bg};
  font-family: ${ds.fonts.body};
  font-size: ${ds.measures.font};
  font-weight: ${ds.weights.normal};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  ${headingStyles}
  &.pre-heading {
    ${preHeadingStyles}
    margin: 1em 0;
  }
}

p {
  line-height: 1.5em;
}

strong {
  font-weight: ${ds.weights.strong};
}

code,
pre {
  font-family: ${ds.fonts.controls};
}

pre {
  overflow-x: auto;
  overflow-y: auto;
  padding: 0.5em;
  background-color: ${ds.colors.tableStripe};
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${ds.colors.bg};
    border-radius: ${ds.measures.radius};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${ds.colors.fgMuted};
    border-radius: ${ds.measures.radius};
  }
}

p {
  img {
    max-width: 100%;
  }

  & > button:first-child,
  & > .button:first-child,
  & > input:first-child,
  & > select:first-child {
    margin-left: 0;
  }

  & > button:last-child,
  & > .button:last-child,
  & > input:last-child,
  & > select:last-child {
    margin-right: 0;
  }
}

a {
  text-decoration: none;
  color: ${ds.colors.link};

  &:visited {
    color: ${ds.colors.linkVisited};
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}

label {
  color: ${ds.colors.labelFg};
}

.mt {
  margin-top: 1em !important;
}
.mts {
  margin-top: .5em !important;
}

.mr {
  margin-right: 1em !important;
}
.mrs {
  margin-right: .5em !important;
}

.mb {
  margin-bottom: 1em !important;
}
.mbs {
  margin-bottom: .5em !important;
}

.ml {
  margin-left: 1em !important;
}
.mls {
  margin-left: .5em !important;
}

.fw {
  display: inline-block;
  width: 1em;
}
`;
const ResetStyle = styled.createGlobalStyle`
  ${css_248z}
`; // ---------------------------------------------------------------------------------------------------------------------
// Utils
// ---------------------------------------------------------------------------------------------------------------------

const isCustomTheme = theme => themes[theme];

const getDefaultTheme = ({
  availableThemes,
  returnOnlyPredef
}) => availableThemes && availableThemes.length ? isCustomTheme(availableThemes[0]) && returnOnlyPredef ? themes.smooth : availableThemes[0] : themes.smooth;

const useThemeState = o__default['default']('theme'); // ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------

const NitramUI = ({
  customThemes,
  availableThemes,
  children
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // States
  // -------------------------------------------------------------------------------------------------------------------
  const [mode, _setMode] = React.useState(modes.light);
  const darkMode = useDarkMode(false, {
    onChange: x => {
      _setMode(x ? modes.dark : modes.light);
    }
  });
  const [theme, setTheme] = useThemeState(getDefaultTheme({
    availableThemes
  }));
  const [themeAux, setThemeAux] = React.useState(getDefaultTheme({
    availableThemes,
    returnOnlyPredef: true
  }));
  const [customTheme, setCustomTheme] = React.useState(getDefaultTheme({
    availableThemes
  })); // -------------------------------------------------------------------------------------------------------------------
  // Memos
  // -------------------------------------------------------------------------------------------------------------------

  const setMode = React__default['default'].useCallback(m => {
    if (m === modes.light) {
      darkMode.disable();
    } else {
      darkMode.enable();
    }
  }, [darkMode]);
  const themeProviderObj = React.useMemo(() => ({
    theme: themeAux,
    mode,
    customThemes,
    customTheme
  }), [themeAux, mode, customThemes, customTheme]);
  const availableThemesObjects = React.useMemo(() => {
    let aTs = {};

    if (!availableThemes) {
      aTs = { ...themes,
        ...Object.keys(customThemes || {}).reduce((acc, x) => ({ ...acc,
          x
        }), {})
      };
    } else {
      availableThemes.forEach(x => {
        if (customThemes && customThemes[x] || themes[x]) {
          aTs[x] = x;
        }
      });
    }

    return aTs;
  }, [customThemes, availableThemes]); // -------------------------------------------------------------------------------------------------------------------
  // Effects
  // -------------------------------------------------------------------------------------------------------------------

  React.useEffect(() => {
    if (isCustomTheme(theme)) {
      setThemeAux(theme);
    } else {
      setThemeAux('custom');
      setCustomTheme(theme);
    }
  }, [theme]); // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------

  return /*#__PURE__*/React__default['default'].createElement(NitramUIContext.Provider, {
    value: {
      mode,
      setMode,
      theme,
      setTheme,
      themes: availableThemesObjects,
      ds,
      getDSVal: x => typeof x === 'function' && x({
        theme: themeProviderObj
      })
    }
  }, /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
    theme: themeProviderObj
  }, /*#__PURE__*/React__default['default'].createElement(ResetStyle, null), /*#__PURE__*/React__default['default'].createElement(GlobalStyle, null), children));
}; // ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------


NitramUI.propTypes = {
  children: propTypes.node,
  customThemes: propTypes.object,
  availableThemes: propTypes.arrayOf(propTypes.string)
};
NitramUI.defaultProps = {};

exports.Button = Button;
exports.Card = Card;
exports.Container = Container;
exports.Control = Control;
exports.Divider = Divider;
exports.Flex = Flex;
exports.Label = Label;
exports.Layout = Layout;
exports.Loading = Loading;
exports.Muted = Muted;
exports.NitramUI = NitramUI;
exports.NitramUIContext = NitramUIContext;
exports.Pane = Pane;
exports.Table = Table;
exports.ds = ds;
exports.modes = modes;
exports.themes = themes;
//# sourceMappingURL=nitramui.js.map

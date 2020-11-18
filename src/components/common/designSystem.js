import theme from 'styled-theming'

// ---------------------------------------------------------------------------------------------------------------------
// COLORS
// ---------------------------------------------------------------------------------------------------------------------

const WHITE = '#fff'
const GALLERY = '#f0f0f0'
const MERCURY = '#E5E5E5'
const EMPEROR = '#535353'
const DUNE = '#252321'
const COD_GRAY = '#1C1917'
const BLACK = '#000'

const BLACK_3 = 'rgba(0, 0, 0, 0.03)'
const BLACK_10 = 'rgba(0, 0, 0, 0.1)'
const BLACK_30 = 'rgba(0, 0, 0, 0.3)'

const YELLOW = '#ff0'
const BLUE = '#00f'
const LIMA = '#75d41d'
const RED = '#f22'
const BLUEVIOLET = 'blueviolet' // #8A2BE2

// ---------------------------------------------------------------------------------------------------------------------
// FONTS
// ---------------------------------------------------------------------------------------------------------------------
const FONT_INTER = '\'Inter\', \'Helvetica Neue\', Helvetica, Arial, sans-serif'
const FONT_MONO = '\'Inconsolata\', monospace'

// ---------------------------------------------------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------------------------------------------------

export const themes = {
  smooth: 'smooth',
  hiContrast: 'hiContrast'
}

export const modes = {
  light: 'light',
  dark: 'dark'
}

const tryToGetArr = (obj, path, def) => {
  if (!path.length) {
    return obj
  }
  const newObj = obj[path[0]]
  if (newObj === undefined) return def
  return tryToGetArr(newObj, path.slice(1), def)
}

const buildCustomProp = (group, prop, lightDefault, darkDefault) => darkDefault !== undefined
  ? theme('mode', {
    [modes.light]: ({ theme }) =>
      tryToGetArr(theme.customThemes, [theme.customTheme, group, prop, 'light'], lightDefault),
    [modes.dark]: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, group, prop, 'dark'], darkDefault)
  })
  : ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, group, prop], lightDefault)

export default {
  colors: {
    // -----------------------------------------------------------------------------------------------------------------
    // FG & BG
    // -----------------------------------------------------------------------------------------------------------------
    light: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: GALLERY,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: WHITE,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'light', GALLERY, GALLERY)
    }),
    dark: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: EMPEROR
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: BLACK
        }),
      custom: buildCustomProp('colors', 'dark', EMPEROR, EMPEROR)
    }),
    fg: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'fg', EMPEROR, GALLERY)
    }),
    fgMuted: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_30,
          [modes.dark]: EMPEROR
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: EMPEROR
        }),
      custom: buildCustomProp('colors', 'fgMuted', BLACK_30, EMPEROR)
    }),
    bg: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: GALLERY,
          [modes.dark]: COD_GRAY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: WHITE,
          [modes.dark]: BLACK
        }),
      custom: buildCustomProp('colors', 'bg', GALLERY, COD_GRAY)
    }),

    // -----------------------------------------------------------------------------------------------------------------
    // Border
    // -----------------------------------------------------------------------------------------------------------------
    border: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: MERCURY,
          [modes.dark]: EMPEROR
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'border', MERCURY, EMPEROR)
    }),
    borderLight: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_3,
          [modes.dark]: DUNE
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK_3,
          [modes.dark]: DUNE
        }),
      custom: buildCustomProp('colors', 'borderLight', BLACK_3, DUNE)
    }),

    // -----------------------------------------------------------------------------------------------------------------
    // Button
    // -----------------------------------------------------------------------------------------------------------------
    buttonFg: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'buttonFg', EMPEROR, GALLERY)
    }),
    buttonFgPlain: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'buttonFgPlain', EMPEROR, GALLERY)
    }),
    buttonFgPlainSelected: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'buttonFgPlainSelected', EMPEROR, GALLERY)
    }),
    buttonFgDisabled: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_30,
          [modes.dark]: EMPEROR
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: EMPEROR
        }),
      custom: buildCustomProp('colors', 'buttonFgDisabled', BLACK_30, EMPEROR)
    }),
    buttonFgSelected: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'buttonFgSelected', EMPEROR, GALLERY)
    }),
    buttonBg: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      custom: buildCustomProp('colors', 'buttonBg', 'transparent', 'transparent')
    }),
    buttonBgPlain: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      custom: buildCustomProp('colors', 'buttonBgPlain', 'transparent', 'transparent')
    }),
    buttonBgDisabled: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      custom: buildCustomProp('colors', 'buttonBgDisabled', 'transparent', 'transparent')
    }),
    buttonBorder: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: MERCURY,
          [modes.dark]: EMPEROR
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'buttonBorder', MERCURY, EMPEROR)
    }),
    buttonBorderPlain: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      custom: buildCustomProp('colors', 'buttonBorderPlain', 'transparent', 'transparent')
    }),
    buttonBorderPlainHoverSelected: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'buttonBorderPlainHoverSelected', EMPEROR, GALLERY)
    }),
    buttonBorderDisabled: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_3,
          [modes.dark]: DUNE
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK_3,
          [modes.dark]: DUNE
        }),
      custom: buildCustomProp('colors', 'buttonBorderDisabled', BLACK_3, DUNE)
    }),
    buttonBorderSelected: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: MERCURY,
          [modes.dark]: EMPEROR
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'buttonBorderSelected', MERCURY, EMPEROR)
    }),

    // -----------------------------------------------------------------------------------------------------------------
    // Controls
    // -----------------------------------------------------------------------------------------------------------------
    controlBg: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_3,
          [modes.dark]: BLACK_30
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: GALLERY,
          [modes.dark]: COD_GRAY
        }),
      custom: buildCustomProp('colors', 'controlBg', BLACK_3, BLACK_30)
    }),
    inputBorder: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: MERCURY,
          [modes.dark]: EMPEROR
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'inputBorder', MERCURY, EMPEROR)
    }),
    inputBorderActive: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'inputBorderActive', EMPEROR, GALLERY)
    }),
    inputBorderDisabled: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_3,
          [modes.dark]: DUNE
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK_3,
          [modes.dark]: DUNE
        }),
      custom: buildCustomProp('colors', 'inputBorderDisabled', BLACK_3, DUNE)
    }),
    inputBorderInvalid: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: RED,
          [modes.dark]: RED
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: RED,
          [modes.dark]: RED
        }),
      custom: buildCustomProp('colors', 'inputBorderInvalid', RED, RED)
    }),
    inputBg: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      custom: buildCustomProp('colors', 'inputBg', 'transparent', 'transparent')
    }),
    inputBgFocus: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      custom: buildCustomProp('colors', 'inputBgFocus', 'transparent', 'transparent')
    }),
    inputBgDisabled: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      custom: buildCustomProp('colors', 'inputBgDisabled', 'transparent', 'transparent')
    }),
    inputBgHover: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'transparent',
          [modes.dark]: 'transparent'
        }),
      custom: buildCustomProp('colors', 'inputBgHover', 'transparent', 'transparent')
    }),
    inputFg: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'inputFg', EMPEROR, GALLERY)
    }),
    inputFgDisabled: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_30,
          [modes.dark]: EMPEROR
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: EMPEROR
        }),
      custom: buildCustomProp('colors', 'inputFgDisabled', BLACK_30, EMPEROR)
    }),
    labelFg: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'labelFg', EMPEROR, GALLERY)
    }),

    // -----------------------------------------------------------------------------------------------------------------
    // Card
    // -----------------------------------------------------------------------------------------------------------------
    card: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: WHITE,
          [modes.dark]: DUNE
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: WHITE,
          [modes.dark]: BLACK
        }),
      custom: buildCustomProp('colors', 'card', WHITE, DUNE)
    }),
    cardSelected: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: WHITE,
          [modes.dark]: DUNE
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: WHITE,
          [modes.dark]: BLACK
        }),
      custom: buildCustomProp('colors', 'cardSelected', WHITE, DUNE)
    }),
    cardBorder: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: GALLERY,
          [modes.dark]: EMPEROR
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: COD_GRAY,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'cardBorder', GALLERY, EMPEROR)
    }),
    cardBorderHover: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'cardBorderHover', EMPEROR, GALLERY)
    }),
    cardBorderSelected: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'cardBorderSelected', EMPEROR, GALLERY)
    }),
    cardHeaderBorder: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: GALLERY,
          [modes.dark]: EMPEROR
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: COD_GRAY,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'cardHeaderBorder', GALLERY, EMPEROR)
    }),

    // -----------------------------------------------------------------------------------------------------------------
    // Shadow
    // -----------------------------------------------------------------------------------------------------------------
    shadow: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_10,
          [modes.dark]: BLACK_10
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'none',
          [modes.dark]: 'none'
        }),
      custom: buildCustomProp('colors', 'shadow', BLACK_10, BLACK_10)
    }),
    buttonShadow: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_10,
          [modes.dark]: BLACK_10
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'none',
          [modes.dark]: 'none'
        }),
      custom: buildCustomProp('colors', 'buttonShadow', BLACK_10, BLACK_10)
    }),

    // -----------------------------------------------------------------------------------------------------------------
    // Link
    // -----------------------------------------------------------------------------------------------------------------
    link: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLUE,
          [modes.dark]: YELLOW
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLUE,
          [modes.dark]: YELLOW
        }),
      custom: buildCustomProp('colors', 'link', BLUE, YELLOW)
    }),
    linkVisited: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLUEVIOLET,
          [modes.dark]: LIMA
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLUEVIOLET,
          [modes.dark]: LIMA
        }),
      custom: buildCustomProp('colors', 'linkVisited', BLUEVIOLET, LIMA)
    }),

    // -----------------------------------------------------------------------------------------------------------------
    // Table
    // -----------------------------------------------------------------------------------------------------------------
    tableStripe: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_3,
          [modes.dark]: BLACK_30
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: GALLERY,
          [modes.dark]: COD_GRAY
        }),
      custom: buildCustomProp('colors', 'tableStripe', BLACK_3, BLACK_30)
    }),
    tableHoverBg: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: MERCURY,
          [modes.dark]: EMPEROR
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        }),
      custom: buildCustomProp('colors', 'tableHoverBg', MERCURY, EMPEROR)
    }),
    tableHoverFg: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
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
    body: theme('theme', {
      [themes.smooth]: FONT_INTER,
      [themes.hiContrast]: FONT_INTER,
      custom: buildCustomProp('fonts', 'body', FONT_INTER)
    }),
    heading: theme('theme', {
      [themes.smooth]: FONT_INTER,
      [themes.hiContrast]: FONT_INTER,
      custom: buildCustomProp('fonts', 'heading', FONT_INTER)
    }),
    controls: theme('theme', {
      [themes.smooth]: FONT_MONO,
      [themes.hiContrast]: FONT_MONO,
      custom: buildCustomProp('fonts', 'controls', FONT_MONO)
    })
  },

  // -------------------------------------------------------------------------------------------------------------------
  // Weights
  // -------------------------------------------------------------------------------------------------------------------
  weights: {
    normal: theme('theme', {
      [themes.smooth]: '400',
      [themes.hiContrast]: '400',
      custom: buildCustomProp('weights', 'normal', '400')
    }),
    strong: theme('theme', {
      [themes.smooth]: '600',
      [themes.hiContrast]: '600',
      custom: buildCustomProp('weights', 'strong', '600')
    }),
    heading: theme('theme', {
      [themes.smooth]: '200',
      [themes.hiContrast]: '200',
      custom: buildCustomProp('weights', 'heading', '200')
    }),
    preheading: theme('theme', {
      [themes.smooth]: '600',
      [themes.hiContrast]: '600',
      custom: buildCustomProp('weights', 'preheading', '600')
    }),
    controlLabel: theme('theme', {
      [themes.smooth]: '400',
      [themes.hiContrast]: '400',
      custom: buildCustomProp('weights', 'controlLabel', '400')
    })
  },

  // -------------------------------------------------------------------------------------------------------------------
  // Measures
  // -------------------------------------------------------------------------------------------------------------------
  measures: {
    radius: theme('theme', {
      [themes.smooth]: '0.5rem',
      [themes.hiContrast]: '0.5rem',
      custom: buildCustomProp('measures', 'radius', '0.5rem')
    }),
    inputRadius: theme('theme', {
      [themes.smooth]: '0.25rem',
      [themes.hiContrast]: '0.25rem',
      custom: buildCustomProp('measures', 'inputRadius', '0.25rem')
    }),
    buttonRadius: theme('theme', {
      [themes.smooth]: '0.25rem',
      [themes.hiContrast]: '0.25rem',
      custom: buildCustomProp('measures', 'buttonRadius', '0.25rem')
    }),
    buttonRadiusSmall: theme('theme', {
      [themes.smooth]: '0.25rem',
      [themes.hiContrast]: '0.25rem',
      custom: buildCustomProp('measures', 'buttonRadiusSmall', '0.25rem')
    }),
    font: theme('theme', {
      [themes.smooth]: '0.875rem',
      [themes.hiContrast]: '0.875rem',
      custom: buildCustomProp('measures', 'font', '0.875rem')
    }),
    fontSmall: theme('theme', {
      [themes.smooth]: '0.66rem',
      [themes.hiContrast]: '0.66rem',
      custom: buildCustomProp('measures', 'fontSmall', '0.66rem')
    }),
    inputFont: theme('theme', {
      [themes.smooth]: '0.875rem',
      [themes.hiContrast]: '0.875rem',
      custom: buildCustomProp('measures', 'inputFont', '0.875rem')
    }),
    inputFontSmall: theme('theme', {
      [themes.smooth]: '0.66rem',
      [themes.hiContrast]: '0.66rem',
      custom: buildCustomProp('measures', 'inputFontSmall', '0.66rem')
    }),
    unit: theme('theme', {
      [themes.smooth]: '16px',
      [themes.hiContrast]: '16px',
      custom: buildCustomProp('measures', 'unit', '16px')
    }),
    spacer: theme('theme', {
      [themes.smooth]: 1,
      [themes.hiContrast]: 1,
      custom: buildCustomProp('measures', 'spacer', 1)
    }),
    buttonSpacerH: theme('theme', {
      [themes.smooth]: 1,
      [themes.hiContrast]: 1,
      custom: buildCustomProp('measures', 'buttonSpacerH', 1)
    }),
    buttonSpacerHSmall: theme('theme', {
      [themes.smooth]: 0.5,
      [themes.hiContrast]: 0.5,
      custom: buildCustomProp('measures', 'buttonSpacerHSmall', 0.5)
    }),
    inputSpacerH: theme('theme', {
      [themes.smooth]: 0.5,
      [themes.hiContrast]: 0.5,
      custom: buildCustomProp('measures', 'inputSpacerH', 0.5)
    })
  }
}

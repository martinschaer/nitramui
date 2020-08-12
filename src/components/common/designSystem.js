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

const buildCustomProp = (group, prop, lightDefault, darkDefault) => theme('mode', {
  [modes.light]: ({ theme }) =>
    tryToGetArr(theme.customThemes, [theme.customTheme, group, prop, 'light'], lightDefault),
  [modes.dark]: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, group, prop, 'dark'], darkDefault)
})

export default {
  colors: {
    // -----------------------------------------------------------------------------------------------------------------
    // FG & BG
    // -----------------------------------------------------------------------------------------------------------------
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
    buttonFgHover: theme('theme', {
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
      custom: buildCustomProp('colors', 'buttonFgHover', EMPEROR, GALLERY)
    }),
    buttonFgHoverPlain: theme('theme', {
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
      custom: buildCustomProp('colors', 'buttonFgHoverPlain', EMPEROR, GALLERY)
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
    buttonBgSelected: theme('theme', {
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
      custom: buildCustomProp('colors', 'buttonBgSelected', BLACK_3, BLACK_30)
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
    buttonBgHover: theme('theme', {
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
      custom: buildCustomProp('colors', 'buttonBgHover', 'transparent', 'transparent')
    }),
    buttonBgHoverPlain: theme('theme', {
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
      custom: buildCustomProp('colors', 'buttonBgHoverPlain', 'transparent', 'transparent')
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
    buttonBorderHover: theme('theme', {
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
      custom: buildCustomProp('colors', 'buttonBorderHover', EMPEROR, GALLERY)
    }),
    buttonBorderHoverPlain: theme('theme', {
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
      custom: buildCustomProp('colors', 'buttonBorderHoverPlain', EMPEROR, GALLERY)
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
      [themes.smooth]: '\'Inter\', \'Helvetica Neue\', Helvetica, Arial, sans-serif',
      [themes.hiContrast]: '\'Inter\', \'Helvetica Neue\', Helvetica, Arial, sans-serif',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'fonts', 'body'], 'Arial')
    }),
    heading: theme('theme', {
      [themes.smooth]: '\'Inter\', \'Helvetica Neue\', Helvetica, Arial, sans-serif',
      [themes.hiContrast]: '\'Inter\', \'Helvetica Neue\', Helvetica, Arial, sans-serif',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'fonts', 'heading'], 'Arial')
    })
  },

  // -------------------------------------------------------------------------------------------------------------------
  // Weights
  // -------------------------------------------------------------------------------------------------------------------
  weights: {
    normal: theme('theme', {
      [themes.smooth]: '400',
      [themes.hiContrast]: '400',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'weights', 'normal'], '400')
    }),
    strong: theme('theme', {
      [themes.smooth]: '600',
      [themes.hiContrast]: '600',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'weights', 'strong'], '600')
    }),
    heading: theme('theme', {
      [themes.smooth]: '200',
      [themes.hiContrast]: '200',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'weights', 'heading'], '600')
    }),
    preheading: theme('theme', {
      [themes.smooth]: '600',
      [themes.hiContrast]: '600',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'weights', 'preheading'], '600')
    }),
    controlLabel: theme('theme', {
      [themes.smooth]: '400',
      [themes.hiContrast]: '400',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'weights', 'controlLabel'], '400')
    })
  },

  // -------------------------------------------------------------------------------------------------------------------
  // Measures
  // -------------------------------------------------------------------------------------------------------------------
  measures: {
    radius: theme('theme', {
      [themes.smooth]: '0.5rem',
      [themes.hiContrast]: '0.5rem',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'measures', 'radius'], '0.5rem')
    }),
    inputRadius: theme('theme', {
      [themes.smooth]: '0.25rem',
      [themes.hiContrast]: '0.25rem',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'measures', 'inputRadius'], '0.5rem')
    }),
    buttonRadius: theme('theme', {
      [themes.smooth]: '0.25rem',
      [themes.hiContrast]: '0.25rem',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'measures', 'buttonRadius'], '0.25rem')
    }),
    font: theme('theme', {
      [themes.smooth]: '0.875rem',
      [themes.hiContrast]: '0.875rem',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'measures', 'font'], '1rem')
    }),
    inputFont: theme('theme', {
      [themes.smooth]: '0.875rem',
      [themes.hiContrast]: '0.875rem',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'measures', 'inputFont'], '1rem')
    }),
    unit: theme('theme', {
      [themes.smooth]: '16px',
      [themes.hiContrast]: '16px',
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'measures', 'unit'], '16px')
    }),
    spacer: theme('theme', {
      [themes.smooth]: 1,
      [themes.hiContrast]: 1,
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'measures', 'spacer'], 1)
    }),
    buttonSpacerH: theme('theme', {
      [themes.smooth]: 1,
      [themes.hiContrast]: 1,
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'measures', 'buttonSpacerH'], 1)
    }),
    inputSpacerH: theme('theme', {
      [themes.smooth]: 0.5,
      [themes.hiContrast]: 0.5,
      custom: ({ theme }) => tryToGetArr(theme.customThemes, [theme.customTheme, 'measures', 'inputSpacerH'], 0.5)
    })
  }
}

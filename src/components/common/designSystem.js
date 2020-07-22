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

const tryToGet = (themes, theme, prop, mode, def) => {
  try {
    return themes[theme][prop][mode]
  } catch (err) {
    return def
  }
}

const buildCustomProp = (prop, lightDefault, darkDefault) => theme('mode', {
  [modes.light]: ({ theme }) => tryToGet(theme.customThemes, theme.customTheme, prop, 'light', lightDefault),
  [modes.dark]: ({ theme }) => tryToGet(theme.customThemes, theme.customTheme, prop, 'dark', darkDefault)
})

const designSystem = {
  colors: {
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
      custom: buildCustomProp('fg', EMPEROR, GALLERY)
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
      custom: buildCustomProp('fgMuted', BLACK_30, EMPEROR)
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
      custom: buildCustomProp('bg', GALLERY, COD_GRAY)
    }),
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
      custom: buildCustomProp('border', MERCURY, EMPEROR)
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
      custom: buildCustomProp('borderLight', BLACK_3, DUNE)
    }),
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
      custom: buildCustomProp('card', WHITE, DUNE)
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
      custom: buildCustomProp('cardBorder', GALLERY, EMPEROR)
    }),
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
      custom: buildCustomProp('shadow', BLACK_10, BLACK_10)
    }),
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
      custom: buildCustomProp('link', BLUE, YELLOW)
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
      custom: buildCustomProp('linkVisited', BLUEVIOLET, LIMA)
    }),
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
      custom: buildCustomProp('tableStripe', BLACK_3, BLACK_30)
    })
  }
}

export default designSystem

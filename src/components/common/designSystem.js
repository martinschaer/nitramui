import theme from 'styled-theming'

const WHITE = '#fff'
const GALLERY = '#f0f0f0'
const EMPEROR = '#535353'
const MINE_SHAFT = '#282828'
const COD_GRAY_LIGHT = '#181818'
const COD_GRAY = '#101010'
const BLACK = '#000'

const BLACK_3 = 'rgba(0, 0, 0, 0.03)'
const BLACK_10 = 'rgba(0, 0, 0, 0.1)'
const BLACK_30 = 'rgba(0, 0, 0, 0.3)'

const YELLOW = '#ff0'
const BLUE = '#00f'
const LIMA = '#75d41d'
const BLUEVIOLET = 'blueviolet' // #8A2BE2

export const themes = {
  smooth: 'smooth',
  hiContrast: 'hiContrast'
}

export const modes = {
  light: 'light',
  dark: 'dark'
}

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
        })
    }),
    fgMuted: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_30,
          [modes.dark]: GALLERY
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: EMPEROR,
          [modes.dark]: EMPEROR
        })
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
        })
    }),
    border: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_10,
          [modes.dark]: MINE_SHAFT
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK,
          [modes.dark]: WHITE
        })
    }),
    borderLight: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_10,
          [modes.dark]: BLACK_10
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: BLACK_10,
          [modes.dark]: MINE_SHAFT
        })
    }),
    card: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: WHITE,
          [modes.dark]: COD_GRAY_LIGHT
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: WHITE,
          [modes.dark]: BLACK
        })
    }),
    cardBorder: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: GALLERY,
          [modes.dark]: MINE_SHAFT
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: COD_GRAY,
          [modes.dark]: WHITE
        })
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
        })
    }),
    nestedShadow: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: BLACK_10,
          [modes.dark]: BLACK_30
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'none',
          [modes.dark]: 'none'
        })
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
        })
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
        })
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
        })
    })
  }
}

export default designSystem

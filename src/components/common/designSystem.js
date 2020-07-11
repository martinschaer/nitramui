import theme from 'styled-theming'

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
          [modes.light]: '#535353',
          [modes.dark]: '#f0f0f0'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: '#000',
          [modes.dark]: '#fff'
        })
    }),
    fgMuted: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: '#aeaeae',
          [modes.dark]: '#e0e0e0'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: '#666',
          [modes.dark]: '#666'
        })
    }),
    bg: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: '#f0f0f0',
          [modes.dark]: '#101010'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: '#fff',
          [modes.dark]: '#000'
        })
    }),
    border: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: '#E0E0E0',
          [modes.dark]: '#0f0f0f'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: '#000',
          [modes.dark]: '#fff'
        })
    }),
    borderLight: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: 'rgba(0,0,0,.05)',
          [modes.dark]: 'rgba(0,0,0,.1)'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'rgba(0,0,0,.05)',
          [modes.dark]: 'rgba(255,255,255,.1)'
        })
    }),
    card: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: '#fff',
          [modes.dark]: '#1f1f1f'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: '#fff',
          [modes.dark]: '#000'
        })
    }),
    cardHeader: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: '#f8f8f8',
          [modes.dark]: '#181818'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: '#fff',
          [modes.dark]: '#000'
        })
    }),
    nestedCard: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: '#fff',
          [modes.dark]: '#282828'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: '#fff',
          [modes.dark]: '#000'
        })
    }),
    cardBorder: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: '#f0f0f0',
          [modes.dark]: '#1f1f1f'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: '#101010',
          [modes.dark]: '#fff'
        })
    }),
    nestedBorder: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: '#f0f0f0',
          [modes.dark]: '#141414'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: '#000',
          [modes.dark]: '#fff'
        })
    }),
    shadow: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: 'rgba(0, 0, 0, 0.1)',
          [modes.dark]: 'rgba(0, 0, 0, 1)'
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
          [modes.light]: 'rgba(0, 0, 0, 0.05)',
          [modes.dark]: 'rgba(0, 0, 0, 0.3)'
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
          [modes.light]: 'blue',
          [modes.dark]: '#ff0'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'blue',
          [modes.dark]: '#ff0'
        })
    }),
    linkVisited: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: 'blueviolet',
          [modes.dark]: '#75d41d'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: 'blueviolet',
          [modes.dark]: '#75d41d'
        })
    })
  }
}

export default designSystem

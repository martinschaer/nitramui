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
          [modes.dark]: '#222'
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
          [modes.dark]: '#111'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: '#000',
          [modes.dark]: '#fff'
        })
    }),
    card: theme('theme', {
      [themes.smooth]:
        theme('mode', {
          [modes.light]: '#fff',
          [modes.dark]: '#333'
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
          [modes.light]: '#fff',
          [modes.dark]: '#333'
        }),
      [themes.hiContrast]:
        theme('mode', {
          [modes.light]: '#000',
          [modes.dark]: '#fff'
        })
    })
  }
}

export default designSystem

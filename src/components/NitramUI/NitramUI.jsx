import React, { useState, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import useDarkMode from 'use-dark-mode'
import createPersistedState from 'use-persisted-state'

import {
  createGlobalStyle,
  ThemeProvider
} from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import reset from '../common/reset'
import ds, { modes, themes } from '../common/designSystem'
import { NitramUIContext } from './NitramUIContext'
import {
  headingStyles,
  preHeadingStyles
} from '../common/typography'

const GlobalStyle = createGlobalStyle`
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
`

const ResetStyle = createGlobalStyle`
  ${reset}
`

// ---------------------------------------------------------------------------------------------------------------------
// Utils
// ---------------------------------------------------------------------------------------------------------------------
const isCustomTheme = theme => themes[theme]
const getDefaultTheme = ({ availableThemes, returnOnlyPredef }) => (availableThemes && availableThemes.length)
  ? (isCustomTheme(availableThemes[0]) && returnOnlyPredef ? themes.smooth : availableThemes[0])
  : themes.smooth
const useThemeState = createPersistedState('theme')

// ---------------------------------------------------------------------------------------------------------------------
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
  const [mode, _setMode] = useState(modes.light)
  const darkMode = useDarkMode(false, {
    onChange: (x) => {
      _setMode(x ? modes.dark : modes.light)
    }
  })
  const [theme, setTheme] = useThemeState(getDefaultTheme({ availableThemes }))
  const [themeAux, setThemeAux] = useState(getDefaultTheme({ availableThemes, returnOnlyPredef: true }))
  const [customTheme, setCustomTheme] = useState(getDefaultTheme({ availableThemes }))

  // -------------------------------------------------------------------------------------------------------------------
  // Memos
  // -------------------------------------------------------------------------------------------------------------------
  const setMode = React.useCallback(
    (m) => {
      if (m === modes.light) {
        darkMode.disable()
      } else {
        darkMode.enable()
      }
    },
    [darkMode]
  )
  const themeProviderObj = useMemo(
    () => ({ theme: themeAux, mode, customThemes, customTheme }),
    [themeAux, mode, customThemes, customTheme]
  )
  const availableThemesObjects = useMemo(
    () => {
      let aTs = {}
      if (!availableThemes) {
        aTs = {
          ...themes,
          ...Object.keys(customThemes || {})
            .reduce(
              (acc, x) => ({ ...acc, x }),
              {}
            )
        }
      } else {
        availableThemes.forEach(x => {
          if ((customThemes && customThemes[x]) || themes[x]) {
            aTs[x] = x
          }
        })
      }
      return aTs
    },
    [customThemes, availableThemes]
  )

  // -------------------------------------------------------------------------------------------------------------------
  // Effects
  // -------------------------------------------------------------------------------------------------------------------
  useEffect(
    () => {
      if (isCustomTheme(theme)) {
        setThemeAux(theme)
      } else {
        setThemeAux('custom')
        setCustomTheme(theme)
      }
    },
    [theme]
  )

  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <NitramUIContext.Provider
      value={{
        mode,
        setMode,
        theme,
        setTheme,
        themes: availableThemesObjects,
        ds,
        getDSVal: x => typeof x === 'function' && x({ theme: themeProviderObj })
      }}
    >
      <ThemeProvider
        theme={themeProviderObj}
      >
        <ResetStyle />
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </NitramUIContext.Provider>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
NitramUI.propTypes = {
  children: PropTypes.node,
  customThemes: PropTypes.object,
  availableThemes: PropTypes.arrayOf(PropTypes.string)
}

NitramUI.defaultProps = {}

export default NitramUI

import React, { useState, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'

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
import { buttonStyle } from '../Button/Button'
import {
  headingStyles,
  preHeadingStyles,
  labelStyles
} from '../common/typography'

// TODO: Put in another file
const global = createGlobalStyle`
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

input,
select,
textarea,
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

  & > button:first-child ,
  & > input:first-child ,
  & > select:first-child {
    margin-left: 0;
  }

  & > button:last-child ,
  & > input:last-child ,
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

button {
  ${buttonStyle}
}

input,
select {
  ${labelStyles}
  padding: 0 ${ds.measures.inputSpacerH}rem;
  font-size: ${ds.measures.inputFont};
  border: 1px solid ${ds.colors.inputBorder};
  background-color: ${ds.colors.inputBg};
  color: ${ds.colors.inputFg};
  border-radius: ${ds.measures.inputRadius};
  box-sizing: border-box;

  &:hover {
    border-color: ${ds.colors.inputBorderActive};
    background-color: ${ds.colors.inputBgHover};
    outline: none;
  }
  &:focus,
  &:active,
  &.active {
    border-color: ${ds.colors.inputBorderActive};
    background-color: ${ds.colors.inputBgFocus};
    outline: none;
  }

  &:disabled {
    color: ${ds.colors.inputFgDisabled};
    border-color: ${ds.colors.inputBorderDisabled};
    background-color: ${ds.colors.inputBgDisabled};
    cursor: default;

    &:hover,
    &:focus {
      border-color: ${ds.colors.inputBorderDisabled};
    }
  }
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

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`

// ---------------------------------------------------------------------------------------------------------------------
// Utils
// ---------------------------------------------------------------------------------------------------------------------
const isCustomTheme = theme => themes[theme]
const getDefaultTheme = ({ availableThemes, returnOnlyPredef }) => (availableThemes && availableThemes.length)
  ? (isCustomTheme(availableThemes[0]) && returnOnlyPredef ? themes.smooth : availableThemes[0])
  : themes.smooth

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
  // TODO: use hooks for system/time–aware –saved– dark mode
  const [mode, setMode] = useState(modes.light)
  const [theme, setTheme] = useState(getDefaultTheme({ availableThemes }))
  const [themeAux, setThemeAux] = useState(getDefaultTheme({ availableThemes, returnOnlyPredef: true }))
  const [customTheme, setCustomTheme] = useState(getDefaultTheme({ availableThemes }))

  // -------------------------------------------------------------------------------------------------------------------
  // Memos
  // -------------------------------------------------------------------------------------------------------------------
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

import React from 'react'
import PropTypes from 'prop-types'

import {
  createGlobalStyle,
  ThemeProvider
} from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import reset from '../common/reset'
import ds from '../common/designSystem'
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

body {
  color: ${ds.colors.fg};
  background-color: ${ds.colors.bg};
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
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
  font-weight: 600;
}

input,
select,
textarea,
code,
pre {
  font-family: 'Inconsolata', monospace;
}

pre {
  overflow-x: scroll;
  overflow-y: auto;
  padding: 0.5em;
  background-color: ${ds.colors.tableStripe};
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${ds.colors.bg};
    border-radius: 0.25rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${ds.colors.fgMuted};
    border-radius: 0.25rem;
  }
}

p {
  img {
    max-width: 100%;
  }

  & > button:first-child {
    margin-left: 0;
  }

  & > button:last-child {
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
  ${labelStyles}
  border: 1px solid ${ds.colors.border};
  background-color: transparent;
  color: ${ds.colors.fg};
  border-radius: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border-color: ${ds.colors.fg};
  }

  &:active {
    background-color: ${ds.colors.card};
  }

  &:disabled {
    color: ${ds.colors.fgMuted};
    border-color: ${ds.colors.borderLight};
    cursor: default;

    &:hover,
    &:focus {
      border-color: ${ds.colors.borderLight};
    }
  }
}

.mr {
  margin-right: 1em !important;
}
.mrs {
  margin-right: .5em !important;
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
// Component
// ---------------------------------------------------------------------------------------------------------------------
const NitramUI = ({
  mode,
  theme,
  children
}) => {
  // TODO: use hooks for system/time–aware –saved– dark mode

  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <ThemeProvider
      theme={{ theme, mode }}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
NitramUI.propTypes = {
  mode: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.node
}

NitramUI.defaultProps = {
  mode: 'light',
  theme: 'smooth'
}

export default NitramUI

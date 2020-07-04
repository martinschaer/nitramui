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
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 200;

  &.pre-heading {
    color: ${ds.colors.fgMuted};
    letter-spacing: ${1 / 12}em;
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 600;
    margin: 1em 0;
  }
}

p {
  line-height: 1.5em;
}

strong {
  font-weight: 600;
}

button,
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

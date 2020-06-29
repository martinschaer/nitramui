import { createGlobalStyle } from 'styled-components'

import ds from './common/designSystem'

export { modes, themes } from './common/designSystem'
export { default as reset } from './common/reset'
export { default as Card } from './Card'
export { default as Layout } from './Layout'
export { default as Pane } from './Pane'

export const global = createGlobalStyle`
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

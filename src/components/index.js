import { createGlobalStyle } from 'styled-components'

export { default as themes } from './common/themes'
export { default as reset } from './common/reset'
export { default as Layout } from './Layout'

export const global = createGlobalStyle`
html, body {
  height: 100%;
}

body {
  color: #535353;
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
    color: #AEAEAE;
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

code,
pre {
  font-family: 'Inconsolata', monospace;
}
`

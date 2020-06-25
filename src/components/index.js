export { default as themes } from './common/themes'
export { default as reset } from './common/reset'

export const global = `
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Inter:wght@200;400;600&display=swap');

body {
  font-family: 'Inter', 'Helvetica Neue', Helvetiva, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Inter', 'Helvetica Neue', Helvetiva, Arial, sans-serif;
  font-weight: 200;

  &.pre-heading {
    font-weight: 600;
    letter-spacing: ${1 / 12}em;
    text-transform: uppercase;
    font-size: .8rem;
  }
}

code,
pre {
  font-family: 'Inconsolata', monospace;
}
`

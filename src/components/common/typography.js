import { css } from 'styled-components'

import ds from '../common/designSystem'

export const headingStyles = css`
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 200;
`

export const preHeadingStyles = css`
  color: ${ds.colors.fgMuted};
  letter-spacing: ${1 / 12}em;
  text-transform: uppercase;
  font-size: .8rem;
  font-weight: 600;
`
export const labelStyles = css`
  line-height: 2rem;
  height: 2rem;
  padding: 0 1rem;
  display: inline-block;
  margin: 0.25rem;
`

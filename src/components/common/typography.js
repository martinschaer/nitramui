import { css } from 'styled-components'

import ds from '../common/designSystem'

export const headingStyles = css`
  font-family: ${ds.fonts.heading};
  font-weight: ${ds.weights.heading};
`

export const preHeadingStyles = css`
  color: ${ds.colors.fgMuted};
  letter-spacing: ${1 / 12}em;
  text-transform: uppercase;
  font-size: .8rem;
  font-weight: ${ds.weights.preheading};
`

export const labelStyles = css`
  line-height: calc(${ds.measures.spacer}rem * 2);
  min-height: calc(${ds.measures.spacer}rem * 2);
  padding: 0 ${ds.measures.spacer}rem;
  display: inline-block;
  margin: calc(${ds.measures.spacer}rem / 4) calc(${ds.measures.spacer}rem / 4);
`

export const labelStylesSmall = css`
  line-height: calc(${ds.measures.spacer}rem * 3 / 2);
  min-height: calc(${ds.measures.spacer}rem * 3 / 2);
  padding: 0 ${props => ds.measures.spacer(props) / 2}rem;
  display: inline-block;
  margin: calc(${ds.measures.spacer}rem / 4) calc(${ds.measures.spacer}rem / 4);
`

import { css } from 'styled-components'

import ds from '../common/designSystem'

export const headingStyles = css`
  font-family: ${ds.fonts.heading};
  font-weight: ${ds.weights.heading};
  margin-right: ${ds.measures.spacer}rem;
`

export const preHeadingStyles = css`
  color: ${ds.colors.fgMuted};
  font-size: .8rem;
  font-weight: ${ds.weights.preheading};
  margin: calc(${ds.measures.spacer}rem / 4) calc(${ds.measures.spacer}rem / 4);
`

export const labelStyles = css`
  line-height: ${props => Math.max(2, ds.measures.spacer(props) * 2)}rem;
  min-height: ${props => Math.max(2, ds.measures.spacer(props) * 2)}rem;
  padding: 0 ${ds.measures.spacer}rem;
  display: inline-block;
  margin: calc(${ds.measures.spacer}rem / 4) calc(${ds.measures.spacer}rem / 4);
`

export const labelStylesSmall = css`
  line-height: ${props => Math.max(1.5, ds.measures.spacer(props) * 1.5)}rem;
  min-height: ${props => Math.max(1.5, ds.measures.spacer(props) * 1.5)}rem;
  padding: 0 ${props => ds.measures.spacer(props) / 2}rem;
  display: inline-block;
  margin: calc(${ds.measures.spacer}rem / 4) calc(${ds.measures.spacer}rem / 4);
`

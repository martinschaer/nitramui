import React from 'react'
import {
  createGlobalStyle,
  ThemeProvider
} from 'styled-components'
import { withKnobs, optionsKnob } from '@storybook/addon-knobs'

import {
  reset,
  themes,
  modes,
  global,
  Card,
  Layout,
  Pane
} from '../src/components'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`

export default {
  title: 'Typography',
  component: GlobalStyle,
  decorators: [withKnobs]
}

export const Typography = () => {
  return (
    <ThemeProvider
      theme={{
        theme: optionsKnob('Theme', themes, 'smooth', { display: 'inline-radio' }, 'theme'),
        mode: optionsKnob('Theme mode', modes, 'light', { display: 'inline-radio' }, 'theme')
      }}
    >
      <GlobalStyle />
      <Layout>
        <Pane size='small'>
          <h2 className='pre-heading'>Menu</h2>
        </Pane>
        <Pane>
          <Card>
            <h2 className='pre-heading'>Pre-Heading</h2>
            <h1>H1 — Hello world</h1>
            <h2>H1 — Hello world</h2>
            <h3>H3 — Hello world</h3>
            <h4>H4 — Hello world</h4>
            <h5>H5 — Hello world</h5>
            <h6>H6 — Hello world</h6>
            <p>Paragraph text.</p>
            <p><code>Code tag</code></p>
            {/* eslint-disable max-len */}
            <p><strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur adipiscing</em> elit. Mauris luctus, magna a scelerisque convallis, leo magna lobortis diam, at sollicitudin nisl elit vitae tortor. Quisque mattis pharetra ornare. In orci elit, efficitur non felis vel, blandit viverra ligula. Nam et nunc eu augue venenatis dapibus. Quisque et feugiat lorem. Sed nec commodo augue. Quisque facilisis pretium nisl ac rhoncus. Ut sed urna non enim sollicitudin vehicula et sit amet dolor. Nam porta mauris eu semper fermentum. Suspendisse id efficitur ante. Ut fermentum pellentesque mauris id tempus. Vivamus eu gravida quam. Etiam lectus enim, commodo sed tristique ac, aliquam at velit. Ut ultricies, nulla in venenatis placerat, turpis lacus tincidunt tellus, sed accumsan ex mauris a arcu.</p>
            {/* eslint-enable max-len */}
            <p>
              <button type='button'>Button</button>
              &nbsp;
              <button type='button' disabled>Disabled button</button>
            </p>
          </Card>
        </Pane>
      </Layout>
    </ThemeProvider>
  )
}

Typography.story = {
  name: 'Typography'
}

import React from 'react'
import marked from 'marked'
import { withKnobs, optionsKnob } from '@storybook/addon-knobs'
import readmeMD from '../README.md'

import {
  themes,
  modes,
  Card,
  Pane,
  Layout,
  NitramUI
} from '../src'

const README = marked(readmeMD)

export default {
  title: 'Getting Started',
  decorators: [withKnobs]
}

export const Readme = () => {
  return (
    <NitramUI
      theme={optionsKnob('Theme', themes, 'smooth', { display: 'inline-radio' }, 'theme')}
      mode={optionsKnob('Theme mode', modes, 'light', { display: 'inline-radio' }, 'theme')}
    >
      <Layout>
        <Pane>
          <Card>
            <div dangerouslySetInnerHTML={{ __html: README }} />
          </Card>
        </Pane>
      </Layout>
    </NitramUI>
  )
}

Readme.story = {
  name: 'Read me'
}

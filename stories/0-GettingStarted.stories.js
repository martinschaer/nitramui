import React from 'react'
import marked from 'marked'
import readmeMD from '../README.md'

import {
  modes,
  Card,
  Pane,
  Layout,
  Control,
  NitramUI,
  NitramUIContext
} from '../src'

const README = marked(readmeMD)
const mode2Emoji = mode => mode === 'light' ? '🌞' : '🌙'

export default {
  title: 'Getting Started',
  parameters: {
    layout: 'fullscreen'
  }
}

export const Readme = () => {
  return (
    <NitramUI>
      <NitramUIContext.Consumer>
        {({ mode, setMode }) => (
          <Layout
            brand='NitramUI'
            scroll='vertical'
            menuB={(
              <Control
                type='select'
                value={mode}
                onChange={setMode}
                options={Object.entries(modes).map(([_key, value]) => ({ label: mode2Emoji(value), value }))}
              />
            )}
          >
            <Pane.Wrapper>
              <Pane height='auto'>
                <div dangerouslySetInnerHTML={{ __html: README }} />
              </Pane>
            </Pane.Wrapper>
          </Layout>
        )}
      </NitramUIContext.Consumer>
    </NitramUI>
  )
}

Readme.storyName = 'Read me'

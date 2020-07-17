import React from 'react'
import marked from 'marked'
import readmeMD from '../README.md'

import {
  Card,
  Pane,
  Layout,
  NitramUI
} from '../src'

const README = marked(readmeMD)

export default {
  title: 'Getting Started'
}

export const Readme = () => {
  return (
    <NitramUI>
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

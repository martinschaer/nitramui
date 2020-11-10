import React from 'react'

import { groove, compact } from './themes'

import {
  modes,
  Pane,
  Button,
  Divider,
  Layout,
  Control,
  NitramUI,
  NitramUIContext
} from '../src'

export default {
  title: 'Buttons',
  parameters: {
    layout: 'fullscreen'
  }
}

export const Buttons = () => {
  return (
    <NitramUI
      customThemes={{ groove, compact }}
      availableThemes={['groove', 'compact', 'smooth', 'hiContrast']}
    >
      <NitramUIContext.Consumer>
        {({ mode, setMode, themes, theme, setTheme }) => (
          <Layout
            brand='Buttons'
            menu={(
              <>
                <Control
                  type='select'
                  label='Mode'
                  value={mode}
                  onChange={setMode}
                  marginBottom={false}
                  options={Object.entries(modes).map(([_key, value]) => ({ label: value, value }))}
                />
                <Control
                  type='select'
                  label='Theme'
                  value={theme}
                  onChange={setTheme}
                  marginBottom={false}
                  options={Object.entries(themes).map(([_key, value]) => ({ label: value, value }))}
                />
              </>
            )}
          >
            <Pane>
              <h1>Buttons</h1>
              <Button>Hello World</Button>
              <Button variant='plain'>Hello World</Button>
              <Button variant='inverted'>Hello World</Button>
              <Button color='green'>Hello World</Button>
              <Button color='red'>Hello World</Button>
              <Button color='blue'>Hello World</Button>
              <Divider horizontal />
              <Button selected>Hello World</Button>
              <Button selected variant='plain'>Hello World</Button>
              <Button selected variant='inverted'>Hello World</Button>
              <Button selected color='green'>Hello World</Button>
              <Button selected color='red'>Hello World</Button>
              <Button selected color='blue'>Hello World</Button>
              <Divider horizontal />
              <Button small>Hello World</Button>
              <Button small variant='plain'>Hello World</Button>
              <Button small variant='inverted'>Hello World</Button>
              <Button small color='green'>Hello World</Button>
              <Button small color='red'>Hello World</Button>
              <Button small color='blue'>Hello World</Button>
              <Divider horizontal />
              <Button selected small>Hello World</Button>
              <Button selected small variant='plain'>Hello World</Button>
              <Button selected small variant='inverted'>Hello World</Button>
              <Button selected small color='green'>Hello World</Button>
              <Button selected small color='red'>Hello World</Button>
              <Button selected small color='blue'>Hello World</Button>
              <Divider horizontal />
              <Button fixedWidth>Hello World</Button>
              <Button fixedWidth variant='plain'>Hello World</Button>
              <Button fixedWidth variant='inverted'>Hello World</Button>
              <Button fixedWidth color='green'>Hello World</Button>
              <Button fixedWidth color='red'>Hello World</Button>
              <Button fixedWidth color='blue'>Hello World</Button>
              <Divider horizontal />
              <Button fixedWidth small>Hello World</Button>
              <Button fixedWidth small variant='plain'>Hello World</Button>
              <Button fixedWidth small variant='inverted'>Hello World</Button>
              <Button fixedWidth small color='green'>Hello World</Button>
              <Button fixedWidth small color='red'>Hello World</Button>
              <Button fixedWidth small color='blue'>Hello World</Button>
              <Divider horizontal />
              <Button fixedWidth selected>Hello World</Button>
              <Button fixedWidth selected variant='plain'>Hello World</Button>
              <Button fixedWidth selected variant='inverted'>Hello World</Button>
              <Button fixedWidth selected color='green'>Hello World</Button>
              <Button fixedWidth selected color='red'>Hello World</Button>
              <Button fixedWidth selected color='blue'>Hello World</Button>
              <Divider horizontal />
              <Button fixedWidth small selected>Hello World</Button>
              <Button fixedWidth small selected variant='plain'>Hello World</Button>
              <Button fixedWidth small selected variant='inverted'>Hello World</Button>
              <Button fixedWidth small selected color='green'>Hello World</Button>
              <Button fixedWidth small selected color='red'>Hello World</Button>
              <Button fixedWidth small selected color='blue'>Hello World</Button>
            </Pane>
          </Layout>
        )}
      </NitramUIContext.Consumer>
    </NitramUI>
  )
}

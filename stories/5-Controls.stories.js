import React from 'react'

import { groove, compact } from './themes'

import {
  modes,
  Card,
  Pane,
  Layout,
  Control,
  NitramUI,
  NitramUIContext
} from '../src'

export default {
  title: 'Controls',
  parameters: {
    layout: 'fullscreen'
  }
}

const selectOptions = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
  { label: 'Four', value: 4 },
  { label: 'Five', value: 5 },
  { label: 'Six', value: 6 },
  { label: 'Seven', value: 7 },
  { label: 'Eight', value: 8 },
  { label: 'Nine', value: 9 },
  { label: 'Ten', value: 10 },
  11,
  12,
  13,
  14,
  15
]

export const Controls = () => {
  const c1Ref = React.useRef()
  return (
    <NitramUI
      customThemes={{ groove, compact }}
      availableThemes={['groove', 'compact', 'smooth', 'hiContrast']}
    >
      <NitramUIContext.Consumer>
        {({ mode, setMode, themes, theme, setTheme }) => (
          <Layout
            brand='Controls'
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
              <Card>
                <Control
                  ref={c1Ref}
                  type='multiselect'
                  label='Select multiple'
                  options={selectOptions}
                  placeholder='Select…'
                />
              </Card>
            </Pane>
          </Layout>
        )}
      </NitramUIContext.Consumer>
    </NitramUI>
  )
}

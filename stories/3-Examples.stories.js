import React from 'react'
import { withKnobs, optionsKnob } from '@storybook/addon-knobs'

import {
  themes,
  modes,
  Card,
  Pane,
  Table,
  Layout,
  Container,
  NitramUI
} from '../src'

export default {
  title: 'Examples',
  decorators: [withKnobs]
}

export const App = () => {
  return (
    <NitramUI
      theme={optionsKnob('Theme', themes, 'smooth', { display: 'inline-radio' }, 'theme')}
      mode={optionsKnob('Theme mode', modes, 'light', { display: 'inline-radio' }, 'theme')}
    >
      <Layout brand='Hi, Jonathan'>
        <Pane size='small'>
          <h2 className='pre-heading'>Menu</h2>
        </Pane>
        <Pane size='full-minus-small'>
          {/* TODO: make it dynamic depending on the time of the day */}
          <h2 className='pre-heading'>Good morning!</h2>
          <Card>
            <h1>Today</h1>
            <Container scroll='vertical' pushMargin>
              {/* -------------------------------------------------------------------------------------------------- */}
              {/* Plans ending soon                                                                                  */}
              {/* -------------------------------------------------------------------------------------------------- */}
              <Card
                size='small'
                header='Plans ending soon'
                footer={(
                  <button type='button'>See all</button>
                )}
                noPadding
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Left</th>
                      <th>Attention level</th>
                      <th>Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Martin</td>
                      <td>4 days</td>
                      <td>On track</td>
                      <td>Chisco</td>
                    </tr>
                    <tr>
                      <td>María Fernanda</td>
                      <td>7 days</td>
                      <td>Needs attention</td>
                      <td>Chisco</td>
                    </tr>
                    <tr>
                      <td>2 weeks+ (17/JUL)</td>
                      <td>Johan</td>
                      <td>Take a look</td>
                      <td>Chisco</td>
                    </tr>
                    <tr>
                      <td>Chisco</td>
                      <td>4 weeks+ (31/JUL)</td>
                      <td>On track</td>
                      <td>Chisco</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>

              {/* -------------------------------------------------------------------------------------------------- */}
              {/* Onboardings                                                                                        */}
              {/* -------------------------------------------------------------------------------------------------- */}
              <Card
                size='small'
                header='Onboardings'
                footer={(
                  <button type='button'>See all</button>
                )}
                noPadding
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Next session</th>
                      <th>Checklist</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Luis</td>
                      <td>Tomorrow, 9:00 a.m.</td>
                      <td>8/10</td>
                    </tr>
                    <tr>
                      <td>Kristen</td>
                      <td>Thursday, 10:00 a.m.</td>
                      <td>4/10</td>
                    </tr>
                    <tr>
                      <td>Amanda</td>
                      <td>Next week</td>
                      <td>1/10</td>
                    </tr>
                    <tr>
                      <td>Dan</td>
                      <td>Next week</td>
                      <td>Not started</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
              {/* -------------------------------------------------------------------------------------------------- */}
              {/* Plans ending soon                                                                                  */}
              {/* -------------------------------------------------------------------------------------------------- */}
              <Card
                size='small'
              >
                <p>Lorem ipsum</p>
              </Card>
            </Container>
          </Card>
        </Pane>
      </Layout>
    </NitramUI>
  )
}

App.story = {
  name: 'App'
}

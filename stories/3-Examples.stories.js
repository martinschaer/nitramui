import React from 'react'
// import { withKnobs } from '@storybook/addon-knobs'

import {
  themes,
  modes,
  Card,
  Pane,
  Label,
  Table,
  Layout,
  Container,
  NitramUI,
  NitramUIContext
} from '../src'

export default {
  title: 'Examples'
  // decorators: [withKnobs]
}

export const App = () => {
  return (
    <NitramUI>
      <Layout brand='Example' headerSlot='Hi, Jonathan'>
        <NitramUIContext.Consumer>
          {({ mode, setMode, theme, setTheme }) => (
            <Pane size='small'>
              <h2 className='pre-heading'>Menu</h2>
              <p>
                <button type='button'>
                  <span role='img' aria-label='bell emoji' className='mr fw'>🔔</span>Dashboard
                </button>
              </p>
              <p>
                <button type='button'>
                  <span role='img' aria-label='calenar emoji' className='mr fw'>🗓</span>Agenda
                </button>
              </p>
              <p>
                <button type='button'>
                  <span role='img' aria-label='people emoji' className='mr fw'>👥</span>Clients
                </button>
              </p>
              <p>
                <button type='button'>
                  <span role='img' aria-label='gear emoji' className='mr fw'>⚙️</span>Settings
                </button>
              </p>
              <p>
                <select value={mode} onChange={evt => setMode(evt.target.value)}>
                  {Object.entries(modes).map(([key, value]) => (
                    <option key={key} value={value}>{value}</option>
                  ))}
                </select>
              </p>
              <p>
                <select value={theme} onChange={evt => setTheme(evt.target.value)}>
                  {Object.entries(themes).map(([key, value]) => (
                    <option key={key} value={value}>{value}</option>
                  ))}
                </select>
              </p>
            </Pane>
          )}
        </NitramUIContext.Consumer>
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
                header={
                  <>
                    <Label heading>Plans ending soon</Label>
                    <button type='button'>See all</button>
                    <button type='button'>See all</button>
                    <button type='button'>See all</button>
                    <button type='button'>See all</button>
                    <button type='button'>See all</button>
                    <button type='button'>See all</button>
                  </>
                }
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
                      <td><span role='img' aria-label='calenar emoji' className='mrs fw'>🟢</span> On track</td>
                      <td>Chisco</td>
                    </tr>
                    <tr>
                      <td>María Fernanda</td>
                      <td>7 days</td>
                      <td><span role='img' aria-label='calenar emoji' className='mrs fw'>🔴</span> Needs attention</td>
                      <td>Chisco</td>
                    </tr>
                    <tr>
                      <td>2 weeks+ (17/JUL)</td>
                      <td>Johan</td>
                      <td><span role='img' aria-label='calenar emoji' className='mrs fw'>🟡</span> Take a look</td>
                      <td>Chisco</td>
                    </tr>
                    <tr>
                      <td>Chisco</td>
                      <td>4 weeks+ (31/JUL)</td>
                      <td><span role='img' aria-label='calenar emoji' className='mrs fw'>🟢</span> On track</td>
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
                header={<Label heading>Onboardings</Label>}
                footer={
                  <button type='button'>See all</button>
                }
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
              {/* Card                                                                                               */}
              {/* -------------------------------------------------------------------------------------------------- */}
              <NitramUIContext.Consumer>
                {({ mode, setMode, theme, setTheme }) => (
                  <Card
                    size='small'
                    header={
                      <>
                        <Label heading>Header</Label>
                        <select value={mode} onChange={evt => setMode(evt.target.value)}>
                          {Object.entries(modes).map(([key, value]) => (
                            <option key={key} value={value}>{value}</option>
                          ))}
                        </select>
                        <select value={theme} onChange={evt => setTheme(evt.target.value)}>
                          {Object.entries(themes).map(([key, value]) => (
                            <option key={key} value={value}>{value}</option>
                          ))}
                        </select>
                        <button type='button'>See all</button>
                      </>
                    }
                    footer={
                      <>
                        <Label heading>Footer</Label>
                        <Label>Footer</Label>
                        <input type='text' />
                        <button type='button'>Ok</button>
                        <Label>Footer</Label>
                      </>
                    }
                  >
                    <p>Lorem ipsum, <a href='/'>dolor sit amed</a></p>
                    <p>
                      <button type='button'>More</button>
                      <button type='button'>More</button>
                    </p>
                  </Card>
                )}
              </NitramUIContext.Consumer>
            </Container>
          </Card>
        </Pane>
      </Layout>
    </NitramUI>
  )
}

export const Grid = () => {
  return (
    <NitramUI>
      <Layout brand='Grid'>
        <Pane size='full'>
          <Container height='half' scroll='vertical'>
            <Pane size='golden-width-rest'>
              <Card height='full'>
                <h2>Hello world</h2>
              </Card>
            </Pane>
            <Pane size='golden-width'>
              <Card height='full'>
                <h2>Hello world</h2>
              </Card>
            </Pane>
          </Container>
          <Container height='half'>
            <Pane size='half'>
              <Card height='full'>
                <h2>Hello world</h2>
              </Card>
            </Pane>
            <Pane size='half'>
              <Card height='full'>
                <h2>Hello world</h2>
              </Card>
            </Pane>
          </Container>
        </Pane>
      </Layout>
    </NitramUI>
  )
}

App.story = {
  name: 'App'
}

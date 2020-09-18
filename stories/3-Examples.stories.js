import React from 'react'
import { linkTo } from '@storybook/addon-links'

import {
  modes,
  css,
  styled,
  Card,
  Pane,
  Label,
  Table,
  Button,
  Layout,
  Divider,
  Loading,
  Control,
  Container,
  NitramUI,
  NitramUIContext
} from '../src'

export default {
  title: 'Examples',
  parameters: {
    layout: 'fullscreen'
  }
}

const Hola = styled.span`
  color: red;
`

const mode2Emoji = mode => mode === 'light' ? '🌞' : '🌙'

const customThemes = {
  groove: {
    colors: {
      fg: { light: '#212B36', dark: '#F9FAFB' },
      bg: { light: '#F9FAFB', dark: '#000' },
      card: { light: '#F9FAFB', dark: '#212B36' },
      border: { light: '#DFE3E8', dark: '#637381' },
      buttonBg: {
        light: 'linear-gradient(-225deg, #A100FF 0%, #00BAFF 100%)',
        dark: 'linear-gradient(-225deg, #A100FF 0%, #00BAFF 100%)'
      },
      buttonFgSelected: { light: '#F9FAFB', dark: '#F9FAFB' },
      buttonBgSelected: { light: '#0071CC', dark: '#0071CC' },
      buttonBgHover: { light: '#33A4FF', dark: '#33A4FF' },
      buttonFg: { light: 'white', dark: 'white' },
      buttonFgHover: { light: 'white', dark: 'white' },
      buttonFgDisabled: { light: '#018EFF', dark: '#018EFF' },
      buttonBgDisabled: { light: 'transparent', dark: 'transparent' },
      buttonBorder: { light: '#F9FAFB', dark: '#212B36' },
      buttonBorderHover: { light: '#33A4FF', dark: '#33A4FF' },
      inputFg: { light: '#212B36', dark: '#F9FAFB' },
      inputBg: { light: '#FFF', dark: 'transparent' },
      inputBgHover: { light: '#FFF', dark: 'transparent' },
      inputBgFocus: { light: '#F4FBFF', dark: 'transparent' },
      inputBorder: { light: '#DFE3E8', dark: '#637381' },
      inputBorderActive: { light: '#018EFF', dark: '#018EFF' }
    },
    fonts: {
      body: 'Helvetica, Arial',
      heading: 'serif',
      controls: 'sans-serif'
    },
    weights: {
      strong: 700
    },
    measures: {
      inputFont: '0.875rem',
      radius: '1.5em',
      inputRadius: '0.25rem',
      buttonRadius: '100rem',
      spacer: 1.2,
      buttonSpacerH: 1.5,
      inputSpacerH: 0.5
    }
  }
}

const ExampleTable = () => {
  return (
    <Table hoverable>
      <thead>
        <tr>
          <th>Client</th>
          <th>Next session</th>
          <th>Checklist</th>
          <th>Lorem ipsum</th>
          <th>Lorem ipsum</th>
          <th>Lorem ipsum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Luis</td>
          <td>Tomorrow, 9:00 a.m.</td>
          <td>8/10</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
        </tr>
        <tr>
          <td>Kristen</td>
          <td>Thursday, 10:00 a.m.</td>
          <td>4/10</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
        </tr>
        <tr>
          <td>Amanda</td>
          <td>Next week</td>
          <td>1/10</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
        </tr>
        <tr>
          <td>Dan</td>
          <td>Next week</td>
          <td>Not started</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
        </tr>
        <tr>
          <td>Dan</td>
          <td>Next week</td>
          <td>Not started</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
        </tr>
        <tr>
          <td>Dan</td>
          <td>Next week</td>
          <td>Not started</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
        </tr>
        <tr>
          <td>Dan</td>
          <td>Next week</td>
          <td>Not started</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
        </tr>
        <tr>
          <td>Dan</td>
          <td>Next week</td>
          <td>Not started</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
          <td>Lorem ipsum dolor sit amed</td>
        </tr>
      </tbody>
    </Table>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// APP
// ---------------------------------------------------------------------------------------------------------------------
export const App = () => {
  const [text, setText] = React.useState('Lorem ipsum')

  return (
    <NitramUI
      customThemes={customThemes}
      // availableThemes={['groove', 'smooth']}
    >
      <NitramUIContext.Consumer>
        {({ mode, setMode, themes, theme, setTheme, ds, getDSVal }) => (
          <Layout
            brand='Example'
            footerSlot='Example'
            headerSlot='Hi, Jonathan'
            toolbar={(
              <>
                <Label>Label</Label>
                <Divider />
                <Button>Button</Button>
                <Button variant='plain'>Plain</Button>
                <Button variant='inverted'>Inverted</Button>
                <Button small>Small</Button>
              </>
            )}
            menu={(
              <>
                <button type='button' className='selected' onClick={linkTo('Examples', 'App')}>App</button>
                <button type='button' onClick={linkTo('Examples', 'Grid')}>Grid</button>
              </>
            )}
            menuB={(
              <>
                <Control
                  type='select'
                  value={mode}
                  onChange={setMode}
                  options={Object.entries(modes).map(([_key, value]) => ({ label: mode2Emoji(value), value }))}
                />
              </>
            )}
          >
            <Pane size='small'>
              <h2 className='pre-heading'>Menu</h2>
              <p>
                <button type='button' className='selected'>
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
              <div className='mb'>
                <Control
                  type='select'
                  label='Mode'
                  value={mode}
                  onChange={setMode}
                  options={Object.entries(modes).map(([_key, value]) => ({ label: value, value }))}
                />
              </div>
              <div className='mb'>
                <Control
                  type='select'
                  label='Theme'
                  value={theme}
                  onChange={setTheme}
                  options={Object.entries(themes).map(([_key, value]) => ({ label: value, value }))}
                />
              </div>
            </Pane>
            <Pane size='full-minus-small'>
              {/* TODO: make it dynamic depending on the time of the day */}
              <h2 className='pre-heading'>Good morning!</h2>
              <Card>
                <h1>Today</h1>
                <Container scroll='vertical' pushMargin>
                  {/* ---------------------------------------------------------------------------------------------- */}
                  {/* Plans ending soon                                                                              */}
                  {/* ---------------------------------------------------------------------------------------------- */}
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
                    margin
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
                          <td>
                            <span role='img' aria-label='calenar emoji' className='mrs fw'>🔴</span> Needs attention
                          </td>
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

                  {/* ---------------------------------------------------------------------------------------------- */}
                  {/* Onboardings                                                                                    */}
                  {/* ---------------------------------------------------------------------------------------------- */}
                  <Card
                    size='small'
                    header={<Label heading>Onboardings</Label>}
                    footer={
                      <button type='button'>See all</button>
                    }
                    noPadding
                    margin
                  >
                    <Table hoverable>
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
                  {/* ---------------------------------------------------------------------------------------------- */}
                  {/* Card                                                                                           */}
                  {/* ---------------------------------------------------------------------------------------------- */}
                  <Card
                    size='small'
                    margin
                    header={
                      <>
                        <Label heading>Header</Label>
                        <Control
                          type='select'
                          value={mode}
                          onChange={setMode}
                          options={Object.entries(modes).map(([_key, value]) => ({ label: value, value }))}
                        />
                        <Control
                          type='select'
                          value={theme}
                          onChange={setTheme}
                          options={Object.entries(themes).map(([_key, value]) => ({ label: value, value }))}
                        />
                        <button type='button'>See all</button>
                      </>
                    }
                    footer={
                      <>
                        <Label heading>Footer</Label>
                        <Label>Footer</Label>
                        <Control
                          type='input'
                          label='Name'
                          value={text}
                          onChange={setText}
                        />
                        <button type='button'>Ok</button>
                        <Label>Footer</Label>
                      </>
                    }
                  >
                    <p><Hola>{text}</Hola>, <a href='/'>dolor sit amed</a> <Loading inline /></p>
                    <p>
                      <button type='button'>Normal <Loading inline icon='⧗' /></button>
                      <button type='button' className='selected'>Selected</button>
                      <Button variant='plain'>Plain</Button>
                      <Button variant='plain' className='selected'>Plain selected</Button>
                      <Button variant='inverted'>Inverted</Button>
                      <Button variant='inverted' className='selected'>Inverted selected</Button>
                      <Button small>Small</Button>
                      <Button small className='selected'>Small</Button>
                      <Button
                        extraStyles={{
                          hover: css`box-shadow: inset 0 0 0 1px ${ds.colors.buttonBorderHoverPlain};`
                        }}
                      >
                        Extra hover
                      </Button>
                    </p>
                    <div>
                      <Control
                        labelInside
                        type='input'
                        label='Name'
                        value={text}
                        onChange={setText}
                      />
                    </div>
                  </Card>
                  <Card
                    size='small'
                    margin
                    compact
                    compactHeader
                    header={(<Label compact>Compact header</Label>)}
                  >
                    <Loading />
                    <p>ds.colors.fg: {getDSVal(ds.colors.fg)}</p>
                    <p>ds.colors.bg: {getDSVal(ds.colors.bg)}</p>
                    <Card compact hoverable marginBottom stickers={{ dot: 'top' }}><p>Unread message (top)</p></Card>
                    <Card compact hoverable marginBottom stickers={{ dot: 'right' }}>
                      <p>Unread message (right)</p>
                    </Card>
                    <Card compact hoverable marginBottom stickers={{ dot: 'bottom' }}>
                      <p>Unread message (bottom)</p>
                    </Card>
                    <Card compact hoverable marginBottom stickers={{ dot: { p: 'left', c: 'red' } }}>
                      <p>Hello world (left)</p>
                    </Card>
                    <Card compact hoverable marginBottom stickers={{ dot: 'top right' }}>
                      <p>Unread message (top right)</p>
                    </Card>
                    <Card compact hoverable marginBottom stickers={{ dot: 'top left' }}>
                      <p>Unread message (top left)</p>
                    </Card>
                    <Card compact hoverable marginBottom stickers={{ dot: 'bottom right' }}>
                      <p>Unread message (bottom right)</p>
                    </Card>
                    <Card compact hoverable marginBottom stickers={{ dot: 'bottom left' }}>
                      <p>Unread message (bottom left)</p>
                    </Card>
                    <Card compact hoverable marginBottom stickers={{ dot: 'with text' }}>
                      <p>Unread message (with text)</p>
                    </Card>
                    <Card hoverable marginBottom stickers={{ dot: 'with text' }}>
                      <p>Unread message (with text)</p>
                      <p>Unread message</p>
                    </Card>
                    <Card compact hoverable compactFooter marginBottom footer={(<Label compact>Footer</Label>)}>
                      <p>Hello world</p>
                    </Card>
                    <Card selected compact compactFooter marginBottom footer={(<Label compact>Footer</Label>)}>
                      <p>Hello world</p>
                    </Card>
                    <Card
                      selected
                      hoverable
                      compact
                      compactFooter
                      marginBottom
                      footer={(<Label compact>Footer</Label>)}
                      extraStyles={{
                        hover: css`
box-shadow: inset 0 0 0 1px ${ds.colors.buttonBorderHoverPlain} !important;`
                      }}
                    >
                      <p>Hello world</p>
                    </Card>
                  </Card>
                </Container>
              </Card>
            </Pane>
          </Layout>
        )}
      </NitramUIContext.Consumer>
    </NitramUI>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// GRID
// ---------------------------------------------------------------------------------------------------------------------
export const Grid = () => {
  return (
    <NitramUI>
      <NitramUIContext.Consumer>
        {({ mode, setMode }) => (
          <Layout
            brand='Grid'
            menu={(
              <>
                <button type='button' onClick={linkTo('Examples', 'App')}>App</button>
                <button type='button' className='selected' onClick={linkTo('Examples', 'Grid')}>Grid</button>
              </>
            )}
            menuB={(
              <>
                <Control
                  type='select'
                  value={mode}
                  onChange={setMode}
                  options={Object.entries(modes).map(([_key, value]) => ({ label: mode2Emoji(value), value }))}
                />
              </>
            )}
          >
            <Pane size='full' noPadding>
              <Container scroll='vertical'>
                <Pane size='golden-width-rest' height='half'>
                  <Card
                    height='full'
                    header={
                      <Label heading>Hello World</Label>
                    }
                    noPadding
                    hoverable
                  >
                    <ExampleTable />
                  </Card>
                </Pane>
                <Pane size='golden-width' height='half'>
                  <Card height='full' hoverable>
                    <h2>Hello world</h2>
                    <ExampleTable />
                  </Card>
                </Pane>
                <Pane size='half' height='half'>
                  <Card height='full' hoverable compact>
                    <h2>Compact card</h2>
                    <Card marginBottom={2} noPadding>
                      <ExampleTable />
                    </Card>
                    <ExampleTable />
                  </Card>
                </Pane>
                <Pane size='half' height='half'>
                  <Card
                    height='full'
                    footer={(<Label heading>Hello World</Label>)}
                    noPadding
                    hoverable
                    onClick={linkTo('Examples', 'App')}
                    color='#018EFF'
                    colorBorderPosition='left'
                  >
                    <ExampleTable />
                  </Card>
                </Pane>
              </Container>
            </Pane>
          </Layout>
        )}
      </NitramUIContext.Consumer>
    </NitramUI>
  )
}

App.storyName = 'App'

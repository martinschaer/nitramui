import React from 'react'
import { linkTo } from '@storybook/addon-links'

import { groove, compact } from './themes'

import {
  modes,
  css,
  styled,
  Card,
  Pane,
  Flex,
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
      customThemes={{ groove, compact }}
      availableThemes={['groove', 'compact', 'smooth', 'hiContrast']}
    >
      <NitramUIContext.Consumer>
        {({ mode, setMode, themes, theme, setTheme, ds, getDSVal }) => (
          <Layout
            brand='Example'
            footerSlot='Example'
            headerSlot={<Label heading>Hi, Jonathan</Label>}
            toolbar={(
              <>
                <Label>Label</Label>
                <Divider />
                <Button>Button</Button>
                <Button variant='plain'>Plain</Button>
                <Button variant='inverted'>Inverted</Button>
                <Button fixedWidth>F</Button>
                <Button small>Small</Button>
                <Button small fixedWidth>S</Button>
                <Control placeholder='🔎 Search…' />
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
            {/* TODO: create a component for Tiles to avoid so much options on Cards */}
            <Pane size='full-minus-small'>
              <Flex flexWrap='wrap' style={{ margin: '-0.5rem' }}>
                <Flex.Col compact>
                  <Card compact height='full' colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    <Label heading compact>
                      Lorem ipsum dolor sit amed
                    </Label>
                    <Label small compact>
                      <a href='/'>Lorem ipsum dolor sit amed</a>
                    </Label>
                  </Card>
                </Flex.Col>
                <Flex.Col compact>
                  <Card compact height='full' colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Lorem ipsum dolor sit amed
                  </Card>
                </Flex.Col>
                <Flex.Col compact>
                  <Card compact height='full' colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
                <Flex.Col compact>
                  <Card compact height='full' colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
                <Flex.Col compact>
                  <Card compact height='full' colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
                <Flex.Col compact>
                  <Card compact height='full' colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
                <Flex.Col compact>
                  <Card compact height='full' colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
                <Flex.Col compact>
                  <Card compact height='full' colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
              </Flex>
              <Divider horizontal />
              <Flex flexWrap='wrap'>
                <Flex.Col>
                  <Card colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
                <Flex.Col>
                  <Card colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
                <Flex.Col>
                  <Card colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
                <Flex.Col>
                  <Card colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
                <Flex.Col>
                  <Card colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
                <Flex.Col>
                  <Card colorBorderPosition='left' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
                <Flex.Col>
                  <Card colorBorderPosition='left' height='full' color={getDSVal(ds.colors.link)}>
                    Tile A
                  </Card>
                </Flex.Col>
                <Flex.Col>
                  <Card
                    colorBorderPosition='left'
                    color={getDSVal(ds.colors.link)}
                    noWrapHeader
                    header={(
                      <>
                        <Label
                          noWrap
                          className='ml'
                        >
                          No wrap lorem ipsum dolor sit amed
                        </Label>
                        <Button fixedWidth variant='plain'>+</Button>
                      </>
                    )}
                  >
                    Tile A
                  </Card>
                </Flex.Col>
              </Flex>
              <Divider horizontal />
              {/* TODO: make it dynamic depending on the time of the day */}
              <h2 className='pre-heading'>Good morning!</h2>
              <Card compact header={<Label><h1>Today</h1></Label>}>
                <Container scroll='vertical'>
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
                    low
                    forceShadow
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
                        <Label heading>{mode} {theme}</Label>
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
                    hollow
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
                      noBorderFooter
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
    <NitramUI customThemes={{ groove }}>
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

import React from 'react'

import { groove } from './themes'

import {
  modes,
  Card,
  Flex,
  Pane,
  Table,
  Muted,
  Button,
  Layout,
  Control,
  Divider,
  NitramUI,
  NitramUIContext, Label
} from '../src'

export default {
  title: 'Typography',
  component: Layout,
  parameters: {
    layout: 'fullscreen'
  }
}

const mode2Emoji = mode => mode === 'light' ? '🌞' : '🌙'

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

export const Typography = () => {
  const textRef = React.useRef()
  const multiRef = React.useRef()
  const selectRef = React.useRef()
  const checkboxRef = React.useRef()
  const textareaRef = React.useRef()
  const [selectValue, selectValueSet] = React.useState()
  const [multiSelectValue, multiSelectValueSet] = React.useState([1])
  const [textValue, textValueSet] = React.useState('Lorem ipsum')
  const [checkboxValue, checkboxValueSet] = React.useState(true)
  return (
    <NitramUI customThemes={{ groove }}>
      <NitramUIContext.Consumer>
        {({ mode, setMode, themes, theme, setTheme }) => (
          <Layout>
            <Pane size='small'>
              <h2 className='pre-heading'>Menu</h2>
              <p>
                {Object.entries(modes).map(([key, value]) => (
                  <Button key={key} fixedWidth small selected={mode === value} onClick={() => setMode(value)}>
                    {mode2Emoji(value)}
                  </Button>
                ))}
              </p>
              <Control
                labelInside
                type='select'
                label='Theme'
                value={theme}
                onChange={setTheme}
                options={Object.entries(themes).map(([_key, value]) => ({ label: value, value }))}
              />
              <p><Button>Button default</Button></p>
              <p><Button className='selected'>Button default selected</Button></p>
              <p><Button variant='plain'>Button plain</Button></p>
              <p><Button variant='plain' selected>Button plain selected</Button></p>
              <p><Button variant='inverted'>Button inverted</Button></p>
              <p><a href='/' className='button'>Button anchor</a></p>
              <p><a href={`/?_=${Math.random().toString(36).substr(2, 9)}`}>Link</a></p>
              <p><a href='/'>Visited</a></p>
            </Pane>
            <Pane size='full-minus-small'>
              <Card height='full'>
                <h2 className='pre-heading'>Pre-Heading</h2>
                <h1>H1 — Hello world</h1>
                <h2>H1 — Hello world</h2>
                <h3>H3 — Hello world</h3>
                <h4>H4 — Hello world</h4>
                <h5>H5 — Hello world</h5>
                <h6>H6 — Hello world</h6>
                <p>Paragraph text. <Muted>Muted</Muted></p>
                <ul>
                  <li>List item</li>
                  <li>List item</li>
                  <li>List item</li>
                </ul>

                <Flex alignItems='center' flexWrap='wrap'>
                  <h2>Title</h2>
                  <Label>Label</Label>
                </Flex>
                <Flex alignItems='center' flexWrap='wrap'>
                  <h2>Title</h2>
                  <Button>Button</Button>
                  <Button>Button</Button>
                  <Button fixedWidth>Button</Button>
                  <Button fixedWidth><span role='img' aria-label='Search'>🔍</span></Button>
                  <Button fixedWidth variant='plain'><span role='img' aria-label='Search'>🔍</span></Button>
                </Flex>

                <Card noPadding>
                  <Flex alignItems='center' flexWrap='wrap'>
                    <Label>Hello world</Label>
                    <Divider />
                    <Label compact><strong>Compact</strong> Hello world</Label>
                    <Divider />
                    <Label small> Small Hello world</Label>
                    <Divider />
                    <Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Label>
                    <Divider />
                    <Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Label>
                    <Divider />
                    <Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Label>
                    <Divider />
                    <Label compact>
                      <strong>Compact</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus,
                      magna a scelerisque convallis, leo magna lobortis diam, at sollicitudin nisl elit vitae tortor.
                      Quisque mattis pharetra ornare.
                    </Label>
                    <Divider />
                    <Label>Hello world</Label>
                    <Divider />
                    <Label>Hello world</Label>
                    <Divider />
                    <Label>Hello world</Label>
                    <Divider />
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Divider />
                  </Flex>
                </Card>
                <Divider horizontal spacing={2} />
                <ol>
                  <li>List item</li>
                  <li>List item</li>
                  <li>List item</li>
                </ol>
                <p><code>Code tag</code></p>
                {/* eslint-disable max-len */}
                <p><strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur adipiscing</em> elit. <a href={`/?_=${Math.random().toString(36).substr(2, 9)}`}>Mauris luctus</a>, magna a scelerisque convallis, leo magna lobortis diam, at sollicitudin nisl elit vitae tortor. Quisque mattis pharetra ornare. In orci elit, efficitur non felis vel, blandit viverra ligula. Nam et nunc eu augue venenatis dapibus. Quisque et feugiat lorem. Sed nec commodo augue. Quisque facilisis pretium nisl ac rhoncus. Ut sed urna non enim sollicitudin vehicula et sit amet dolor. Nam porta mauris eu semper fermentum. Suspendisse id efficitur ante. Ut fermentum pellentesque mauris id tempus. Vivamus eu gravida quam. Etiam lectus enim, commodo sed tristique ac, aliquam at velit. Ut ultricies, nulla in venenatis placerat, turpis lacus tincidunt tellus, sed accumsan ex mauris a arcu.</p>
                <pre>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus, magna a scelerisque convallis, leo magna lobortis diam, at sollicitudin nisl elit vitae tortor. Quisque mattis pharetra ornare.
                  <br />
                  In orci elit, efficitur non felis vel, blandit viverra ligula. Nam et nunc eu augue venenatis dapibus. Quisque et feugiat lorem. Sed nec commodo augue. Quisque facilisis pretium nisl ac rhoncus.
                  <br />
                  Ut sed urna non enim sollicitudin vehicula et sit amet dolor. Nam porta mauris eu semper fermentum. Suspendisse id efficitur ante. Ut fermentum pellentesque mauris id tempus.
                  <br />
                  Vivamus eu gravida quam. Etiam lectus enim, commodo sed tristique ac, aliquam at velit. Ut ultricies, nulla in venenatis placerat, turpis lacus tincidunt tellus, sed accumsan ex mauris a arcu.
                </pre>
                {/* eslint-enable max-len */}
                <p>
                  <button type='button'>Button</button>
                  &nbsp;
                  <button type='button' disabled>Disabled button</button>
                </p>
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
                    <tr>
                      <td>Long text</td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus, magna a scelerisque
                        convallis, leo magna lobortis diam, at sollicitudin nisl elit vitae tortor. Quisque mattis
                        pharetra ornare. In orci elit, efficitur non felis vel, blandit viverra ligula. Nam et nunc eu
                        augue venenatis dapibus. Quisque et feugiat lorem.
                      </td>
                      <td>Not started</td>
                    </tr>
                  </tbody>
                </Table>
                <Divider horizontal spacing={2} />
                <Card compact hollow header={<Label heading>Forwarding ref</Label>} marginBottom>
                  <Control
                    labelInside
                    type='text'
                    label='text labelInside'
                    defaultValue='123'
                    ref={textRef}
                  />
                  <Control
                    labelInside
                    type='select'
                    label='select labelInside'
                    options={selectOptions}
                    defaultValue={1}
                    ref={selectRef}
                  />
                  <Control
                    labelInside
                    type='multiselect'
                    label='multiselect labelInside ref'
                    options={selectOptions}
                    defaultValue={[1]}
                    ref={multiRef}
                  />
                  <Control
                    labelInside
                    type='checkbox'
                    label='Checkbox'
                    defaultValue
                    ref={checkboxRef}
                  />
                  <Control
                    labelInside
                    type='textarea'
                    label='textarea'
                    defaultValue='Lorem ipsum'
                    ref={textareaRef}
                  />
                  <Button
                    onClick={() => {
                      textRef.current.value = `${textRef.current.value.toUpperCase()}\
 ${selectRef.current?.value} ${multiRef.current?.value} ${checkboxRef.current?.value} ${textareaRef.current?.value}`
                    }}
                  >
                    toUpperCase
                  </Button>
                </Card>
                <Control
                  labelInside
                  comfort
                  type='text'
                  label='text labelInside comfort'
                  value={textValue}
                  onChange={textValueSet}
                />
                <Label>{textValue}</Label>
                <Control
                  type='text'
                  label='text'
                  value={textValue}
                  onChange={textValueSet}
                />
                <Control
                  comfort
                  type='text'
                  label='text comfort'
                  value={textValue}
                  onChange={textValueSet}
                />
                <Control
                  labelInside
                  comfort
                  type='select'
                  label='select labelInside comfort'
                  options={selectOptions}
                  value={selectValue}
                  onChange={selectValueSet}
                />
                <Control
                  type='select'
                  label='select'
                  options={selectOptions}
                  value={selectValue}
                  onChange={selectValueSet}
                />
                <Control
                  comfort
                  type='select'
                  label='select comfort'
                  options={selectOptions}
                  value={selectValue}
                  onChange={selectValueSet}
                />
                <Card marginBottom>
                  <Label>multiSelectValue: {multiSelectValue.join(', ')}</Label>
                  <Label>checkboxValue: {JSON.stringify(checkboxValue)}</Label>
                </Card>
                <Control
                  disabled
                  labelInside
                  type='multiselect'
                  label='multiselect labelInside disabled'
                  value={multiSelectValue}
                  onChange={multiSelectValueSet}
                />
                <Control
                  labelInside
                  type='multiselect'
                  label='multiselect labelInside no options'
                  value={multiSelectValue}
                  onChange={multiSelectValueSet}
                />
                <Control
                  labelInside
                  type='multiselect'
                  label='multiselect labelInside'
                  options={selectOptions}
                  value={multiSelectValue}
                  onChange={multiSelectValueSet}
                />
                <Control
                  labelInside
                  comfort
                  type='multiselect'
                  label='multiselect labelInside comfort'
                  options={selectOptions}
                  value={multiSelectValue}
                  onChange={multiSelectValueSet}
                />
                <Control
                  type='multiselect'
                  label='multiselect'
                  options={selectOptions}
                  value={multiSelectValue}
                  onChange={multiSelectValueSet}
                />
                <Control
                  comfort
                  type='multiselect'
                  label='multiselect comfort'
                  options={selectOptions}
                  value={multiSelectValue}
                  onChange={multiSelectValueSet}
                />
                <Control
                  type='number'
                  label='Number'
                  min={0}
                  max={10}
                />
                <Control
                  labelInside
                  type='number'
                  label='Number'
                  min={0}
                  max={10}
                />
                <Control
                  type='checkbox'
                  label='Checkbox'
                  value={checkboxValue}
                  onChange={checkboxValueSet}
                />
                <Control
                  labelInside
                  type='textarea'
                  label='textarea'
                  value={textValue}
                  onChange={textValueSet}
                />
                <Control
                  type='textarea'
                  label='textarea'
                  value={textValue}
                  onChange={textValueSet}
                />
                <Control
                  type='text'
                  label='Name'
                  labelInside
                  invalid
                  value={textValue}
                  onChange={textValueSet}
                />
                <Control
                  type='text'
                  label='Name'
                  invalid
                  value={textValue}
                  onChange={textValueSet}
                />
                <Control
                  type='text'
                  label='Name'
                  invalid
                  disabled
                  value={textValue}
                  onChange={textValueSet}
                />
                <Flex flexWrap='wrap' alignItems='center' style={{ margin: '1rem 0' }}>
                  <Control
                    type='text'
                    label='Comfort + labelInside'
                    comfort
                    labelInside
                    value={textValue}
                    onChange={textValueSet}
                    marginBottom={false}
                  />
                  <Control
                    comfort
                    labelInside
                    type='select'
                    options={selectOptions}
                    label='Comfort + labelInside'
                    value={selectValue}
                    onChange={selectValueSet}
                    marginBottom={false}
                  />
                  <Control
                    labelInside
                    comfort
                    type='multiselect'
                    options={selectOptions}
                    label='multiselect labelInside comfort'
                    value={multiSelectValue}
                    onChange={multiSelectValueSet}
                    marginBottom={false}
                  />
                  <Button>Save</Button>
                  <Divider />
                  <Control
                    type='text'
                    label='Normal'
                    value={textValue}
                    onChange={textValueSet}
                    marginBottom={false}
                    marginLeft
                  />
                  <Button>Save</Button>
                  <Divider />
                  <Control
                    type='text'
                    label='Small'
                    small
                    value={textValue}
                    onChange={textValueSet}
                    marginBottom={false}
                    marginLeft
                  />
                  <Button small>Save</Button>
                  <Divider />
                  <Button>Save</Button>
                  <Button small>Save</Button>
                  <Divider />
                  <p>Paragraph text with a <Button>button</Button></p>
                  <Divider />
                  <Label>Paragraph text with a <Button>button</Button></Label>
                  <Divider />
                </Flex>
              </Card>
            </Pane>
          </Layout>
        )}
      </NitramUIContext.Consumer>
    </NitramUI>
  )
}

Typography.storyName = 'Typography'

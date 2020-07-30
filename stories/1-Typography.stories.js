import React from 'react'

import {
  Card,
  Pane,
  Table,
  Layout,
  Control,
  NitramUI
} from '../src'

export default {
  title: 'Typography',
  component: Layout
}

export const Typography = () => {
  return (
    <NitramUI>
      <Layout>
        <Pane size='small'>
          <h2 className='pre-heading'>Menu</h2>
          <nav>
            <p><button type='button'>Button</button></p>
            <p><a href={`/?_=${Math.random().toString(36).substr(2, 9)}`}>Link</a></p>
            <p><a href='/'>Visited</a></p>
          </nav>
        </Pane>
        <Pane size='full-minus-small'>
          <Card>
            <h2 className='pre-heading'>Pre-Heading</h2>
            <h1>H1 — Hello world</h1>
            <h2>H1 — Hello world</h2>
            <h3>H3 — Hello world</h3>
            <h4>H4 — Hello world</h4>
            <h5>H5 — Hello world</h5>
            <h6>H6 — Hello world</h6>
            <p>Paragraph text.</p>
            <ul>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
            </ul>
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
              </tbody>
            </Table>
            <Control
              type='input'
              label='Name'
              onChange={() => {}}
            />
            <Control
              type='input'
              label='Name'
              labelInside
              onChange={() => {}}
            />
          </Card>
        </Pane>
      </Layout>
    </NitramUI>
  )
}

Typography.story = {
  name: 'Typography'
}

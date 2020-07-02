import React from 'react'
import { withKnobs, optionsKnob } from '@storybook/addon-knobs'

import {
  themes,
  modes,
  Card,
  Pane,
  Layout,
  NitramUI
} from '..'

export default {
  title: 'Layout',
  component: Layout,
  decorators: [withKnobs]
}

export const Main = () => (
  <NitramUI
    theme={optionsKnob('Theme', themes, 'smooth', { display: 'inline-radio' }, 'theme')}
    mode={optionsKnob('Theme mode', modes, 'light', { display: 'inline-radio' }, 'theme')}
  >
    <Layout>
      <Pane size='small'>
        <>
          <h2 className='pre-heading'>Pane sizes ➝</h2>
          <h1>This is a small one</h1>
          <h2>Perfect for sidebars</h2>
        </>
      </Pane>
      <Pane>
        <Card>
          <h2 className='pre-heading'>First pane</h2>
          <h1>Default size</h1>
          <h2>This should be a good size for text.</h2>
          {/* eslint-disable max-len */}
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Mauris luctus, magna a scelerisque convallis, leo magna lobortis diam, at sollicitudin nisl elit vitae tortor. Quisque mattis pharetra ornare. In orci elit, efficitur non felis vel, blandit viverra ligula. Nam et nunc eu augue venenatis dapibus. Quisque et feugiat lorem. Sed nec commodo augue. Quisque facilisis pretium nisl ac rhoncus. Ut sed urna non enim sollicitudin vehicula et sit amet dolor. Nam porta mauris eu semper fermentum. Suspendisse id efficitur ante. Ut fermentum pellentesque mauris id tempus. Vivamus eu gravida quam. Etiam lectus enim, commodo sed tristique ac, aliquam at velit. Ut ultricies, nulla in venenatis placerat, turpis lacus tincidunt tellus, sed accumsan ex mauris a arcu.</p>
          <p><em>Pellentesque habitant</em> morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean blandit ornare libero, eu pharetra enim accumsan sit amet. Nullam sed tempor nulla. In vitae tempus neque. Phasellus sed mollis felis, quis pretium diam. Nam lacus nibh, volutpat eget bibendum auctor, gravida id augue. Morbi ornare neque sed sapien tempor auctor. Quisque efficitur sit amet orci sed maximus. Nam imperdiet enim a vehicula consectetur. Pellentesque et pharetra quam. Aliquam erat volutpat. Maecenas hendrerit nunc dolor, sed lobortis eros varius sed. Pellentesque eu elit tincidunt, congue dolor ac, vulputate urna. Phasellus in neque est. Proin egestas congue malesuada.</p>
          <p>Aliquam ac maximus elit. Quisque sed ultricies turpis, id condimentum nulla. Cras finibus mi non tortor posuere, vel auctor nunc rhoncus. Integer fermentum fringilla metus, malesuada convallis lacus. Nam ipsum tellus, venenatis ac sapien a, ullamcorper condimentum lacus. Ut cursus dignissim risus, eget blandit metus dictum ut. Vivamus fringilla sollicitudin ante at aliquet. Donec interdum lacus eu nulla placerat ornare. Mauris a viverra ante. Integer varius porttitor quam, accumsan efficitur massa consequat in. Etiam vel tellus odio. Donec ut augue eget mi commodo vestibulum ac ut tellus. Sed nec justo lobortis, egestas ligula finibus, molestie orci.</p>
          <p>Duis non tincidunt sapien. Aliquam blandit lectus a venenatis porta. Etiam vulputate faucibus augue. Integer ornare blandit nulla. Donec pulvinar, orci id pellentesque condimentum, turpis turpis ultricies quam, in molestie risus turpis ac lorem. In vulputate metus vel metus euismod volutpat. Nullam vitae est nulla. Cras ut pretium tellus. Mauris accumsan sodales mi dapibus porttitor. Sed fringilla sem efficitur nisl condimentum, ut fermentum tellus finibus. Quisque scelerisque mi non lectus gravida, et blandit ligula lobortis. Nullam quis semper turpis. Aliquam euismod aliquam lectus vel maximus. Maecenas ac ipsum ac leo ullamcorper tincidunt.</p>
          <p>Morbi fringilla, libero eget scelerisque mollis, urna magna sagittis odio, ut lacinia nisl tellus sed risus. Quisque mattis lacus nec arcu ultrices rutrum. Nullam blandit, tortor in consequat luctus, augue dui bibendum libero, in malesuada arcu nisl id dolor. Donec eget lacinia elit. Morbi nec est lectus. Sed urna ante, molestie vitae porta eget, dictum at lectus. Etiam imperdiet mollis est, sit amet accumsan lectus dapibus sed. Donec hendrerit mollis nunc, ut mollis dolor blandit nec. Ut est nunc, venenatis vel aliquet at, aliquet condimentum felis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus, magna a scelerisque convallis, leo magna lobortis diam, at sollicitudin nisl elit vitae tortor. Quisque mattis pharetra ornare. In orci elit, efficitur non felis vel, blandit viverra ligula. Nam et nunc eu augue venenatis dapibus. Quisque et feugiat lorem. Sed nec commodo augue. Quisque facilisis pretium nisl ac rhoncus. Ut sed urna non enim sollicitudin vehicula et sit amet dolor. Nam porta mauris eu semper fermentum. Suspendisse id efficitur ante. Ut fermentum pellentesque mauris id tempus. Vivamus eu gravida quam. Etiam lectus enim, commodo sed tristique ac, aliquam at velit. Ut ultricies, nulla in venenatis placerat, turpis lacus tincidunt tellus, sed accumsan ex mauris a arcu.</p>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean blandit ornare libero, eu pharetra enim accumsan sit amet. Nullam sed tempor nulla. In vitae tempus neque. Phasellus sed mollis felis, quis pretium diam. Nam lacus nibh, volutpat eget bibendum auctor, gravida id augue. Morbi ornare neque sed sapien tempor auctor. Quisque efficitur sit amet orci sed maximus. Nam imperdiet enim a vehicula consectetur. Pellentesque et pharetra quam. Aliquam erat volutpat. Maecenas hendrerit nunc dolor, sed lobortis eros varius sed. Pellentesque eu elit tincidunt, congue dolor ac, vulputate urna. Phasellus in neque est. Proin egestas congue malesuada.</p>
          <p>Aliquam ac maximus elit. Quisque sed ultricies turpis, id condimentum nulla. Cras finibus mi non tortor posuere, vel auctor nunc rhoncus. Integer fermentum fringilla metus, malesuada convallis lacus. Nam ipsum tellus, venenatis ac sapien a, ullamcorper condimentum lacus. Ut cursus dignissim risus, eget blandit metus dictum ut. Vivamus fringilla sollicitudin ante at aliquet. Donec interdum lacus eu nulla placerat ornare. Mauris a viverra ante. Integer varius porttitor quam, accumsan efficitur massa consequat in. Etiam vel tellus odio. Donec ut augue eget mi commodo vestibulum ac ut tellus. Sed nec justo lobortis, egestas ligula finibus, molestie orci.</p>
          <p>Duis non tincidunt sapien. Aliquam blandit lectus a venenatis porta. Etiam vulputate faucibus augue. Integer ornare blandit nulla. Donec pulvinar, orci id pellentesque condimentum, turpis turpis ultricies quam, in molestie risus turpis ac lorem. In vulputate metus vel metus euismod volutpat. Nullam vitae est nulla. Cras ut pretium tellus. Mauris accumsan sodales mi dapibus porttitor. Sed fringilla sem efficitur nisl condimentum, ut fermentum tellus finibus. Quisque scelerisque mi non lectus gravida, et blandit ligula lobortis. Nullam quis semper turpis. Aliquam euismod aliquam lectus vel maximus. Maecenas ac ipsum ac leo ullamcorper tincidunt.</p>
          <p>Morbi fringilla, libero eget scelerisque mollis, urna magna sagittis odio, ut lacinia nisl tellus sed risus. Quisque mattis lacus nec arcu ultrices rutrum. Nullam blandit, tortor in consequat luctus, augue dui bibendum libero, in malesuada arcu nisl id dolor. Donec eget lacinia elit. Morbi nec est lectus. Sed urna ante, molestie vitae porta eget, dictum at lectus. Etiam imperdiet mollis est, sit amet accumsan lectus dapibus sed. Donec hendrerit mollis nunc, ut mollis dolor blandit nec. Ut est nunc, venenatis vel aliquet at, aliquet condimentum felis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus, magna a scelerisque convallis, leo magna lobortis diam, at sollicitudin nisl elit vitae tortor. Quisque mattis pharetra ornare. In orci elit, efficitur non felis vel, blandit viverra ligula. Nam et nunc eu augue venenatis dapibus. Quisque et feugiat lorem. Sed nec commodo augue. Quisque facilisis pretium nisl ac rhoncus. Ut sed urna non enim sollicitudin vehicula et sit amet dolor. Nam porta mauris eu semper fermentum. Suspendisse id efficitur ante. Ut fermentum pellentesque mauris id tempus. Vivamus eu gravida quam. Etiam lectus enim, commodo sed tristique ac, aliquam at velit. Ut ultricies, nulla in venenatis placerat, turpis lacus tincidunt tellus, sed accumsan ex mauris a arcu.</p>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean blandit ornare libero, eu pharetra enim accumsan sit amet. Nullam sed tempor nulla. In vitae tempus neque. Phasellus sed mollis felis, quis pretium diam. Nam lacus nibh, volutpat eget bibendum auctor, gravida id augue. Morbi ornare neque sed sapien tempor auctor. Quisque efficitur sit amet orci sed maximus. Nam imperdiet enim a vehicula consectetur. Pellentesque et pharetra quam. Aliquam erat volutpat. Maecenas hendrerit nunc dolor, sed lobortis eros varius sed. Pellentesque eu elit tincidunt, congue dolor ac, vulputate urna. Phasellus in neque est. Proin egestas congue malesuada.</p>
          <p>Aliquam ac maximus elit. Quisque sed ultricies turpis, id condimentum nulla. Cras finibus mi non tortor posuere, vel auctor nunc rhoncus. Integer fermentum fringilla metus, malesuada convallis lacus. Nam ipsum tellus, venenatis ac sapien a, ullamcorper condimentum lacus. Ut cursus dignissim risus, eget blandit metus dictum ut. Vivamus fringilla sollicitudin ante at aliquet. Donec interdum lacus eu nulla placerat ornare. Mauris a viverra ante. Integer varius porttitor quam, accumsan efficitur massa consequat in. Etiam vel tellus odio. Donec ut augue eget mi commodo vestibulum ac ut tellus. Sed nec justo lobortis, egestas ligula finibus, molestie orci.</p>
          <p>Duis non tincidunt sapien. Aliquam blandit lectus a venenatis porta. Etiam vulputate faucibus augue. Integer ornare blandit nulla. Donec pulvinar, orci id pellentesque condimentum, turpis turpis ultricies quam, in molestie risus turpis ac lorem. In vulputate metus vel metus euismod volutpat. Nullam vitae est nulla. Cras ut pretium tellus. Mauris accumsan sodales mi dapibus porttitor. Sed fringilla sem efficitur nisl condimentum, ut fermentum tellus finibus. Quisque scelerisque mi non lectus gravida, et blandit ligula lobortis. Nullam quis semper turpis. Aliquam euismod aliquam lectus vel maximus. Maecenas ac ipsum ac leo ullamcorper tincidunt.</p>
          <p>Morbi fringilla, libero eget scelerisque mollis, urna magna sagittis odio, ut lacinia nisl tellus sed risus. Quisque mattis lacus nec arcu ultrices rutrum. Nullam blandit, tortor in consequat luctus, augue dui bibendum libero, in malesuada arcu nisl id dolor. Donec eget lacinia elit. Morbi nec est lectus. Sed urna ante, molestie vitae porta eget, dictum at lectus. Etiam imperdiet mollis est, sit amet accumsan lectus dapibus sed. Donec hendrerit mollis nunc, ut mollis dolor blandit nec. Ut est nunc, venenatis vel aliquet at, aliquet condimentum felis.</p>
          {/* eslint-enable max-len */}
        </Card>
      </Pane>
      <Pane size='full'>
        <Card height={32}>
          <h2 className='pre-heading'>Second pane</h2>
          <h1>Full size</h1>
          <h2>Full window width</h2>
          <p>…but the Card has a custom height of <code>32rems</code>.</p>
        </Card>
      </Pane>
      <Pane size='square'>
        <Card height='full'>
          <h2 className='pre-heading'>Third pane</h2>
          <h1>Square size</h1>
          <h2>It’s hip to be square</h2>
        </Card>
      </Pane>
      <Pane size='golden-horizontal'>
        <>
          <h2 className='pre-heading'>Fourth pane</h2>
          <h1><code>golden-horizontal</code> size</h1>
          <h2>Golden ratio in a horizontal orientation</h2>
        </>
      </Pane>
      <Pane size='golden-vertical'>
        <>
          <h2 className='pre-heading'>Fourth pane</h2>
          <h1><code>golden-vertical</code> size</h1>
          <h2>Golden ratio in a vertical orientation</h2>
        </>
      </Pane>
      <Pane size='golden-width'>
        <>
          <h2 className='pre-heading'>Fifth pane</h2>
          <h1><code>golden-width</code> size</h1>
          <h2>Window width divided by golden ratio</h2>
        </>
      </Pane>
      <Pane size='golden-width-rest'>
        <>
          <h2 className='pre-heading'>Sixth pane</h2>
          <h1><code>golden-width-rest</code> size</h1>
          <h2>Window width minus golden-width</h2>
        </>
      </Pane>
      <Pane size='third'>
        <>
          <h2 className='pre-heading'>Seventh pane</h2>
          <h1><code>third</code> size</h1>
          <h2>A third of the window width</h2>
        </>
      </Pane>
      <Pane size='fourth'>
        <>
          <h2 className='pre-heading'>Eighth pane</h2>
          <h1><code>fourth</code> size</h1>
          <h2>A fourth of the window width</h2>
        </>
      </Pane>
    </Layout>
  </NitramUI>
)

export const Full = () => (
  <NitramUI
    theme={optionsKnob('Theme', themes, 'smooth', { display: 'inline-radio' }, 'theme')}
    mode={optionsKnob('Theme mode', modes, 'light', { display: 'inline-radio' }, 'theme')}
  >
    <Layout>
      <Pane size='full'>
        <>
          <h2 className='pre-heading'>Only pane</h2>
          <h1>Full size</h1>
          <h2>Full window width</h2>
          <p>No horizontal scroll…</p>
        </>
      </Pane>
    </Layout>
  </NitramUI>
)

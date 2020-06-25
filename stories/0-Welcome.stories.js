import React from 'react';
import { createGlobalStyle } from "styled-components";

import { reset, global } from '../src/components'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

export default {
  title: 'GlobalStyle',
  component: GlobalStyle,
};

export const ToStorybook = () => (
  <>
    <GlobalStyle />
    <h1 className='pre-heading'>Nitram UI</h1>
    <h1>Hello world</h1>
    <p>Lorem ipsum</p>
    <p><code>Lorem ipsum</code></p>
  </>
);

ToStorybook.story = {
  name: 'to Storybook',
};

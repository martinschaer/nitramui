import React from 'react';
import styled, { createGlobalStyle } from "styled-components";

import { reset, global } from '../src/components'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

const Title = styled.h1`
  font-family: 'Inconsolata', monospace;
  // font-family: 'Inter', sans-serif;
  // font-family: 'Open Sans', sans-serif;
`

export default {
  title: 'Welcome',
  component: Title,
};

export const ToStorybook = () => (
  <>
    <GlobalStyle />
    <Title>Hello world</Title>
    <p>Lorem ipsum</p>
  </>
);

ToStorybook.story = {
  name: 'to Storybook',
};

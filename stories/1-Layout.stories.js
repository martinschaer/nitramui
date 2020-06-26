import React from 'react';
import { createGlobalStyle } from "styled-components";

import {
  reset,
  global,
  Layout
} from '../src/components'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

export default {
  title: 'Layout',
  component: GlobalStyle,
};

export const Main = () => (
  <>
    <GlobalStyle />
    <Layout>
      <h1>Hello World</h1>
      {/* TODO: add overflowing content & test overflow scroll on StyledMain */}
    </Layout>
  </>
);

import React from 'react'

import { modes, themes } from '../common/designSystem'

export const NitramUIContext = React.createContext({
  mode: modes.light,
  setMode: () => {},
  theme: themes.smooth,
  setTheme: () => {}
})

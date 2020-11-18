export const colors = {
  BLACK: '#000000',
  MIDNIGHT: '#212B36',
  SNOW: '#F9FAFB',
  WHITE: '#FFFFFF',
  PURPLE1: '#A100FF',
  PURPLE2: '#7500C0',
  PURPLE3: '#460073',
  SLATE: '#637381',
  SILVER: '#919EAB',
  GULL: '#C4CDD5',
  SMOKE: '#DFE3E8',
  YELLOW: '#FFC82C',
  GREEN: '#7EC344',
  TEAL: '#26C1C9',
  CARIBBEAN: '#00BAFF',
  OCEAN: '#018EFF',
  ROYAL: '#004DFF',
  LAVENDER: '#9C6ADE',
  PINK: '#F580C0',
  CORAL: '#F98285',
  PUMPKIN: '#F49342',
  ORANGE: '#FF7849',
  RED: '#D5002F'
}

const SUPER_LIGHTENED_OCEAN = '#F4FBFF'
const SUPER_DARKENED_OCEAN = '#001729'

const MIDNIGHT_PLUS_SNOW_10 = '#363F49'
const MIDNIGHT_PLUS_SNOW_30 = '#616971'
const MIDNIGHT_PLUS_SNOW_70 = '#B8BBBF'

const TRANSPARENT = 'transparent'

const colorFg = { light: colors.MIDNIGHT, dark: colors.SNOW }
const colorBorder = { light: colors.SMOKE, dark: MIDNIGHT_PLUS_SNOW_10 }
const colorAccent = { light: colors.OCEAN, dark: colors.OCEAN }
const colorTransparent = { light: TRANSPARENT, dark: TRANSPARENT }

export const groove = {
  colors: {
    fg: colorFg,
    fgMuted: { light: colors.SILVER, dark: colors.SILVER },
    bg: { light: colors.SNOW, dark: '#10151B' },
    card: { light: colors.WHITE, dark: colors.MIDNIGHT },
    cardSelected: { light: SUPER_LIGHTENED_OCEAN, dark: SUPER_DARKENED_OCEAN },
    border: colorBorder,
    borderLight: colorTransparent,
    cardBorder: colorBorder,
    cardBorderHover: colorAccent,
    cardBorderSelected: colorAccent,
    cardHeaderBorder: colorBorder,
    buttonBg: colorAccent,
    buttonBgDisabled: colorTransparent,
    buttonFg: { light: 'white', dark: 'white' },
    buttonFgSelected: { light: 'white', dark: 'white' },
    buttonFgDisabled: colorAccent,
    buttonBorder: { light: colors.SNOW, dark: colors.MIDNIGHT },
    buttonBorderSelected: { light: colors.SNOW, dark: colors.MIDNIGHT },
    buttonFgPlain: colorFg,
    buttonBgPlain: colorTransparent,
    buttonFgPlainSelected: { light: colors.SNOW, dark: colors.SNOW },
    buttonBorderPlain: colorBorder,
    buttonBorderPlainHoverSelected: { light: MIDNIGHT_PLUS_SNOW_70, dark: MIDNIGHT_PLUS_SNOW_30 },
    controlBg: colorTransparent,
    labelFg: { light: colors.SLATE, dark: colors.SLATE },
    inputFg: colorFg,
    inputBg: { light: colors.WHITE, dark: TRANSPARENT },
    inputBgHover: { light: colors.WHITE, dark: TRANSPARENT },
    inputBgFocus: { light: colors.SNOW, dark: TRANSPARENT },
    inputBorder: colorBorder,
    inputBorderActive: colorAccent,
    inputBorderInvalid: { light: colors.RED, dark: colors.RED },
    link: { light: colors.OCEAN, dark: colors.OCEAN },
    linkVisited: { light: colors.OCEAN, dark: colors.OCEAN },
    shadow: { light: 'rgba(0, 0, 0, 0.1)', dark: 'rgba(0, 0, 0, 0.4)' }
  },
  fonts: {
    body: 'Graphik, Helvetica, Arial',
    heading: 'Graphik, Helvetica, Arial',
    controls: 'Graphik, Helvetica, Arial'
  },
  weights: {
    normal: 400,
    strong: 600,
    heading: 600,
    preheading: 500,
    controlLabel: 500
  },
  measures: {
    font: '0.875rem',
    inputFont: '0.875rem',
    radius: '0.25rem',
    inputRadius: '0.25rem',
    buttonRadius: '100rem',
    spacer: 1.2,
    buttonSpacerH: 1.5,
    inputSpacerH: 1
  }
}

export const compact = {
  ...groove,
  measures: {
    font: '0.875rem',
    inputFont: '0.875rem',
    radius: '0.25rem',
    inputRadius: '0.25rem',
    buttonRadius: '100rem',
    spacer: 0.875,
    buttonSpacerH: 0.75,
    inputSpacerH: 0.25
  }
}

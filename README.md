# NitramUI

[![npm](https://img.shields.io/npm/v/nitramui)](https://www.npmjs.com/package/nitramui)
[![GitHub stars](https://img.shields.io/github/stars/martinschaer/nitramui)](https://github.com/martinschaer/nitramui)
[![npm](https://img.shields.io/npm/dm/nitramui)](https://www.npmjs.com/package/nitramui)
![GitHub](https://img.shields.io/github/license/martinschaer/nitramui)
[![Join the chat at https://gitter.im/nitramui/community](https://badges.gitter.im/nitramui/community.svg)](https://gitter.im/nitramui/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

---

Don’t worry about design, HTML, and CSS. Just use NitramUI’s components, play around with options, select a built–in theme (or let the user select it), and focus on the rest.

If you want to customize your project’s look and feel, this is not for you. This is for you if you want a design system which is lightweight, easy to use, and user–oriented.

Head over to the [Demo](https://martinschaer.github.io/nitramui).

## Light and Dark Modes

![Screenshot](https://raw.githubusercontent.com/martinschaer/nitramui/master/nitramui.png)
![Screenshot](https://raw.githubusercontent.com/martinschaer/nitramui/master/nitramui-dark.png)

## Design principles

- Convention over customization.
- Complete abstraction from HTML/CSS, which means you can’t set custom classes or style attributes to the elements. Instead, components have their own size–variant properties. For example, Panes have a size property with options like: default, small, full, square, …

## Getting started

### Add fonts and root style

Add these lines in the head of your `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Inter:wght@200;400;600&display=swap" rel="stylesheet">
<style>#root { height: 100%; }</style>
```

This is due to an issue with @import and createGlobalStyle. Read more: [Note regarding css @import and createGlobalStyle](https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle).

## NitramUI options

- customThemes
- availableThemes

## NitramUIContext

- **mode**: (string) current mode name. Default: `light`.
- **setMode**: (function) sets mode.
- **theme**: (string) current theme name. Defaults to the first theme in the availableThemes NitramUI prop, or to `smooth` if availableThemes is not set.
- **setTheme**: (function) sets theme.
- **themes**: (object) available themes, built-in and custom. Default:
     ```JSON
     {
       "smooth": "smooth",
       "hiContrast": "hiContrast"
     }
     ```
- **ds**: (object) design system definition. Each attributed has to be accesed using `getDSVal`. See: [designSystem](src/components/common/designSystem.js)
- **getDSVal**: (function) useful to get mode and theme aware values from the design system. Example: `getDSVal(ds.colors.bg)`

## Change theme and mode

```jsx
import { modes, NitramUI, NitramUIContext } from 'nitramui'

export const App = () => {
  return (
    <NitramUI>
      <NitramUIContext.Consumer>
        {({ mode, setMode }) => (
          <Layout
            menuB={(
              <Control
                type='select'
                value={mode}
                onChange={setMode}
                options={Object.entries(modes).map(([_key, value]) => ({ label: value, value }))}
              />
            )}
          >
            <p>FG color: {getDSVal(ds.colors.fg)}</p>
          </Layout>
        )}
      </NitramUIContext.Consumer>
    </NitramUI>
  )
}
```

## Get design system attributees (theme and mode aware)

```jsx
import { NitramUI, NitramUIContext } from 'nitramui'

export const App = () => {
  return (
    <NitramUI>
      <NitramUIContext.Consumer>
        {({ ds, getDSVal }) => (
          <Layout>
            <p>FG color: {getDSVal(ds.colors.fg)}</p>
          </Layout>
        )}
      </NitramUIContext.Consumer>
    </NitramUI>
  )
}
```

Note: NitramUIContext has to be consumed within NitramUI scope.

## Roadmap

- [x] Use Storybook
- [x] Test reset using createGlobalStyle
- [x] Add Inter, Inconsolata
- [x] Headings font
- [x] top and bottom fixed bars
- [x] Add eslint
- [x] Add themes (smooth, dark, high-contrast, …)
- [x] Add box shadow to design system
- [x] Export GlobalStyle and ThemeProvider (do not export reset)
- [x] Make smooth default theme when there is no ThemeProvider (test in Layout/Full story)
- [x] Build NitramUI into a library
- [x] Add a screenshot
- [x] Add license
- [x] Add Pane size: half
- [x] Fix labelStyles (or just vertical padding) for inputs and selects
- [x] Create form control component (for inputs and selects with or without labels)
- [x] Make onChange optional on controls
- [x] Export design system variables aware of theme and mode
- [x] Add instructions for NitramUIContext.Consumer, and controlling modes and themes
- [x] Add button variants (secondary, text, …)
- [x] Fix too many scrollbars on Windows
- [x] Prevent control labels from being selected (reproduce with double click on them)
- [ ] Add button link (https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)
- [ ] Pass ref to controls
- [ ] Add instructions for customThemes and availableThemes props
- [ ] Add hook for auto dark mode
- [ ] Add packagequality.com badge
- [ ] Create React App template
- [ ] Have the outter pane have the scroll. E.g: default pane inside full-width pane
- [ ] Center panes horizontally
- [ ] Responsive layout (what to do with the sidebar pane?)
- [ ] Check for updates
- [ ] Add terser (https://www.npmjs.com/package/rollup-plugin-terser)
- [ ] Move some dependencies to devDependencies/peerDependencies (does this prevent them to be installed when installed this package, for example popper.js which I think comes from storybook)
- [ ] Add guidelines for contributors
- [ ] Add build badge
- [ ] Add tests
- [ ] Add tests coverage badge
- [ ] Is having funding/sponsors/buy-me-a-beer/bitcoin-wallet a good idea?
- [ ] Create custom font with Glyphsapp Mini

## Useful articles:
- [Guide to building a React components library with Rollup and styled-jsx](https://medium.com/@tomaszmularczyk89/guide-to-building-a-react-components-library-with-rollup-and-styled-jsx-694ec66bd2)
- [Creating a React Component Library using Rollup, Typescript, Sass and Storybook](https://blog.harveydelaney.com/creating-your-own-react-component-library/)
- [How to make a beautiful, tiny npm package and publish it](https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/)

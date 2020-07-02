# NitramUI

[![npm](https://img.shields.io/npm/v/nitramui)](https://www.npmjs.com/package/nitramui)
[![GitHub stars](https://img.shields.io/github/stars/martinschaer/nitramui)](https://github.com/martinschaer/nitramui)
[![npm](https://img.shields.io/npm/dm/nitramui)](https://www.npmjs.com/package/nitramui)
![GitHub](https://img.shields.io/github/license/martinschaer/nitramui)
[![Join the chat at https://gitter.im/nitramui/community](https://badges.gitter.im/nitramui/community.svg)](https://gitter.im/nitramui/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

---

Don’t worry about design, HTML, and CSS. Just use NitramUI’s components, play around with options, select a built–in theme (or let the user select it), and focus on the rest.

If you want to customize your project’s look and feel, this is not for you. This is for you if you want a design system which is lightweight, easy to use, and user–oriented.

## Design principles

- Convention over customization.
- Complete abstraction from HTML/CSS, which means you can’t set custom classes or style attributes to the elements. Instead, components have their own size–variant properties. For example, Panes have a size property with options like: default, small, full, square, …

## Getting started

### Fonts

Import custom fonts in your `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Inter:wght@200;400;600&display=swap" rel="stylesheet">
```

This is due to an issue with @import and createGlobalStyle. Read more: [Note regarding css @import and createGlobalStyle](https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle).

### Themes

TODO: add instructions for ThemeProvider

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
- [ ] Add a screenshot
- [ ] Add license
- [ ] Add instructions for ThemeProvider
- [ ] Make smooth default theme when there is no ThemeProvider (test in Layout/Full story)
- [ ] Add hook for dark mode
- [ ] Add guidelines for contributors
- [ ] Is having funding/sponsors/buy-me-a-beer/bitcoin-wallet a good idea?
- [ ] Add build badge
- [ ] Add tests
- [ ] Add tests coverage badge
- [ ] Create custom font with Glyphsapp Mini

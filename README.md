# NitramUI

[![Join the chat at https://gitter.im/nitramui/community](https://badges.gitter.im/nitramui/community.svg)](https://gitter.im/nitramui/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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

## To-Do:

- [x] Use Storybook
- [x] Test reset using createGlobalStyle
- [x] Add Inter, Inconsolata
- [x] Headings font
- [x] top and bottom fixed bars
- [x] Add eslint
- [x] Add themes (smooth, dark, high-contrast, …)
- [x] Add box shadow to design system
- [ ] Add instructions for ThemeProvider
- [ ] Add a screenshot
- [ ] Make smooth default theme when there is no ThemeProvider (test in Layout/Full story)
- [ ] Pack using Rollup
- [ ] Create custom font with Glyphsapp Mini

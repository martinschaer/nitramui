# NitramUI

## Design principles

- Convention over customization.
- Complete abstraction from HTML/CSS, which means you can’t set custom classes or style attributes to the elements. Instead, components have their own size–variant properties. For example, Panes have a size property with options like: default, small, full, square, …

## Install

Import custom fonts in your `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Inter:wght@200;400;600&display=swap" rel="stylesheet">
```

This is due to an issue with @import and createGlobalStyle. Read more: [Note regarding css @import and createGlobalStyle](https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle).

## To-Do:

- [x] Use Storybook
- [x] Test reset using createGlobalStyle
- [x] Add Inter, Inconsolata
- [x] Headings font
- [x] top and bottom fixed bars
- [x] Add eslint
- [x] Add themes (smooth, dark, high-contrast, …)
- [ ] Make smooth default theme when there is no ThemeProvider (test in Layout/Full story)
- [ ] Add box shadow to design system
- [ ] Pack using Rollup
- [ ] Create custom font with Glyphsapp Mini
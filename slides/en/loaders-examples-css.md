---
prev: <a rel="prev" href="loaders-examples-babel.md">previous</a>
next: <a rel="next" href="loaders-examples-file+url.md">next</a>
---

# Loaders

## [`css-loader`](https://github.com/webpack/css-loader)

- Returns a JS module exporting the given CSS as a string

- Uses `require()` to resolve `@import` and `url()`

- All styles, fonts and images referenced from the CSS file are bundled!

- Can be used to "namespace" CSS by prefixing selectors with random `.class`

```js
const styles = require('css!./path/to/styles.css');
const element = document.createElement('style');

element.type = 'text/css';
element.styleSheet.cssText = styles;
document.head.appendChild( element );
```
<!--{data-bespoke-bullet}-->

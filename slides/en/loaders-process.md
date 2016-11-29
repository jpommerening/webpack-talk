---
prev: <a rel="prev" href="loaders-usage.md">previous</a>
next: <a rel="next" href="loaders-examples.md">next</a>
---

# Ablauf

```js
const code = require( 'style!css!sass!./path/to/code.css' );
```

- `ResolverPlugin` resolves `./path/to/code.css` (relative to the current file)

- `ResolverPlugin` (another instance) resolves `style-loader`, `css-loader`, `sass-loader`

- Reads CSS file from disk, passes raw content to `sass-loader`

- `sass-loader` compiles to CSS and returns result

- Result is passed to `css-loader`

- `css-loader` replaces `url()` with `require()`, returns JS code

- Result is passed to `style-loader`

- `style-loader` generates a module, which executes the code returned by `css-loader` and injects the result into the DOM


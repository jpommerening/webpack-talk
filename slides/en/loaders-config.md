---
prev: <a rel="prev" href="loaders-examples-html+img">previous</a>
next: <a rel="next" href="dev-server">next</a>
---

# Loaders

## Configuration

- Loaders can be set up to handle _file patterns_

- Configured loaders are executed _before_ any loaders in `require()` calls

```js
/* webpack.config.js */
module.exports = {
  /* ... */
  module: {
    loaders: [
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
```
<!--{data-bespoke-bullet}-->

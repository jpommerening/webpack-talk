---
prev: <a rel="prev" href="loaders-examples-html+img">previous</a>
next: <a rel="next" href="dev-server">next</a>
---

# Loaders

## Konfiguration

Loader können auch anhand von Datei-Patterns konfiguriert werden
<!--{p:data-bespoke-bullet=1}-->

Konfigurierte Loader werden _vor_ Loadern in `require()` ausgeführt
<!--{p:data-bespoke-bullet=2}-->

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
<!--{data-bespoke-bullet=3}-->

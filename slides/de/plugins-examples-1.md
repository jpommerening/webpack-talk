---
prev: <a rel="prev" href="plugins-examples.md">previous</a>
next: <a rel="next" href="plugins-examples-2.md">next</a>
---

# Plugins

## `ResolverPlugin`

- Bestandteil von <span class="name">webpack</span>

- Findet Module im Dateisystem

- Hat selbst wieder Plugins die Resolve-Strategien implementieren

- Ist vorkonfiguriert, kann durch eigene Instanz ersetzt werden

```js
const ResolverPlugin = require( 'webpack' ).ResolverPlugin;

module.exports = {
  plugins: [
    new ResolverPlugin( [
      new ResolverPlugin.DirectoryDescriptionFilePlugin( 'bower.json', [ 'main' ] ),
      new ResolverPlugin.DirectoryDescriptionFilePlugin( 'package.json', [ 'browser', 'main' ] )
    ] )
  ]
};
```
<!--{data-bespoke-bullet}-->

<aside>
</aside>

---
prev: <a rel="prev" href="plugins-examples.md">previous</a>
next: <a rel="next" href="plugins-examples-2.md">next</a>
---

# Plugins

## `ResolverPlugin`

Bestandteil von <span class="name">webpack</span> <!--{data-bespoke-bullet=0}-->

Findet Module im Dateisystem <!--{data-bespoke-bullet=1}-->

Hat selbst wieder Plugins die Resolve-Strategien implementieren <!--{data-bespoke-bullet=2}-->

Ist vorkonfiguriert, kann durch eigene Instanz ersetzt werden <!--{data-bespoke-bullet=3}-->

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
<!--{data-bespoke-bullet=4}-->

<aside>
</aside>

---
prev: <a rel="prev" href="plugins-examples.md">previous</a>
next: <a rel="next" href="loaders.md">next</a>
---

# Plugins

## `ResolverPlugin`

Bestandteil von <span class="name">webpack</span> { data-bespoke-bullet=0 }

Findet Module im Dateisystem { data-bespoke-bullet=1 }

Hat selbst wieder Plugins die Resolve-Strategien implementieren { data-bespoke-bullet=2 }

```js {data-bespoke-bullet=3}
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

<!--

## `ExtractTextPlugin`

kann Text/Code (z.B. CSS) während des Builds in externe Datei extrahieren

## `NgAnnotatePlugin`

schreibt ng-annotate Annotationen für sicheres Minifizieren (wäre sinnvoller als Loader und existiert auch als solcher)

## `PrefetchPlugin`

kann Module in den Cache laden bevor sie required werden

-->
<aside>
</aside>

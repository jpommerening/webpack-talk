---
prev: <a rel="prev" href="plugins-examples.md">previous</a>
next: <a rel="next" href="plugins-examples-2.md">next</a>
---

# Plugins

## `ResolverPlugin`

- Part of <span class="name">webpack</span>

- Looks up modules in file system

- Has plugins that implement various resolve-strategies

- Pre-configured but can be overwritten in configuration

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

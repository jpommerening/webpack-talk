---
prev: <a rel="prev" href="loaders.md">previous</a>
next: <a rel="next" href="loaders-process.md">next</a>
---

# Loaders

## Verwendung

```js
const code = require( 'style!css!sass!./path/to/code.scss' );
```

entspricht

_(f<sub style="font-size: 0.8em">style</sub>_ ⋅ _f<sub style="font-size: 0.8em">css</sub>_ ⋅ _f<sub style="font-size: 0.8em">sass</sub>)( code, sourceMap )_ → _( code', sourceMap' )_

<aside>
</aside>

---
prev: <a rel="prev" href="plugins-examples.md">previous</a>
next: <a rel="next" href="loaders-usage.md">next</a>
---

# Loaders

## Functional &amp; composable <!--{data-bespoke-bullet}-->

- _f<sub style="font-size: 0.8em">loader</sub>( code, sourceMap )_ → _( code', sourceMap' )_

- Transform code from one representation to another

- Can be chained

- _f<sub style="font-size: 0.8em">style</sub>( f<sub style="font-size: 0.8em">css</sub>( f<sub style="font-size: 0.8em">sass</sub>( code, sourceMap ) ) )_ → _( code', sourceMap' )_

  or rather

  _(f<sub style="font-size: 0.8em">style</sub>_ ⋅ _f<sub style="font-size: 0.8em">css</sub>_ ⋅ _f<sub style="font-size: 0.8em">sass</sub>)( code, sourceMap )_ → _( code', sourceMap' )_

- Last loader must return a JS module (so it can be bundled)

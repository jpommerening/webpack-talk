---
prev: <a rel="prev" href="plugins-examples.md">previous</a>
next: <a rel="next" href="loaders-usage.md">next</a>
---

# Loaders

## Funktional &amp; Komponierbar <!--{data-bespoke-bullet}-->

- _f<sub style="font-size: 0.8em">loader</sub>( code, sourceMap )_ → _( code', sourceMap' )_

- Transformieren Code von einer Repräsentation oder Sprache in eine andere

- Können verkettet werden

- _f<sub style="font-size: 0.8em">style</sub>( f<sub style="font-size: 0.8em">css</sub>( f<sub style="font-size: 0.8em">sass</sub>( code, sourceMap ) ) )_ → _( code', sourceMap' )_

  bzw.:

  _(f<sub style="font-size: 0.8em">style</sub>_ ⋅ _f<sub style="font-size: 0.8em">css</sub>_ ⋅ _f<sub style="font-size: 0.8em">sass</sub>)( code, sourceMap )_ → _( code', sourceMap' )_

- Spätestens der letzte Loader in der Kette muss JavaScript erzeugen

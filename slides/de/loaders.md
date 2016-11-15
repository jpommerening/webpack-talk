---
prev: <a rel="prev" href="plugins-examples.md">previous</a>
next: <a rel="next" href="loaders-usage.md">next</a>
---

# Loaders

Transformieren Code von einer Repräsentation oder Sprache in eine andere <!--{data-bespoke-bullet=0}-->

Spätestens der letzte Loader in der Kette muss JavaScript erzeugen <!--{data-bespoke-bullet=1}-->

## Funktional <!--{data-bespoke-bullet=2}-->

_f( code, sourceMap )_ → _( code', sourceMap' )_
<!--{p:data-bespoke-bullet=2}-->


## Komponierbar <!--{data-bespoke-bullet=3}-->

_f<sub style="font-size: 0.8em">style</sub>( f<sub style="font-size: 0.8em">css</sub>( f<sub style="font-size: 0.8em">sass</sub>( code, sourceMap ) ) )_ → _( code', sourceMap' )_
<!--{p:data-bespoke-bullet=3}-->

bzw.:
<!--{p:data-bespoke-bullet=3}-->

_(f<sub style="font-size: 0.8em">style</sub>_ ⋅ _f<sub style="font-size: 0.8em">css</sub>_ ⋅ _f<sub style="font-size: 0.8em">sass</sub>)( code, sourceMap )_ → _( code', sourceMap' )_
<!--{p:data-bespoke-bullet=3}-->

<aside>
</aside>

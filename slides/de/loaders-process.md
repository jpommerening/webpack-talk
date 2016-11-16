---
prev: <a rel="prev" href="loaders-usage.md">previous</a>
next: <a rel="next" href="loaders-examples.md">next</a>
---

# Ablauf

```js
const code = require( 'style!css!sass!./path/to/code.css' );
```

`ResolverPlugin` sucht (im aktuellen Kontext) `./path/to/code.css`
<!--{p:data-bespoke-bullet=1}-->

`ResolverPlugin` (andere Instanz) sucht `style-loader`, `css-loader`, `sass-loader`
<!--{p:data-bespoke-bullet=2}-->

Liest CSS-Datei ein, gibt "rohen" Inhalt an `sass-loader` Funktion
<!--{p:data-bespoke-bullet=3}-->

`sass-loader` kompiliert zu CSS und gibt Ergebnis zurück
<!--{p:data-bespoke-bullet=4}-->

Ergebnis wird an `css-loader` übergeben
<!--{p:data-bespoke-bullet=5}-->

`css-loader` ersetzt `url()` durch `require()` und gibt JS Code zurück
<!--{p:data-bespoke-bullet=6}-->

Erbnis wird an `style-loader` übergeben
<!--{p:data-bespoke-bullet=7}-->

`style-loader` generiert JS Modul, welches JS Code aus `css-loader` ausführt und Ergebnis in DOM injiziert
<!--{p:data-bespoke-bullet=8}-->


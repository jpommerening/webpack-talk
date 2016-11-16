---
prev: <a rel="prev" href="loaders-examples-file+url.md">previous</a>
next: <a rel="next" href="loaders-examples-html+img.md">next</a>
---

# Loaders

## `style-loader`

Injiziert CSS-Modul in DOM
<!--{p:data-bespoke-bullet=1}-->

Erlaubt Zugriff auf generierte "namespace-Klassen" aus `css-loader`
<!--{p:data-bespoke-bullet=1}-->

`style-loader/url` kann für externe Styles benutzt werden (vgl. `file-loader`)
<!--{p:data-bespoke-bullet=1}-->

`style-loader/usable` gibt `.use()` / `.unuse()` API zurück um Styles "on-demand" einzubetten
<!--{p:data-bespoke-bullet=1}-->

```js
require( 'style!css!./styles/normalize.css' );
require( 'style/url!file!css!sass!./styles/main.scss' );
```
<!--{data-bespoke-bullet=1}-->

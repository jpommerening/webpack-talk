---
prev: <a rel="prev" href="loaders-examples-file+url.md">previous</a>
next: <a rel="next" href="loaders-examples-html+img.md">next</a>
---

# Loaders

## [`style-loader`](https://github.com/webpack/style-loader)

- Injiziert CSS-Modul in DOM

- Erlaubt Zugriff auf generierte "namespace-Klassen" aus `css-loader`

- `style-loader/url` kann für externe Styles benutzt werden (vgl. `file-loader`)

- `style-loader/usable` gibt `.use()` / `.unuse()` API zurück um Styles "on-demand" einzubetten

```js
require( 'style!css!./styles/normalize.css' );
require( 'style/url!file!css!sass!./styles/main.scss' );
```
<!--{data-bespoke-bullet}-->

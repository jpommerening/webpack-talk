---
prev: <a rel="prev" href="loaders-usage.md">previous</a>
next: <a rel="next" href="loaders-examples.md">next</a>
---

# Ablauf

```js
const code = require( 'style!css!sass!./path/to/code.css' );
```

- `ResolverPlugin` sucht (im aktuellen Kontext) `./path/to/code.css`

- `ResolverPlugin` (andere Instanz) sucht `style-loader`, `css-loader`, `sass-loader`

- Liest CSS-Datei ein, gibt "rohen" Inhalt an `sass-loader` Funktion

- `sass-loader` kompiliert zu CSS und gibt Ergebnis zurück

- Ergebnis wird an `css-loader` übergeben

- `css-loader` ersetzt `url()` durch `require()` und gibt JS Code zurück

- Erbnis wird an `style-loader` übergeben

- `style-loader` generiert JS Modul, welches JS Code aus `css-loader` ausführt und Ergebnis in DOM injiziert


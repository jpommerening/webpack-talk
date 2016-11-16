---
prev: <a rel="prev" href="loaders-examples-babel.md">previous</a>
next: <a rel="next" href="loaders-examples-file+url.md">next</a>
---

# Loaders

## [`css-loader`](https://github.com/webpack/css-loader)

- Gibt JS-Modul zurück, das CSS als String exportiert

- Löst `@import` und `url()` Anweisungen in `require()` Aufrufe auf

- Alle referenzierten CSS-Dateien, Schriften und Grafiken landen im Bundle!

- Kann CSS-Module mit zufallsgeneriertem `class`-Selektor "namespacen"

```js
const styles = require('css!./path/to/styles.css');
const element = document.createElement('style');

element.type = 'text/css';
element.styleSheet.cssText = styles;
document.head.appendChild( element );
```
<!--{data-bespoke-bullet}-->

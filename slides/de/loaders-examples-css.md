---
prev: <a rel="prev" href="loaders-examples-babel.md">previous</a>
next: <a rel="next" href="loaders-examples-file+url.md">next</a>
---

# Loaders

## `css-loader`

Gibt JS-Modul zurück, das CSS als String exportiert <!--{p:data-bespoke-bullet=0}-->

Löst `@import` und `url()` Anweisungen in `require()` Aufrufe auf <!--{p:data-bespoke-bullet=1}-->

Alle referenzierten CSS-Dateien, Schriften und Grafiken landen im Bundle! <!--{p:data-bespoke-bullet=2}-->

Kann CSS-Module mit zufallsgeneriertem `class`-Selektor "namespacen" <!--{p:data-bespoke-bullet=3}-->

```js
const styles = require('css!./path/to/styles.css');
const element = document.createElement('style');

element.type = 'text/css';
element.styleSheet.cssText = styles;
document.head.appendChild( element );
```
<!--{data-bespoke-bullet=4}-->

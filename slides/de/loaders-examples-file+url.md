---
prev: <a rel="prev" href="loaders-examples-css.md">previous</a>
next: <a rel="next" href="loaders-examples-style.md">next</a>
---

# Loaders

## [`file-loader`](https://github.com/webpack/file-loader), [`url-loader`](https://github.com/webpack/url-loader)

- Speichern übergebenen Code in externe Datei und geben URL zurück

- `url-loader` kann statt Dateien auch `data:`-URLs erzeugen

```css
.icon-webpack {
  background-image: url(file!./webpack-logo-tiny.png);
}
```
<!--{data-bespoke-bullet}-->

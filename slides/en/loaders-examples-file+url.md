---
prev: <a rel="prev" href="loaders-examples-css.md">previous</a>
next: <a rel="next" href="loaders-examples-style.md">next</a>
---

# Loaders

## [`file-loader`](https://github.com/webpack/file-loader), [`url-loader`](https://github.com/webpack/url-loader)

- Store input in a file and return resolved URL

- `url-loader` can return `data:`-URLs for files that are small than _x_ bytes

```css
.icon-webpackjs {
  background-image: url(file!./webpack-logo-tiny.png);
}
```
<!--{data-bespoke-bullet}-->

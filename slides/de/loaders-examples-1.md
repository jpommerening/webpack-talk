---
prev: <a re="prev" href="loaders-examples.md">previous</a>
next: <a re="prev" href="loaders-examples-1.md">next</a>
---

# Loaders

## `css-loader`

gibt JS-Modul zurück, dass CSS als String exportiert

löst `@import` Anweisungen und `url()` Eigenschaften in `require()` Aufrufe auf

alle referenzierten CSS-Dateien, Schriften und Grafik landen im Bundle!

kann CSS-Module "namespacen" indem er alle Selektoren mit zufallsgeneriertem`class`-Selektor prefixed

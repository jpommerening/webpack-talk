webpackJsonp([1],[,,,,,,,,,,,,function(e,s,a){e.exports=a.p+"assets/webpack-5e7b2c.png"},,function(e,s){"use strict";e.exports="<hr><h1>Demo</h1><hr>"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,s,a){e.exports=a.p+"assets/grunt-df0ee3.png"},function(e,s,a){e.exports=a.p+"assets/gulp-14cb08.png"},,function(e,s,a){e.exports=a.p+"assets/requirejs-7fc87b.png"},,,function(e,s){e.exports=" <h1>Architektur</h1> <h2 data-bespoke-bullet=0>Auf den ersten Blick</h2> <p data-bespoke-bullet=1>monolithisch</p> <p data-bespoke-bullet=1>erschlagende Menge an Konfiguration</p> <h2 data-bespoke-bullet=2>Aber</h2> <p data-bespoke-bullet=3>kleiner Kern + Funktion in Plugins gegliedert</p> <p data-bespoke-bullet=3>großes Ökosystem an Plugins und Loadern</p> <aside> </aside> "},function(e,s,a){e.exports=" <h1 data-bespoke-bullet=1><span class=tool-logo><img src="+a(78)+' height=48 alt="grunt logo"/></span> <a href=http://gruntjs.com>Grunt</a></h1> <p data-bespoke-bullet=1><strong>Tasks</strong> und Dateien</p> <h1 data-bespoke-bullet=2><span class=tool-logo><img src='+a(79)+' height=48 alt="gulp logo"/></span> <a href=http://gulpjs.com>Gulp</a></h1> <p data-bespoke-bullet=2><strong>Dateien</strong> und Transform-Pipelines</p> <h1 data-bespoke-bullet=3><span class=tool-logo><img src='+a(81)+' height=48 alt="requirejs logo"/></span> <a href=http://requirejs.org>RequireJS</a></h1> <p data-bespoke-bullet=3><strong>Module</strong> und Plugins</p> <h1 data-bespoke-bullet=4><span class=tool-logo><img src='+a(12)+' height=48 alt="webpack logo"/></span> <a href=https://webpack.github.io>webpack</a></h1> <p data-bespoke-bullet=4><strong>Module</strong> und Loader-Pipelines</p> '},function(e,s){e.exports=" <h1><a href=https://github.com/webpack/webpack-dev-server><code>webpack-dev-server</code></a></h1> <p data-bespoke-bullet=1>Kleiner HTTP-Server, der Module automatisch baut</p> <p data-bespoke-bullet=1>Greift Zugriffe auf generierte Dateien ab und kompiliert in-Memory</p> <p data-bespoke-bullet=1>Inkrementelles Hot-Reload</p> "},function(e,s){e.exports=' <h1>Was ist <span class=name>webpack</span>?</h1> <p>Laut Website ein “<span class="name caps">module bundler</span>”</p> '},function(e,s){e.exports=" <h1>Loaders</h1> <h2>Konfiguration</h2> <p data-bespoke-bullet=1>Loader können auch anhand von Datei-Patterns konfiguriert werden</p> <p data-bespoke-bullet=2>Konfigurierte Loader werden <em>vor</em> Loadern in <code>require()</code> ausgeführt</p> <pre><code data-bespoke-bullet=3 class=language-js><span class=hljs-comment>/* webpack.config.js */</span>\n<span class=hljs-built_in>module</span>.exports = {\n  <span class=hljs-comment>/* ... */</span>\n  <span class=hljs-built_in>module</span>: {\n    <span class=hljs-attr>loaders</span>: [\n      {\n        <span class=hljs-attr>test</span>: <span class=hljs-regexp>/\\.(jsx?)$/</span>,\n        <span class=hljs-attr>loader</span>: <span class=hljs-string>'babel-loader'</span>\n      },\n      {\n        <span class=hljs-attr>test</span>: <span class=hljs-regexp>/\\.json$/</span>,\n        <span class=hljs-attr>loader</span>: <span class=hljs-string>'json-loader'</span>\n      }\n    ]\n  }\n};\n</code></pre> "},function(e,s){e.exports=" <h1>Loaders</h1> <h2><a href=https://github.com/babel/babel-loader><code>babel-loader</code></a></h2> <p>Kompiliert ES2015 mit Babel</p> "},function(e,s){e.exports=" <h1>Loaders</h1> <h2><a href=https://github.com/webpack/css-loader><code>css-loader</code></a></h2> <p data-bespoke-bullet=0>Gibt JS-Modul zurück, das CSS als String exportiert</p> <p data-bespoke-bullet=1>Löst <code>@import</code> und <code>url()</code> Anweisungen in <code>require()</code> Aufrufe auf</p> <p data-bespoke-bullet=2>Alle referenzierten CSS-Dateien, Schriften und Grafiken landen im Bundle!</p> <p data-bespoke-bullet=3>Kann CSS-Module mit zufallsgeneriertem <code>class</code>-Selektor “namespacen”</p> <pre><code data-bespoke-bullet=4 class=language-js><span class=hljs-keyword>const</span> styles = <span class=hljs-built_in>require</span>(<span class=hljs-string>'css!./path/to/styles.css'</span>);\n<span class=hljs-keyword>const</span> element = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'style'</span>);\n\nelement.type = <span class=hljs-string>'text/css'</span>;\nelement.styleSheet.cssText = styles;\n<span class=hljs-built_in>document</span>.head.appendChild( element );\n</code></pre> "},function(e,s){e.exports=" <h1>Loaders</h1> <h2><a href=https://github.com/webpack/file-loader><code>file-loader</code></a>, <a href=https://github.com/webpack/url-loader><code>url-loader</code></a></h2> <p data-bespoke-bullet=1>Speichern übergebenen Code in externe Datei und geben URL zurück</p> <p data-bespoke-bullet=2><code>url-loader</code> kann statt Dateien auch <code>data:</code>-URLs erzeugen</p> <pre><code data-bespoke-bullet=3 class=language-css><span class=hljs-selector-class>.icon-laxarjs</span> {\n  <span class=hljs-attribute>background-image</span>: <span class=hljs-built_in>url</span>(file!./laxar-logo-tiny.png);\n}\n</code></pre> "},function(e,s){e.exports=" <h1>Loaders</h1> <h2><a href=https://github.com/webpack/html-loader><code>html-loader</code></a></h2> <p data-bespoke-bullet=0>Gibt JS-Modul zurück, dass HTML als String exportiert</p> <p data-bespoke-bullet=1>Löst Bild- und Scriptquellen, sowies CSS Links in <code>require()</code> Aufrufe auf</p> <h2 data-bespoke-bullet=2><a href=https://github.com/thetalecrafter/img-loader><code>img-loader</code></a></h2> <p data-bespoke-bullet=2>Optimiert Grafiken mit <code>optipng</code>, <code>jpegtran</code>, <code>gifsicle</code>, <code>svgo</code></p> "},function(e,s){e.exports=" <h1>Loaders</h1> <h2><a href=https://github.com/webpack/style-loader><code>style-loader</code></a></h2> <p data-bespoke-bullet=1>Injiziert CSS-Modul in DOM</p> <p data-bespoke-bullet=1>Erlaubt Zugriff auf generierte “namespace-Klassen” aus <code>css-loader</code></p> <p data-bespoke-bullet=1><code>style-loader/url</code> kann für externe Styles benutzt werden (vgl. <code>file-loader</code>)</p> <p data-bespoke-bullet=1><code>style-loader/usable</code> gibt <code>.use()</code> / <code>.unuse()</code> API zurück um Styles “on-demand” einzubetten</p> <pre><code data-bespoke-bullet=1 class=language-js><span class=hljs-built_in>require</span>( <span class=hljs-string>'style!css!./styles/normalize.css'</span> );\n<span class=hljs-built_in>require</span>( <span class=hljs-string>'style/url!file!css!sass!./styles/main.scss'</span> );\n</code></pre> "},function(e,s){e.exports=" <hr> <h1>Loaders</h1> <h2>Beispiele</h2> <hr> <aside> </aside> "},function(e,s){e.exports=" <h1>Ablauf</h1> <pre><code class=language-js><span class=hljs-keyword>const</span> code = <span class=hljs-built_in>require</span>( <span class=hljs-string>'style!css!sass!./path/to/code.css'</span> );\n</code></pre> <p data-bespoke-bullet=1><code>ResolverPlugin</code> sucht (im aktuellen Kontext) <code>./path/to/code.css</code></p> <p data-bespoke-bullet=2><code>ResolverPlugin</code> (andere Instanz) sucht <code>style-loader</code>, <code>css-loader</code>, <code>sass-loader</code></p> <p data-bespoke-bullet=3>Liest CSS-Datei ein, gibt “rohen” Inhalt an <code>sass-loader</code> Funktion</p> <p data-bespoke-bullet=4><code>sass-loader</code> kompiliert zu CSS und gibt Ergebnis zurück</p> <p data-bespoke-bullet=5>Ergebnis wird an <code>css-loader</code> übergeben</p> <p data-bespoke-bullet=6><code>css-loader</code> ersetzt <code>url()</code> durch <code>require()</code> und gibt JS Code zurück</p> <p data-bespoke-bullet=7>Erbnis wird an <code>style-loader</code> übergeben</p> <p data-bespoke-bullet=8><code>style-loader</code> generiert JS Modul, welches JS Code aus <code>css-loader</code> ausführt und Ergebnis in DOM injiziert</p> "},function(e,s){e.exports=" <h1>Loaders</h1> <h2>Verwendung</h2> <pre><code class=language-js><span class=hljs-keyword>const</span> code = <span class=hljs-built_in>require</span>( <span class=hljs-string>'style!css!sass!./path/to/code.scss'</span> );\n</code></pre> <p>entspricht</p> <p><em>(f<sub style=font-size:.8em>style</sub></em> ⋅ <em>f<sub style=font-size:.8em>css</sub></em> ⋅ <em>f<sub style=font-size:.8em>sass</sub>)( code, sourceMap )</em> → <em>( code’, sourceMap’ )</em></p> <aside> </aside> "},function(e,s){e.exports=" <h1>Loaders</h1> <h2 data-bespoke-bullet=1>Funktional &amp; Komponierbar</h2> <p data-bespoke-bullet=1><em>f<sub style=font-size:.8em>loader</sub>( code, sourceMap )</em> → <em>( code’, sourceMap’ )</em></p> <p data-bespoke-bullet=2>Transformieren Code von einer Repräsentation oder Sprache in eine andere</p> <p data-bespoke-bullet=2>Können verkettet werden</p> <p data-bespoke-bullet=3><em>f<sub style=font-size:.8em>style</sub>( f<sub style=font-size:.8em>css</sub>( f<sub style=font-size:.8em>sass</sub>( code, sourceMap ) ) )</em> → <em>( code’, sourceMap’ )</em></p> <p data-bespoke-bullet=3>bzw.:</p> <p data-bespoke-bullet=3><em>(f<sub style=font-size:.8em>style</sub></em> ⋅ <em>f<sub style=font-size:.8em>css</sub></em> ⋅ <em>f<sub style=font-size:.8em>sass</sub>)( code, sourceMap )</em> → <em>( code’, sourceMap’ )</em></p> <p data-bespoke-bullet=4>Spätestens der letzte Loader in der Kette muss JavaScript erzeugen</p> <aside> </aside> "},function(e,s){e.exports=" <h1>Plugins</h1> <h2><code>ResolverPlugin</code></h2> <p data-bespoke-bullet=0>Bestandteil von <span class=name>webpack</span></p> <p data-bespoke-bullet=1>Findet Module im Dateisystem</p> <p data-bespoke-bullet=2>Hat selbst wieder Plugins die Resolve-Strategien implementieren</p> <p data-bespoke-bullet=3>Ist vorkonfiguriert, kann durch eigene Instanz ersetzt werden</p> <pre><code data-bespoke-bullet=4 class=language-js><span class=hljs-keyword>const</span> ResolverPlugin = <span class=hljs-built_in>require</span>( <span class=hljs-string>'webpack'</span> ).ResolverPlugin;\n\n<span class=hljs-built_in>module</span>.exports = {\n  <span class=hljs-attr>plugins</span>: [\n    <span class=hljs-keyword>new</span> ResolverPlugin( [\n      <span class=hljs-keyword>new</span> ResolverPlugin.DirectoryDescriptionFilePlugin( <span class=hljs-string>'bower.json'</span>, [ <span class=hljs-string>'main'</span> ] ),\n      <span class=hljs-keyword>new</span> ResolverPlugin.DirectoryDescriptionFilePlugin( <span class=hljs-string>'package.json'</span>, [ <span class=hljs-string>'browser'</span>, <span class=hljs-string>'main'</span> ] )\n    ] )\n  ]\n};\n</code></pre> <aside> </aside> "},function(e,s){e.exports=" <h1>Plugins</h1> <h2><code>ExtractTextPlugin</code></h2> <p data-bespoke-bullet=0>Kann Text/Code (z.B. CSS) während des Builds in externe Datei extrahieren</p> <h2><code data-bespoke-bullet=1>NgAnnotatePlugin</code></h2> <p data-bespoke-bullet=1>Schreibt ng-annotate Annotationen für sicheres Minifizieren (wäre sinnvoller als Loader und existiert auch als solcher)</p> <h2><code data-bespoke-bullet=2>PrefetchPlugin</code></h2> <p data-bespoke-bullet=2>Kann Module in den Cache laden bevor sie importiert werden</p> <aside> </aside> "},function(e,s){e.exports=" <hr> <h1>Plugins</h1> <h2>Beispiele</h2> <hr> <aside> </aside> "},function(e,s){e.exports=" <h1>Plugins</h1> <h2>Verwendung</h2> <pre><code class=language-js><span class=hljs-comment>/* webpack.config.js */</span>\n<span class=hljs-keyword>const</span> webpack = <span class=hljs-built_in>require</span>( <span class=hljs-string>'webpack'</span> );\n<span class=hljs-built_in>module</span>.exports = {\n  <span class=hljs-attr>plugins</span>: [\n    <span class=hljs-keyword>new</span> webpack.optimize.UglifyJsPlugin( { <span class=hljs-comment>/* options */</span> } )\n  ]\n};\n</code></pre> <aside> </aside> "},function(e,s){e.exports=" <h1>Plugins</h1> <p data-bespoke-bullet=0>Klinken sich an definierten Punkten in den <span class=name>webpack</span> Mechanismus ein</p> <p data-bespoke-bullet=1><span class=name>webpack</span> ist weitestgehend aus Plugins zusammengesetzt</p> <p data-bespoke-bullet=2>In der Praxis jedoch selten relevant</p> <aside> </aside> "},function(e,s,a){e.exports="<img src="+a(12)+' alt="webpack logo" class=plain /> <h1 class=name>webpack</h1> <aside> </aside> '},,,function(e,s,a){var t=[{html:a(103),data:{"bespoke-hash":"webpack"}},{html:a(87),data:{"bespoke-hash":"intro"}},{html:"",data:{"bespoke-hash":"intro-2","bespoke-backdrop":"walter"}},{html:a(85),data:{"bespoke-hash":"comparison"}},{html:a(84),data:{"bespoke-hash":"architecture"}},{html:a(102),data:{"bespoke-hash":"plugins"}},{html:a(101),data:{"bespoke-hash":"plugins-usage"}},{html:a(100),data:{"bespoke-hash":"plugins-examples"}},{html:a(98),data:{"bespoke-hash":"plugins-examples-1"}},{html:a(99),data:{"bespoke-hash":"plugins-examples-2"}},{html:a(97),data:{"bespoke-hash":"loaders"}},{html:a(96),data:{"bespoke-hash":"loaders-usage"}},{html:"",data:{"bespoke-hash":"loaders-what","bespoke-backdrop":"jesse"}},{html:a(95),data:{"bespoke-hash":"loaders-process"}},{html:a(94),data:{"bespoke-hash":"loaders-examples"}},{html:a(89),data:{"bespoke-hash":"loaders-examples-babel"}},{html:a(90),data:{"bespoke-hash":"loaders-examples-css"}},{html:a(91),data:{"bespoke-hash":"loaders-examples-file+url"}},{html:a(93),data:{"bespoke-hash":"loaders-examples-style"}},{html:a(92),data:{"bespoke-hash":"loaders-examples-html+img"}},{html:a(88),data:{"bespoke-hash":"loaders-config"}},{html:a(86),data:{"bespoke-hash":"dev-server"}},{html:a(14),data:{"bespoke-hash":"demo"}},{html:"",data:{"bespoke-hash":"whoa","bespoke-backdrop":"whoa"}}];e.exports=t.map(function(e){var s=document.createElement("section");return s.innerHTML=e.html,Object.keys(e.data).forEach(function(a){s.setAttribute("data-"+a,e.data[a])}),s})}]);
//# sourceMappingURL=de.js.map
!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,i){for(var a,s,c=0,l=[];c<r.length;c++)s=r[c],o[s]&&l.push.apply(l,o[s]),o[s]=0;for(a in i)e[a]=i[a];for(n&&n(r,i);l.length;)l.shift().call(null,t)};var r={},o={0:0};return t.e=function(e,n){if(0===o[e])return n.call(null,t);if(void 0!==o[e])o[e].push(n);else{o[e]=[n];var r=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=t.p+""+e+"."+({1:"de",2:"en"}[e]||e)+".js",r.appendChild(i)}},t.m=e,t.c=r,t.p="dist/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=document.querySelector("#talk"),n=t.querySelector("section");e.forEach(function(e){return t.insertBefore(e,n)}),S=a.default.from(t,[(0,c.default)(),(0,u.default)(),(0,p.default)(),(0,h.default)(),(0,m.default)(),(0,y.default)(),(0,x.default)({visible:!1}),(0,k.default)()]),S.slide(E)}var i=n(73),a=r(i),s=n(16),c=r(s),l=n(17),u=r(l),f=n(5),p=r(f),d=n(18),h=r(d),b=n(19),m=r(b),v=n(20),y=r(v),g=n(22),x=r(g),w=n(72),k=r(w),j=n(105),O=(r(j),n(15)),_=r(O),S=void 0,E=0;(0,_.default)("de",o)},function(e,t){"use strict";e.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function");return e}},function(e,t){"use strict";e.exports=function(e){if(null==e)throw new TypeError("Cannot use null or undefined");return e}},function(e,t,n){"use strict";var r=n(55),o=Math.max;e.exports=function(e){return o(0,r(e))}},function(e,t,n){"use strict";e.exports=n(57)()?Object.assign:n(58)},function(e,t){e.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},r=function(r,o){var i=e.slides[e.slide()],a=o-e.slide(),s=a>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,r)),r!==i&&["inactive",s,s+"-"+Math.abs(a)].map(t.bind(null,r))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(o){e.slides.map(r),t(o.slide,"active"),n(o.slide,"inactive")})}}},function(e,t,n){"use strict";var r,o=n(4),i=n(9),a=n(8),s=n(10);r=e.exports=function(e,t){var n,r,a,c,l;return arguments.length<2||"string"!=typeof e?(c=t,t=e,e=null):c=arguments[2],null==e?(n=a=!0,r=!1):(n=s.call(e,"c"),r=s.call(e,"e"),a=s.call(e,"w")),l={value:t,configurable:n,enumerable:r,writable:a},c?o(i(c),l):l},r.gs=function(e,t,n){var r,c,l,u;return"string"!=typeof e?(l=n,n=t,t=e,e=null):l=arguments[3],null==t?t=void 0:a(t)?null==n?n=void 0:a(n)||(l=n,n=void 0):(l=t,t=n=void 0),null==e?(r=!0,c=!1):(r=s.call(e,"c"),c=s.call(e,"e")),u={get:t,set:n,configurable:r,enumerable:c},l?o(i(l),u):u}},function(e,t,n){"use strict";e.exports=n(56)("forEach")},function(e,t){"use strict";e.exports=function(e){return"function"==typeof e}},function(e,t){"use strict";var n=Array.prototype.forEach,r=Object.create,o=function(e,t){var n;for(n in e)t[n]=e[n]};e.exports=function(e){var t=r(null);return n.call(arguments,function(e){null!=e&&o(Object(e),t)}),t}},function(e,t,n){"use strict";e.exports=n(66)()?String.prototype.contains:n(67)},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},,function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],c=o[3],l={css:a,media:s,sourceMap:c};n[i]?n[i].parts.push(l):t.push(n[i]={id:i,parts:[l]})}return t}function i(e,t){var n=m(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function l(e,t){var n,r,o;if(t.singleton){var i=y++;n=v||(v=s(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,i.push(c)}if(e){var l=o(e);r(l,t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return l[e](t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(74),a=r(i),s=n(75),c=r(s),l={de:a.default,en:c.default}},function(e,t){e.exports=function(){return function(e){function t(t){var n=t.getAttribute("data-bespoke-backdrop");if(n){var r=document.createElement("div");return r.className=n,r.classList.add("bespoke-backdrop"),e.parent.appendChild(r),r}}function n(t){if(t){var n=i.indexOf(t),a=e.slide();r(t,"active"),r(t,"inactive"),r(t,"before"),r(t,"after"),n!==a?(o(t,"inactive"),o(t,n<a?"before":"after")):o(t,"active")}}function r(e,t){e.classList.remove("bespoke-backdrop-"+t)}function o(e,t){e.classList.add("bespoke-backdrop-"+t)}var i;i=e.slides.map(t),e.on("activate",function(){i.forEach(n)})}}},function(e,t){e.exports=function(e){return function(t){var n,r,o=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),i=function(){var e=n+1;return c(1)?(s(n,r+1),!1):void(o[e]&&s(e,0))},a=function(){var e=n-1;return c(-1)?(s(n,r-1),!1):void(o[e]&&s(e,o[e].length-1))},s=function(e,t){n=e,r=t,o.forEach(function(n,r){n.forEach(function(n,o){n.classList.add("bespoke-bullet"),r<e||r===e&&o<=t?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),r===e&&o===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},c=function(e){return void 0!==o[n][r+e]};t.on("next",i),t.on("prev",a),t.on("slide",function(e){s(e.index,0)}),s(0,0)}}},function(e,t){e.exports=function(){return function(e){var t=70,n=122,r="keydown",o=function(){var e,t;t=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?(e=document).exitFullscreen||e.webkitExitFullscreen||e.mozCancelFullScreen||e.msExitFullscreen:(e=document.documentElement).requestFullscreen||e.webkitRequestFullscreen||e.mozRequestFullScreen||e.msRequestFullscreen,t.apply(e)},i=function(e){return!!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)},a=function(e){var r=e.which;r!==t&&r!==n||i(e)||(o(),r===n&&e.preventDefault())};(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&(e.on("destroy",function(){document.removeEventListener(r,a)}),e.on("fullscreen.toggle",o),document.addEventListener(r,a))}}},function(e,t){e.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),r=parseInt(t,10);t&&(r?n(r-1):e.slides.forEach(function(e,r){e.getAttribute("data-bespoke-hash")===t&&n(r)}))},n=function(t){var n=-1<t&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},function(e,t){e.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},function(e,t,n){"use strict";var r,o=n(64),i=n(70),a=n(71),s=n(25),c=n(5),l=o("input","select","textarea"),u=/^matrix\(([\d\.]+),/,f=function(e){var t;return location.search?(t=i(location.search.slice(1))[e],null==t?null:!t||Boolean(Number(t))):null},p=function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!0),window.dispatchEvent(e)},d=function(e){var t,n=Number(window.getComputedStyle(e).zoom)||1;return 1!==n?n:(t=window.getComputedStyle(e.parentNode).transform.match(u),t?Number(t[1])||1:1)},h=function(){var e,t,n,o,i=window.innerWidth,a=document.querySelector(".bespoke-active");if(a){if(e=d(a),e===r)return;r=e,t=a.offsetWidth*e,i&&t&&(n=(i/2/t).toFixed(3),o="scale("+n+") translateX(-50%)",s.call(document,{"body.notes .bespoke-slide":{"-webkit-transform":o,transform:o}}))}};e.exports=function(){var e=Object(arguments[1]),t=Boolean(e.visible),n=e.key||78,r="notes";return e.queryToken===!1?r=null:e.queryToken&&e.queryToken!==!0&&(r=e.queryToken),function(e){var o,s,u;e.parent.classList.contains("bespoke-parent")||c()(e),r&&(u=f(r),null!=u&&(t=u),window.addEventListener("popstate",function(){o(Boolean(f(r)))})),o=function(e){var t,n,o;s!==e&&(s=e,e?document.body.classList.add("notes"):document.body.classList.remove("notes"),r&&(o=location.pathname,t=location.search?i(location.search.slice(1)):{},e?t[r]=null:delete t[r],n=a(t),n&&(o+="?"+n.replace(/(?:=&)/g,"&").replace(/\=$/,"")),location.hash&&(o+=location.hash),history.pushState({},"",o),p()))},document.addEventListener("keydown",function(e){e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.which===n&&(l[e.target.nodeName.toLowerCase()]||(e.preventDefault(),o(!s)))},!1),o(t),setInterval(h,200)}}},function(e,t,n){"use strict";n(104),e.exports=n(21)},function(e,t){"use strict";e.exports=function(e){return e&&9===e.nodeType&&"#document"===e.nodeName||!1}},function(e,t){"use strict";e.exports=function(e){return e&&1===e.nodeType&&"string"==typeof e.nodeName||!1}},function(e,t,n){"use strict";var r,o,i=n(7),a=n(59),s=n(65),c=n(35),l=n(27);r=c(function(e){var t=e.head.appendChild(e.createElement("style"));return t.setAttribute("type","text/css"),t},{normalizer:n(34)()}),o=function(e){var t=[];return i(e,function(e,n){t.push(n+" {"),i(e,function(e,n){t.push("\t"+s.call(n)+": "+e+";")}),t.push("}")}),t.join("\n")},e.exports=function(e){l(this),a(e)&&(e=o(e)),r(this).appendChild(this.createTextNode(e+"\n"))}},function(e,t,n){"use strict";var r=n(23),o=n(24);e.exports=function(e){return r(e)&&o(e.head)}},function(e,t,n){"use strict";var r=n(26);e.exports=function(e){if(!r(e))throw new TypeError(e+" is not a HTMLDocument");return e}},function(e,t,n){"use strict";var r=n(41),o=n(42),i=n(6),a=n(33).methods,s=n(32),c=n(31),l=Function.prototype.apply,u=Function.prototype.call,f=Object.create,p=Object.prototype.hasOwnProperty,d=Object.defineProperties,h=a.on,b=a.emit;e.exports=function(e,t,n){var a,m,v,y,g,x,w,k,j,O,_,S,E,z=f(null);return m=t!==!1?t:isNaN(e.length)?1:e.length,n.normalizer&&(k=c(n.normalizer),v=k.get,y=k.set,g=k.delete,x=k.clear),null!=n.resolvers&&(E=s(n.resolvers)),S=v?o(function(t){var n,o,i=arguments;if(E&&(i=E(i)),n=v(i),null!==n&&p.call(z,n))return j&&a.emit("get",n,i,this),z[n];if(o=1===i.length?u.call(e,this,i[0]):l.call(e,this,i),null===n){if(n=v(i),null!==n)throw r("Circular invocation","CIRCULAR_INVOCATION");n=y(i)}else if(p.call(z,n))throw r("Circular invocation","CIRCULAR_INVOCATION");return z[n]=o,O&&a.emit("set",n),o},m):0===t?function(){var t;if(p.call(z,"data"))return j&&a.emit("get","data",arguments,this),z.data;if(t=arguments.length?l.call(e,this,arguments):u.call(e,this),p.call(z,"data"))throw r("Circular invocation","CIRCULAR_INVOCATION");return z.data=t,O&&a.emit("set","data"),t}:function(t){var n,o,i=arguments;if(E&&(i=E(arguments)),o=String(i[0]),p.call(z,o))return j&&a.emit("get",o,i,this),z[o];if(n=1===i.length?u.call(e,this,i[0]):l.call(e,this,i),p.call(z,o))throw r("Circular invocation","CIRCULAR_INVOCATION");return z[o]=n,O&&a.emit("set",o),n},a={original:e,memoized:S,get:function(e){return E&&(e=E(e)),v?v(e):String(e[0])},has:function(e){return p.call(z,e)},delete:function(e){var t;p.call(z,e)&&(g&&g(e),t=z[e],delete z[e],_&&a.emit("delete",e,t))},clear:function(){var e=z;x&&x(),z=f(null),a.emit("clear",e)},on:function(e,t){return"get"===e?j=!0:"set"===e?O=!0:"delete"===e&&(_=!0),h.call(this,e,t)},emit:b,updateEnv:function(){e=a.original}},w=v?o(function(e){var t,n=arguments;E&&(n=E(n)),t=v(n),null!==t&&a.delete(t)},m):0===t?function(){return a.delete("data")}:function(e){return E&&(e=E(arguments)[0]),a.delete(e)},d(S,{__memoized__:i(!0),delete:i(w),clear:i(a.clear)}),a}},function(e,t){"use strict"},function(e,t,n){"use strict";var r=n(3);e.exports=function(e,t,n){var o;return isNaN(e)?(o=t,o>=0?n&&o?o-1:o:1):e!==!1&&r(e)}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e){var t;return"function"==typeof e?{set:e,get:e}:(t={get:r(e.get)},void 0!==e.set?(t.set=r(e.set),t.delete=r(e.delete),t.clear=r(e.clear),t):(t.set=t.get,t))}},function(e,t,n){"use strict";var r,o=n(40),i=n(1),a=Array.prototype.slice;r=function(e){return this.map(function(t,n){return t?t(e[n]):e[n]}).concat(a.call(e,this.length))},e.exports=function(e){return e=o(e),e.forEach(function(e){null!=e&&i(e)}),r.bind(e)}},function(e,t,n){"use strict";var r,o,i,a,s,c,l,u=n(6),f=n(1),p=Function.prototype.apply,d=Function.prototype.call,h=Object.create,b=Object.defineProperty,m=Object.defineProperties,v=Object.prototype.hasOwnProperty,y={configurable:!0,enumerable:!1,writable:!0};r=function(e,t){var n;return f(t),v.call(this,"__ee__")?n=this.__ee__:(n=y.value=h(null),b(this,"__ee__",y),y.value=null),n[e]?"object"==typeof n[e]?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},o=function(e,t){var n,o;return f(t),o=this,r.call(this,e,n=function(){i.call(o,e,n),p.call(t,this,arguments)}),n.__eeOnceListener__=t,this},i=function(e,t){var n,r,o,i;if(f(t),!v.call(this,"__ee__"))return this;if(n=this.__ee__,!n[e])return this;if(r=n[e],"object"==typeof r)for(i=0;o=r[i];++i)o!==t&&o.__eeOnceListener__!==t||(2===r.length?n[e]=r[i?0:1]:r.splice(i,1));else r!==t&&r.__eeOnceListener__!==t||delete n[e];return this},a=function(e){var t,n,r,o,i;if(v.call(this,"__ee__")&&(o=this.__ee__[e]))if("object"==typeof o){for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t];for(o=o.slice(),t=0;r=o[t];++t)p.call(r,this,i)}else switch(arguments.length){case 1:d.call(o,this);break;case 2:d.call(o,this,arguments[1]);break;case 3:d.call(o,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t];p.call(o,this,i)}},s={on:r,once:o,off:i,emit:a},c={on:u(r),once:u(o),off:u(i),emit:u(a)},l=m({},c),e.exports=t=function(e){return null==e?h(l):m(Object(e),c)},t.methods=s},function(e,t,n){"use strict";var r=n(36);e.exports=function(){var e=0,t=[],n=[];return{get:function(e){var o=r.call(t,e[0]);return o===-1?null:n[o]},set:function(r){return t.push(r[0]),n.push(++e),e},delete:function(e){var o=r.call(n,e);o!==-1&&(t.splice(o,1),n.splice(o,1))},clear:function(){t=[],n=[]}}}},function(e,t,n){"use strict";var r=n(1),o=n(7),i=n(29),a=n(28),s=n(30),c=Object.prototype.hasOwnProperty;e.exports=function e(t){var n,l,u;return r(t),n=Object(arguments[1]),c.call(t,"__memoized__")&&!n.force?t:(l=s(n.length,t.length,n.async&&i.async),u=a(t,l,n),o(i,function(e,t){n[t]&&e(n[t],u,n)}),e.__profiler__&&e.__profiler__(u),u.updateEnv(),u.memoized)}},function(e,t,n){"use strict";var r=n(3),o=n(2),i=Array.prototype.indexOf,a=Object.prototype.hasOwnProperty,s=Math.abs,c=Math.floor;e.exports=function(e){var t,n,l,u;if(e===e)return i.apply(this,arguments);for(n=r(o(this).length),l=arguments[1],l=isNaN(l)?0:l>=0?c(l):r(this.length)-c(s(l)),t=l;t<n;++t)if(a.call(this,t)&&(u=this[t],u!==u))return t;return-1}},function(e,t,n){"use strict";e.exports=n(38)()?Array.from:n(39)},function(e,t){"use strict";e.exports=function(){var e,t,n=Array.from;return"function"==typeof n&&(e=["raz","dwa"],t=n(e),Boolean(t&&t!==e&&"dwa"===t[1]))}},function(e,t,n){"use strict";var r=n(49).iterator,o=n(43),i=n(44),a=n(3),s=n(1),c=n(2),l=n(68),u=Array.isArray,f=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},d=Object.defineProperty;e.exports=function(e){var t,n,h,b,m,v,y,g,x,w,k=arguments[1],j=arguments[2];if(e=Object(c(e)),null!=k&&s(k),this&&this!==Array&&i(this))t=this;else{if(!k){if(o(e))return m=e.length,1!==m?Array.apply(null,e):(b=new Array(1),b[0]=e[0],b);if(u(e)){for(b=new Array(m=e.length),n=0;n<m;++n)b[n]=e[n];return b}}b=[]}if(!u(e))if(void 0!==(x=e[r])){for(y=s(x).call(e),t&&(b=new t),g=y.next(),n=0;!g.done;)w=k?f.call(k,j,g.value,n):g.value,t?(p.value=w,d(b,n,p)):b[n]=w,g=y.next(),++n;m=n}else if(l(e)){for(m=e.length,t&&(b=new t),n=0,h=0;n<m;++n)w=e[n],n+1<m&&(v=w.charCodeAt(0),v>=55296&&v<=56319&&(w+=e[++n])),w=k?f.call(k,j,w,h):w,t?(p.value=w,d(b,h,p)):b[h]=w,++h;m=h}if(void 0===m)for(m=a(e.length),t&&(b=new t(m)),n=0;n<m;++n)w=k?f.call(k,j,e[n],n):e[n],t?(p.value=w,d(b,n,p)):b[n]=w;return t&&(p.value=null,b.length=m),b}},function(e,t,n){"use strict";var r=n(37),o=Array.isArray;e.exports=function(e){return o(e)?e:r(e)}},function(e,t,n){"use strict";var r=n(4),o=Error.captureStackTrace;t=e.exports=function(e){var n=new Error,i=arguments[1],a=arguments[2];return null==a&&i&&"object"==typeof i&&(a=i,i=null),null!=a&&r(n,a),n.message=String(e),null!=i&&(n.code=String(i)),o&&o(n,t),n}},function(e,t,n){"use strict";var r,o,i,a,s=n(3),c=function(e,t){};try{Object.defineProperty(c,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(e){}1===c.length?(r={configurable:!0,writable:!1,enumerable:!1},o=Object.defineProperty,e.exports=function(e,t){return t=s(t),e.length===t?e:(r.value=t,o(e,"length",r))}):(a=n(63),i=function(){var e=[];return function(t){var n,r=0;if(e[t])return e[t];for(n=[];t--;)n.push("a"+(++r).toString(36));return new Function("fn","return function ("+n.join(", ")+") { return fn.apply(this, arguments); };")}}(),e.exports=function(e,t){var n;if(t=s(t),e.length===t)return e;n=i(t)(e);try{a(n,e)}catch(e){}return n})},function(e,t){"use strict";var n=Object.prototype.toString,r=n.call(function(){return arguments}());e.exports=function(e){return n.call(e)===r}},function(e,t,n){"use strict";var r=Object.prototype.toString,o=r.call(n(45));e.exports=function(e){return"function"==typeof e&&r.call(e)===o}},function(e,t){"use strict";e.exports=function(){}},function(e,t,n){"use strict";e.exports=n(47)()?Math.sign:n(48)},function(e,t){"use strict";e.exports=function(){var e=Math.sign;return"function"==typeof e&&(1===e(10)&&e(-20)===-1)}},function(e,t){"use strict";e.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}},function(e,t,n){"use strict";e.exports=n(50)()?Symbol:n(53)},function(e,t){"use strict";var n={object:!0,symbol:!0};e.exports=function(){var e;if("function"!=typeof Symbol)return!1;e=Symbol("test symbol");try{String(e)}catch(e){return!1}return!!n[typeof Symbol.iterator]&&(!!n[typeof Symbol.toPrimitive]&&!!n[typeof Symbol.toStringTag])}},function(e,t){"use strict";e.exports=function(e){return!!e&&("symbol"==typeof e||!!e.constructor&&("Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag]))}},function(e,t,n){"use strict";var r,o=n(4),i=n(9),a=n(8),s=n(10);r=e.exports=function(e,t){var n,r,a,c,l;return arguments.length<2||"string"!=typeof e?(c=t,t=e,e=null):c=arguments[2],null==e?(n=a=!0,r=!1):(n=s.call(e,"c"),r=s.call(e,"e"),a=s.call(e,"w")),l={value:t,configurable:n,enumerable:r,writable:a},c?o(i(c),l):l},r.gs=function(e,t,n){var r,c,l,u;return"string"!=typeof e?(l=n,n=t,t=e,e=null):l=arguments[3],null==t?t=void 0:a(t)?null==n?n=void 0:a(n)||(l=n,n=void 0):(l=t,t=n=void 0),null==e?(r=!0,c=!1):(r=s.call(e,"c"),c=s.call(e,"e")),u={get:t,set:n,configurable:r,enumerable:c},l?o(i(l),u):u}},function(e,t,n){"use strict";var r,o,i,a,s=n(52),c=n(54),l=Object.create,u=Object.defineProperties,f=Object.defineProperty,p=Object.prototype,d=l(null);if("function"==typeof Symbol){r=Symbol;try{String(r()),a=!0}catch(e){}}var h=function(){var e=l(null);return function(t){for(var n,r,o=0;e[t+(o||"")];)++o;return t+=o||"",e[t]=!0,n="@@"+t,f(p,n,s.gs(null,function(e){r||(r=!0,f(this,n,s(e)),r=!1)})),n}}();i=function(e){if(this instanceof i)throw new TypeError("TypeError: Symbol is not a constructor");return o(e)},e.exports=o=function e(t){var n;if(this instanceof e)throw new TypeError("TypeError: Symbol is not a constructor");return a?r(t):(n=l(i.prototype),t=void 0===t?"":String(t),u(n,{__description__:s("",t),__name__:s("",h(t))}))},u(o,{for:s(function(e){return d[e]?d[e]:d[e]=o(String(e))}),keyFor:s(function(e){var t;c(e);for(t in d)if(d[t]===e)return t}),hasInstance:s("",r&&r.hasInstance||o("hasInstance")),isConcatSpreadable:s("",r&&r.isConcatSpreadable||o("isConcatSpreadable")),iterator:s("",r&&r.iterator||o("iterator")),match:s("",r&&r.match||o("match")),replace:s("",r&&r.replace||o("replace")),search:s("",r&&r.search||o("search")),species:s("",r&&r.species||o("species")),split:s("",r&&r.split||o("split")),toPrimitive:s("",r&&r.toPrimitive||o("toPrimitive")),toStringTag:s("",r&&r.toStringTag||o("toStringTag")),unscopables:s("",r&&r.unscopables||o("unscopables"))}),u(i.prototype,{constructor:s(o),toString:s("",function(){return this.__name__})}),u(o.prototype,{toString:s(function(){return"Symbol ("+c(this).__description__+")"}),valueOf:s(function(){return c(this)})}),f(o.prototype,o.toPrimitive,s("",function(){var e=c(this);return"symbol"==typeof e?e:e.toString()})),f(o.prototype,o.toStringTag,s("c","Symbol")),f(i.prototype,o.toStringTag,s("c",o.prototype[o.toStringTag])),f(i.prototype,o.toPrimitive,s("c",o.prototype[o.toPrimitive]))},function(e,t,n){"use strict";var r=n(51);e.exports=function(e){if(!r(e))throw new TypeError(e+" is not a symbol");return e}},function(e,t,n){"use strict";var r=n(46),o=Math.abs,i=Math.floor;e.exports=function(e){return isNaN(e)?0:(e=Number(e),0!==e&&isFinite(e)?r(e)*i(o(e)):e)}},function(e,t,n){"use strict";var r=n(1),o=n(2),i=Function.prototype.bind,a=Function.prototype.call,s=Object.keys,c=Object.prototype.propertyIsEnumerable;e.exports=function(e,t){return function(n,l){var u,f=arguments[2],p=arguments[3];return n=Object(o(n)),r(l),u=s(n),p&&u.sort("function"==typeof p?i.call(p,n):void 0),"function"!=typeof e&&(e=u[e]),a.call(e,u,function(e,r){return c.call(n,e)?a.call(l,f,n[e],e,n,r):t})}}},function(e,t){"use strict";e.exports=function(){var e,t=Object.assign;return"function"==typeof t&&(e={foo:"raz"},t(e,{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}},function(e,t,n){"use strict";var r=n(60),o=n(2),i=Math.max;e.exports=function(e,t){var n,a,s,c=i(arguments.length,2);for(e=Object(o(e)),s=function(r){try{e[r]=t[r]}catch(e){n||(n=e)}},a=1;a<c;++a)t=arguments[a],r(t).forEach(s);if(void 0!==n)throw n;return e}},function(e,t){"use strict";var n=Object.getPrototypeOf,r=Object.prototype,o=r.toString,i=Object().toString();e.exports=function(e){var t,a;return!(!e||"object"!=typeof e||o.call(e)!==i)&&(t=n(e),null===t?(a=e.constructor,"function"!=typeof a||a.prototype!==e):t===r||null===n(t))}},function(e,t,n){"use strict";e.exports=n(61)()?Object.keys:n(62)},function(e,t){"use strict";e.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}},function(e,t){"use strict";var n=Object.keys;e.exports=function(e){return n(null==e?e:Object(e))}},function(e,t,n){"use strict";var r=n(2),o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols;e.exports=function(e,t){var n,c=Object(r(t));if(e=Object(r(e)),a(c).forEach(function(r){try{o(e,r,i(t,r))}catch(e){n=e}}),"function"==typeof s&&s(c).forEach(function(r){try{o(e,r,i(t,r))}catch(e){n=e}}),void 0!==n)throw n;return e}},function(e,t){"use strict";var n=Array.prototype.forEach,r=Object.create;e.exports=function(e){var t=r(null);return n.call(arguments,function(e){t[e]=!0}),t}},function(e,t){"use strict";var n=String.prototype.replace,r=/([A-Z])/g;e.exports=function(){var e=n.call(this,r,"-$1").toLowerCase();return"-"===e[0]&&(e=e.slice(1)),e}},function(e,t){"use strict";var n="razdwatrzy";e.exports=function(){return"function"==typeof n.contains&&(n.contains("dwa")===!0&&n.contains("foo")===!1)}},function(e,t){"use strict";var n=String.prototype.indexOf;e.exports=function(e){return n.call(this,e,arguments[1])>-1}},function(e,t){"use strict";var n=Object.prototype.toString,r=n.call("");e.exports=function(e){return"string"==typeof e||e&&"object"==typeof e&&(e instanceof String||n.call(e)===r)||!1}},function(e,t){"use strict";var n=function(e){return e.charCodeAt(0)};e.exports=function(e){var t,r,o,i,a,s,c=new Array(e.length),l="CHAR";for(i=0,a=0;i<=e.length;i++)switch(s=e.charCodeAt(i),l){case"CHAR":switch(s){case n("%"):t=0,r=0,l="HEX0";break;default:c[a++]=s}break;case"HEX0":if(l="HEX1",o=s,n("0")<=s&&s<=n("9"))t=s-n("0");else if(n("a")<=s&&s<=n("f"))t=s-n("a")+10;else{if(!(n("A")<=s&&s<=n("F"))){c[a++]=n("%"),c[a++]=s,l="CHAR";break}t=s-n("A")+10}break;case"HEX1":if(l="CHAR",n("0")<=s&&s<=n("9"))r=s-n("0");else if(n("a")<=s&&s<=n("f"))r=s-n("a")+10;else{if(!(n("A")<=s&&s<=n("F"))){c[a++]=n("%"),c[a++]=o,c[a++]=s;break}r=s-n("A")+10}c[a++]=16*t+r}return c.slice(0,a-1)}},function(e,t,n){"use strict";var r=n(69),o=Array.isArray,i=Object.prototype.hasOwnProperty,a=Object.create,s=String.fromCharCode,c=/\+/g,l=function(e){try{return decodeURIComponent(e)}catch(t){return s.apply(null,r(e))}};e.exports=function(e){var t,n,r,s,u,f,p,d=arguments[1]||"&",h=arguments[2]||"=",b=arguments[3],m=a(null);if(null==e)return m;if(e=String(e),0===e.length)return m;e=e.split(d);var v=1e3;b&&!isNaN(b.maxKeys)&&(v=Number(b.maxKeys));var y=e.length;for(v>0&&y>v&&(y=v),t=0;t<y;++t)n=e[t].replace(c,"%20"),r=n.indexOf(h),r>=0?(s=n.substr(0,r),u=n.substr(r+1)):(s=n,u=""),f=l(s),p=l(u),i.call(m,f)?o(m[f])?m[f].push(p):m[f]=[m[f],p]:m[f]=p;return m}},function(e,t){"use strict";var n=Array.isArray,r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e){var t=arguments[1]||"&",o=arguments[2]||"=";if(!e||"function"!=typeof e&&"object"!=typeof e)throw new TypeError(e+" is not an object");var i,a,s,c,l,u=Object.keys(e),f=[];for(i=0;i<u.length;i++)if(a=u[i],s=e[a],c=encodeURIComponent(a)+o,n(s))for(l=0;l<s.length;l++)f.push(c+encodeURIComponent(r(s[l])));else f.push(c+encodeURIComponent(r(s)));return f.join(t)}},function(e,t){e.exports=function(e){return function(t){var n,r,o="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+o],r=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),r=e.touches[0]["page"+o]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(r)>50&&t[r>0?"prev":"next"]()})}}},function(e,t){var n=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),r=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),o=r[0],i={},a=function(e,t){r[e]&&(f("deactivate",p(o,t)),o=r[e],f("activate",p(o,t)))},s=function(e,t){return arguments.length?void(f("slide",p(r[e],t))&&a(e,t)):r.indexOf(o)},c=function(e,t){var n=r.indexOf(o)+e;f(e>0?"next":"prev",p(o,t))&&a(n,t)},l=function(e,t){return(i[e]||(i[e]=[])).push(t),u.bind(null,e,t)},u=function(e,t){i[e]=(i[e]||[]).filter(function(e){return e!==t})},f=function(e,t){return(i[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},p=function(e,t){return t=t||{},t.index=r.indexOf(e),t.slide=e,t},d={on:l,off:u,fire:f,slide:s,next:c.bind(null,1),prev:c.bind(null,-1),parent:n,slides:r};return(t||[]).forEach(function(e){e(d)}),a(0),d};e.exports={from:n}},function(e,t,n){e.exports=function(e){n.e(1,function(t){e(n(106))})}},function(e,t,n){e.exports=function(e){n.e(2,function(t){e(n(107))})}},function(e,t,n){t=e.exports=n(11)(),t.push([e.id,".bespoke-slide>aside{box-sizing:border-box;position:absolute;width:100%;top:0;left:100%;padding-left:40px;font-size:2em;-webkit-transition:opacity 1s ease-in-out;transition:opacity 1s ease-in-out;opacity:0}body.notes .bespoke-slide{-webkit-transform:scale(.5) translateX(-50%);transform:scale(.5) translateX(-50%)}body.notes .bespoke-slide>aside{-webkit-transition:opacity 1s ease-in-out;transition:opacity 1s ease-in-out;opacity:1}",""])},function(e,t,n){t=e.exports=n(11)(),t.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Averia+Sans+Libre:400,400italic);",""]),t.push([e.id,'/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}*{margin:0;padding:0}html{text-size-adjust:auto}.bespoke-parent{font-size:1.5em;background:#fffdfa;color:#111;font-family:gill sans,helvetica,arial,sans-serif;overflow:hidden;text-align:center;transition:background 1s ease;background-position:50% 50%}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none;z-index:1}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{text-shadow:0 1px 0 hsla(0,0%,7%,.25);transition:opacity .3s ease;width:1024px;height:576px;position:absolute;top:50%;left:50%;margin-left:-512px;margin-top:-288px;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:1}.bespoke-active{transition-delay:.2s}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-backdrop{transition:opacity 1s ease;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0}.bespoke-backdrop-active{opacity:1}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.3vw;z-index:1}.bespoke-progress-bar{background:#111;position:absolute;top:0;left:0;height:100%;transition:width 1s ease}.bespoke-bullet{transition:opacity .3s ease}.bespoke-bullet-inactive{opacity:0}strong{font-weight:400}h1 strong{font-weight:600}h1,h2,h3,p{padding-left:20px;padding-right:20px;margin:.4em 0}dd,h1,h2,h3,li,p,pre{font-weight:200}h1{font-family:didot,times new roman,serif;font-style:italic;margin:.21em 0}h2{font-family:gill sans,helvetica,arial,sans-serif;font-weight:400;font-size:1.1em;margin:.23em 0}h2,h3{font-style:normal}h3{font-size:.6em;margin:1.1em 0}ol,ul{padding:0;margin:0;text-align:left}li{margin:.4em .2em;padding-left:1.2em;font-style:normal;transform:translateX(-6px)}ul li{list-style:none}ul li:before{content:"\\2014";margin-left:-1.2em;width:1.2em;display:inline-block}hr{background-color:#111;width:30%;height:1px;border:0;margin-top:.3em}pre{margin:1.5em 0;font-size:.7em;background:none!important;white-space:pre-wrap;word-wrap:break-word;overflow-x:auto;max-width:100%}pre,pre code{display:block}pre code{white-space:pre;overflow-wrap:pre}pre code:after{clear:both}code{font-family:prestige elite std,consolas,courier new,monospace!important;font-style:normal;font-weight:200!important;text-align:left}a{color:currentColor;text-decoration:none}a:hover{color:#07a;border-bottom:1px solid currentColor}.emphatic{background:#e90}.hljs-comment,.hljs-quote{color:#708090}.hljs-attribute,.hljs-deletion,.hljs-link,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#e90}.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-number,.hljs-params,.hljs-type{color:#905}.hljs-class .hljs-title{color:#f30}.hljs-addition,.hljs-bullet,.hljs-string,.hljs-symbol{color:#690}.hljs-meta{color:#999}.hljs-function,.hljs-section,.hljs-title{color:#dd4a68}.hljs-keyword,.hljs-selector-tag{color:#07a}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.name{font-family:Averia Sans Libre}pre{min-height:1em}.caps{text-transform:uppercase}.large{font-size:1.2em}h1.name{font-style:normal}img.plain{border:0;max-width:30%}.tool-logo{height:2em;width:2em;position:absolute;left:22%}.bespoke-backdrop.walter{background-image:url('+n(82)+");background-position:50%;background-size:cover}.bespoke-backdrop.jesse{background-image:url("+n(80)+");background-position:50%;background-size:cover}.bespoke-backdrop.intermission{background-color:#111;background-position:50%;background-size:cover}.bespoke-backdrop.whoa{background-image:url("+n(83)+");background-position:50%;background-size:cover}.bespoke-slide[data-bespoke-backdrop=intermission],.bespoke-slide[data-bespoke-backdrop=walter],.bespoke-slide[data-bespoke-backdrop=whoa]{color:#fffdfa}.bespoke-slide[data-bespoke-backdrop=intermission] hr,.bespoke-slide[data-bespoke-backdrop=walter] hr,.bespoke-slide[data-bespoke-backdrop=whoa] hr{background-color:#fffdfa}",""]);
},,,function(e,t,n){e.exports=n.p+"assets/jesse-what-e3aebf.gif"},,function(e,t,n){e.exports=n.p+"assets/walter-0b574b.gif"},function(e,t,n){e.exports=n.p+"assets/whoa-8355c3.gif"},,,,,,,,,,,,,,,,,,,,,function(e,t,n){var r=n(76);"string"==typeof r&&(r=[[e.id,r,""]]);n(13)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(77);"string"==typeof r&&(r=[[e.id,r,""]]);n(13)(r,{});r.locals&&(e.exports=r.locals)}]);
//# sourceMappingURL=main.js.map
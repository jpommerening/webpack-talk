!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,i){for(var a,s,c=0,l=[];c<r.length;c++)s=r[c],o[s]&&l.push.apply(l,o[s]),o[s]=0;for(a in i)t[a]=i[a];for(n&&n(r,i);l.length;)l.shift().call(null,e)};var r={},o={0:0};return e.e=function(t,n){if(0===o[t])return n.call(null,e);if(void 0!==o[t])o[t].push(n);else{o[t]=[n];var r=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=e.p+""+t+"."+({1:"de",2:"en"}[t]||t)+".js",r.appendChild(i)}},e.m=t,e.c=r,e.p="dist/",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=document.querySelector("#talk"),n=e.querySelector("section");t.forEach(function(t){return e.insertBefore(t,n)}),S=a.default.from(e,[(0,c.default)(),(0,u.default)(),(0,p.default)(),(0,h.default)(),(0,m.default)(),(0,y.default)(),(0,x.default)({visible:!1}),(0,k.default)()]),S.slide(E)}var i=n(72),a=r(i),s=n(15),c=r(s),l=n(16),u=r(l),f=n(5),p=r(f),d=n(17),h=r(d),b=n(18),m=r(b),v=n(19),y=r(v),g=n(21),x=r(g),w=n(71),k=r(w),j=n(97),O=(r(j),n(14)),_=r(O),S=void 0,E=0;(0,_.default)("de",o)},function(t,e){"use strict";t.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}},function(t,e){"use strict";t.exports=function(t){if(null==t)throw new TypeError("Cannot use null or undefined");return t}},function(t,e,n){"use strict";var r=n(54),o=Math.max;t.exports=function(t){return o(0,r(t))}},function(t,e,n){"use strict";t.exports=n(56)()?Object.assign:n(57)},function(t,e){t.exports=function(){return function(t){var e=function(t,e){t.classList.add("bespoke-"+e)},n=function(t,e){t.className=t.className.replace(new RegExp("bespoke-"+e+"(\\s|$)","g")," ").trim()},r=function(r,o){var i=t.slides[t.slide()],a=o-t.slide(),s=a>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,r)),r!==i&&["inactive",s,s+"-"+Math.abs(a)].map(e.bind(null,r))};e(t.parent,"parent"),t.slides.map(function(t){e(t,"slide")}),t.on("activate",function(o){t.slides.map(r),e(o.slide,"active"),n(o.slide,"inactive")})}}},function(t,e,n){"use strict";var r,o=n(4),i=n(9),a=n(8),s=n(10);r=t.exports=function(t,e){var n,r,a,c,l;return arguments.length<2||"string"!=typeof t?(c=e,e=t,t=null):c=arguments[2],null==t?(n=a=!0,r=!1):(n=s.call(t,"c"),r=s.call(t,"e"),a=s.call(t,"w")),l={value:e,configurable:n,enumerable:r,writable:a},c?o(i(c),l):l},r.gs=function(t,e,n){var r,c,l,u;return"string"!=typeof t?(l=n,n=e,e=t,t=null):l=arguments[3],null==e?e=void 0:a(e)?null==n?n=void 0:a(n)||(l=n,n=void 0):(l=e,e=n=void 0),null==t?(r=!0,c=!1):(r=s.call(t,"c"),c=s.call(t,"e")),u={get:e,set:n,configurable:r,enumerable:c},l?o(i(l),u):u}},function(t,e,n){"use strict";t.exports=n(55)("forEach")},function(t,e){"use strict";t.exports=function(t){return"function"==typeof t}},function(t,e){"use strict";var n=Array.prototype.forEach,r=Object.create,o=function(t,e){var n;for(n in t)e[n]=t[n]};t.exports=function(t){var e=r(null);return n.call(arguments,function(t){null!=t&&o(Object(t),e)}),e}},function(t,e,n){"use strict";t.exports=n(65)()?String.prototype.contains:n(66)},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},,function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],e));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],a=o[1],s=o[2],c=o[3],l={css:a,media:s,sourceMap:c};n[i]?n[i].parts.push(l):e.push(n[i]={id:i,parts:[l]})}return e}function i(t,e){var n=m(),r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function l(t,e){var n,r,o;if(e.singleton){var i=y++;n=v||(v=s(e)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=f.bind(null,n),o=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function u(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e){var n=e.css,r=e.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=b()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,i.push(c)}if(t){var l=o(t);r(l,e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l[t](e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=n(73),a=r(i),s=n(74),c=r(s),l={de:a.default,en:c.default}},function(t,e){t.exports=function(){return function(t){function e(e){var n=e.getAttribute("data-bespoke-backdrop");if(n){var r=document.createElement("div");return r.className=n,r.classList.add("bespoke-backdrop"),t.parent.appendChild(r),r}}function n(e){if(e){var n=i.indexOf(e),a=t.slide();r(e,"active"),r(e,"inactive"),r(e,"before"),r(e,"after"),n!==a?(o(e,"inactive"),o(e,n<a?"before":"after")):o(e,"active")}}function r(t,e){t.classList.remove("bespoke-backdrop-"+e)}function o(t,e){t.classList.add("bespoke-backdrop-"+e)}var i;i=t.slides.map(e),t.on("activate",function(){i.forEach(n)})}}},function(t,e){t.exports=function(t){return function(e){var n,r,o=e.slides.map(function(e){return[].slice.call(e.querySelectorAll("string"==typeof t?t:"[data-bespoke-bullet]"),0)}),i=function(){var t=n+1;return c(1)?(s(n,r+1),!1):void(o[t]&&s(t,0))},a=function(){var t=n-1;return c(-1)?(s(n,r-1),!1):void(o[t]&&s(t,o[t].length-1))},s=function(t,e){n=t,r=e,o.forEach(function(n,r){n.forEach(function(n,o){n.classList.add("bespoke-bullet"),r<t||r===t&&o<=e?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),r===t&&o===e?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},c=function(t){return void 0!==o[n][r+t]};e.on("next",i),e.on("prev",a),e.on("slide",function(t){s(t.index,0)}),s(0,0)}}},function(t,e){t.exports=function(){return function(t){var e=70,n=122,r="keydown",o=function(){var t,e;e=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?(t=document).exitFullscreen||t.webkitExitFullscreen||t.mozCancelFullScreen||t.msExitFullscreen:(t=document.documentElement).requestFullscreen||t.webkitRequestFullscreen||t.mozRequestFullScreen||t.msRequestFullscreen,e.apply(t)},i=function(t){return!!(t.ctrlKey||t.shiftKey||t.altKey||t.metaKey)},a=function(t){var r=t.which;r!==e&&r!==n||i(t)||(o(),r===n&&t.preventDefault())};(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&(t.on("destroy",function(){document.removeEventListener(r,a)}),t.on("fullscreen.toggle",o),document.addEventListener(r,a))}}},function(t,e){t.exports=function(){return function(t){var e=function(){var e=window.location.hash.slice(1),r=parseInt(e,10);e&&(r?n(r-1):t.slides.forEach(function(t,r){t.getAttribute("data-bespoke-hash")===e&&n(r)}))},n=function(e){var n=-1<e&&e<t.slides.length?e:0;n!==t.slide()&&t.slide(n)};setTimeout(function(){e(),t.on("activate",function(t){var e=t.slide.getAttribute("data-bespoke-hash");window.location.hash=e||t.index+1}),window.addEventListener("hashchange",e)},0)}}},function(t,e){t.exports=function(t){return function(e){var n="vertical"!==t;document.addEventListener("keydown",function(t){(34==t.which||32==t.which&&!t.shiftKey||n&&39==t.which||!n&&40==t.which)&&e.next(),(33==t.which||32==t.which&&t.shiftKey||n&&37==t.which||!n&&38==t.which)&&e.prev()})}}},function(t,e,n){"use strict";var r,o=n(63),i=n(69),a=n(70),s=n(24),c=n(5),l=o("input","select","textarea"),u=/^matrix\(([\d\.]+),/,f=function(t){var e;return location.search?(e=i(location.search.slice(1))[t],null==e?null:!e||Boolean(Number(e))):null},p=function(){var t=document.createEvent("HTMLEvents");t.initEvent("resize",!0,!0),window.dispatchEvent(t)},d=function(t){var e,n=Number(window.getComputedStyle(t).zoom)||1;return 1!==n?n:(e=window.getComputedStyle(t.parentNode).transform.match(u),e?Number(e[1])||1:1)},h=function(){var t,e,n,o,i=window.innerWidth,a=document.querySelector(".bespoke-active");if(a){if(t=d(a),t===r)return;r=t,e=a.offsetWidth*t,i&&e&&(n=(i/2/e).toFixed(3),o="scale("+n+") translateX(-50%)",s.call(document,{"body.notes .bespoke-slide":{"-webkit-transform":o,transform:o}}))}};t.exports=function(){var t=Object(arguments[1]),e=Boolean(t.visible),n=t.key||78,r="notes";return t.queryToken===!1?r=null:t.queryToken&&t.queryToken!==!0&&(r=t.queryToken),function(t){var o,s,u;t.parent.classList.contains("bespoke-parent")||c()(t),r&&(u=f(r),null!=u&&(e=u),window.addEventListener("popstate",function(){o(Boolean(f(r)))})),o=function(t){var e,n,o;s!==t&&(s=t,t?document.body.classList.add("notes"):document.body.classList.remove("notes"),r&&(o=location.pathname,e=location.search?i(location.search.slice(1)):{},t?e[r]=null:delete e[r],n=a(e),n&&(o+="?"+n.replace(/(?:=&)/g,"&").replace(/\=$/,"")),location.hash&&(o+=location.hash),history.pushState({},"",o),p()))},document.addEventListener("keydown",function(t){t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.which===n&&(l[t.target.nodeName.toLowerCase()]||(t.preventDefault(),o(!s)))},!1),o(e),setInterval(h,200)}}},function(t,e,n){"use strict";n(96),t.exports=n(20)},function(t,e){"use strict";t.exports=function(t){return t&&9===t.nodeType&&"#document"===t.nodeName||!1}},function(t,e){"use strict";t.exports=function(t){return t&&1===t.nodeType&&"string"==typeof t.nodeName||!1}},function(t,e,n){"use strict";var r,o,i=n(7),a=n(58),s=n(64),c=n(34),l=n(26);r=c(function(t){var e=t.head.appendChild(t.createElement("style"));return e.setAttribute("type","text/css"),e},{normalizer:n(33)()}),o=function(t){var e=[];return i(t,function(t,n){e.push(n+" {"),i(t,function(t,n){e.push("\t"+s.call(n)+": "+t+";")}),e.push("}")}),e.join("\n")},t.exports=function(t){l(this),a(t)&&(t=o(t)),r(this).appendChild(this.createTextNode(t+"\n"))}},function(t,e,n){"use strict";var r=n(22),o=n(23);t.exports=function(t){return r(t)&&o(t.head)}},function(t,e,n){"use strict";var r=n(25);t.exports=function(t){if(!r(t))throw new TypeError(t+" is not a HTMLDocument");return t}},function(t,e,n){"use strict";var r=n(40),o=n(41),i=n(6),a=n(32).methods,s=n(31),c=n(30),l=Function.prototype.apply,u=Function.prototype.call,f=Object.create,p=Object.prototype.hasOwnProperty,d=Object.defineProperties,h=a.on,b=a.emit;t.exports=function(t,e,n){var a,m,v,y,g,x,w,k,j,O,_,S,E,C=f(null);return m=e!==!1?e:isNaN(t.length)?1:t.length,n.normalizer&&(k=c(n.normalizer),v=k.get,y=k.set,g=k.delete,x=k.clear),null!=n.resolvers&&(E=s(n.resolvers)),S=v?o(function(e){var n,o,i=arguments;if(E&&(i=E(i)),n=v(i),null!==n&&p.call(C,n))return j&&a.emit("get",n,i,this),C[n];if(o=1===i.length?u.call(t,this,i[0]):l.call(t,this,i),null===n){if(n=v(i),null!==n)throw r("Circular invocation","CIRCULAR_INVOCATION");n=y(i)}else if(p.call(C,n))throw r("Circular invocation","CIRCULAR_INVOCATION");return C[n]=o,O&&a.emit("set",n),o},m):0===e?function(){var e;if(p.call(C,"data"))return j&&a.emit("get","data",arguments,this),C.data;if(e=arguments.length?l.call(t,this,arguments):u.call(t,this),p.call(C,"data"))throw r("Circular invocation","CIRCULAR_INVOCATION");return C.data=e,O&&a.emit("set","data"),e}:function(e){var n,o,i=arguments;if(E&&(i=E(arguments)),o=String(i[0]),p.call(C,o))return j&&a.emit("get",o,i,this),C[o];if(n=1===i.length?u.call(t,this,i[0]):l.call(t,this,i),p.call(C,o))throw r("Circular invocation","CIRCULAR_INVOCATION");return C[o]=n,O&&a.emit("set",o),n},a={original:t,memoized:S,get:function(t){return E&&(t=E(t)),v?v(t):String(t[0])},has:function(t){return p.call(C,t)},delete:function(t){var e;p.call(C,t)&&(g&&g(t),e=C[t],delete C[t],_&&a.emit("delete",t,e))},clear:function(){var t=C;x&&x(),C=f(null),a.emit("clear",t)},on:function(t,e){return"get"===t?j=!0:"set"===t?O=!0:"delete"===t&&(_=!0),h.call(this,t,e)},emit:b,updateEnv:function(){t=a.original}},w=v?o(function(t){var e,n=arguments;E&&(n=E(n)),e=v(n),null!==e&&a.delete(e)},m):0===e?function(){return a.delete("data")}:function(t){return E&&(t=E(arguments)[0]),a.delete(t)},d(S,{__memoized__:i(!0),delete:i(w),clear:i(a.clear)}),a}},function(t,e){"use strict"},function(t,e,n){"use strict";var r=n(3);t.exports=function(t,e,n){var o;return isNaN(t)?(o=e,o>=0?n&&o?o-1:o:1):t!==!1&&r(t)}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){var e;return"function"==typeof t?{set:t,get:t}:(e={get:r(t.get)},void 0!==t.set?(e.set=r(t.set),e.delete=r(t.delete),e.clear=r(t.clear),e):(e.set=e.get,e))}},function(t,e,n){"use strict";var r,o=n(39),i=n(1),a=Array.prototype.slice;r=function(t){return this.map(function(e,n){return e?e(t[n]):t[n]}).concat(a.call(t,this.length))},t.exports=function(t){return t=o(t),t.forEach(function(t){null!=t&&i(t)}),r.bind(t)}},function(t,e,n){"use strict";var r,o,i,a,s,c,l,u=n(6),f=n(1),p=Function.prototype.apply,d=Function.prototype.call,h=Object.create,b=Object.defineProperty,m=Object.defineProperties,v=Object.prototype.hasOwnProperty,y={configurable:!0,enumerable:!1,writable:!0};r=function(t,e){var n;return f(e),v.call(this,"__ee__")?n=this.__ee__:(n=y.value=h(null),b(this,"__ee__",y),y.value=null),n[t]?"object"==typeof n[t]?n[t].push(e):n[t]=[n[t],e]:n[t]=e,this},o=function(t,e){var n,o;return f(e),o=this,r.call(this,t,n=function(){i.call(o,t,n),p.call(e,this,arguments)}),n.__eeOnceListener__=e,this},i=function(t,e){var n,r,o,i;if(f(e),!v.call(this,"__ee__"))return this;if(n=this.__ee__,!n[t])return this;if(r=n[t],"object"==typeof r)for(i=0;o=r[i];++i)o!==e&&o.__eeOnceListener__!==e||(2===r.length?n[t]=r[i?0:1]:r.splice(i,1));else r!==e&&r.__eeOnceListener__!==e||delete n[t];return this},a=function(t){var e,n,r,o,i;if(v.call(this,"__ee__")&&(o=this.__ee__[t]))if("object"==typeof o){for(n=arguments.length,i=new Array(n-1),e=1;e<n;++e)i[e-1]=arguments[e];for(o=o.slice(),e=0;r=o[e];++e)p.call(r,this,i)}else switch(arguments.length){case 1:d.call(o,this);break;case 2:d.call(o,this,arguments[1]);break;case 3:d.call(o,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,i=new Array(n-1),e=1;e<n;++e)i[e-1]=arguments[e];p.call(o,this,i)}},s={on:r,once:o,off:i,emit:a},c={on:u(r),once:u(o),off:u(i),emit:u(a)},l=m({},c),t.exports=e=function(t){return null==t?h(l):m(Object(t),c)},e.methods=s},function(t,e,n){"use strict";var r=n(35);t.exports=function(){var t=0,e=[],n=[];return{get:function(t){var o=r.call(e,t[0]);return o===-1?null:n[o]},set:function(r){return e.push(r[0]),n.push(++t),t},delete:function(t){var o=r.call(n,t);o!==-1&&(e.splice(o,1),n.splice(o,1))},clear:function(){e=[],n=[]}}}},function(t,e,n){"use strict";var r=n(1),o=n(7),i=n(28),a=n(27),s=n(29),c=Object.prototype.hasOwnProperty;t.exports=function t(e){var n,l,u;return r(e),n=Object(arguments[1]),c.call(e,"__memoized__")&&!n.force?e:(l=s(n.length,e.length,n.async&&i.async),u=a(e,l,n),o(i,function(t,e){n[e]&&t(n[e],u,n)}),t.__profiler__&&t.__profiler__(u),u.updateEnv(),u.memoized)}},function(t,e,n){"use strict";var r=n(3),o=n(2),i=Array.prototype.indexOf,a=Object.prototype.hasOwnProperty,s=Math.abs,c=Math.floor;t.exports=function(t){var e,n,l,u;if(t===t)return i.apply(this,arguments);for(n=r(o(this).length),l=arguments[1],l=isNaN(l)?0:l>=0?c(l):r(this.length)-c(s(l)),e=l;e<n;++e)if(a.call(this,e)&&(u=this[e],u!==u))return e;return-1}},function(t,e,n){"use strict";t.exports=n(37)()?Array.from:n(38)},function(t,e){"use strict";t.exports=function(){var t,e,n=Array.from;return"function"==typeof n&&(t=["raz","dwa"],e=n(t),Boolean(e&&e!==t&&"dwa"===e[1]))}},function(t,e,n){"use strict";var r=n(48).iterator,o=n(42),i=n(43),a=n(3),s=n(1),c=n(2),l=n(67),u=Array.isArray,f=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},d=Object.defineProperty;t.exports=function(t){var e,n,h,b,m,v,y,g,x,w,k=arguments[1],j=arguments[2];if(t=Object(c(t)),null!=k&&s(k),this&&this!==Array&&i(this))e=this;else{if(!k){if(o(t))return m=t.length,1!==m?Array.apply(null,t):(b=new Array(1),b[0]=t[0],b);if(u(t)){for(b=new Array(m=t.length),n=0;n<m;++n)b[n]=t[n];return b}}b=[]}if(!u(t))if(void 0!==(x=t[r])){for(y=s(x).call(t),e&&(b=new e),g=y.next(),n=0;!g.done;)w=k?f.call(k,j,g.value,n):g.value,e?(p.value=w,d(b,n,p)):b[n]=w,g=y.next(),++n;m=n}else if(l(t)){for(m=t.length,e&&(b=new e),n=0,h=0;n<m;++n)w=t[n],n+1<m&&(v=w.charCodeAt(0),v>=55296&&v<=56319&&(w+=t[++n])),w=k?f.call(k,j,w,h):w,e?(p.value=w,d(b,h,p)):b[h]=w,++h;m=h}if(void 0===m)for(m=a(t.length),e&&(b=new e(m)),n=0;n<m;++n)w=k?f.call(k,j,t[n],n):t[n],e?(p.value=w,d(b,n,p)):b[n]=w;return e&&(p.value=null,b.length=m),b}},function(t,e,n){"use strict";var r=n(36),o=Array.isArray;t.exports=function(t){return o(t)?t:r(t)}},function(t,e,n){"use strict";var r=n(4),o=Error.captureStackTrace;e=t.exports=function(t){var n=new Error,i=arguments[1],a=arguments[2];return null==a&&i&&"object"==typeof i&&(a=i,i=null),null!=a&&r(n,a),n.message=String(t),null!=i&&(n.code=String(i)),o&&o(n,e),n}},function(t,e,n){"use strict";var r,o,i,a,s=n(3),c=function(t,e){};try{Object.defineProperty(c,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(t){}1===c.length?(r={configurable:!0,writable:!1,enumerable:!1},o=Object.defineProperty,t.exports=function(t,e){return e=s(e),t.length===e?t:(r.value=e,o(t,"length",r))}):(a=n(62),i=function(){var t=[];return function(e){var n,r=0;if(t[e])return t[e];for(n=[];e--;)n.push("a"+(++r).toString(36));return new Function("fn","return function ("+n.join(", ")+") { return fn.apply(this, arguments); };")}}(),t.exports=function(t,e){var n;if(e=s(e),t.length===e)return t;n=i(e)(t);try{a(n,t)}catch(t){}return n})},function(t,e){"use strict";var n=Object.prototype.toString,r=n.call(function(){return arguments}());t.exports=function(t){return n.call(t)===r}},function(t,e,n){"use strict";var r=Object.prototype.toString,o=r.call(n(44));t.exports=function(t){return"function"==typeof t&&r.call(t)===o}},function(t,e){"use strict";t.exports=function(){}},function(t,e,n){"use strict";t.exports=n(46)()?Math.sign:n(47)},function(t,e){"use strict";t.exports=function(){var t=Math.sign;return"function"==typeof t&&(1===t(10)&&t(-20)===-1)}},function(t,e){"use strict";t.exports=function(t){return t=Number(t),isNaN(t)||0===t?t:t>0?1:-1}},function(t,e,n){"use strict";t.exports=n(49)()?Symbol:n(52)},function(t,e){"use strict";var n={object:!0,symbol:!0};t.exports=function(){var t;if("function"!=typeof Symbol)return!1;t=Symbol("test symbol");try{String(t)}catch(t){return!1}return!!n[typeof Symbol.iterator]&&(!!n[typeof Symbol.toPrimitive]&&!!n[typeof Symbol.toStringTag])}},function(t,e){"use strict";t.exports=function(t){return!!t&&("symbol"==typeof t||!!t.constructor&&("Symbol"===t.constructor.name&&"Symbol"===t[t.constructor.toStringTag]))}},function(t,e,n){"use strict";var r,o=n(4),i=n(9),a=n(8),s=n(10);r=t.exports=function(t,e){var n,r,a,c,l;return arguments.length<2||"string"!=typeof t?(c=e,e=t,t=null):c=arguments[2],null==t?(n=a=!0,r=!1):(n=s.call(t,"c"),r=s.call(t,"e"),a=s.call(t,"w")),l={value:e,configurable:n,enumerable:r,writable:a},c?o(i(c),l):l},r.gs=function(t,e,n){var r,c,l,u;return"string"!=typeof t?(l=n,n=e,e=t,t=null):l=arguments[3],null==e?e=void 0:a(e)?null==n?n=void 0:a(n)||(l=n,n=void 0):(l=e,e=n=void 0),null==t?(r=!0,c=!1):(r=s.call(t,"c"),c=s.call(t,"e")),u={get:e,set:n,configurable:r,enumerable:c},l?o(i(l),u):u}},function(t,e,n){"use strict";var r,o,i,a,s=n(51),c=n(53),l=Object.create,u=Object.defineProperties,f=Object.defineProperty,p=Object.prototype,d=l(null);if("function"==typeof Symbol){r=Symbol;try{String(r()),a=!0}catch(t){}}var h=function(){var t=l(null);return function(e){for(var n,r,o=0;t[e+(o||"")];)++o;return e+=o||"",t[e]=!0,n="@@"+e,f(p,n,s.gs(null,function(t){r||(r=!0,f(this,n,s(t)),r=!1)})),n}}();i=function(t){if(this instanceof i)throw new TypeError("TypeError: Symbol is not a constructor");return o(t)},t.exports=o=function t(e){var n;if(this instanceof t)throw new TypeError("TypeError: Symbol is not a constructor");return a?r(e):(n=l(i.prototype),e=void 0===e?"":String(e),u(n,{__description__:s("",e),__name__:s("",h(e))}))},u(o,{for:s(function(t){return d[t]?d[t]:d[t]=o(String(t))}),keyFor:s(function(t){var e;c(t);for(e in d)if(d[e]===t)return e}),hasInstance:s("",r&&r.hasInstance||o("hasInstance")),isConcatSpreadable:s("",r&&r.isConcatSpreadable||o("isConcatSpreadable")),iterator:s("",r&&r.iterator||o("iterator")),match:s("",r&&r.match||o("match")),replace:s("",r&&r.replace||o("replace")),search:s("",r&&r.search||o("search")),species:s("",r&&r.species||o("species")),split:s("",r&&r.split||o("split")),toPrimitive:s("",r&&r.toPrimitive||o("toPrimitive")),toStringTag:s("",r&&r.toStringTag||o("toStringTag")),unscopables:s("",r&&r.unscopables||o("unscopables"))}),u(i.prototype,{constructor:s(o),toString:s("",function(){return this.__name__})}),u(o.prototype,{toString:s(function(){return"Symbol ("+c(this).__description__+")"}),valueOf:s(function(){return c(this)})}),f(o.prototype,o.toPrimitive,s("",function(){var t=c(this);return"symbol"==typeof t?t:t.toString()})),f(o.prototype,o.toStringTag,s("c","Symbol")),f(i.prototype,o.toStringTag,s("c",o.prototype[o.toStringTag])),f(i.prototype,o.toPrimitive,s("c",o.prototype[o.toPrimitive]))},function(t,e,n){"use strict";var r=n(50);t.exports=function(t){if(!r(t))throw new TypeError(t+" is not a symbol");return t}},function(t,e,n){"use strict";var r=n(45),o=Math.abs,i=Math.floor;t.exports=function(t){return isNaN(t)?0:(t=Number(t),0!==t&&isFinite(t)?r(t)*i(o(t)):t)}},function(t,e,n){"use strict";var r=n(1),o=n(2),i=Function.prototype.bind,a=Function.prototype.call,s=Object.keys,c=Object.prototype.propertyIsEnumerable;t.exports=function(t,e){return function(n,l){var u,f=arguments[2],p=arguments[3];return n=Object(o(n)),r(l),u=s(n),p&&u.sort("function"==typeof p?i.call(p,n):void 0),"function"!=typeof t&&(t=u[t]),a.call(t,u,function(t,r){return c.call(n,t)?a.call(l,f,n[t],t,n,r):e})}}},function(t,e){"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(t={foo:"raz"},e(t,{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},function(t,e,n){"use strict";var r=n(59),o=n(2),i=Math.max;t.exports=function(t,e){var n,a,s,c=i(arguments.length,2);for(t=Object(o(t)),s=function(r){try{t[r]=e[r]}catch(t){n||(n=t)}},a=1;a<c;++a)e=arguments[a],r(e).forEach(s);if(void 0!==n)throw n;return t}},function(t,e){"use strict";var n=Object.getPrototypeOf,r=Object.prototype,o=r.toString,i=Object().toString();t.exports=function(t){var e,a;return!(!t||"object"!=typeof t||o.call(t)!==i)&&(e=n(t),null===e?(a=t.constructor,"function"!=typeof a||a.prototype!==t):e===r||null===n(e))}},function(t,e,n){"use strict";t.exports=n(60)()?Object.keys:n(61)},function(t,e){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},function(t,e){"use strict";var n=Object.keys;t.exports=function(t){return n(null==t?t:Object(t))}},function(t,e,n){"use strict";var r=n(2),o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols;t.exports=function(t,e){var n,c=Object(r(e));if(t=Object(r(t)),a(c).forEach(function(r){try{o(t,r,i(e,r))}catch(t){n=t}}),"function"==typeof s&&s(c).forEach(function(r){try{o(t,r,i(e,r))}catch(t){n=t}}),void 0!==n)throw n;return t}},function(t,e){"use strict";var n=Array.prototype.forEach,r=Object.create;t.exports=function(t){var e=r(null);return n.call(arguments,function(t){e[t]=!0}),e}},function(t,e){"use strict";var n=String.prototype.replace,r=/([A-Z])/g;t.exports=function(){var t=n.call(this,r,"-$1").toLowerCase();return"-"===t[0]&&(t=t.slice(1)),t}},function(t,e){"use strict";var n="razdwatrzy";t.exports=function(){return"function"==typeof n.contains&&(n.contains("dwa")===!0&&n.contains("foo")===!1)}},function(t,e){"use strict";var n=String.prototype.indexOf;t.exports=function(t){return n.call(this,t,arguments[1])>-1}},function(t,e){"use strict";var n=Object.prototype.toString,r=n.call("");t.exports=function(t){return"string"==typeof t||t&&"object"==typeof t&&(t instanceof String||n.call(t)===r)||!1}},function(t,e){"use strict";var n=function(t){return t.charCodeAt(0)};t.exports=function(t){var e,r,o,i,a,s,c=new Array(t.length),l="CHAR";for(i=0,a=0;i<=t.length;i++)switch(s=t.charCodeAt(i),l){case"CHAR":switch(s){case n("%"):e=0,r=0,l="HEX0";break;default:c[a++]=s}break;case"HEX0":if(l="HEX1",o=s,n("0")<=s&&s<=n("9"))e=s-n("0");else if(n("a")<=s&&s<=n("f"))e=s-n("a")+10;else{if(!(n("A")<=s&&s<=n("F"))){c[a++]=n("%"),c[a++]=s,l="CHAR";break}e=s-n("A")+10}break;case"HEX1":if(l="CHAR",n("0")<=s&&s<=n("9"))r=s-n("0");else if(n("a")<=s&&s<=n("f"))r=s-n("a")+10;else{if(!(n("A")<=s&&s<=n("F"))){c[a++]=n("%"),c[a++]=o,c[a++]=s;break}r=s-n("A")+10}c[a++]=16*e+r}return c.slice(0,a-1)}},function(t,e,n){"use strict";var r=n(68),o=Array.isArray,i=Object.prototype.hasOwnProperty,a=Object.create,s=String.fromCharCode,c=/\+/g,l=function(t){try{return decodeURIComponent(t)}catch(e){return s.apply(null,r(t))}};t.exports=function(t){var e,n,r,s,u,f,p,d=arguments[1]||"&",h=arguments[2]||"=",b=arguments[3],m=a(null);if(null==t)return m;if(t=String(t),0===t.length)return m;t=t.split(d);var v=1e3;b&&!isNaN(b.maxKeys)&&(v=Number(b.maxKeys));var y=t.length;for(v>0&&y>v&&(y=v),e=0;e<y;++e)n=t[e].replace(c,"%20"),r=n.indexOf(h),r>=0?(s=n.substr(0,r),u=n.substr(r+1)):(s=n,u=""),f=l(s),p=l(u),i.call(m,f)?o(m[f])?m[f].push(p):m[f]=[m[f],p]:m[f]=p;return m}},function(t,e){"use strict";var n=Array.isArray,r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t){var e=arguments[1]||"&",o=arguments[2]||"=";if(!t||"function"!=typeof t&&"object"!=typeof t)throw new TypeError(t+" is not an object");var i,a,s,c,l,u=Object.keys(t),f=[];for(i=0;i<u.length;i++)if(a=u[i],s=t[a],c=encodeURIComponent(a)+o,n(s))for(l=0;l<s.length;l++)f.push(c+encodeURIComponent(r(s[l])));else f.push(c+encodeURIComponent(r(s)));return f.join(e)}},function(t,e){t.exports=function(t){return function(e){var n,r,o="vertical"==t?"Y":"X";e.parent.addEventListener("touchstart",function(t){1==t.touches.length&&(n=t.touches[0]["page"+o],r=0)}),e.parent.addEventListener("touchmove",function(t){1==t.touches.length&&(t.preventDefault(),r=t.touches[0]["page"+o]-n)}),e.parent.addEventListener("touchend",function(){Math.abs(r)>50&&e[r>0?"prev":"next"]()})}}},function(t,e){var n=function(t,e){var n=1===(t.parent||t).nodeType?t.parent||t:document.querySelector(t.parent||t),r=[].filter.call("string"==typeof t.slides?n.querySelectorAll(t.slides):t.slides||n.children,function(t){return"SCRIPT"!==t.nodeName}),o=r[0],i={},a=function(t,e){r[t]&&(f("deactivate",p(o,e)),o=r[t],f("activate",p(o,e)))},s=function(t,e){return arguments.length?void(f("slide",p(r[t],e))&&a(t,e)):r.indexOf(o)},c=function(t,e){var n=r.indexOf(o)+t;f(t>0?"next":"prev",p(o,e))&&a(n,e)},l=function(t,e){return(i[t]||(i[t]=[])).push(e),u.bind(null,t,e)},u=function(t,e){i[t]=(i[t]||[]).filter(function(t){return t!==e})},f=function(t,e){return(i[t]||[]).reduce(function(t,n){return t&&n(e)!==!1},!0)},p=function(t,e){return e=e||{},e.index=r.indexOf(t),e.slide=t,e},d={on:l,off:u,fire:f,slide:s,next:c.bind(null,1),prev:c.bind(null,-1),parent:n,slides:r};return(e||[]).forEach(function(t){t(d)}),a(0),d};t.exports={from:n}},function(t,e,n){t.exports=function(t){n.e(1,function(e){t(n(98))})}},function(t,e,n){t.exports=function(t){n.e(2,function(e){t(n(99))})}},function(t,e,n){e=t.exports=n(11)(),e.push([t.id,".bespoke-slide>aside{box-sizing:border-box;position:absolute;width:100%;top:0;left:100%;padding-left:40px;font-size:2em;-webkit-transition:opacity 1s ease-in-out;transition:opacity 1s ease-in-out;opacity:0}body.notes .bespoke-slide{-webkit-transform:scale(.5) translateX(-50%);transform:scale(.5) translateX(-50%)}body.notes .bespoke-slide>aside{-webkit-transition:opacity 1s ease-in-out;transition:opacity 1s ease-in-out;opacity:1}",""])},function(t,e,n){e=t.exports=n(11)(),e.push([t.id,"@import url(https://fonts.googleapis.com/css?family=Averia+Sans+Libre:400,400italic);",""]),e.push([t.id,'/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}*{margin:0;padding:0}html{text-size-adjust:auto}.bespoke-parent{font-size:1.5em;background:#fffdfa;color:#111;font-family:gill sans,helvetica,arial,sans-serif;overflow:hidden;text-align:center;transition:background 1s ease;background-position:50% 50%}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none;z-index:1}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{text-shadow:0 1px 0 hsla(0,0%,7%,.25);transition:opacity .3s ease;width:1024px;height:576px;position:absolute;top:50%;left:50%;margin-left:-512px;margin-top:-288px;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:1}.bespoke-active{transition-delay:.2s}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-backdrop{transition:opacity 1s ease;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0}.bespoke-backdrop-active{opacity:1}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.3vw;z-index:1}.bespoke-progress-bar{background:#111;position:absolute;top:0;left:0;height:100%;transition:width 1s ease}.bespoke-bullet{transition:opacity .3s ease}.bespoke-bullet-inactive{opacity:0}strong{font-weight:400}h1 strong{font-weight:600}h1,h2,h3,p{padding-left:20px;padding-right:20px;margin:.4em 0}dd,h1,h2,h3,li,p,pre{font-weight:200}h1{font-family:didot,times new roman,serif;font-style:italic;margin:.71em 0 .21em}h2{font-family:gill sans,helvetica,arial,sans-serif;font-weight:400;font-size:1.1em;margin:.23em 0}h2,h3{font-style:normal}h3{font-size:.6em;margin:1.1em 0}ol,ul{padding:0;margin:0;text-align:left}li{margin:.4em .2em;padding-left:1.2em;font-style:normal;transform:translateX(-6px)}ul li{list-style:none}ul li:before{content:"\\2014";margin-left:-1.2em;width:1.2em;display:inline-block}hr{background-color:#111;width:30%;height:1px;border:0;margin-top:.3em}pre{margin:1.5em 0;font-size:.7em;background:none!important;white-space:pre-wrap;word-wrap:break-word;overflow-x:auto;max-width:100%}pre,pre code{display:block}pre code{white-space:pre;overflow-wrap:pre}pre code:after{clear:both}code{font-family:prestige elite std,consolas,courier new,monospace!important;font-style:normal;font-weight:200!important;text-align:left}a{color:currentColor;text-decoration:none;border-bottom:1px solid currentColor}.emphatic{background:#f30}.hljs-comment,.hljs-quote{color:#708090}.hljs-attribute,.hljs-deletion,.hljs-link,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#e90}.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-number,.hljs-params,.hljs-type{color:#905}.hljs-class .hljs-title{color:#f30}.hljs-addition,.hljs-bullet,.hljs-string,.hljs-symbol{color:#690}.hljs-meta{color:#999}.hljs-function,.hljs-section,.hljs-title{color:#dd4a68}.hljs-keyword,.hljs-selector-tag{color:#07a}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.name{font-family:Averia Sans Libre}h1.name{font-style:normal}img.plain{border:0;max-width:30%}.tool-logo{height:2em;width:2em;position:absolute;left:24%}.bespoke-backdrop.whoa{background-image:url('+n(81)+");background-position:50%;background-size:cover}.bespoke-backdrop.walter{background-image:url("+n(80)+");background-position:50%;background-size:cover}.bespoke-slide[data-bespoke-backdrop=walter],.bespoke-slide[data-bespoke-backdrop=whoa]{color:#fffdfa}.bespoke-slide[data-bespoke-backdrop=walter] hr,.bespoke-slide[data-bespoke-backdrop=whoa] hr{background-color:#fffdfa}",""]);
},,,,function(t,e,n){t.exports=n.p+"assets/walter-0b574b.gif"},function(t,e,n){t.exports=n.p+"assets/whoa-8355c3.gif"},,,,,,,,,,,,,,,function(t,e,n){var r=n(75);"string"==typeof r&&(r=[[t.id,r,""]]);n(13)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(76);"string"==typeof r&&(r=[[t.id,r,""]]);n(13)(r,{});r.locals&&(t.exports=r.locals)}]);
//# sourceMappingURL=main.js.map
(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"form *{display:block}",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],d=a[u]||0,f="".concat(u," ").concat(d);a[u]=d+1;var l=n(f),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(t[l].references++,t[l].updater(p)):t.push({identifier:f,updater:o(p,r),references:1}),i.push(f)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var d=n(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=function(e,t,n,r,o){const a=document.createElement(e);return Array.isArray(t)?a.append(...t):"object"==typeof t?a.appendChild(t):t&&(a.innerText=t.toString()),n&&(a.className=n),r&&Object.entries(r).forEach((([e,t])=>a.setAttribute(e,t))),o&&Object.assign(a.style,o),a},t=t=>(n,r,o,a)=>((...t)=>e("input",...t))(void 0,r,{type:t,placeholder:n,required:"",...o},a),r=t("text"),o=(t("checkbox"),t("date"),t("number"),t("submit")),a=class{constructor(e,t=[]){this.name=e,this.todos=t}addTodo(e){this.todos.push(e)}};var i=n(379),s=n.n(i),c=n(795),u=n.n(c),d=n(695),f=n.n(d),l=n(216),p=n.n(l),m=n(192),v={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=f()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};v.domAPI=u(),v.insertStyleElement=p(),s()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals,document.getElementById("content");const h=[new a("default")],y=((...t)=>e("form",...t))([r("Enter category name","",{name:"name"}),o()]);function b(t,n){n.preventDefault();const[r]=Array.from(t.elements).map((e=>e.value)),o=new a(r);h.push(o),(t=>{const n=document.getElementById("categoriesSelect");n.innerHTML="",n.append(...(t=>t.map(((t,n)=>((...t)=>e("option",...t))(t.name,"",{value:n}))))(t))})(h)}y.addEventListener("submit",(e=>b(y,e)))})()})();
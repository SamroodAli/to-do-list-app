(()=>{"use strict";var e={192:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"form *{display:block}",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=n.base?s[0]+n.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=r(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:l,updater:o(f,n),references:1}),i.push(l)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=n(e,o),d=0;d<a.length;d++){var u=r(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};(()=>{r.d(n,{o:()=>R});const e=e=>document.getElementById(e),t=e=>{var t,r;t="categories","object"==typeof(r=e)?localStorage.setItem(t,JSON.stringify(r)):localStorage.setItem(t,r)},o=()=>("categories",JSON.parse(localStorage.getItem("categories"))),a=function(e,t,r,n,o){console.log(t);const a=document.createElement(e);return Array.isArray(t)?a.append(...t):"object"==typeof t?a.appendChild(t):t&&(a.innerText=t.toString()),r&&(a.className=r),n&&Object.entries(n).forEach((([e,t])=>a.setAttribute(e,t))),o&&Object.assign(a.style,o),a},i=(...e)=>a("form",...e),c=(...e)=>a("textArea",...e),s=e=>(t,r,n,o)=>((...e)=>a("input",...e))(void 0,r,{type:e,placeholder:t,required:"",...n},o),d=(e,t,r,n,o)=>((...e)=>a("label",...e))(e,r,{for:t,...o},n),u=s("text"),l=(s("checkbox"),s("date")),p=s("number"),f=s("submit"),m=e=>Object.values(e).map((e=>((...e)=>a("option",...e))(e.name,"",{value:e.id}))),v=e=>((...e)=>a("select",...e))(m(e),"",{id:"categoriesSelect"});function h(e,r,n){r.preventDefault();const[o,a,i,c,s]=Array.from(e.elements).map((e=>e.value)),d=n[s],u=new class{constructor(e,t,r,n,o){this.title=e,this.description=t,this.date=r,this.priority=n,this.category=o}}(o,a,i,c,d.id);d.todos.push(u),n[d.id]=d,t(n)}const y=(e,t={})=>{const r=((e=[],t={})=>i([u("Enter title","",{name:"title",value:t.title||""}),c(t.description,"",{placeholder:"Enter description for the todo",required:"",name:"description",value:t.description}),d("Enter due date","date"),l("Enter due date","",{id:"date",name:"date",value:t.date}),d("Enter priority","todo-priority"),p("","",{min:0,max:10,id:"priority",name:"priority",value:t.priority}),d("Choose category","categoriesSelect"),v(e),f()]))(e,t);return r.addEventListener("submit",(t=>h(r,t,e))),r},g=class{constructor(e,t=[]){this.name=e,this.todos=t,this.id=((e=21)=>{let t="",r=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let n=63&r[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t})()}},b=(...e)=>a("div",...e),E=(...e)=>a("section",...e),S=(...e)=>a("h2",...e),x=(...e)=>a("h3",...e),w=(...e)=>a("p",...e),T=(...e)=>a("button",...e),A=new g("default");if(!localStorage.length||!o){const e={};e[A.id]=A,t(e)}const C=o(),L=i([u("Enter category name","",{name:"name"}),f()]);L.addEventListener("submit",(e=>function(e,r){r.preventDefault();const[n]=Array.from(e.elements).map((e=>e.value)),o=new g(n);C[o.id]=o,t(C),(e=>{const t=document.getElementById("categoriesSelect");t.innerHTML="",t.append(...m(e))})(C)}(L,e)));const j=(e={})=>E([b([S("New To-Do Form"),y(C,e)]),b([S("New Category Form"),L])],"form-section"),I=(e=[])=>{const t=e.map((e=>(e=>{const t=b([w(e.title),w(e.description),w(e.date),w(e.priority),w(o()[e.category].name),T("edit todo")],"card mx-auto w-100 m-1");return t.addEventListener("click",(()=>{R(j(e))})),t})(e)));return E(t)},O=()=>{let e=Object.values(o());return E(e.map((e=>(({name:e,todos:t})=>{const r=b([x(e),T(`Todos in ${e}`,"btn-secondary")],"card");return r.addEventListener("click",(e=>()=>{R(I(e))})(t)),r})(e))))};var M=r(379),k=r.n(M),N=r(795),Z=r.n(N),D=r(695),F=r.n(D),H=r(216),P=r.n(H),U=r(192),q={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=r.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=F()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};q.domAPI=Z(),q.insertStyleElement=P(),k()(U.Z,q),U.Z&&U.Z.locals&&U.Z.locals;const B=("content",J=document.getElementById("content"),e=>((e,t)=>(e.innerHTML="",e.append(t),e))(J,e));var J;function R(e){B(e)}e("categories").addEventListener("click",(()=>R(O()))),e("todos").addEventListener("click",(()=>{const e=o(),t=Object.keys(e).map((t=>e[t].todos));R(I(t.flat()))})),e("newTodo").addEventListener("click",(()=>R(j())))})()})();
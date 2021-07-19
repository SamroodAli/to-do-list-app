(()=>{"use strict";var e={192:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"form *{display:block}",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=n.base?s[0]+n.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=r(l),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:l,updater:o(m,n),references:1}),i.push(l)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=n(e,o),d=0;d<a.length;d++){var u=r(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=e=>document.getElementById(e),t=("content",n=document.getElementById("content"),e=>((e,t)=>(e.innerHTML="",e.append(t),e))(n,e));var n;const o=e=>{t(e)},a=e=>{var t,r;t="categories","object"==typeof(r=e)?localStorage.setItem(t,JSON.stringify(r)):localStorage.setItem(t,r)},i=()=>("categories",JSON.parse(localStorage.getItem("categories"))),c=function(e,t,r,n,o){const a=document.createElement(e);return Array.isArray(t)?a.append(...t):"object"==typeof t?a.appendChild(t):t&&(a.innerText=t.toString()),r&&(a.className=r),n&&Object.entries(n).forEach((([e,t])=>a.setAttribute(e,t))),o&&Object.assign(a.style,o),a},s=(...e)=>c("form",...e),d=(...e)=>c("textArea",...e),u=(...e)=>c("option",...e),l=e=>(t,r,n,o)=>((...e)=>c("input",...e))(void 0,r,{type:e,placeholder:t,required:"",...n},o),p=(e,t,r,n,o)=>((...e)=>c("label",...e))(e,r,{for:t,...o},n),m=l("text"),f=(l("checkbox"),l("date")),v=l("number"),h=l("submit"),y=(e,t)=>Object.values(e).map((e=>e.id===t?u(e.name,"",{value:e.id,selected:"selected"}):u(e.name,"",{value:e.id}))),g=(e,t)=>((...e)=>c("select",...e))(y(e,t),"",{id:"categoriesSelect"});function b(e,t,r,n){t.preventDefault();const[o,i,c,s,d]=Array.from(e.elements).map((e=>e.value)),u=r[d],l=new class{constructor(e,t,r,n,o){this.title=e,this.description=t,this.date=r,this.priority=n,this.category=o}}(o,i,c,s,u.id);void 0!==n?u.todos[n]=l:u.todos.push(l),r[u.id]=u,a(r)}const E=(e,t={},r)=>{const n=((e=[],t={})=>s([m("Enter title","",{name:"title",value:t.title||""}),d(t.description,"",{placeholder:"Enter description for the todo",required:"",name:"description",value:t.description}),p("Enter due date","date"),f("Enter due date","",{id:"date",name:"date",value:t.date}),p("Enter priority","todo-priority"),v("","",{min:0,max:10,id:"priority",name:"priority",value:t.priority}),p("Choose category","categoriesSelect"),g(e,t.category),h()]))(e,t);return n.addEventListener("submit",(t=>b(n,t,e,r))),n};let S=(e=21)=>{let t="",r=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let n=63&r[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t};const x=class{constructor(e,t=[]){this.name=e,this.todos=t,this.id=S()}},T=(...e)=>c("div",...e),w=(...e)=>c("section",...e),A=(...e)=>c("h2",...e),L=(...e)=>c("h3",...e),C=(...e)=>c("p",...e),j=(...e)=>c("button",...e),I=new x("default");if(!localStorage.length||!i){const e={};e[I.id]=I,a(e)}const O=i(),k=s([m("Enter category name","",{name:"name"}),h()]);k.addEventListener("submit",(e=>function(e,t){t.preventDefault();const[r]=Array.from(e.elements).map((e=>e.value)),n=new x(r);O[n.id]=n,a(O),(e=>{const t=document.getElementById("categoriesSelect");t.innerHTML="",t.append(...y(e))})(O)}(k,e)));const M=(e={},t)=>w([T([A("New To-Do Form"),E(O,e,t)]),T([A("New Category Form"),k])],"form-section"),N=(t,r)=>{const n=S(),c=j("edit Todo");c.addEventListener("click",(()=>((e,t)=>{o(M(e,t))})(t,r)));const s=j("delete Todo");return s.addEventListener("click",(()=>((t,r)=>{(t=>{e(t).remove()})(t);const n=i();n[r].todos.splice(t,1),a(n)})(n,t.category))),T([C(t.title),C(t.description),C(t.date),C(t.priority),C(i()[t.category].name),c,s],"card mx-auto w-100 m-1",{id:n})},Z=(e=[])=>{const t=e.map(((e,t)=>N(e,t)));return w(t)},D=()=>{const e=Object.values(i());return w(e.map((e=>(({name:e,todos:t})=>{const r=T([L(e),j(`Todos in ${e}`,"btn-secondary")],"card");return r.addEventListener("click",(e=>()=>{o(Z(e))})(t)),r})(e))))};var F=r(379),H=r.n(F),P=r(795),U=r.n(P),q=r(695),B=r.n(q),J=r(216),R=r.n(J),_=r(192),V={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=r.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=B()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};V.domAPI=U(),V.insertStyleElement=R(),H()(_.Z,V),_.Z&&_.Z.locals&&_.Z.locals,e("categories").addEventListener("click",(()=>o(D()))),e("todos").addEventListener("click",(()=>{const e=i(),t=Object.keys(e).map((t=>e[t].todos));o(Z(t.flat()))})),e("newTodo").addEventListener("click",(()=>o(M()))),o(D())})()})();
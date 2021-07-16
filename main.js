(()=>{"use strict";var e={192:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,"body{background-color:silver}form *{display:block;margin:.5rem}.form-section{display:grid;grid-template-columns:repeat(2, 1fr)}#todos{display:grid;grid-template-columns:repeat(4, 1fr)}",""]);const o=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&a[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=n.base?c[0]+n.base:c[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=r(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:l,updater:a(m,n),references:1}),i.push(l)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);t[s].references--}for(var c=n(e,a),d=0;d<o.length;d++){var u=r(o[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=c}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,a=r.media,o=r.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=function(e,t,r,n,a){const o=document.createElement(e);return Array.isArray(t)?o.append(...t):"object"==typeof t?o.appendChild(t):t&&(o.innerText=t.toString()),r&&(o.className=r),n&&Object.entries(n).forEach((([e,t])=>o.setAttribute(e,t))),a&&Object.assign(o.style,a),o},t=(...t)=>e("div",...t),n=(...t)=>e("h2",...t),a=(...t)=>e("p",...t),o=(...t)=>e("a",...t),i=(...t)=>e("form",...t),s=(...t)=>e("textArea",...t),c=t=>(r,n,a,o)=>((...t)=>e("input",...t))(void 0,n,{type:t,placeholder:r,required:"",...a},o),d=(t,r,n,a,o)=>((...t)=>e("label",...t))(t,n,{for:r,...o},a),u=c("text"),l=(c("checkbox"),c("date")),p=c("number"),m=c("submit"),f=t=>t.map(((t,r)=>((...t)=>e("option",...t))(t.name,"",{value:r}))),v=t=>((...t)=>e("select",...t))(f(t),"",{id:"categoriesSelect"});function h(e,r,n){r.preventDefault();const[o,i,s,c,d]=Array.from(e.elements).map((e=>e.value)),u=n[d],l=new class{constructor(e,t,r,n,a){this.title=e,this.description=t,this.date=r,this.priority=n,this.category=a}}(o,i,s,c,u);u.addTodo(l),function(e){const r=[];e.forEach((e=>{e.todos.forEach((e=>{r.push(e)}))}));const n=r.map((e=>(e=>t([a(e.title),a(e.description),a(e.date),a(e.priority),a(e.category.name)],"card mx-auto w-100 m-1"))(e))),o=document.getElementById("todos");o.innerHTML="",o.append(...n)}(n)}const g=class{constructor(e,t=[]){this.name=e,this.todos=t}addTodo(e){this.todos.push(e)}},b=o("To-do-app","navbar-brand",{margin:"1rem 0.5rem"},{href:"#"}),y=[o("Categories","nav-item nav-link",{margin:"0 2rem",color:"black"},{href:"#"})],E=((...t)=>e("button",...t))(e("span","","navbar-toggler-icon"),"navbar-toggler",{},{type:"button","data-toggle":"collapse","data-target":"navbar"}),x=((...t)=>e("header",...t))(((...t)=>e("nav",...t))([b,t(t(y,"navbar-nav"),"collapse navbar-collapse",{},{id:"navbar"}),E],"navbar navbar-expand-lg navbar-light bg-light"));var T=r(379),w=r.n(T),A=r(795),C=r.n(A),S=r(695),M=r.n(S),I=r(216),j=r.n(I),L=r(192),N={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=r.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=M()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};N.domAPI=C(),N.insertStyleElement=j(),w()(L.Z,N),L.Z&&L.Z.locals&&L.Z.locals;const k=document.getElementById("content"),O=[new g("default")],Z=i([u("Enter category name","",{name:"name"}),m()]);Z.addEventListener("submit",(e=>function(e,t){t.preventDefault();const[r]=Array.from(e.elements).map((e=>e.value)),n=new g(r);O.push(n),(e=>{const t=document.getElementById("categoriesSelect");t.innerHTML="",t.append(...f(e))})(O)}(Z,e))),k.append(x,((...t)=>e("section",...t))([t([n("New To-Do Form"),(e=>{const t=((e=[])=>i([u("Enter title","",{name:"title"}),s("","",{placeholder:"Enter description for the todo",required:"",name:"description"}),d("Enter due date","date"),l("Enter due date","",{id:"date",name:"date"}),d("Enter priority","todo-priority"),p("","",{min:0,max:10,id:"priority",name:"priority"}),d("Choose category","categoriesSelect"),v(e),m()]))(e);return t.addEventListener("submit",(r=>h(t,r,e))),t})(O)]),t([n("New Category Form"),Z])],"form-section"),t("","",{id:"todos"}))})()})();
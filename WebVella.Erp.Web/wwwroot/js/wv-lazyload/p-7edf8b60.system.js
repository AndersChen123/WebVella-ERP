var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{s(t.next(e))}catch(r){i(r)}}function l(e){try{s(t["throw"](e))}catch(r){i(r)}}function s(e){e.done?n(e.value):a(e.value).then(o,l)}s((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(r){return s([e,r])}}function s(o){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=r.call(e,n)}catch(l){o=[6,l];a=0}finally{t=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="wv-lazyload";var a=0;var i=false;var o=false;var l=window;var s=document;var u={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var f=new WeakMap;var c=function(e){return f.get(e)};var $=e("r",(function(e,r){return f.set(r.$lazyInstance$=e,r)}));var v=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return f.set(e,r)};var h=function(e,r){return r in e};var m=function(e){return console.error(e)};var p=new Map;var d=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var o=p.get(i);if(o){return o[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{p.set(i,e)}return e[a]}),m)};var g=[];var y=[];var b=[];var w=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&u.$flags$&4){j(R)}else{u.raf(R)}}}};var _=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){m(n)}}e.length=0};var x=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){m(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var R=function(){a++;_(g);var e=(u.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;x(y,e);x(b,e);if(y.length>0){b.push.apply(b,y);y.length=0}if(i=g.length+y.length+b.length>0){u.raf(R)}else{a=0}};var j=function(e){return Promise.resolve().then(e)};var S=w(y,true);var E={};var C=function(e){e=typeof e;return e==="object"||e==="function"};var L=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var O=e("a",(function(){if(!(l.CSS&&l.CSS.supports&&l.CSS.supports("color","var(--c)"))){return r.import("./p-9b741424.system.js").then((function(){u.$cssShim$=l.__stencil_cssshim;if(u.$cssShim$){return u.$cssShim$.initShim()}}))}return Promise.resolve()}));var P=e("p",(function(){return __awaiter(n,void 0,void 0,(function(){var e,n,a,i,o;return __generator(this,(function(f){switch(f.label){case 0:{u.$cssShim$=l.__stencil_cssshim}e=r.meta.url;n=new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(s.querySelectorAll("script")).find((function(e){return n.test(e.src)||e.getAttribute("data-stencil-namespace")===t}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:o=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,l.location.href));k(o.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:f.sent();f.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:o.href})]}}))}))}));var k=function(e){var r=L(t);try{l[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var n=new Map;l[r]=function(t){var a=new URL(t,e).href;var i=n.get(a);if(!i){var o=s.createElement("script");o.type="module";o.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){o.onload=function(){e(l[r].m);o.remove()}}));n.set(a,i);s.head.appendChild(o)}return i}}};var U=function(e,r){if(e!=null&&!C(e)){if(r&1){return String(e)}return e}return e};var A="hydrated";var M=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=false;var o=false;var l=[];var s=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){s(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!C(a)){a=String(a)}if(i&&o){l[l.length-1].$text$+=a}else{l.push(i?B(null,a):a)}o=i}}};s(n);if(r){{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r,l,T)}var f=B(e,null);f.$attrs$=r;if(l.length>0){f.$children$=l}return f}));var B=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}return n};var N={};var I=function(e){return e&&e.$tag$===N};var T={forEach:function(e,r){return e.map(z).forEach(r)},map:function(e,r){return e.map(z).map(r).map(H)}};var z=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var H=function(e){var r=B(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var V=function(e,r,n,t,a,i){if(n===t){return}var o=h(e,r);var l=r.toLowerCase();if(r==="class"){var s=e.classList;var u=F(n);var f=F(t);s.remove.apply(s,u.filter((function(e){return e&&!f.includes(e)})));s.add.apply(s,f.filter((function(e){return e&&!u.includes(e)})))}else{var c=C(t);if((o||c&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var $=t==null?"":t;if(n==null||e[r]!=$){e[r]=$}}else{e[r]=t}}catch(v){}}if(t==null||t===false){{e.removeAttribute(r)}}else if((!o||i&4||a)&&!c){t=t===true?"":t;{e.setAttribute(r,t)}}}};var q=/\s/;var F=function(e){return!e?[]:e.split(q)};var W=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||E;var o=r.$attrs$||E;{for(t in i){if(!(t in o)){V(a,t,i[t],undefined,n,r.$flags$)}}}for(t in o){V(a,t,i[t],o[t],n,r.$flags$)}};var G=function(e,r,n,t){var a=r.$children$[n];var i=0;var l;var u;if(a.$text$!==null){l=a.$elm$=s.createTextNode(a.$text$)}else{l=a.$elm$=s.createElement(a.$tag$);{W(null,a,o)}if(a.$children$){for(i=0;i<a.$children$.length;++i){u=G(e,a,i);if(u){l.appendChild(u)}}}}return l};var Q=function(e,r,n,t,a,i){var o=e;var l;for(;a<=i;++a){if(t[a]){l=G(null,n,a);if(l){t[a].$elm$=l;o.insertBefore(l,r)}}}};var D=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;a.remove()}}};var J=function(e,r,n,t){var a=0;var i=0;var o=r.length-1;var l=r[0];var s=r[o];var u=t.length-1;var f=t[0];var c=t[u];var $;while(a<=o&&i<=u){if(l==null){l=r[++a]}else if(s==null){s=r[--o]}else if(f==null){f=t[++i]}else if(c==null){c=t[--u]}else if(K(l,f)){X(l,f);l=r[++a];f=t[++i]}else if(K(s,c)){X(s,c);s=r[--o];c=t[--u]}else if(K(l,c)){X(l,c);e.insertBefore(l.$elm$,s.$elm$.nextSibling);l=r[++a];c=t[--u]}else if(K(s,f)){X(s,f);e.insertBefore(s.$elm$,l.$elm$);s=r[--o];f=t[++i]}else{{$=G(r&&r[i],n,i);f=t[++i]}if($){{l.$elm$.parentNode.insertBefore($,l.$elm$)}}}}if(a>o){Q(e,t[u+1]==null?null:t[u+1].$elm$,n,t,i,u)}else if(i>u){D(r,a,o)}};var K=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var X=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;if(r.$text$===null){{{W(e,r,o)}}if(t!==null&&a!==null){J(n,t,r,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}Q(n,null,r,a,0,a.length-1)}else if(t!==null){D(t,0,t.length-1)}}else if(e.$text$!==r.$text$){n.data=r.$text$}};var Y=function(e,r,n,t){var a=r.$vnode$||B(null,null);var i=I(t)?t:M(null,null,t);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e;X(a,i)};var Z=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ee=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=r.$ancestorComponent$;var i=r.$lazyInstance$;var o=function(){return re(e,r,n,i)};var l=e["s-rc"];Z(r,a);var s;if(t){{s=ie(i,"componentWillLoad")}}if(l){l.forEach((function(e){return e()}));e["s-rc"]=undefined}return oe(s,(function(){return S(o)}))};var re=function(e,r,n,t,a){{{try{Y(e,r,n,t.render())}catch(l){m(l)}}}if(u.$cssShim$){u.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}{var i=e["s-p"];var o=function(){return ne(e,r,n)};if(i.length===0){o()}else{Promise.all(i).then(o);r.$flags$|=4;i.length=0}}};var ne=function(e,r,n){var t=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(A)}{r.$onReadyResolve$(e);if(!t){ae()}}}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){j((function(){return ee(e,r,n,false)}))}r.$flags$&=~(4|512)}};var te=function(e,r){{var n=c(e);if((n.$flags$&(2|16))===2){ee(e,n,r,false)}}};var ae=function(){{s.documentElement.classList.add(A)}{u.$flags$|=2}};var ie=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){m(t)}}return undefined};var oe=function(e,r){return e&&e.then?e.then(r):r()};var le=function(e,r){return c(e).$instanceValues$.get(r)};var se=function(e,r,n,t){var a=c(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(r);var l=a.$flags$;var s=a.$lazyInstance$;n=U(n,t.$members$[r][0]);if(n!==o&&(!(l&8)||o===undefined)){a.$instanceValues$.set(r,n);if(s){if((l&(2|16))===2){ee(i,a,t,false)}}}};var ue=function(e,r,n){if(r.$members$){var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return le(this,t)},set:function(e){se(this,t,e,r)},configurable:true,enumerable:true})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;u.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var r=e[0],n=e[1];var t=n[1]||r;i.set(t,r);return t}))}}return e};var fe=function(e,r,t,a,i){return __awaiter(n,void 0,void 0,(function(){var n,a;return __generator(this,(function(o){switch(o.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=d(t);if(!i.then)return[3,2];return[4,i];case 1:i=o.sent();o.label=2;case 2:if(!i.isProxied){ue(i,t,2);i.isProxied=true}{r.$flags$|=8}try{new i(r)}catch(l){m(l)}{r.$flags$&=~8}o.label=3;case 3:n=r.$ancestorComponent$;a=function(){return ee(e,r,t,true)};if(n&&n["s-rc"]){n["s-rc"].push(a)}else{a()}return[2]}}))}))};var ce=function(e,r){if((u.$flags$&1)===0){var n=c(e);if(!(n.$flags$&1)){n.$flags$|=1;{var t=e;while(t=t.parentNode||t.host){if(t["s-p"]){Z(n,n.$ancestorComponent$=t);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{j((function(){return fe(e,n,r)}))}}}};var $e=function(e){if((u.$flags$&1)===0){var r=c(e);if(u.$cssShim$){u.$cssShim$.removeHost(e)}}};var ve=e("b",(function(e,r){if(r===void 0){r={}}var n=[];var t=r.exclude||[];var a=s.head;var i=l.customElements;var o=a.querySelector("meta[charset]");var f=s.createElement("style");var $;Object.assign(u,r);u.$resourcesUrl$=new URL(r.resourcesUrl||"./",s.baseURI).href;if(r.syncQueue){u.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var a={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{a.$members$=r[2]}var o=a.$tagName$;var l=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;v(r);return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}u.jmp((function(){return ce(e,a)}))};r.prototype.disconnectedCallback=function(){var e=this;u.jmp((function(){return $e(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){te(this,a)};r.prototype.componentOnReady=function(){return c(this).$onReadyPromise$};return r}(HTMLElement);a.$lazyBundleIds$=e[0];if(!t.includes(o)&&!i.get(o)){n.push(o);i.define(o,ue(l,a,1))}}))}));f.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";f.setAttribute("data-styles","");a.insertBefore(f,o?o.nextSibling:a.firstChild);u.jmp((function(){return $=setTimeout(ae,30)}))}))}}}));
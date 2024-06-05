import{S as at,i as rt,s as nt,a as ot,e as U,c as it,b as B,g as Y,t as j,d as Q,f as N,h as C,j as st,o as Pe,k as lt,l as ct,m as ft,n as Ee,p as G,q as ut,r as dt,u as pt,v as K,w as z,x as oe,y as H,z as J,A as de}from"./chunks/index-d5e5d6d5.js";import{S as et,I as W,g as Je,f as Ge,a as Re,b as pe,s as X,i as We,c as _e,P as xe,d as _t,e as mt,h as ht}from"./chunks/singletons-8021d04d.js";import{_ as L}from"./chunks/preload-helper-41c905a7.js";import{R as Xe,H as Ae}from"./chunks/control-f5b05b5f.js";import{u as gt}from"./chunks/parse-f0c618df.js";function wt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function yt(r){return r.split("%25").map(decodeURI).join("%25")}function vt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const bt=["href","pathname","search","searchParams","toString","toJSON"];function Et(r,e){const a=new URL(r);for(const i of bt){let s=a[i];Object.defineProperty(a,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return Rt(a),a}function Rt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function Lt(r){return r.replace(/\/$/,"")+kt}function Ot(r){let e=5381;if(typeof r=="string"){let a=r.length;for(;a;)e=e*33^r.charCodeAt(--a)}else if(ArrayBuffer.isView(r)){const a=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=a.length;for(;i;)e=e*33^a[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&re.delete(Te(r)),me(r,e));const re=new Map;function $t(r,e){const a=Te(r,e),i=document.querySelector(a);if(i!=null&&i.textContent){const{body:s,...d}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&re.set(a,{body:s,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,d))}return me(r,e)}function Pt(r,e,a){if(re.size>0){const i=Te(r,a),s=re.get(i);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(a==null?void 0:a.cache))return new Response(s.body,s.init);re.delete(i)}}return me(e,a)}function Te(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Ot(e.body)}"]`),i}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function St(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Tt(r).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,h)=>{if(h%2){if(u.startsWith("x+"))return ke(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return ke(String.fromCharCode(...u.slice(2).split("-").map(I=>parseInt(I,16))));const g=At.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,O,T,E,q]=g;return e.push({name:E,matcher:q,optional:!!O,rest:!!T,chained:T?h===1&&t[0]==="":!1}),T?"(.*?)":O?"([^/]*)?":"([^/]+?)"}return ke(u)}).join("")}).join("")}/?$`),params:e}}function It(r){return!/^\([^)]+\)$/.test(r)}function Tt(r){return r.slice(1).split("/").filter(It)}function Dt(r,e,a){const i={},s=r.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let u=s[t];if(f.chained&&f.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!a[f.matcher](u)){if(f.optional&&f.chained){let h=s.indexOf(void 0,t);if(h===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;h>=t;)s[h]=s[h-1],h-=1;continue}return}i[f.name]=u}}if(!d)return i}function ke(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Vt(r,e,a,i){const s=new Set(e);return Object.entries(a).map(([f,[u,h,g]])=>{const{pattern:O,params:T}=St(f),E={id:f,exec:q=>{const I=O.exec(q);if(I)return Dt(I,T,i)},errors:[1,...g||[]].map(q=>r[q]),layouts:[0,...h||[]].map(t),leaf:d(u)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function d(f){const u=f<0;return u&&(f=~f),[u,r[f]]}function t(f){return f===void 0?f:[s.has(f),r[f]]}}function Ut(r){let e,a,i;var s=r[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=K(s,d(r))),{c(){e&&z(e.$$.fragment),a=U()},l(t){e&&oe(e.$$.fragment,t),a=U()},m(t,f){e&&H(e,t,f),B(t,a,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),s!==(s=t[0][0])){if(e){Y();const h=e;j(h.$$.fragment,1,0,()=>{J(h,1)}),Q()}s?(e=K(s,d(t)),z(e.$$.fragment),N(e.$$.fragment,1),H(e,a.parentNode,a)):e=null}else s&&e.$set(u)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&C(a),e&&J(e,t)}}}function jt(r){let e,a,i;var s=r[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return s&&(e=K(s,d(r))),{c(){e&&z(e.$$.fragment),a=U()},l(t){e&&oe(e.$$.fragment,t),a=U()},m(t,f){e&&H(e,t,f),B(t,a,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){Y();const h=e;j(h.$$.fragment,1,0,()=>{J(h,1)}),Q()}s?(e=K(s,d(t)),z(e.$$.fragment),N(e.$$.fragment,1),H(e,a.parentNode,a)):e=null}else s&&e.$set(u)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&C(a),e&&J(e,t)}}}function Nt(r){let e,a,i;var s=r[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=K(s,d(r))),{c(){e&&z(e.$$.fragment),a=U()},l(t){e&&oe(e.$$.fragment,t),a=U()},m(t,f){e&&H(e,t,f),B(t,a,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),s!==(s=t[0][1])){if(e){Y();const h=e;j(h.$$.fragment,1,0,()=>{J(h,1)}),Q()}s?(e=K(s,d(t)),z(e.$$.fragment),N(e.$$.fragment,1),H(e,a.parentNode,a)):e=null}else s&&e.$set(u)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&C(a),e&&J(e,t)}}}function Mt(r){let e,a,i;var s=r[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return s&&(e=K(s,d(r))),{c(){e&&z(e.$$.fragment),a=U()},l(t){e&&oe(e.$$.fragment,t),a=U()},m(t,f){e&&H(e,t,f),B(t,a,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),s!==(s=t[0][1])){if(e){Y();const h=e;j(h.$$.fragment,1,0,()=>{J(h,1)}),Q()}s?(e=K(s,d(t)),z(e.$$.fragment),N(e.$$.fragment,1),H(e,a.parentNode,a)):e=null}else s&&e.$set(u)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&C(a),e&&J(e,t)}}}function Ct(r){let e,a,i;var s=r[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return s&&(e=K(s,d(r))),{c(){e&&z(e.$$.fragment),a=U()},l(t){e&&oe(e.$$.fragment,t),a=U()},m(t,f){e&&H(e,t,f),B(t,a,f),i=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),s!==(s=t[0][2])){if(e){Y();const h=e;j(h.$$.fragment,1,0,()=>{J(h,1)}),Q()}s?(e=K(s,d(t)),z(e.$$.fragment),N(e.$$.fragment,1),H(e,a.parentNode,a)):e=null}else s&&e.$set(u)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&C(a),e&&J(e,t)}}}function qt(r){let e,a,i,s;const d=[Mt,Nt],t=[];function f(u,h){return u[0][2]?0:1}return e=f(r),a=t[e]=d[e](r),{c(){a.c(),i=U()},l(u){a.l(u),i=U()},m(u,h){t[e].m(u,h),B(u,i,h),s=!0},p(u,h){let g=e;e=f(u),e===g?t[e].p(u,h):(Y(),j(t[g],1,1,()=>{t[g]=null}),Q(),a=t[e],a?a.p(u,h):(a=t[e]=d[e](u),a.c()),N(a,1),a.m(i.parentNode,i))},i(u){s||(N(a),s=!0)},o(u){j(a),s=!1},d(u){t[e].d(u),u&&C(i)}}}function Ye(r){let e,a=r[6]&&Qe(r);return{c(){e=lt("div"),a&&a.c(),this.h()},l(i){e=ct(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ft(e);a&&a.l(s),s.forEach(C),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),G(e,"position","absolute"),G(e,"left","0"),G(e,"top","0"),G(e,"clip","rect(0 0 0 0)"),G(e,"clip-path","inset(50%)"),G(e,"overflow","hidden"),G(e,"white-space","nowrap"),G(e,"width","1px"),G(e,"height","1px")},m(i,s){B(i,e,s),a&&a.m(e,null)},p(i,s){i[6]?a?a.p(i,s):(a=Qe(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(i){i&&C(e),a&&a.d()}}}function Qe(r){let e;return{c(){e=ut(r[7])},l(a){e=dt(a,r[7])},m(a,i){B(a,e,i)},p(a,i){i&128&&pt(e,a[7])},d(a){a&&C(e)}}}function Ft(r){let e,a,i,s,d;const t=[jt,Ut],f=[];function u(g,O){return g[0][1]?0:1}e=u(r),a=f[e]=t[e](r);let h=r[5]&&Ye(r);return{c(){a.c(),i=ot(),h&&h.c(),s=U()},l(g){a.l(g),i=it(g),h&&h.l(g),s=U()},m(g,O){f[e].m(g,O),B(g,i,O),h&&h.m(g,O),B(g,s,O),d=!0},p(g,[O]){let T=e;e=u(g),e===T?f[e].p(g,O):(Y(),j(f[T],1,1,()=>{f[T]=null}),Q(),a=f[e],a?a.p(g,O):(a=f[e]=t[e](g),a.c()),N(a,1),a.m(i.parentNode,i)),g[5]?h?h.p(g,O):(h=Ye(g),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i(g){d||(N(a),d=!0)},o(g){j(a),d=!1},d(g){f[e].d(g),g&&C(i),h&&h.d(g),g&&C(s)}}}function Bt(r,e,a){let{stores:i}=e,{page:s}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:h=null}=e;st(i.page.notify);let g=!1,O=!1,T=null;return Pe(()=>{const E=i.page.subscribe(()=>{g&&(a(6,O=!0),a(7,T=document.title||"untitled page"))});return a(5,g=!0),E}),r.$$set=E=>{"stores"in E&&a(8,i=E.stores),"page"in E&&a(9,s=E.page),"components"in E&&a(0,d=E.components),"form"in E&&a(1,t=E.form),"data_0"in E&&a(2,f=E.data_0),"data_1"in E&&a(3,u=E.data_1),"data_2"in E&&a(4,h=E.data_2)},r.$$.update=()=>{r.$$.dirty&768&&i.page.set(s)},[d,t,f,u,h,g,O,T,i,s]}class Kt extends at{constructor(e){super(),rt(this,e,Bt,Ft,nt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const zt={},he=[()=>L(()=>import("./chunks/0-fd9e3844.js"),["./chunks/0-fd9e3844.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-d4942b16.js","./chunks/index-d5e5d6d5.js"],import.meta.url),()=>L(()=>import("./chunks/1-98e58628.js"),["./chunks/1-98e58628.js","./components/error.svelte-f3eb51ad.js","./chunks/index-d5e5d6d5.js","./chunks/stores-770c2625.js","./chunks/singletons-8021d04d.js","./chunks/index-ea030a08.js"],import.meta.url),()=>L(()=>import("./chunks/2-8ceb16d1.js"),["./chunks/2-8ceb16d1.js","./components/pages/blog/_layout.svelte-3d315542.js","./chunks/index-d5e5d6d5.js","./assets/_layout-6792d423.css"],import.meta.url),()=>L(()=>import("./chunks/3-68ca626c.js"),["./chunks/3-68ca626c.js","./components/pages/search/_layout.svelte-2670fb6b.js","./chunks/index-d5e5d6d5.js"],import.meta.url),()=>L(()=>import("./chunks/4-95d5fbff.js"),["./chunks/4-95d5fbff.js","./components/pages/search/_category_/_error.svelte-c6045004.js","./chunks/index-d5e5d6d5.js","./chunks/stores-770c2625.js","./chunks/singletons-8021d04d.js","./chunks/index-ea030a08.js"],import.meta.url),()=>L(()=>import("./chunks/5-8d44730c.js"),["./chunks/5-8d44730c.js","./components/pages/_page.svelte-4ff82c09.js","./chunks/index-d5e5d6d5.js","./assets/_page-1d07a708.css"],import.meta.url),()=>L(()=>import("./chunks/6-6ad06e11.js"),["./chunks/6-6ad06e11.js","./components/pages/MOMO/_page.svelte-d867a9b5.js","./chunks/index-d5e5d6d5.js","./assets/_page-8d3a1630.css"],import.meta.url),()=>L(()=>import("./chunks/7-b1257beb.js"),["./chunks/7-b1257beb.js","./components/pages/MOMO/Contact/_page.svelte-4e68c8b8.js","./chunks/index-d5e5d6d5.js"],import.meta.url),()=>L(()=>import("./chunks/8-39c1bd4c.js"),["./chunks/8-39c1bd4c.js","./components/pages/MOMO/el car/_page.svelte-a0fe8f77.js","./chunks/index-d5e5d6d5.js","./assets/_page-9052668c.css"],import.meta.url),()=>L(()=>import("./chunks/9-642f6fdd.js"),["./chunks/9-642f6fdd.js","./components/pages/MOMO/modern car/_page.svelte-d3b1d1f1.js","./chunks/index-d5e5d6d5.js","./assets/_page-f023bc24.css"],import.meta.url),()=>L(()=>import("./chunks/10-4399a9be.js"),["./chunks/10-4399a9be.js","./components/pages/MOMO/momo/_page.svelte-41ff5924.js","./chunks/index-d5e5d6d5.js","./assets/_page-f500e230.css"],import.meta.url),()=>L(()=>import("./chunks/11-e861dcf7.js"),["./chunks/11-e861dcf7.js","./components/pages/MOMO/spel/_page.svelte-c015ff5c.js","./chunks/index-d5e5d6d5.js","./assets/_page-2a9f6618.css"],import.meta.url),()=>L(()=>import("./chunks/12-d7b28a05.js"),["./chunks/12-d7b28a05.js","./chunks/_page-80848ead.js","./components/pages/blog/_page.svelte-9542d211.js","./chunks/index-d5e5d6d5.js"],import.meta.url),()=>L(()=>import("./chunks/13-e7af51fd.js"),["./chunks/13-e7af51fd.js","./chunks/_page-66b0798c.js","./chunks/preload-helper-41c905a7.js","./components/pages/blog/_path_/_page.svelte-60bd5c6f.js","./chunks/index-d5e5d6d5.js"],import.meta.url),()=>L(()=>import("./chunks/14-063a7dd2.js"),["./chunks/14-063a7dd2.js","./components/pages/chat/_page.svelte-818c647c.js","./chunks/index-d5e5d6d5.js","./chunks/parse-f0c618df.js","./chunks/singletons-8021d04d.js","./chunks/index-ea030a08.js","./chunks/stores-1df6a426.js","./assets/_page-642cc7f9.css"],import.meta.url),()=>L(()=>import("./chunks/15-b1483250.js"),["./chunks/15-b1483250.js","./components/pages/k/_page.svelte-4d88bf5b.js","./chunks/index-d5e5d6d5.js"],import.meta.url),()=>L(()=>import("./chunks/16-98b970db.js"),["./chunks/16-98b970db.js","./components/pages/memory/_page.svelte-0be95def.js","./chunks/index-d5e5d6d5.js","./assets/_page-4a12ecab.css"],import.meta.url),()=>L(()=>import("./chunks/17-4fee3f48.js"),["./chunks/17-4fee3f48.js","./components/pages/miniprojekt2/_page.svelte-32ebfdca.js","./chunks/index-d5e5d6d5.js","./assets/_page-ba078295.css"],import.meta.url),()=>L(()=>import("./chunks/18-0814a7c6.js"),["./chunks/18-0814a7c6.js","./components/pages/photoapp/_page.svelte-72b94a37.js","./chunks/index-d5e5d6d5.js","./assets/_page-4afa9d64.css"],import.meta.url),()=>L(()=>import("./chunks/19-3d59a1cd.js"),["./chunks/19-3d59a1cd.js","./components/pages/register/_page.svelte-f467be00.js","./chunks/index-d5e5d6d5.js"],import.meta.url),()=>L(()=>import("./chunks/20-ff484abb.js"),["./chunks/20-ff484abb.js","./components/pages/scroll/_page.svelte-c62feafb.js","./chunks/index-d5e5d6d5.js","./chunks/index-f30600c4.js","./assets/_page-3c8357fa.css"],import.meta.url),()=>L(()=>import("./chunks/21-3241c3cb.js"),["./chunks/21-3241c3cb.js","./components/pages/search/_page.svelte-b5414e05.js","./chunks/index-d5e5d6d5.js"],import.meta.url),()=>L(()=>import("./chunks/22-57ff8ae1.js"),["./chunks/22-57ff8ae1.js","./chunks/_page-f8406e2a.js","./chunks/control-f5b05b5f.js","./components/pages/search/_category_/_page.svelte-729c9a42.js","./chunks/index-d5e5d6d5.js","./assets/_page-a790573b.css"],import.meta.url),()=>L(()=>import("./chunks/23-1247539a.js"),["./chunks/23-1247539a.js","./components/pages/shoping/_page.svelte-5b9743fc.js","./chunks/index-d5e5d6d5.js"],import.meta.url),()=>L(()=>import("./chunks/24-2e71852c.js"),["./chunks/24-2e71852c.js","./components/pages/telltale/_page.svelte-bb409c42.js","./chunks/index-d5e5d6d5.js","./chunks/stores-1df6a426.js","./chunks/index-ea030a08.js","./chunks/index-f30600c4.js","./assets/_page-e52d8411.css"],import.meta.url),()=>L(()=>import("./chunks/25-844b7eb4.js"),["./chunks/25-844b7eb4.js","./components/pages/todo/_page.svelte-214cd8bf.js","./chunks/index-d5e5d6d5.js"],import.meta.url)],Ht=[],Jt={"/":[5],"/MOMO":[6],"/MOMO/Contact":[7],"/MOMO/el car":[8],"/MOMO/modern car":[9],"/MOMO/momo":[10],"/MOMO/spel":[11],"/blog":[12,[2]],"/blog/[path]":[13,[2]],"/chat":[14],"/k":[15],"/memory":[16],"/miniprojekt2":[17],"/photoapp":[18],"/register":[19],"/scroll":[20],"/search":[21,[3]],"/search/[category]":[22,[3],[,4]],"/shoping":[23],"/telltale":[24],"/todo":[25]},Gt={handleError:({error:r})=>{console.error(r)}};async function Wt(r){var e;for(const a in r)if(typeof((e=r[a])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,s])=>[i,await s])));return r}const Le=Vt(he,Ht,Jt,zt),Se=he[0],Ie=he[1];Se();Ie();let ne={};try{ne=JSON.parse(sessionStorage[et])}catch{}function Oe(r){ne[r]=_e()}function xt({target:r,base:e}){var Ke;const a=document.documentElement,i=[];let s=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,h=!0,g=!1,O=!1,T=!1,E=!1,q,I=(Ke=history.state)==null?void 0:Ke[W];I||(I=Date.now(),history.replaceState({...history.state,[W]:I},"",location.href));const ge=ne[I];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let x,De,ie;async function Ve(){ie=ie||Promise.resolve(),await ie,ie=null;const n=new URL(location.href),o=ce(n,!0);s=null,await je(o,n,[])}async function we(n,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:_=!1},m,v){return typeof n=="string"&&(n=new URL(n,Je(document))),fe({url:n,scroll:o?_e():null,keepfocus:l,redirect_chain:m,details:{state:p,replaceState:c},nav_token:v,accepted:()=>{_&&(E=!0)},blocked:()=>{},type:"goto"})}async function Ue(n){const o=ce(n,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${n}`);return s={id:o.id,promise:Ce(o).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function se(...n){const c=Le.filter(l=>n.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function je(n,o,c,l,p={},_){var v,y;De=p;let m=n&&await Ce(n);if(m||(m=await Be(o,{id:null},await ae(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(n==null?void 0:n.url)||o,De!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(o.pathname))m=await le({status:500,error:await ae(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return we(new URL(m.location,o).href,{},[...c,o.pathname],p),!1;else((y=(v=m.props)==null?void 0:v.page)==null?void 0:y.status)>=400&&await X.updated.check()&&await ue(o);if(i.length=0,E=!1,g=!0,l&&l.details){const{details:w}=l,k=w.replaceState?0:1;w.state[W]=I+=k,history[w.replaceState?"replaceState":"pushState"](w.state,"",o)}if(s=null,u?(t=m.state,m.props.page&&(m.props.page.url=o),q.$set(m.props)):Ne(m),l){const{scroll:w,keepfocus:k}=l;if(k||$e(),await de(),h){const $=o.hash&&document.getElementById(o.hash.slice(1));w?scrollTo(w.x,w.y):$?$.scrollIntoView():scrollTo(0,0)}}else await de();h=!0,m.props.page&&(x=m.props.page),_&&_(),g=!1}function Ne(n){var l;t=n.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),x=n.props.page,q=new Kt({target:r,props:{...n.props,stores:X},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(p=>p(c)),u=!0}async function ee({url:n,params:o,branch:c,status:l,error:p,route:_,form:m}){const v=c.filter(Boolean);let y="never";for(const P of c)(P==null?void 0:P.slash)!==void 0&&(y=P.slash);n.pathname=wt(n.pathname,y),n.search=n.search;const w={type:"loaded",state:{url:n,params:o,branch:c,error:p,route:_},props:{components:v.map(P=>P.node.component)}};m!==void 0&&(w.props.form=m);let k={},$=!x;for(let P=0;P<v.length;P+=1){const b=v[P];k={...k,...b.data},($||!t.branch.some(V=>V===b))&&(w.props[`data_${P}`]=k,$=$||Object.keys(b.data??{}).length>0)}return $||($=Object.keys(x.data).length!==Object.keys(k).length),(!t.url||n.href!==t.url.href||t.error!==p||m!==void 0||$)&&(w.props.page={error:p,params:o,route:_,status:l,url:new URL(n),form:m??null,data:$?k:x.data}),w}async function ye({loader:n,parent:o,url:c,params:l,route:p,server_data_node:_}){var w,k,$;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await n();if((w=y.universal)!=null&&w.load){let F=function(...b){for(const V of b){const{href:M}=new URL(V,c);v.dependencies.add(M)}};const P={route:{get id(){return v.route=!0,p.id}},params:new Proxy(l,{get:(b,V)=>(v.params.add(V),b[V])}),data:(_==null?void 0:_.data)??null,url:Et(c,()=>{v.url=!0}),async fetch(b,V){let M;b instanceof Request?(M=b.url,V={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...V}):M=b;const R=new URL(M,c).href;return F(R),u?Pt(M,R,V):$t(M,V)},setHeaders:()=>{},depends:F,parent(){return v.parent=!0,o()}};m=await y.universal.load.call(null,P)??null,m=m?await Wt(m):null}return{node:y,loader:n,server:_,universal:(k=y.universal)!=null&&k.load?{type:"data",data:m,uses:v}:null,data:m??(_==null?void 0:_.data)??null,slash:(($=y.universal)==null?void 0:$.trailingSlash)??(_==null?void 0:_.slash)}}function Me(n,o,c,l,p){if(E)return!0;if(!l)return!1;if(l.parent&&n||l.route&&o||l.url&&c)return!0;for(const _ of l.params)if(p[_]!==t.params[_])return!0;for(const _ of l.dependencies)if(i.some(m=>m(new URL(_))))return!0;return!1}function ve(n,o){return(n==null?void 0:n.type)==="data"?{type:"data",data:n.data,uses:{dependencies:new Set(n.uses.dependencies??[]),params:new Set(n.uses.params??[]),parent:!!n.uses.parent,route:!!n.uses.route,url:!!n.uses.url},slash:n.slash}:(n==null?void 0:n.type)==="skip"?o??null:null}async function Ce({id:n,invalidating:o,url:c,params:l,route:p}){if((s==null?void 0:s.id)===n)return s.promise;const{errors:_,layouts:m,leaf:v}=p,y=[...m,v];_.forEach(R=>R==null?void 0:R().catch(()=>{})),y.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let w=null;const k=t.url?n!==t.url.pathname+t.url.search:!1,$=t.route?n!==t.route.id:!1,F=y.reduce((R,S,D)=>{var te;const A=t.branch[D],Z=!!(S!=null&&S[0])&&((A==null?void 0:A.loader)!==S[1]||Me(R.some(Boolean),$,k,(te=A.server)==null?void 0:te.uses,l));return R.push(Z),R},[]);if(F.some(Boolean)){try{w=await Ze(c,F)}catch(R){return le({status:500,error:await ae(R,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(w.type==="redirect")return w}const P=w==null?void 0:w.nodes;let b=!1;const V=y.map(async(R,S)=>{var te;if(!R)return;const D=t.branch[S],A=P==null?void 0:P[S];if((!A||A.type==="skip")&&R[1]===(D==null?void 0:D.loader)&&!Me(b,$,k,(te=D.universal)==null?void 0:te.uses,l))return D;if(b=!0,(A==null?void 0:A.type)==="error")throw A;return ye({loader:R[1],url:c,params:l,route:p,parent:async()=>{var He;const ze={};for(let be=0;be<S;be+=1)Object.assign(ze,(He=await V[be])==null?void 0:He.data);return ze},server_data_node:ve(A===void 0&&R[0]?{type:"skip"}:A??null,D==null?void 0:D.server)})});for(const R of V)R.catch(()=>{});const M=[];for(let R=0;R<y.length;R+=1)if(y[R])try{M.push(await V[R])}catch(S){if(S instanceof Xe)return{type:"redirect",location:S.location};let D=500,A;P!=null&&P.includes(S)?(D=S.status??D,A=S.error):S instanceof Ae?(D=S.status,A=S.body):A=await ae(S,{params:l,url:c,route:{id:p.id}});const Z=await qe(R,M,_);return Z?await ee({url:c,params:l,branch:M.slice(0,Z.idx).concat(Z.node),status:D,error:A,route:p}):await Be(c,{id:p.id},A,D)}else M.push(void 0);return await ee({url:c,params:l,branch:M,status:200,error:null,route:p,form:o?void 0:null})}async function qe(n,o,c){for(;n--;)if(c[n]){let l=n;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[n](),loader:c[n],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:n,error:o,url:c,route:l}){const p={},_=await Se();let m=null;if(_.server)try{const w=await Ze(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;m=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ue(c)}const v=await ye({loader:Se,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(m)}),y={node:await Ie(),loader:Ie,universal:null,server:null,data:null};return await ee({url:c,params:p,branch:[v,y],status:n,error:o,route:null})}function ce(n,o){if(We(n,e))return;const c=yt(n.pathname.slice(e.length)||"/");for(const l of Le){const p=l.exec(c);if(p)return{id:n.pathname+n.search,invalidating:o,route:l,params:vt(p),url:n}}}function Fe({url:n,type:o,intent:c,delta:l}){var v,y;let p=!1;const _={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:n},willUnload:!c,type:o};l!==void 0&&(_.delta=l);const m={..._,cancel:()=>{p=!0}};return O||d.before_navigate.forEach(w=>w(m)),p?null:_}async function fe({url:n,scroll:o,keepfocus:c,redirect_chain:l,details:p,type:_,delta:m,nav_token:v,accepted:y,blocked:w}){const k=ce(n,!1),$=Fe({url:n,type:_,delta:m,intent:k});if(!$){w();return}Oe(I),y(),O=!0,u&&X.navigating.set($),await je(k,n,l,{scroll:o,keepfocus:c,details:p},v,()=>{O=!1,d.after_navigate.forEach(F=>F($)),X.navigating.set(null)})}async function Be(n,o,c,l){return n.origin===location.origin&&n.pathname===location.pathname&&!f?await le({status:l,error:c,url:n,route:o}):await ue(n)}function ue(n){return location.href=n.href,new Promise(()=>{})}function tt(){let n;a.addEventListener("mousemove",_=>{const m=_.target;clearTimeout(n),n=setTimeout(()=>{l(m,2)},20)});function o(_){l(_.composedPath()[0],1)}a.addEventListener("mousedown",o),a.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(_=>{for(const m of _)m.isIntersecting&&(se(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(_,m){const v=Ge(_,a);if(!v)return;const{url:y,external:w}=Re(v,e);if(w)return;const k=pe(v);k.reload||(m<=k.preload_data?Ue(y):m<=k.preload_code&&se(y.pathname))}function p(){c.disconnect();for(const _ of a.querySelectorAll("a")){const{url:m,external:v}=Re(_,e);if(v)continue;const y=pe(_);y.reload||(y.preload_code===xe.viewport&&c.observe(_),y.preload_code===xe.eager&&se(m.pathname))}}d.after_navigate.push(p),p()}return{after_navigate:n=>{Pe(()=>(d.after_navigate.push(n),()=>{const o=d.after_navigate.indexOf(n);d.after_navigate.splice(o,1)}))},before_navigate:n=>{Pe(()=>(d.before_navigate.push(n),()=>{const o=d.before_navigate.indexOf(n);d.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!u)&&(h=!1)},goto:(n,o={})=>we(n,o,[]),invalidate:n=>{if(typeof n=="function")i.push(n);else{const{href:o}=new URL(n,location.href);i.push(c=>c.href===o)}return Ve()},invalidateAll:()=>(E=!0,Ve()),preload_data:async n=>{const o=new URL(n,Je(document));await Ue(o)},preload_code:se,apply_action:async n=>{if(n.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await qe(t.branch.length,c,l.errors);if(p){const _=await ee({url:o,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:n.status??500,error:n.error,route:l});t=_.state,q.$set(_.props),de().then($e)}}else if(n.type==="redirect")we(n.location,{invalidateAll:!0},[]);else{const o={form:n.data,page:{...x,form:n.data,status:n.status}};q.$set(o),n.type==="success"&&de().then($e)}},_start_router:()=>{var n;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!O){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(_=>_(p))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Oe(I);try{sessionStorage[et]=JSON.stringify(ne)}catch{}}}),(n=navigator.connection)!=null&&n.saveData||tt(),a.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Ge(o.composedPath()[0],a);if(!c)return;const{url:l,external:p,has:_}=Re(c,e),m=pe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||_.download)return;if(p||m.reload){Fe({url:l,type:"link"})||o.preventDefault(),O=!0;return}const[y,w]=l.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){T=!0,Oe(I),t.url=l,X.page.set({...x,url:l}),X.page.notify();return}fe({url:l,scroll:m.noscroll?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),a.addEventListener("submit",o=>{var y;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const _=new URL(((y=o.submitter)==null?void 0:y.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(_,e))return;const{noscroll:m,reload:v}=pe(o.target);v||(o.preventDefault(),o.stopPropagation(),_.search=new URLSearchParams(new FormData(o.target)).toString(),fe({url:_,scroll:m?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[W]){if(o.state[W]===I)return;const l=o.state[W]-I;fe({url:new URL(location.href),scroll:ne[o.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=o.state[W]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[W]:++I},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&X.navigating.set(null)})},_hydrate:async({status:n=200,error:o,node_ids:c,params:l,route:p,data:_,form:m})=>{f=!0;const v=new URL(location.href);({params:l={},route:p={id:null}}=ce(v,!1)||{});let y;try{const w=c.map(async(k,$)=>{const F=_[$];return ye({loader:he[k],url:v,params:l,route:p,parent:async()=>{const P={};for(let b=0;b<$;b+=1)Object.assign(P,(await w[b]).data);return P},server_data_node:ve(F)})});y=await ee({url:v,params:l,branch:await Promise.all(w),status:n,error:o,form:m,route:Le.find(({id:k})=>k===p.id)??null})}catch(w){if(w instanceof Xe){await ue(new URL(w.location,location.href));return}y=await le({status:w instanceof Ae?w.status:500,error:await ae(w,{url:v,params:l,route:p}),url:v,route:p})}Ne(y)}}}async function Ze(r,e){var d;const a=new URL(r);a.pathname=Lt(r.pathname),a.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await me(a.href),s=await i.json();if(!i.ok)throw new Error(s);return(d=s.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=gt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ae(r,e){return r instanceof Ae?r.body:Gt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function $e(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,a=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),a!==null?e.setAttribute("tabindex",a):e.removeAttribute("tabindex")}}async function ta({env:r,hydrate:e,paths:a,target:i,version:s}){_t(a),ht(s);const d=xt({target:i,base:a.base});mt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{ta as start};

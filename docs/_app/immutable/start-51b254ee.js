import{S as at,i as nt,s as rt,a as ot,e as V,c as it,b as K,g as Y,t as j,d as Q,f as N,h as C,j as st,o as Pe,k as lt,l as ct,m as ft,n as Ee,p as G,q as ut,r as dt,u as pt,v as z,w as H,x as oe,y as J,z as M,A as de}from"./chunks/index-45205581.js";import{S as et,I as W,g as Me,f as Ge,a as ke,b as pe,s as X,i as We,c as _e,P as xe,d as _t,e as mt,h as ht}from"./chunks/singletons-4cf10db6.js";import{_ as I}from"./chunks/preload-helper-41c905a7.js";import{R as Xe,H as Ae}from"./chunks/control-f5b05b5f.js";import{u as gt}from"./chunks/parse-f0c618df.js";function wt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function yt(n){return n.split("%25").map(decodeURI).join("%25")}function vt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const bt=["href","pathname","search","searchParams","toString","toJSON"];function Et(n,e){const a=new URL(n);for(const i of bt){let s=a[i];Object.defineProperty(a,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return kt(a),a}function kt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function $t(n){return n.replace(/\/$/,"")+Rt}function Lt(n){let e=5381;if(typeof n=="string"){let a=n.length;for(;a;)e=e*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=a.length;for(;i;)e=e*33^a[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(n,e)=>((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ne.delete(Te(n)),me(n,e));const ne=new Map;function St(n,e){const a=Te(n,e),i=document.querySelector(a);if(i!=null&&i.textContent){const{body:s,...d}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ne.set(a,{body:s,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,d))}return me(n,e)}function Pt(n,e,a){if(ne.size>0){const i=Te(n,a),s=ne.get(i);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(a==null?void 0:a.cache))return new Response(s.body,s.init);ne.delete(i)}}return me(e,a)}function Te(n,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Lt(e.body)}"]`),i}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${Tt(n).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,h)=>{if(h%2){if(u.startsWith("x+"))return Re(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return Re(String.fromCharCode(...u.slice(2).split("-").map(O=>parseInt(O,16))));const g=At.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,$,T,E,F]=g;return e.push({name:E,matcher:F,optional:!!$,rest:!!T,chained:T?h===1&&t[0]==="":!1}),T?"(.*?)":$?"([^/]*)?":"([^/]+?)"}return Re(u)}).join("")}).join("")}/?$`),params:e}}function It(n){return!/^\([^)]+\)$/.test(n)}function Tt(n){return n.slice(1).split("/").filter(It)}function Dt(n,e,a){const i={},s=n.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let u=s[t];if(f.chained&&f.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!a[f.matcher](u)){if(f.optional&&f.chained){let h=s.indexOf(void 0,t);if(h===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;h>=t;)s[h]=s[h-1],h-=1;continue}return}i[f.name]=u}}if(!d)return i}function Re(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(n,e,a,i){const s=new Set(e);return Object.entries(a).map(([f,[u,h,g]])=>{const{pattern:$,params:T}=Ot(f),E={id:f,exec:F=>{const O=$.exec(F);if(O)return Dt(O,T,i)},errors:[1,...g||[]].map(F=>n[F]),layouts:[0,...h||[]].map(t),leaf:d(u)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function d(f){const u=f<0;return u&&(f=~f),[u,n[f]]}function t(f){return f===void 0?f:[s.has(f),n[f]]}}function Vt(n){let e,a,i;var s=n[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=z(s,d(n))),{c(){e&&H(e.$$.fragment),a=V()},l(t){e&&oe(e.$$.fragment,t),a=V()},m(t,f){e&&J(e,t,f),K(t,a,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),s!==(s=t[0][0])){if(e){Y();const h=e;j(h.$$.fragment,1,0,()=>{M(h,1)}),Q()}s?(e=z(s,d(t)),H(e.$$.fragment),N(e.$$.fragment,1),J(e,a.parentNode,a)):e=null}else s&&e.$set(u)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&C(a),e&&M(e,t)}}}function jt(n){let e,a,i;var s=n[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Ft]},$$scope:{ctx:t}}}}return s&&(e=z(s,d(n))),{c(){e&&H(e.$$.fragment),a=V()},l(t){e&&oe(e.$$.fragment,t),a=V()},m(t,f){e&&J(e,t,f),K(t,a,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){Y();const h=e;j(h.$$.fragment,1,0,()=>{M(h,1)}),Q()}s?(e=z(s,d(t)),H(e.$$.fragment),N(e.$$.fragment,1),J(e,a.parentNode,a)):e=null}else s&&e.$set(u)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&C(a),e&&M(e,t)}}}function Nt(n){let e,a,i;var s=n[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=z(s,d(n))),{c(){e&&H(e.$$.fragment),a=V()},l(t){e&&oe(e.$$.fragment,t),a=V()},m(t,f){e&&J(e,t,f),K(t,a,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),s!==(s=t[0][1])){if(e){Y();const h=e;j(h.$$.fragment,1,0,()=>{M(h,1)}),Q()}s?(e=z(s,d(t)),H(e.$$.fragment),N(e.$$.fragment,1),J(e,a.parentNode,a)):e=null}else s&&e.$set(u)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&C(a),e&&M(e,t)}}}function qt(n){let e,a,i;var s=n[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return s&&(e=z(s,d(n))),{c(){e&&H(e.$$.fragment),a=V()},l(t){e&&oe(e.$$.fragment,t),a=V()},m(t,f){e&&J(e,t,f),K(t,a,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),s!==(s=t[0][1])){if(e){Y();const h=e;j(h.$$.fragment,1,0,()=>{M(h,1)}),Q()}s?(e=z(s,d(t)),H(e.$$.fragment),N(e.$$.fragment,1),J(e,a.parentNode,a)):e=null}else s&&e.$set(u)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&C(a),e&&M(e,t)}}}function Ct(n){let e,a,i;var s=n[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return s&&(e=z(s,d(n))),{c(){e&&H(e.$$.fragment),a=V()},l(t){e&&oe(e.$$.fragment,t),a=V()},m(t,f){e&&J(e,t,f),K(t,a,f),i=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),s!==(s=t[0][2])){if(e){Y();const h=e;j(h.$$.fragment,1,0,()=>{M(h,1)}),Q()}s?(e=z(s,d(t)),H(e.$$.fragment),N(e.$$.fragment,1),J(e,a.parentNode,a)):e=null}else s&&e.$set(u)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&j(e.$$.fragment,t),i=!1},d(t){t&&C(a),e&&M(e,t)}}}function Ft(n){let e,a,i,s;const d=[qt,Nt],t=[];function f(u,h){return u[0][2]?0:1}return e=f(n),a=t[e]=d[e](n),{c(){a.c(),i=V()},l(u){a.l(u),i=V()},m(u,h){t[e].m(u,h),K(u,i,h),s=!0},p(u,h){let g=e;e=f(u),e===g?t[e].p(u,h):(Y(),j(t[g],1,1,()=>{t[g]=null}),Q(),a=t[e],a?a.p(u,h):(a=t[e]=d[e](u),a.c()),N(a,1),a.m(i.parentNode,i))},i(u){s||(N(a),s=!0)},o(u){j(a),s=!1},d(u){t[e].d(u),u&&C(i)}}}function Ye(n){let e,a=n[6]&&Qe(n);return{c(){e=lt("div"),a&&a.c(),this.h()},l(i){e=ct(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ft(e);a&&a.l(s),s.forEach(C),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),G(e,"position","absolute"),G(e,"left","0"),G(e,"top","0"),G(e,"clip","rect(0 0 0 0)"),G(e,"clip-path","inset(50%)"),G(e,"overflow","hidden"),G(e,"white-space","nowrap"),G(e,"width","1px"),G(e,"height","1px")},m(i,s){K(i,e,s),a&&a.m(e,null)},p(i,s){i[6]?a?a.p(i,s):(a=Qe(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(i){i&&C(e),a&&a.d()}}}function Qe(n){let e;return{c(){e=ut(n[7])},l(a){e=dt(a,n[7])},m(a,i){K(a,e,i)},p(a,i){i&128&&pt(e,a[7])},d(a){a&&C(e)}}}function Bt(n){let e,a,i,s,d;const t=[jt,Vt],f=[];function u(g,$){return g[0][1]?0:1}e=u(n),a=f[e]=t[e](n);let h=n[5]&&Ye(n);return{c(){a.c(),i=ot(),h&&h.c(),s=V()},l(g){a.l(g),i=it(g),h&&h.l(g),s=V()},m(g,$){f[e].m(g,$),K(g,i,$),h&&h.m(g,$),K(g,s,$),d=!0},p(g,[$]){let T=e;e=u(g),e===T?f[e].p(g,$):(Y(),j(f[T],1,1,()=>{f[T]=null}),Q(),a=f[e],a?a.p(g,$):(a=f[e]=t[e](g),a.c()),N(a,1),a.m(i.parentNode,i)),g[5]?h?h.p(g,$):(h=Ye(g),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i(g){d||(N(a),d=!0)},o(g){j(a),d=!1},d(g){f[e].d(g),g&&C(i),h&&h.d(g),g&&C(s)}}}function Kt(n,e,a){let{stores:i}=e,{page:s}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:h=null}=e;st(i.page.notify);let g=!1,$=!1,T=null;return Pe(()=>{const E=i.page.subscribe(()=>{g&&(a(6,$=!0),a(7,T=document.title||"untitled page"))});return a(5,g=!0),E}),n.$$set=E=>{"stores"in E&&a(8,i=E.stores),"page"in E&&a(9,s=E.page),"components"in E&&a(0,d=E.components),"form"in E&&a(1,t=E.form),"data_0"in E&&a(2,f=E.data_0),"data_1"in E&&a(3,u=E.data_1),"data_2"in E&&a(4,h=E.data_2)},n.$$.update=()=>{n.$$.dirty&768&&i.page.set(s)},[d,t,f,u,h,g,$,T,i,s]}class zt extends at{constructor(e){super(),nt(this,e,Kt,Bt,rt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Ht={},he=[()=>I(()=>import("./chunks/0-748cad5e.js"),["./chunks\\0-748cad5e.js","./chunks\\_layout-da46b06b.js","./components\\pages\\_layout.svelte-3f7c7a3f.js","./chunks\\index-45205581.js"],import.meta.url),()=>I(()=>import("./chunks/1-b25ed86e.js"),["./chunks\\1-b25ed86e.js","./components\\error.svelte-9114a4bd.js","./chunks\\index-45205581.js","./chunks\\stores-dee3f3ed.js","./chunks\\singletons-4cf10db6.js","./chunks\\index-bf20a5de.js"],import.meta.url),()=>I(()=>import("./chunks/2-cfe4bded.js"),["./chunks\\2-cfe4bded.js","./components\\pages\\blog\\_layout.svelte-ce7b4d4e.js","./chunks\\index-45205581.js","./assets\\_layout-9885dcaa.css"],import.meta.url),()=>I(()=>import("./chunks/3-ab6f9db2.js"),["./chunks\\3-ab6f9db2.js","./components\\pages\\search\\_layout.svelte-997e38cb.js","./chunks\\index-45205581.js"],import.meta.url),()=>I(()=>import("./chunks/4-fd3c8da5.js"),["./chunks\\4-fd3c8da5.js","./components\\pages\\search\\_category_\\_error.svelte-943832f9.js","./chunks\\index-45205581.js","./chunks\\stores-dee3f3ed.js","./chunks\\singletons-4cf10db6.js","./chunks\\index-bf20a5de.js"],import.meta.url),()=>I(()=>import("./chunks/5-1964f542.js"),["./chunks\\5-1964f542.js","./components\\pages\\_page.svelte-c3a8d3de.js","./chunks\\index-45205581.js","./assets\\_page-b19ca48d.css"],import.meta.url),()=>I(()=>import("./chunks/6-f8b1dac1.js"),["./chunks\\6-f8b1dac1.js","./chunks\\_page-80848ead.js","./components\\pages\\blog\\_page.svelte-cf8b5307.js","./chunks\\index-45205581.js"],import.meta.url),()=>I(()=>import("./chunks/7-b70b4ce6.js"),["./chunks\\7-b70b4ce6.js","./chunks\\_page-0bed1ef7.js","./chunks\\preload-helper-41c905a7.js","./components\\pages\\blog\\_path_\\_page.svelte-2804b5f8.js","./chunks\\index-45205581.js"],import.meta.url),()=>I(()=>import("./chunks/8-7e91b82d.js"),["./chunks\\8-7e91b82d.js","./components\\pages\\chat\\_page.svelte-6b608db8.js","./chunks\\index-45205581.js","./chunks\\parse-f0c618df.js","./chunks\\singletons-4cf10db6.js","./chunks\\index-bf20a5de.js","./chunks\\stores-fbe721a6.js","./assets\\_page-642cc7f9.css"],import.meta.url),()=>I(()=>import("./chunks/9-ca181760.js"),["./chunks\\9-ca181760.js","./components\\pages\\memory\\_page.svelte-b050ff2d.js","./chunks\\index-45205581.js","./assets\\_page-4a12ecab.css"],import.meta.url),()=>I(()=>import("./chunks/10-cad8b19a.js"),["./chunks\\10-cad8b19a.js","./components\\pages\\photoapp\\_page.svelte-d19f624d.js","./chunks\\index-45205581.js","./assets\\_page-4afa9d64.css"],import.meta.url),()=>I(()=>import("./chunks/11-b6114025.js"),["./chunks\\11-b6114025.js","./components\\pages\\register\\_page.svelte-72a18f36.js","./chunks\\index-45205581.js"],import.meta.url),()=>I(()=>import("./chunks/12-8943efdd.js"),["./chunks\\12-8943efdd.js","./components\\pages\\scroll\\_page.svelte-9c25c13e.js","./chunks\\index-45205581.js","./chunks\\index-56c1ff30.js","./assets\\_page-1258dfd5.css"],import.meta.url),()=>I(()=>import("./chunks/13-83f99edd.js"),["./chunks\\13-83f99edd.js","./components\\pages\\search\\_page.svelte-62ae89a7.js","./chunks\\index-45205581.js"],import.meta.url),()=>I(()=>import("./chunks/14-8758aeb1.js"),["./chunks\\14-8758aeb1.js","./chunks\\_page-f8406e2a.js","./chunks\\control-f5b05b5f.js","./components\\pages\\search\\_category_\\_page.svelte-b48db448.js","./chunks\\index-45205581.js"],import.meta.url),()=>I(()=>import("./chunks/15-191386ed.js"),["./chunks\\15-191386ed.js","./components\\pages\\telltale\\_page.svelte-93f400b3.js","./chunks\\index-45205581.js","./chunks\\stores-fbe721a6.js","./chunks\\index-bf20a5de.js","./chunks\\index-56c1ff30.js","./assets\\_page-e52d8411.css"],import.meta.url),()=>I(()=>import("./chunks/16-fe759a37.js"),["./chunks\\16-fe759a37.js","./components\\pages\\todo\\_page.svelte-c9e85e4b.js","./chunks\\index-45205581.js"],import.meta.url)],Jt=[],Mt={"/":[5],"/blog":[6,[2]],"/blog/[path]":[7,[2]],"/chat":[8],"/memory":[9],"/photoapp":[10],"/register":[11],"/scroll":[12],"/search":[13,[3]],"/search/[category]":[14,[3],[,4]],"/telltale":[15],"/todo":[16]},Gt={handleError:({error:n})=>{console.error(n)}};async function Wt(n){var e;for(const a in n)if(typeof((e=n[a])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([i,s])=>[i,await s])));return n}const $e=Ut(he,Jt,Mt,Ht),Oe=he[0],Ie=he[1];Oe();Ie();let re={};try{re=JSON.parse(sessionStorage[et])}catch{}function Le(n){re[n]=_e()}function xt({target:n,base:e}){var ze;const a=document.documentElement,i=[];let s=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,h=!0,g=!1,$=!1,T=!1,E=!1,F,O=(ze=history.state)==null?void 0:ze[W];O||(O=Date.now(),history.replaceState({...history.state,[W]:O},"",location.href));const ge=re[O];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let x,De,ie;async function Ue(){ie=ie||Promise.resolve(),await ie,ie=null;const r=new URL(location.href),o=ce(r,!0);s=null,await je(o,r,[])}async function we(r,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:_=!1},m,v){return typeof r=="string"&&(r=new URL(r,Me(document))),fe({url:r,scroll:o?_e():null,keepfocus:l,redirect_chain:m,details:{state:p,replaceState:c},nav_token:v,accepted:()=>{_&&(E=!0)},blocked:()=>{},type:"goto"})}async function Ve(r){const o=ce(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return s={id:o.id,promise:Ce(o).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function se(...r){const c=$e.filter(l=>r.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function je(r,o,c,l,p={},_){var v,y;De=p;let m=r&&await Ce(r);if(m||(m=await Ke(o,{id:null},await ae(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,De!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(o.pathname))m=await le({status:500,error:await ae(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return we(new URL(m.location,o).href,{},[...c,o.pathname],p),!1;else((y=(v=m.props)==null?void 0:v.page)==null?void 0:y.status)>=400&&await X.updated.check()&&await ue(o);if(i.length=0,E=!1,g=!0,l&&l.details){const{details:w}=l,R=w.replaceState?0:1;w.state[W]=O+=R,history[w.replaceState?"replaceState":"pushState"](w.state,"",o)}if(s=null,u?(t=m.state,m.props.page&&(m.props.page.url=o),F.$set(m.props)):Ne(m),l){const{scroll:w,keepfocus:R}=l;if(R||Se(),await de(),h){const L=o.hash&&document.getElementById(o.hash.slice(1));w?scrollTo(w.x,w.y):L?L.scrollIntoView():scrollTo(0,0)}}else await de();h=!0,m.props.page&&(x=m.props.page),_&&_(),g=!1}function Ne(r){var l;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),x=r.props.page,F=new zt({target:n,props:{...r.props,stores:X},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(p=>p(c)),u=!0}async function ee({url:r,params:o,branch:c,status:l,error:p,route:_,form:m}){const v=c.filter(Boolean);let y="never";for(const S of c)(S==null?void 0:S.slash)!==void 0&&(y=S.slash);r.pathname=wt(r.pathname,y),r.search=r.search;const w={type:"loaded",state:{url:r,params:o,branch:c,error:p,route:_},props:{components:v.map(S=>S.node.component)}};m!==void 0&&(w.props.form=m);let R={},L=!x;for(let S=0;S<v.length;S+=1){const b=v[S];R={...R,...b.data},(L||!t.branch.some(U=>U===b))&&(w.props[`data_${S}`]=R,L=L||Object.keys(b.data??{}).length>0)}return L||(L=Object.keys(x.data).length!==Object.keys(R).length),(!t.url||r.href!==t.url.href||t.error!==p||m!==void 0||L)&&(w.props.page={error:p,params:o,route:_,status:l,url:new URL(r),form:m??null,data:L?R:x.data}),w}async function ye({loader:r,parent:o,url:c,params:l,route:p,server_data_node:_}){var w,R,L;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await r();if((w=y.universal)!=null&&w.load){let B=function(...b){for(const U of b){const{href:q}=new URL(U,c);v.dependencies.add(q)}};const S={route:{get id(){return v.route=!0,p.id}},params:new Proxy(l,{get:(b,U)=>(v.params.add(U),b[U])}),data:(_==null?void 0:_.data)??null,url:Et(c,()=>{v.url=!0}),async fetch(b,U){let q;b instanceof Request?(q=b.url,U={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...U}):q=b;const k=new URL(q,c).href;return B(k),u?Pt(q,k,U):St(q,U)},setHeaders:()=>{},depends:B,parent(){return v.parent=!0,o()}};m=await y.universal.load.call(null,S)??null,m=m?await Wt(m):null}return{node:y,loader:r,server:_,universal:(R=y.universal)!=null&&R.load?{type:"data",data:m,uses:v}:null,data:m??(_==null?void 0:_.data)??null,slash:((L=y.universal)==null?void 0:L.trailingSlash)??(_==null?void 0:_.slash)}}function qe(r,o,c,l,p){if(E)return!0;if(!l)return!1;if(l.parent&&r||l.route&&o||l.url&&c)return!0;for(const _ of l.params)if(p[_]!==t.params[_])return!0;for(const _ of l.dependencies)if(i.some(m=>m(new URL(_))))return!0;return!1}function ve(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ce({id:r,invalidating:o,url:c,params:l,route:p}){if((s==null?void 0:s.id)===r)return s.promise;const{errors:_,layouts:m,leaf:v}=p,y=[...m,v];_.forEach(k=>k==null?void 0:k().catch(()=>{})),y.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const R=t.url?r!==t.url.pathname+t.url.search:!1,L=t.route?r!==t.route.id:!1,B=y.reduce((k,A,D)=>{var te;const P=t.branch[D],Z=!!(A!=null&&A[0])&&((P==null?void 0:P.loader)!==A[1]||qe(k.some(Boolean),L,R,(te=P.server)==null?void 0:te.uses,l));return k.push(Z),k},[]);if(B.some(Boolean)){try{w=await Ze(c,B)}catch(k){return le({status:500,error:await ae(k,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(w.type==="redirect")return w}const S=w==null?void 0:w.nodes;let b=!1;const U=y.map(async(k,A)=>{var te;if(!k)return;const D=t.branch[A],P=S==null?void 0:S[A];if((!P||P.type==="skip")&&k[1]===(D==null?void 0:D.loader)&&!qe(b,L,R,(te=D.universal)==null?void 0:te.uses,l))return D;if(b=!0,(P==null?void 0:P.type)==="error")throw P;return ye({loader:k[1],url:c,params:l,route:p,parent:async()=>{var Je;const He={};for(let be=0;be<A;be+=1)Object.assign(He,(Je=await U[be])==null?void 0:Je.data);return He},server_data_node:ve(P===void 0&&k[0]?{type:"skip"}:P??null,D==null?void 0:D.server)})});for(const k of U)k.catch(()=>{});const q=[];for(let k=0;k<y.length;k+=1)if(y[k])try{q.push(await U[k])}catch(A){if(A instanceof Xe)return{type:"redirect",location:A.location};let D=500,P;S!=null&&S.includes(A)?(D=A.status??D,P=A.error):A instanceof Ae?(D=A.status,P=A.body):P=await ae(A,{params:l,url:c,route:{id:p.id}});const Z=await Fe(k,q,_);return Z?await ee({url:c,params:l,branch:q.slice(0,Z.idx).concat(Z.node),status:D,error:P,route:p}):await Ke(c,{id:p.id},P,D)}else q.push(void 0);return await ee({url:c,params:l,branch:q,status:200,error:null,route:p,form:o?void 0:null})}async function Fe(r,o,c){for(;r--;)if(c[r]){let l=r;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:r,error:o,url:c,route:l}){const p={},_=await Oe();let m=null;if(_.server)try{const w=await Ze(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;m=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ue(c)}const v=await ye({loader:Oe,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(m)}),y={node:await Ie(),loader:Ie,universal:null,server:null,data:null};return await ee({url:c,params:p,branch:[v,y],status:r,error:o,route:null})}function ce(r,o){if(We(r,e))return;const c=yt(r.pathname.slice(e.length)||"/");for(const l of $e){const p=l.exec(c);if(p)return{id:r.pathname+r.search,invalidating:o,route:l,params:vt(p),url:r}}}function Be({url:r,type:o,intent:c,delta:l}){var v,y;let p=!1;const _={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:r},willUnload:!c,type:o};l!==void 0&&(_.delta=l);const m={..._,cancel:()=>{p=!0}};return $||d.before_navigate.forEach(w=>w(m)),p?null:_}async function fe({url:r,scroll:o,keepfocus:c,redirect_chain:l,details:p,type:_,delta:m,nav_token:v,accepted:y,blocked:w}){const R=ce(r,!1),L=Be({url:r,type:_,delta:m,intent:R});if(!L){w();return}Le(O),y(),$=!0,u&&X.navigating.set(L),await je(R,r,l,{scroll:o,keepfocus:c,details:p},v,()=>{$=!1,d.after_navigate.forEach(B=>B(L)),X.navigating.set(null)})}async function Ke(r,o,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await le({status:l,error:c,url:r,route:o}):await ue(r)}function ue(r){return location.href=r.href,new Promise(()=>{})}function tt(){let r;a.addEventListener("mousemove",_=>{const m=_.target;clearTimeout(r),r=setTimeout(()=>{l(m,2)},20)});function o(_){l(_.composedPath()[0],1)}a.addEventListener("mousedown",o),a.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(_=>{for(const m of _)m.isIntersecting&&(se(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(_,m){const v=Ge(_,a);if(!v)return;const{url:y,external:w}=ke(v,e);if(w)return;const R=pe(v);R.reload||(m<=R.preload_data?Ve(y):m<=R.preload_code&&se(y.pathname))}function p(){c.disconnect();for(const _ of a.querySelectorAll("a")){const{url:m,external:v}=ke(_,e);if(v)continue;const y=pe(_);y.reload||(y.preload_code===xe.viewport&&c.observe(_),y.preload_code===xe.eager&&se(m.pathname))}}d.after_navigate.push(p),p()}return{after_navigate:r=>{Pe(()=>(d.after_navigate.push(r),()=>{const o=d.after_navigate.indexOf(r);d.after_navigate.splice(o,1)}))},before_navigate:r=>{Pe(()=>(d.before_navigate.push(r),()=>{const o=d.before_navigate.indexOf(r);d.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!u)&&(h=!1)},goto:(r,o={})=>we(r,o,[]),invalidate:r=>{if(typeof r=="function")i.push(r);else{const{href:o}=new URL(r,location.href);i.push(c=>c.href===o)}return Ue()},invalidateAll:()=>(E=!0,Ue()),preload_data:async r=>{const o=new URL(r,Me(document));await Ve(o)},preload_code:se,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Fe(t.branch.length,c,l.errors);if(p){const _=await ee({url:o,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:l});t=_.state,F.$set(_.props),de().then(Se)}}else if(r.type==="redirect")we(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...x,form:r.data,status:r.status}};F.$set(o),r.type==="success"&&de().then(Se)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!$){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(_=>_(p))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(O);try{sessionStorage[et]=JSON.stringify(re)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||tt(),a.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Ge(o.composedPath()[0],a);if(!c)return;const{url:l,external:p,has:_}=ke(c,e),m=pe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||_.download)return;if(p||m.reload){Be({url:l,type:"link"})||o.preventDefault(),$=!0;return}const[y,w]=l.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){T=!0,Le(O),t.url=l,X.page.set({...x,url:l}),X.page.notify();return}fe({url:l,scroll:m.noscroll?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),a.addEventListener("submit",o=>{var y;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const _=new URL(((y=o.submitter)==null?void 0:y.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(_,e))return;const{noscroll:m,reload:v}=pe(o.target);v||(o.preventDefault(),o.stopPropagation(),_.search=new URLSearchParams(new FormData(o.target)).toString(),fe({url:_,scroll:m?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[W]){if(o.state[W]===O)return;const l=o.state[W]-O;fe({url:new URL(location.href),scroll:re[o.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=o.state[W]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[W]:++O},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&X.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:c,params:l,route:p,data:_,form:m})=>{f=!0;const v=new URL(location.href);({params:l={},route:p={id:null}}=ce(v,!1)||{});let y;try{const w=c.map(async(R,L)=>{const B=_[L];return ye({loader:he[R],url:v,params:l,route:p,parent:async()=>{const S={};for(let b=0;b<L;b+=1)Object.assign(S,(await w[b]).data);return S},server_data_node:ve(B)})});y=await ee({url:v,params:l,branch:await Promise.all(w),status:r,error:o,form:m,route:$e.find(({id:R})=>R===p.id)??null})}catch(w){if(w instanceof Xe){await ue(new URL(w.location,location.href));return}y=await le({status:w instanceof Ae?w.status:500,error:await ae(w,{url:v,params:l,route:p}),url:v,route:p})}Ne(y)}}}async function Ze(n,e){var d;const a=new URL(n);a.pathname=$t(n.pathname),a.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await me(a.href),s=await i.json();if(!i.ok)throw new Error(s);return(d=s.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=gt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ae(n,e){return n instanceof Ae?n.body:Gt.handleError({error:n,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Se(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,a=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),a!==null?e.setAttribute("tabindex",a):e.removeAttribute("tabindex")}}async function ta({env:n,hydrate:e,paths:a,target:i,version:s}){_t(a),ht(s);const d=xt({target:i,base:a.base});mt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{ta as start};

import{S as C,i as q,s as U,a as j,e as h,c as z,b as E,d,f as P,g,h as w,j as W,o as F,k as G,l as H,m as J,n as D,p,q as K,r as M,u as Q,v as A,w as I,x as k,y as v,z as O,A as R,B as L}from"../chunks/index.9c08ea04.js";const X="modulepreload",Y=function(a,e){return new URL(a,e).href},T={},m=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Y(f,i),f in T)return;T[f]=!0;const t=f.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!i)for(let l=r.length-1;l>=0;l--){const u=r[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${s}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":X,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},ie={};function Z(a){let e,n,i;var r=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return r&&(e=k(r,f(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){const c={};if(s&8&&(c.data=t[3]),s&4&&(c.form=t[2]),s&2&&r!==(r=t[1][0])){if(e){A();const o=e;d(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=k(r,f(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&w(n),e&&L(e,t)}}}function $(a){let e,n,i;var r=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return r&&(e=k(r,f(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){const c={};if(s&8&&(c.data=t[3]),s&8215&&(c.$$scope={dirty:s,ctx:t}),s&2&&r!==(r=t[1][0])){if(e){A();const o=e;d(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=k(r,f(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&w(n),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return r&&(e=k(r,f(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){const c={};if(s&16&&(c.data=t[4]),s&4&&(c.form=t[2]),s&2&&r!==(r=t[1][1])){if(e){A();const o=e;d(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=k(r,f(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&w(n),e&&L(e,t)}}}function V(a){let e,n=a[6]&&y(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(w),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){E(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=y(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function y(a){let e;return{c(){e=K(a[7])},l(n){e=M(n,a[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&w(e)}}}function ee(a){let e,n,i,r,f;const t=[$,Z],s=[];function c(l,u){return l[1][1]?0:1}e=c(a),n=s[e]=t[e](a);let o=a[5]&&V(a);return{c(){n.c(),i=j(),o&&o.c(),r=h()},l(l){n.l(l),i=z(l),o&&o.l(l),r=h()},m(l,u){s[e].m(l,u),E(l,i,u),o&&o.m(l,u),E(l,r,u),f=!0},p(l,[u]){let b=e;e=c(l),e===b?s[e].p(l,u):(A(),d(s[b],1,1,()=>{s[b]=null}),P(),n=s[e],n?n.p(l,u):(n=s[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,u):(o=V(l),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},i(l){f||(g(n),f=!0)},o(l){d(n),f=!1},d(l){s[e].d(l),l&&w(i),o&&o.d(l),l&&w(r)}}}function te(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:f}=e,{components:t=[]}=e,{form:s}=e,{data_0:c=null}=e,{data_1:o=null}=e;W(i.page.notify);let l=!1,u=!1,b=null;F(()=>{const _=i.page.subscribe(()=>{l&&(n(6,u=!0),n(7,b=document.title||"untitled page"))});return n(5,l=!0),_});function N(_){I[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function B(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return a.$$set=_=>{"stores"in _&&n(8,i=_.stores),"page"in _&&n(9,r=_.page),"constructors"in _&&n(1,f=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,s=_.form),"data_0"in _&&n(3,c=_.data_0),"data_1"in _&&n(4,o=_.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,f,s,c,o,l,u,b,i,r,N,S,B]}class re extends C{constructor(e){super(),q(this,e,te,ee,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const se=[()=>m(()=>import("../chunks/0.f3ebb2db.js"),["../chunks/0.f3ebb2db.js","../chunks/_layout.e4a84b88.js","./_layout.svelte.9ffbe0a4.js","../chunks/index.9c08ea04.js","../chunks/auth.0205606d.js","../chunks/index.80453e5b.js","../chunks/axios.12eefad9.js","../assets/_layout.636ef31f.css"],import.meta.url),()=>m(()=>import("../chunks/1.3e208109.js"),["../chunks/1.3e208109.js","./error.svelte.a35750be.js","../chunks/index.9c08ea04.js","../chunks/singletons.6055c5fc.js","../chunks/index.80453e5b.js"],import.meta.url),()=>m(()=>import("../chunks/2.2eb31b24.js"),["../chunks/2.2eb31b24.js","./_page.svelte.f35b6a9f.js","../chunks/index.9c08ea04.js","../chunks/navigation.41c14803.js","../chunks/singletons.6055c5fc.js","../chunks/index.80453e5b.js"],import.meta.url),()=>m(()=>import("../chunks/3.6c92e80a.js"),["../chunks/3.6c92e80a.js","./auth-signin-page.svelte.64cf2cde.js","../chunks/index.9c08ea04.js","../chunks/navigation.41c14803.js","../chunks/singletons.6055c5fc.js","../chunks/index.80453e5b.js","../chunks/FormGroup.03255cec.js","../chunks/Button.2515bd60.js","../chunks/Alert.8cf1f4ee.js","../chunks/axios.12eefad9.js","../chunks/auth.0205606d.js"],import.meta.url),()=>m(()=>import("../chunks/4.0c6e950f.js"),["../chunks/4.0c6e950f.js","./auth-signout-page.svelte.bd4a306a.js","../chunks/index.9c08ea04.js","../chunks/navigation.41c14803.js","../chunks/singletons.6055c5fc.js","../chunks/index.80453e5b.js","../chunks/auth.0205606d.js","../chunks/axios.12eefad9.js"],import.meta.url),()=>m(()=>import("../chunks/5.44c42ec3.js"),["../chunks/5.44c42ec3.js","./auth-signup-page.svelte.824c61be.js","../chunks/index.9c08ea04.js","../chunks/navigation.41c14803.js","../chunks/singletons.6055c5fc.js","../chunks/index.80453e5b.js","../chunks/FormGroup.03255cec.js","../chunks/Button.2515bd60.js","../chunks/Alert.8cf1f4ee.js","../chunks/axios.12eefad9.js","../chunks/auth.0205606d.js"],import.meta.url),()=>m(()=>import("../chunks/6.f8d4060c.js"),["../chunks/6.f8d4060c.js","./chat-page.svelte.2f66a46f.js","../chunks/index.9c08ea04.js","../chunks/navigation.41c14803.js","../chunks/singletons.6055c5fc.js","../chunks/index.80453e5b.js","../chunks/ChatPanel.2e810b53.js","../chunks/axios.12eefad9.js","../chunks/Alert.8cf1f4ee.js","../assets/ChatPanel.89fe1caf.css","../assets/_page.5ea76033.css"],import.meta.url),()=>m(()=>import("../chunks/7.aedd5507.js"),["../chunks/7.aedd5507.js","../chunks/_page.1e47fe90.js","../chunks/axios.12eefad9.js","../chunks/index.80453e5b.js","../chunks/index.9c08ea04.js","./documents-page.svelte.a4644c5c.js","../chunks/AuthGuard.f4fe56e4.js","../chunks/navigation.41c14803.js","../chunks/singletons.6055c5fc.js","../chunks/auth.0205606d.js"],import.meta.url),()=>m(()=>import("../chunks/8.2f76959e.js"),["../chunks/8.2f76959e.js","../chunks/_page.b38779e7.js","../chunks/axios.12eefad9.js","../chunks/index.80453e5b.js","../chunks/index.9c08ea04.js","./documents-_id_-page.svelte.c194396a.js","../chunks/navigation.41c14803.js","../chunks/singletons.6055c5fc.js","../chunks/ChatPanel.2e810b53.js","../chunks/Alert.8cf1f4ee.js","../assets/ChatPanel.89fe1caf.css","../assets/_page.0f9bb0b1.css"],import.meta.url),()=>m(()=>import("../chunks/9.d4d47935.js"),["../chunks/9.d4d47935.js","./documents-new-page.svelte.fb649d4a.js","../chunks/index.9c08ea04.js","../chunks/navigation.41c14803.js","../chunks/singletons.6055c5fc.js","../chunks/index.80453e5b.js","../chunks/Alert.8cf1f4ee.js","../chunks/axios.12eefad9.js","../chunks/Button.2515bd60.js"],import.meta.url),()=>m(()=>import("../chunks/10.bdc80eb1.js"),["../chunks/10.bdc80eb1.js","../chunks/_page.6a220dc8.js","../chunks/axios.12eefad9.js","../chunks/index.80453e5b.js","../chunks/index.9c08ea04.js","./scores-page.svelte.a7d97ed4.js","../chunks/AuthGuard.f4fe56e4.js","../chunks/navigation.41c14803.js","../chunks/singletons.6055c5fc.js","../chunks/auth.0205606d.js"],import.meta.url)],oe=[],ae={"/":[2],"/auth/signin":[3],"/auth/signout":[4],"/auth/signup":[5],"/chat":[6],"/documents":[7],"/documents/new":[9],"/documents/[id]":[8],"/scores":[10]},le={handleError:({error:a})=>{console.error(a)}};export{ae as dictionary,le as hooks,ie as matchers,se as nodes,re as root,oe as server_loads};

import{a0 as W,a1 as ce,a2 as pe,a3 as de,S as oe,i as le,s as ne,e as X,b as j,v as M,d as y,f as U,g as m,h as g,a4 as me,D as ae,k as E,l as v,m as A,n as h,p as Y,E as _,C as Z,K as _e,L as ge,M as $e,N as be,q as V,a as O,r as B,c as S,H as x,O as he,J as ye,y as z,z as F,A as H,B as J,u as we}from"../chunks/index.9c08ea04.js";import{b as ke,g as Ee}from"../chunks/navigation.41c14803.js";import{A as fe}from"../chunks/Alert.8cf1f4ee.js";import{B as ve}from"../chunks/Button.2515bd60.js";import{w as ie}from"../chunks/index.80453e5b.js";import{a as Ae,g as Pe}from"../chunks/axios.12eefad9.js";const De={data:[],error:"",uploadProgress:0},ue=ie(De),q=o=>{ue.update(e=>({...e,...o}))},Ie=o=>{const e=Math.round(o.loaded/o.total*100);q({uploadProgress:e})},Te=async o=>{q({error:""});try{const e=new FormData;e.append("file",o),await Ae.post("/pdfs",e,{onUploadProgress:Ie})}catch(e){return q({error:Pe(e)})}},je=()=>{q({error:"",uploadProgress:0})};function ee(o){return Object.prototype.toString.call(o)==="[object Date]"}function K(o,e){if(o===e||o!==o)return()=>o;const r=typeof o;if(r!==typeof e||Array.isArray(o)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(o)){const t=e.map((s,l)=>K(o[l],s));return s=>t.map(l=>l(s))}if(r==="object"){if(!o||!e)throw new Error("Object cannot be null");if(ee(o)&&ee(e)){o=o.getTime(),e=e.getTime();const l=e-o;return n=>new Date(o+n*l)}const t=Object.keys(e),s={};return t.forEach(l=>{s[l]=K(o[l],e[l])}),l=>{const n={};return t.forEach(f=>{n[f]=s[f](l)}),n}}if(r==="number"){const t=e-o;return s=>o+s*t}throw new Error(`Cannot interpolate ${r} values`)}function Ne(o,e={}){const r=ie(o);let t,s=o;function l(n,f){if(o==null)return r.set(o=n),Promise.resolve();s=n;let a=t,i=!1,{delay:$=0,duration:w=400,easing:P=de,interpolate:C=K}=W(W({},e),f);if(w===0)return a&&(a.abort(),a=null),r.set(o=s),Promise.resolve();const D=ce()+$;let I;return t=pe(T=>{if(T<D)return!0;i||(I=C(o,n),typeof w=="function"&&(w=w(o,n)),i=!0),a&&(a.abort(),a=null);const N=T-D;return N>w?(r.set(o=n),!1):(r.set(o=I(P(N/w))),!0)}),t.promise}return{set:l,update:(n,f)=>l(n(s,o),f),subscribe:r.subscribe}}function Oe(o){let e,r;return{c(){e=E("div"),r=E("div"),this.h()},l(t){e=v(t,"DIV",{class:!0});var s=A(e);r=v(s,"DIV",{class:!0,role:!0,style:!0}),A(r).forEach(g),s.forEach(g),this.h()},h(){h(r,"class","flex flex-col justify-center overflow-hidden bg-blue-800"),h(r,"role","progressbar"),Y(r,"width",o[0]+"%"),h(e,"class","flex my-3 w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700")},m(t,s){j(t,e,s),_(e,r)},p(t,s){s&1&&Y(r,"width",t[0]+"%")},i:Z,o:Z,d(t){t&&g(e)}}}function Se(o){let e;const r=o[5].default,t=_e(r,o,o[4],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&16)&&ge(t,r,s,s[4],e?be(r,s[4],l,null):$e(s[4]),null)},i(s){e||(m(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}function Ve(o){let e,r,t,s;const l=[Se,Oe],n=[];function f(a,i){return a[2].default&&a[0]===100?0:1}return e=f(o),r=n[e]=l[e](o),{c(){r.c(),t=X()},l(a){r.l(a),t=X()},m(a,i){n[e].m(a,i),j(a,t,i),s=!0},p(a,[i]){let $=e;e=f(a),e===$?n[e].p(a,i):(M(),y(n[$],1,1,()=>{n[$]=null}),U(),r=n[e],r?r.p(a,i):(r=n[e]=l[e](a),r.c()),m(r,1),r.m(t.parentNode,t))},i(a){s||(m(r),s=!0)},o(a){y(r),s=!1},d(a){n[e].d(a),a&&g(t)}}}function Be(o,e,r){let t,{$$slots:s={},$$scope:l}=e;const n=me(s);let{progress:f=0}=e;const a=Ne(1,{duration:1e3});return ae(o,a,i=>r(0,t=i)),o.$$set=i=>{"progress"in i&&r(3,f=i.progress),"$$scope"in i&&r(4,l=i.$$scope)},o.$$.update=()=>{o.$$.dirty&8&&a.set(f)},[t,a,n,f,l,s]}class Ce extends oe{constructor(e){super(),le(this,e,Be,Ve,ne,{progress:3})}}function te(o){let e,r;return e=new Ce({props:{progress:o[2].uploadProgress,$$slots:{default:[Me]},$$scope:{ctx:o}}}),{c(){z(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){H(e,t,s),r=!0},p(t,s){const l={};s&4&&(l.progress=t[2].uploadProgress),s&64&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function Le(o){let e;return{c(){e=V("Загрузка завершена! Возвращаемся к списку...")},l(r){e=B(r,"Загрузка завершена! Возвращаемся к списку...")},m(r,t){j(r,e,t)},d(r){r&&g(e)}}}function Me(o){let e,r;return e=new fe({props:{type:"success",$$slots:{default:[Le]},$$scope:{ctx:o}}}),{c(){z(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){H(e,t,s),r=!0},p(t,s){const l={};s&64&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function re(o){let e,r;return e=new fe({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}}),{c(){z(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){H(e,t,s),r=!0},p(t,s){const l={};s&68&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function Ue(o){let e,r=o[2].error+"",t;return{c(){e=V("Ошибка: "),t=V(r)},l(s){e=B(s,"Ошибка: "),t=B(s,r)},m(s,l){j(s,e,l),j(s,t,l)},p(s,l){l&4&&r!==(r=s[2].error+"")&&we(t,r)},d(s){s&&g(e),s&&g(t)}}}function se(o){let e,r;return e=new ve({props:{className:"w-full my-3",disabled:o[1],$$slots:{default:[qe]},$$scope:{ctx:o}}}),{c(){z(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){H(e,t,s),r=!0},p(t,s){const l={};s&2&&(l.disabled=t[1]),s&64&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function qe(o){let e;return{c(){e=V("Отправить")},l(r){e=B(r,"Отправить")},m(r,t){j(r,e,t)},d(r){r&&g(e)}}}function ze(o){let e,r,t,s,l,n,f,a,i,$,w,P,C,D,I,T,N,R,u=o[1]&&!o[2].error&&te(o),c=o[2].error&&re(o),p=!o[1]&&se(o);return{c(){e=E("div"),r=E("h2"),t=V("Загрузка файла"),s=O(),l=E("form"),n=E("div"),f=E("label"),a=V("Выберите файл"),i=O(),$=E("input"),w=O(),P=E("div"),C=O(),u&&u.c(),D=O(),c&&c.c(),I=O(),p&&p.c(),this.h()},l(d){e=v(d,"DIV",{class:!0});var b=A(e);r=v(b,"H2",{class:!0});var G=A(r);t=B(G,"Загрузка файла"),G.forEach(g),s=S(b),l=v(b,"FORM",{});var k=A(l);n=v(k,"DIV",{class:!0});var L=A(n);f=v(L,"LABEL",{for:!0,class:!0});var Q=A(f);a=B(Q,"Выберите файл"),Q.forEach(g),i=S(L),$=v(L,"INPUT",{type:!0,name:!0,id:!0,class:!0}),L.forEach(g),w=S(k),P=v(k,"DIV",{class:!0}),A(P).forEach(g),C=S(k),u&&u.l(k),D=S(k),c&&c.l(k),I=S(k),p&&p.l(k),k.forEach(g),b.forEach(g),this.h()},h(){h(r,"class","text-3xl font-bold m-10"),h(f,"for","file-input"),h(f,"class","sr-only"),h($,"type","file"),h($,"name","file-input"),h($,"id","file-input"),h($,"class","block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:m-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-violet-700 hover:file:bg-violet-100"),h(n,"class","w-42"),h(P,"class","my-4"),h(e,"class","w-full max-w-md mx-auto p-6")},m(d,b){j(d,e,b),_(e,r),_(r,t),_(e,s),_(e,l),_(l,n),_(n,f),_(f,a),_(n,i),_(n,$),_(l,w),_(l,P),_(l,C),u&&u.m(l,null),_(l,D),c&&c.m(l,null),_(l,I),p&&p.m(l,null),T=!0,N||(R=[x($,"change",o[4]),x(l,"submit",he(o[3]))],N=!0)},p(d,[b]){d[1]&&!d[2].error?u?(u.p(d,b),b&6&&m(u,1)):(u=te(d),u.c(),m(u,1),u.m(l,D)):u&&(M(),y(u,1,1,()=>{u=null}),U()),d[2].error?c?(c.p(d,b),b&4&&m(c,1)):(c=re(d),c.c(),m(c,1),c.m(l,I)):c&&(M(),y(c,1,1,()=>{c=null}),U()),d[1]?p&&(M(),y(p,1,1,()=>{p=null}),U()):p?(p.p(d,b),b&2&&m(p,1)):(p=se(d),p.c(),m(p,1),p.m(l,null))},i(d){T||(m(u),m(c),m(p),T=!0)},o(d){y(u),y(c),y(p),T=!1},d(d){d&&g(e),u&&u.d(),c&&c.d(),p&&p.d(),N=!1,ye(R)}}}function Fe(o,e,r){let t;ae(o,ue,a=>r(2,t=a));let s,l=!1;async function n(){r(1,l=!0),await Te(s[0]),t.error?r(1,l=!1):setTimeout(()=>{Ee("/documents"),r(1,l=!1)},2e3)}ke(je);function f(){s=this.files,r(0,s)}return[s,l,t,n,f]}class We extends oe{constructor(e){super(),le(this,e,Fe,ze,ne,{})}}export{We as default};

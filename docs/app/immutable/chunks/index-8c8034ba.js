function g(){}const dt=t=>t;function K(t,e){for(const n in e)t[n]=e[n];return t}function M(t){return t()}function P(){return Object.create(null)}function b(t){t.forEach(M)}function O(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function ht(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function Q(t){return Object.keys(t).length===0}function z(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function mt(t){let e;return z(t,n=>e=n)(),e}function pt(t,e,n){t.$$.on_destroy.push(z(e,n))}function yt(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?K(n.ctx.slice(),t[1](i(e))):n.ctx}function gt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function bt(t,e,n,i,r,u){if(r){const o=B(e,n,i,u);t.p(o,r)}}function xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function $t(t,e,n){return t.set(n),e}function wt(t){return t&&O(t.destroy)?t.destroy:g}const L=typeof window<"u";let vt=L?()=>window.performance.now():()=>Date.now(),F=L?t=>requestAnimationFrame(t):g;const _=new Set;function H(t){_.forEach(e=>{e.c(t)||(_.delete(e),e.f())}),_.size!==0&&F(H)}function Et(t){let e;return _.size===0&&F(H),{promise:new Promise(n=>{_.add(e={c:t,f:n})}),abort(){_.delete(e)}}}let k=!1;function R(){k=!0}function U(){k=!1}function V(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:V(1,r,x=>e[n[x]].claim_order,l))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const u=[],o=[];let s=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);s>=c;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);u.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<u.length&&o[c].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(o[c],f)}}function Y(t,e){if(k){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){k&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function St(){return j(" ")}function Ct(){return j("")}function Nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:et(t,i,e[i])}function nt(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,i,r=!1){it(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function rt(t,e,n,i){return I(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||u.push(s.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Tt(t,e,n){return rt(t,e,n,tt)}function ct(t,e){return I(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function qt(t){return ct(t," ")}function Pt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Dt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Mt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let y;function p(t){y=t}function h(){if(!y)throw new Error("Function called outside component initialization");return y}function Ot(t){h().$$.on_mount.push(t)}function zt(t){h().$$.after_update.push(t)}function Bt(t){h().$$.on_destroy.push(t)}function Lt(){const t=h();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=ot(e,n,{cancelable:i});return r.slice().forEach(o=>{o.call(t,u)}),!u.defaultPrevented}return!0}}function Ft(t,e){return h().$$.context.set(t,e),e}function Ht(t){return h().$$.context.get(t)}function It(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],D=[],v=[],S=[],W=Promise.resolve();let C=!1;function G(){C||(C=!0,W.then(J))}function Wt(){return G(),W}function N(t){v.push(t)}function Gt(t){S.push(t)}const A=new Set;let w=0;function J(){const t=y;do{for(;w<m.length;){const e=m[w];w++,p(e),st(e.$$)}for(p(null),m.length=0,w=0;D.length;)D.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];A.has(n)||(A.add(n),n())}v.length=0}while(m.length);for(;S.length;)S.pop()();C=!1,A.clear(),p(t)}function st(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const E=new Set;let d;function Jt(){d={r:0,c:[],p:d}}function Kt(){d.r||b(d.c),d=d.p}function lt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Qt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ut(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const o=t[u],s=e[u];if(s){for(const c in o)c in s||(i[c]=1);for(const c in s)r[c]||(n[c]=s[c],r[c]=1);t[u]=s}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Vt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Xt(t){t&&t.c()}function Yt(t,e){t&&t.l(e)}function ut(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:o,after_update:s}=t.$$;r&&r.m(e,n),i||N(()=>{const c=u.map(M).filter(O);o?o.push(...c):b(c),t.$$.on_mount=[]}),s.forEach(N)}function at(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(m.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Zt(t,e,n,i,r,u,o,s=[-1]){const c=y;p(t);const l=t.$$={fragment:null,ctx:null,props:u,update:g,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:P(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,x,...T)=>{const q=T.length?T[0]:x;return l.ctx&&r(l.ctx[a],l.ctx[a]=q)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](q),f&&ft(t,a)),x}):[],l.update(),f=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){R();const a=nt(e.target);l.fragment&&l.fragment.l(a),a.forEach(Z)}else l.fragment&&l.fragment.c();e.intro&&lt(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),U(),J()}p(c)}class te{$destroy(){at(this,1),this.$destroy=g}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Vt as $,g as A,z as B,b as C,O as D,ht as E,Y as F,yt as G,Mt as H,Nt as I,bt as J,xt as K,gt as L,pt as M,Rt as N,$t as O,K as P,vt as Q,Et as R,te as S,dt as T,D as U,mt as V,Bt as W,Ft as X,wt as Y,Ht as Z,Lt as _,St as a,Gt as a0,It as a1,h as a2,jt as a3,Ut as a4,At as a5,kt as b,qt as c,Kt as d,Ct as e,lt as f,Jt as g,Z as h,Zt as i,zt as j,tt as k,Tt as l,nt as m,et as n,Ot as o,Dt as p,j as q,ct as r,_t as s,Qt as t,Pt as u,Xt as v,Yt as w,ut as x,at as y,Wt as z};

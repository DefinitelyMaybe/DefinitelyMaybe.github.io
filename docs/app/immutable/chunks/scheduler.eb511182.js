function m(){}const F=t=>t;function v(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function M(){return Object.create(null)}function j(t){t.forEach(E)}function q(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function A(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function B(t){return Object.keys(t).length===0}function x(t,...n){if(t==null){for(const r of n)r(void 0);return m}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function G(t){let n;return x(t,e=>n=e)(),n}function H(t,n,e){t.$$.on_destroy.push(x(n,e))}function I(t,n,e,r){if(t){const o=k(t,n,e,r);return t[0](o)}}function k(t,n,e,r){return t[1]&&r?v(e.ctx.slice(),t[1](r(n))):e.ctx}function J(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],d=Math.max(n.dirty.length,o.length);for(let c=0;c<d;c+=1)l[c]=n.dirty[c]|o[c];return l}return n.dirty|o}return n.dirty}function P(t,n,e,r,o,l){if(o){const d=k(n,e,r,l);t.p(d,o)}}function U(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function K(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function L(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function N(t,n,e){return t.set(e),n}function Q(t){return t&&q(t.destroy)?t.destroy:m}let _;function h(t){_=t}function i(){if(!_)throw new Error("Function called outside component initialization");return _}function R(t){i().$$.on_mount.push(t)}function T(t){i().$$.after_update.push(t)}function V(t){i().$$.on_destroy.push(t)}function W(t,n){return i().$$.context.set(t,n),n}function X(t){return i().$$.context.get(t)}const a=[],b=[];let u=[];const y=[],w=Promise.resolve();let g=!1;function C(){g||(g=!0,w.then(z))}function Y(){return C(),w}function O(t){u.push(t)}const p=new Set;let s=0;function z(){if(s!==0)return;const t=_;do{try{for(;s<a.length;){const n=a[s];s++,h(n),D(n.$$)}}catch(n){throw a.length=0,s=0,n}for(h(null),a.length=0,s=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];p.has(e)||(p.add(e),e())}u.length=0}while(a.length);for(;y.length;)y.pop()();g=!1,p.clear(),h(t)}function D(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Z(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{M as A,z as B,B as C,O as D,Z as E,_ as F,h as G,E as H,a as I,C as J,T as a,b,I as c,J as d,H as e,A as f,U as g,v as h,F as i,N as j,X as k,W as l,V as m,m as n,R as o,i as p,L as q,j as r,S as s,Y as t,P as u,K as v,G as w,Q as x,x as y,q as z};
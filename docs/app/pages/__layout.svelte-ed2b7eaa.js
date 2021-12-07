import{D as ne,S as se,i as ae,s as re,e as n,k as y,E as F,t as T,c as u,a as l,d as r,n as L,F as G,g as V,G as ue,b as e,H as N,f as x,I as s,J as le,K as ve,L as fe,j as he,m as de,o as _e,M as pe,N as ge,O as me,x as oe,u as ie,v as be}from"../chunks/vendor-bcdd9c0f.js";const Ee=()=>{const o=ne("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session}},we={subscribe(o){return Ee().page.subscribe(o)}};var $e="/app/assets/svelte-logo-87df40b8.svg";function qe(o){let a,_,i,h,p,m,v,b,A,E,f,w,g,j,d,t,c,M,z,q,k,B,K,D,C,P,O;return{c(){a=n("header"),_=n("div"),i=n("a"),h=n("img"),m=y(),v=n("nav"),b=F("svg"),A=F("path"),E=y(),f=n("ul"),w=n("li"),g=n("a"),j=T("Projects"),d=y(),t=n("li"),c=n("a"),M=T("About"),z=y(),q=n("li"),k=n("a"),B=T("Todos"),K=y(),D=F("svg"),C=F("path"),P=y(),O=n("div"),this.h()},l(I){a=u(I,"HEADER",{class:!0});var $=l(a);_=u($,"DIV",{class:!0});var R=l(_);i=u(R,"A",{href:!0,class:!0});var Z=l(i);h=u(Z,"IMG",{src:!0,alt:!0,class:!0}),Z.forEach(r),R.forEach(r),m=L($),v=u($,"NAV",{class:!0});var H=l(v);b=G(H,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var J=l(b);A=G(J,"path",{d:!0,class:!0}),l(A).forEach(r),J.forEach(r),E=L(H),f=u(H,"UL",{class:!0});var S=l(f);w=u(S,"LI",{class:!0});var U=l(w);g=u(U,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Q=l(g);j=V(Q,"Projects"),Q.forEach(r),U.forEach(r),d=L(S),t=u(S,"LI",{class:!0});var W=l(t);c=u(W,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var X=l(c);M=V(X,"About"),X.forEach(r),W.forEach(r),z=L(S),q=u(S,"LI",{class:!0});var Y=l(q);k=u(Y,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var ee=l(k);B=V(ee,"Todos"),ee.forEach(r),Y.forEach(r),S.forEach(r),K=L(H),D=G(H,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var te=l(D);C=G(te,"path",{d:!0,class:!0}),l(C).forEach(r),te.forEach(r),H.forEach(r),P=L($),O=u($,"DIV",{class:!0});var ce=l(O);ce.forEach(r),$.forEach(r),this.h()},h(){ue(h.src,p=$e)||e(h,"src",p),e(h,"alt","SvelteKit"),e(h,"class","svelte-t2wq17"),e(i,"href","https://kit.svelte.dev"),e(i,"class","svelte-t2wq17"),e(_,"class","corner svelte-t2wq17"),e(A,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(A,"class","svelte-t2wq17"),e(b,"viewBox","0 0 2 3"),e(b,"aria-hidden","true"),e(b,"class","svelte-t2wq17"),e(g,"sveltekit:prefetch",""),e(g,"href","/"),e(g,"class","svelte-t2wq17"),e(w,"class","svelte-t2wq17"),N(w,"active",o[0].path==="/"),e(c,"sveltekit:prefetch",""),e(c,"href","/about"),e(c,"class","svelte-t2wq17"),e(t,"class","svelte-t2wq17"),N(t,"active",o[0].path==="/about"),e(k,"sveltekit:prefetch",""),e(k,"href","/todos"),e(k,"class","svelte-t2wq17"),e(q,"class","svelte-t2wq17"),N(q,"active",o[0].path==="/todos"),e(f,"class","svelte-t2wq17"),e(C,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(C,"class","svelte-t2wq17"),e(D,"viewBox","0 0 2 3"),e(D,"aria-hidden","true"),e(D,"class","svelte-t2wq17"),e(v,"class","svelte-t2wq17"),e(O,"class","corner svelte-t2wq17"),e(a,"class","svelte-t2wq17")},m(I,$){x(I,a,$),s(a,_),s(_,i),s(i,h),s(a,m),s(a,v),s(v,b),s(b,A),s(v,E),s(v,f),s(f,w),s(w,g),s(g,j),s(f,d),s(f,t),s(t,c),s(c,M),s(f,z),s(f,q),s(q,k),s(k,B),s(v,K),s(v,D),s(D,C),s(a,P),s(a,O)},p(I,[$]){$&1&&N(w,"active",I[0].path==="/"),$&1&&N(t,"active",I[0].path==="/about"),$&1&&N(q,"active",I[0].path==="/todos")},i:le,o:le,d(I){I&&r(a)}}}function ke(o,a,_){let i;return ve(o,we,h=>_(0,i=h)),[i]}class Ae extends se{constructor(a){super();ae(this,a,ke,qe,re,{})}}function Ie(o){let a,_,i,h,p,m,v,b,A,E,f,w,g;a=new Ae({});const j=o[1].default,d=fe(j,o,o[0],null);return{c(){he(a.$$.fragment),_=y(),i=n("main"),d&&d.c(),h=y(),p=n("footer"),m=n("a"),v=n("i"),b=T("github"),A=y(),E=n("a"),f=n("i"),w=T("Email"),this.h()},l(t){de(a.$$.fragment,t),_=L(t),i=u(t,"MAIN",{class:!0});var c=l(i);d&&d.l(c),c.forEach(r),h=L(t),p=u(t,"FOOTER",{class:!0});var M=l(p);m=u(M,"A",{href:!0,target:!0,class:!0});var z=l(m);v=u(z,"I",{class:!0,"aria-hidden":!0});var q=l(v);b=V(q,"github"),q.forEach(r),z.forEach(r),A=L(M),E=u(M,"A",{href:!0,target:!0,class:!0});var k=l(E);f=u(k,"I",{class:!0,"aria-hidden":!0});var B=l(f);w=V(B,"Email"),B.forEach(r),k.forEach(r),M.forEach(r),this.h()},h(){e(i,"class","svelte-1izrdc8"),e(v,"class","fa fa-github"),e(v,"aria-hidden","true"),e(m,"href","https://github.com/DefinitelyMaybe"),e(m,"target","_blank"),e(m,"class","svelte-1izrdc8"),e(f,"class","fa fa-envelope"),e(f,"aria-hidden","true"),e(E,"href","mailto:aaron.dekker01@gmail.com"),e(E,"target","_blank"),e(E,"class","svelte-1izrdc8"),e(p,"class","svelte-1izrdc8")},m(t,c){_e(a,t,c),x(t,_,c),x(t,i,c),d&&d.m(i,null),x(t,h,c),x(t,p,c),s(p,m),s(m,v),s(v,b),s(p,A),s(p,E),s(E,f),s(f,w),g=!0},p(t,[c]){d&&d.p&&(!g||c&1)&&pe(d,j,t,t[0],g?me(j,t[0],c,null):ge(t[0]),null)},i(t){g||(oe(a.$$.fragment,t),oe(d,t),g=!0)},o(t){ie(a.$$.fragment,t),ie(d,t),g=!1},d(t){be(a,t),t&&r(_),t&&r(i),d&&d.d(t),t&&r(h),t&&r(p)}}}function ye(o,a,_){let{$$slots:i={},$$scope:h}=a;return o.$$set=p=>{"$$scope"in p&&_(0,h=p.$$scope)},[h,i]}class Me extends se{constructor(a){super();ae(this,a,ye,Ie,re,{})}}export{Me as default};

import{S as J,i as K,s as Q,k as p,j as X,E as Y,d as e,n as d,m as Z,f as n,o as tt,x as et,u as ot,v as at,e as c,t as f,c as u,a as m,g as b,O as q,b as w,F as g}from"../../chunks/vendor-e5c559a6.js";import{t as st}from"../../chunks/Header-20ffa1eb.js";import{W as nt}from"../../chunks/WriteUp-c3a28d0c.js";import{t as D,a as rt}from"../../chunks/threejslogowhite-f8c556b8.js";function it(W){let s,r,i,o,l,y,v,C,P,j,N,x,k,S,$,h,G,A,I,F,E,_,z,B,T,R;return{c(){s=c("img"),i=p(),o=c("p"),l=f("Feb 2020"),y=p(),v=c("p"),C=f(`Before going into details about what I\u2019ve been working on for the last month or so, I\u2019m going to
		preempt this text with an assumption that you, dear reader, know about javascript and node.js.
		Even still, some extra research may be required, don\u2019t just take my word for it.`),P=p(),j=c("p"),N=f(`Nobody had predicted that javascript would end up where it is today but now everybody wants in.
		Web development was completely separate from the native world until about 10 years ago when
		Nodejs came along. Up until that point, nobody in their right mind was writing anything half
		decent in the mess of a language that is javascript. Let\u2019s do a brief history recap. IT
		development of the past 20+ years has been dominated by two great languages. C and C++. These
		two languages have been the tools of choice for two main reasons. One, developers have to work
		within the boundaries of most people\u2019s computer\u2019s compute and memory capabilities. And two,
		libraries, tools and help was around because everyone else was using it. Browsers, applications,
		games, you name it, 9/10 times C or C++ was behind it. Javascript was a joke.`),x=p(),k=c("p"),S=f(`But javascript had the internet. Fast forward to today and javascript is top of the
		stackexchange survey as the most used language and still growing. What changed in between? Tons.
		Google's V8 engine for javascript came along. V8\u2019s sole purpose is the performance of
		javascript. Nodejs went and opened up native level programming to a language. WebGL and
		Webassembly gave compute power to web development like no other. Electron made it possible to
		deploy to all platforms using only javascript. Actually, hold on, I don\u2019t think I can do the
		history of javascript enough justice. If you\u2019ve got the time have a look into this video:`),$=p(),h=c("iframe"),A=p(),I=c("p"),F=f(`So where is C and C++ in all of this? Well, still back in system land. People were not about to
		jump up and down to rewrite all of their code in javascript. That would be silly. Instead, those
		languages saw their target - Webassembly. To the old and new, welcome to today's web.`),E=p(),_=c("p"),z=f(`Right so what am I working on? Threejs is one of the biggest and best javascript libraries for
		those who want to work with graphics. If you want to create something 3D, threejs is where it's
		at. The library started purely in javascript but over recent years has adopted type support for
		typescript. As far as development is concerned, types are a boon like no other. \u201CWhat was the
		name of that function I made in this other module?\u201D, \u201CWhere did all of these errors come from?\u201D,
		\u201CIs it ok for me to set this variable to x, y, z?\u201D. But type support is not typescript. The
		underlying code is still javascript and is staying there to maintain compatibility with older
		browser versions. New features like classes are never going to arrive. When people come along
		and want to adjust things to suit their needs, their options are rather limited.`),B=p(),T=c("p"),R=f(`I\u2019m one of those people. I wanted to add something in. Instead of throwing my hands up in the
		air, I thought \u201Csurely I could just parse threejs into typescript, I mean the types are already
		there so it couldn\u2019t be that hard \u201D. Problem number one. Threejs has a monthly rolling release
		cycle. If your typescript conversion is a manual process, you\u2019ll basically constantly be playing
		catch up with the main library or separating the codebase into two. Both bad ideas and both as
		bad as each other. Problem number two. Threejs is big enough that parsing incorrectly will take
		too long. Thank goodness my BSc is becoming useful. In short, my first attempt was linearly
		scanning through strings to match brackets to pick out sections of code. After getting it to
		work nicely on a single file, I ran my script on the entire library. Minutes went by. Ok, I\u2019ll
		go have some lunch. An hour or so went by. Still going. No good. Regular expressions and other
		tricks must be used. Finally problem number three comes in two parts. Part A is that I actually
		don\u2019t know whether this can be done. If there\u2019s some section of the code that assumes x, y, z
		and my parser breaks that, it\u2019s done for. Part B is that I may send weeks on this project before
		realizing part A. Here\u2019s to being a young developer everybody. Progress is hard.`),this.h()},l(t){s=u(t,"IMG",{src:!0,alt:!0,class:!0}),i=d(t),o=u(t,"P",{});var a=m(o);l=b(a,"Feb 2020"),a.forEach(e),y=d(t),v=u(t,"P",{});var O=m(v);C=b(O,`Before going into details about what I\u2019ve been working on for the last month or so, I\u2019m going to
		preempt this text with an assumption that you, dear reader, know about javascript and node.js.
		Even still, some extra research may be required, don\u2019t just take my word for it.`),O.forEach(e),P=d(t),j=u(t,"P",{});var L=m(j);N=b(L,`Nobody had predicted that javascript would end up where it is today but now everybody wants in.
		Web development was completely separate from the native world until about 10 years ago when
		Nodejs came along. Up until that point, nobody in their right mind was writing anything half
		decent in the mess of a language that is javascript. Let\u2019s do a brief history recap. IT
		development of the past 20+ years has been dominated by two great languages. C and C++. These
		two languages have been the tools of choice for two main reasons. One, developers have to work
		within the boundaries of most people\u2019s computer\u2019s compute and memory capabilities. And two,
		libraries, tools and help was around because everyone else was using it. Browsers, applications,
		games, you name it, 9/10 times C or C++ was behind it. Javascript was a joke.`),L.forEach(e),x=d(t),k=u(t,"P",{});var M=m(k);S=b(M,`But javascript had the internet. Fast forward to today and javascript is top of the
		stackexchange survey as the most used language and still growing. What changed in between? Tons.
		Google's V8 engine for javascript came along. V8\u2019s sole purpose is the performance of
		javascript. Nodejs went and opened up native level programming to a language. WebGL and
		Webassembly gave compute power to web development like no other. Electron made it possible to
		deploy to all platforms using only javascript. Actually, hold on, I don\u2019t think I can do the
		history of javascript enough justice. If you\u2019ve got the time have a look into this video:`),M.forEach(e),$=d(t),h=u(t,"IFRAME",{title:!0,src:!0,class:!0}),m(h).forEach(e),A=d(t),I=u(t,"P",{});var U=m(I);F=b(U,`So where is C and C++ in all of this? Well, still back in system land. People were not about to
		jump up and down to rewrite all of their code in javascript. That would be silly. Instead, those
		languages saw their target - Webassembly. To the old and new, welcome to today's web.`),U.forEach(e),E=d(t),_=u(t,"P",{});var V=m(_);z=b(V,`Right so what am I working on? Threejs is one of the biggest and best javascript libraries for
		those who want to work with graphics. If you want to create something 3D, threejs is where it's
		at. The library started purely in javascript but over recent years has adopted type support for
		typescript. As far as development is concerned, types are a boon like no other. \u201CWhat was the
		name of that function I made in this other module?\u201D, \u201CWhere did all of these errors come from?\u201D,
		\u201CIs it ok for me to set this variable to x, y, z?\u201D. But type support is not typescript. The
		underlying code is still javascript and is staying there to maintain compatibility with older
		browser versions. New features like classes are never going to arrive. When people come along
		and want to adjust things to suit their needs, their options are rather limited.`),V.forEach(e),B=d(t),T=u(t,"P",{});var H=m(T);R=b(H,`I\u2019m one of those people. I wanted to add something in. Instead of throwing my hands up in the
		air, I thought \u201Csurely I could just parse threejs into typescript, I mean the types are already
		there so it couldn\u2019t be that hard \u201D. Problem number one. Threejs has a monthly rolling release
		cycle. If your typescript conversion is a manual process, you\u2019ll basically constantly be playing
		catch up with the main library or separating the codebase into two. Both bad ideas and both as
		bad as each other. Problem number two. Threejs is big enough that parsing incorrectly will take
		too long. Thank goodness my BSc is becoming useful. In short, my first attempt was linearly
		scanning through strings to match brackets to pick out sections of code. After getting it to
		work nicely on a single file, I ran my script on the entire library. Minutes went by. Ok, I\u2019ll
		go have some lunch. An hour or so went by. Still going. No good. Regular expressions and other
		tricks must be used. Finally problem number three comes in two parts. Part A is that I actually
		don\u2019t know whether this can be done. If there\u2019s some section of the code that assumes x, y, z
		and my parser breaks that, it\u2019s done for. Part B is that I may send weeks on this project before
		realizing part A. Here\u2019s to being a young developer everybody. Progress is hard.`),H.forEach(e),this.h()},h(){q(s.src,r=W[0])||w(s,"src",r),w(s,"alt","three.js logo"),w(s,"class","rounded-md"),w(h,"title","A fireship.io youtube video talking about the history of javascript"),q(h.src,G="https://www.youtube.com/embed/Sh6lK57Cuk4")||w(h,"src",G),w(h,"class","py-4")},m(t,a){n(t,s,a),n(t,i,a),n(t,o,a),g(o,l),n(t,y,a),n(t,v,a),g(v,C),n(t,P,a),n(t,j,a),g(j,N),n(t,x,a),n(t,k,a),g(k,S),n(t,$,a),n(t,h,a),n(t,A,a),n(t,I,a),g(I,F),n(t,E,a),n(t,_,a),g(_,z),n(t,B,a),n(t,T,a),g(T,R)},p(t,a){a&1&&!q(s.src,r=t[0])&&w(s,"src",r)},d(t){t&&e(s),t&&e(i),t&&e(o),t&&e(y),t&&e(v),t&&e(P),t&&e(j),t&&e(x),t&&e(k),t&&e($),t&&e(h),t&&e(A),t&&e(I),t&&e(E),t&&e(_),t&&e(B),t&&e(T)}}}function lt(W){let s,r,i;return r=new nt({props:{$$slots:{default:[it]},$$scope:{ctx:W}}}),{c(){s=p(),X(r.$$.fragment),this.h()},l(o){Y('[data-svelte="svelte-2omp41"]',document.head).forEach(e),s=d(o),Z(r.$$.fragment,o),this.h()},h(){document.title="Three.js, Regular Expressions and me"},m(o,l){n(o,s,l),tt(r,o,l),i=!0},p(o,[l]){const y={};l&3&&(y.$$scope={dirty:l,ctx:o}),r.$set(y)},i(o){i||(et(r.$$.fragment,o),i=!0)},o(o){ot(r.$$.fragment,o),i=!1},d(o){o&&e(s),at(r,o)}}}function ht(W,s,r){let i=D;return st.subscribe(o=>{o==="light"?r(0,i=D):r(0,i=rt)}),[i]}class mt extends J{constructor(s){super();K(this,s,ht,lt,Q,{})}}export{mt as default};

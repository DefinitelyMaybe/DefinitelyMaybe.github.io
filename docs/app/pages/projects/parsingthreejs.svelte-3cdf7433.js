import{S as U,i as V,s as H,k as p,j as D,E as J,d as e,n as d,m as K,f as n,o as Q,x as X,u as Y,v as Z,e as c,t as j,c as u,a as y,g as k,O as z,b as I,F as _}from"../../chunks/vendor-6b6f3546.js";import{t as tt}from"../../chunks/Header-71f6f3c7.js";import{W as et}from"../../chunks/WriteUp-df985e3f.js";import{t as M,a as ot}from"../../chunks/threejslogowhite-f8c556b8.js";function at(T){let r,s,i,o,l,m,f,E,W,g,B,P,h,F,x,w,C,$,b,N,A,v,S;return{c(){r=c("img"),i=p(),o=c("p"),l=j(`Before going into details about what I\u2019ve been working on for the last month or so, I\u2019m going to\r
		preempt this text with an assumption that you, dear reader, know about javascript and node.js.\r
		Even still, some extra research may be required, don\u2019t just take my word for it.`),m=p(),f=c("p"),E=j(`Nobody had predicted that javascript would end up where it is today but now everybody wants in.\r
		Web development was completely separate from the native world until about 10 years ago when\r
		Nodejs came along. Up until that point, nobody in their right mind was writing anything half\r
		decent in the mess of a language that is javascript. Let\u2019s do a brief history recap. IT\r
		development of the past 20+ years has been dominated by two great languages. C and C++. These\r
		two languages have been the tools of choice for two main reasons. One, developers have to work\r
		within the boundaries of most people\u2019s computer\u2019s compute and memory capabilities. And two,\r
		libraries, tools and help was around because everyone else was using it. Browsers, applications,\r
		games, you name it, 9/10 times C or C++ was behind it. Javascript was a joke.`),W=p(),g=c("p"),B=j(`But javascript had the internet. Fast forward to today and javascript is top of the\r
		stackexchange survey as the most used language and still growing. What changed in between? Tons.\r
		Google's V8 engine for javascript came along. V8\u2019s sole purpose is the performance of\r
		javascript. Nodejs went and opened up native level programming to a language. WebGL and\r
		Webassembly gave compute power to web development like no other. Electron made it possible to\r
		deploy to all platforms using only javascript. Actually, hold on, I don\u2019t think I can do the\r
		history of javascript enough justice. If you\u2019ve got the time have a look into this video:`),P=p(),h=c("iframe"),x=p(),w=c("p"),C=j(`So where is C and C++ in all of this? Well, still back in system land. People were not about to\r
		jump up and down to rewrite all of their code in javascript. That would be silly. Instead, those\r
		languages saw their target - Webassembly. To the old and new, welcome to today's web.`),$=p(),b=c("p"),N=j(`Right so what am I working on? Threejs is one of the biggest and best javascript libraries for\r
		those who want to work with graphics. If you want to create something 3D, threejs is where it's\r
		at. The library started purely in javascript but over recent years has adopted type support for\r
		typescript. As far as development is concerned, types are a boon like no other. \u201CWhat was the\r
		name of that function I made in this other module?\u201D, \u201CWhere did all of these errors come from?\u201D,\r
		\u201CIs it ok for me to set this variable to x, y, z?\u201D. But type support is not typescript. The\r
		underlying code is still javascript and is staying there to maintain compatibility with older\r
		browser versions. New features like classes are never going to arrive. When people come along\r
		and want to adjust things to suit their needs, their options are rather limited.`),A=p(),v=c("p"),S=j(`I\u2019m one of those people. I wanted to add something in. Instead of throwing my hands up in the\r
		air, I thought \u201Csurely I could just parse threejs into typescript, I mean the types are already\r
		there so it couldn\u2019t be that hard \u201D. Problem number one. Threejs has a monthly rolling release\r
		cycle. If your typescript conversion is a manual process, you\u2019ll basically constantly be playing\r
		catch up with the main library or separating the codebase into two. Both bad ideas and both as\r
		bad as each other. Problem number two. Threejs is big enough that parsing incorrectly will take\r
		too long. Thank goodness my BSc is becoming useful. In short, my first attempt was linearly\r
		scanning through strings to match brackets to pick out sections of code. After getting it to\r
		work nicely on a single file, I ran my script on the entire library. Minutes went by. Ok, I\u2019ll\r
		go have some lunch. An hour or so went by. Still going. No good. Regular expressions and other\r
		tricks must be used. Finally problem number three comes in two parts. Part A is that I actually\r
		don\u2019t know whether this can be done. If there\u2019s some section of the code that assumes x, y, z\r
		and my parser breaks that, it\u2019s done for. Part B is that I may send weeks on this project before\r
		realizing part A. Here\u2019s to being a young developer everybody. Progress is hard.`),this.h()},l(t){r=u(t,"IMG",{src:!0,alt:!0,class:!0}),i=d(t),o=u(t,"P",{});var a=y(o);l=k(a,`Before going into details about what I\u2019ve been working on for the last month or so, I\u2019m going to\r
		preempt this text with an assumption that you, dear reader, know about javascript and node.js.\r
		Even still, some extra research may be required, don\u2019t just take my word for it.`),a.forEach(e),m=d(t),f=u(t,"P",{});var R=y(f);E=k(R,`Nobody had predicted that javascript would end up where it is today but now everybody wants in.\r
		Web development was completely separate from the native world until about 10 years ago when\r
		Nodejs came along. Up until that point, nobody in their right mind was writing anything half\r
		decent in the mess of a language that is javascript. Let\u2019s do a brief history recap. IT\r
		development of the past 20+ years has been dominated by two great languages. C and C++. These\r
		two languages have been the tools of choice for two main reasons. One, developers have to work\r
		within the boundaries of most people\u2019s computer\u2019s compute and memory capabilities. And two,\r
		libraries, tools and help was around because everyone else was using it. Browsers, applications,\r
		games, you name it, 9/10 times C or C++ was behind it. Javascript was a joke.`),R.forEach(e),W=d(t),g=u(t,"P",{});var q=y(g);B=k(q,`But javascript had the internet. Fast forward to today and javascript is top of the\r
		stackexchange survey as the most used language and still growing. What changed in between? Tons.\r
		Google's V8 engine for javascript came along. V8\u2019s sole purpose is the performance of\r
		javascript. Nodejs went and opened up native level programming to a language. WebGL and\r
		Webassembly gave compute power to web development like no other. Electron made it possible to\r
		deploy to all platforms using only javascript. Actually, hold on, I don\u2019t think I can do the\r
		history of javascript enough justice. If you\u2019ve got the time have a look into this video:`),q.forEach(e),P=d(t),h=u(t,"IFRAME",{title:!0,src:!0}),y(h).forEach(e),x=d(t),w=u(t,"P",{});var G=y(w);C=k(G,`So where is C and C++ in all of this? Well, still back in system land. People were not about to\r
		jump up and down to rewrite all of their code in javascript. That would be silly. Instead, those\r
		languages saw their target - Webassembly. To the old and new, welcome to today's web.`),G.forEach(e),$=d(t),b=u(t,"P",{});var O=y(b);N=k(O,`Right so what am I working on? Threejs is one of the biggest and best javascript libraries for\r
		those who want to work with graphics. If you want to create something 3D, threejs is where it's\r
		at. The library started purely in javascript but over recent years has adopted type support for\r
		typescript. As far as development is concerned, types are a boon like no other. \u201CWhat was the\r
		name of that function I made in this other module?\u201D, \u201CWhere did all of these errors come from?\u201D,\r
		\u201CIs it ok for me to set this variable to x, y, z?\u201D. But type support is not typescript. The\r
		underlying code is still javascript and is staying there to maintain compatibility with older\r
		browser versions. New features like classes are never going to arrive. When people come along\r
		and want to adjust things to suit their needs, their options are rather limited.`),O.forEach(e),A=d(t),v=u(t,"P",{});var L=y(v);S=k(L,`I\u2019m one of those people. I wanted to add something in. Instead of throwing my hands up in the\r
		air, I thought \u201Csurely I could just parse threejs into typescript, I mean the types are already\r
		there so it couldn\u2019t be that hard \u201D. Problem number one. Threejs has a monthly rolling release\r
		cycle. If your typescript conversion is a manual process, you\u2019ll basically constantly be playing\r
		catch up with the main library or separating the codebase into two. Both bad ideas and both as\r
		bad as each other. Problem number two. Threejs is big enough that parsing incorrectly will take\r
		too long. Thank goodness my BSc is becoming useful. In short, my first attempt was linearly\r
		scanning through strings to match brackets to pick out sections of code. After getting it to\r
		work nicely on a single file, I ran my script on the entire library. Minutes went by. Ok, I\u2019ll\r
		go have some lunch. An hour or so went by. Still going. No good. Regular expressions and other\r
		tricks must be used. Finally problem number three comes in two parts. Part A is that I actually\r
		don\u2019t know whether this can be done. If there\u2019s some section of the code that assumes x, y, z\r
		and my parser breaks that, it\u2019s done for. Part B is that I may send weeks on this project before\r
		realizing part A. Here\u2019s to being a young developer everybody. Progress is hard.`),L.forEach(e),this.h()},h(){z(r.src,s=T[0])||I(r,"src",s),I(r,"alt","three.js logo"),I(r,"class","rounded-md"),I(h,"title","A fireship.io youtube video talking about the history of javascript"),z(h.src,F="https://www.youtube.com/embed/Sh6lK57Cuk4")||I(h,"src",F)},m(t,a){n(t,r,a),n(t,i,a),n(t,o,a),_(o,l),n(t,m,a),n(t,f,a),_(f,E),n(t,W,a),n(t,g,a),_(g,B),n(t,P,a),n(t,h,a),n(t,x,a),n(t,w,a),_(w,C),n(t,$,a),n(t,b,a),_(b,N),n(t,A,a),n(t,v,a),_(v,S)},p(t,a){a&1&&!z(r.src,s=t[0])&&I(r,"src",s)},d(t){t&&e(r),t&&e(i),t&&e(o),t&&e(m),t&&e(f),t&&e(W),t&&e(g),t&&e(P),t&&e(h),t&&e(x),t&&e(w),t&&e($),t&&e(b),t&&e(A),t&&e(v)}}}function rt(T){let r,s,i;return s=new et({props:{$$slots:{default:[at]},$$scope:{ctx:T}}}),{c(){r=p(),D(s.$$.fragment),this.h()},l(o){J('[data-svelte="svelte-2omp41"]',document.head).forEach(e),r=d(o),K(s.$$.fragment,o),this.h()},h(){document.title="Three.js, Regular Expressions and me"},m(o,l){n(o,r,l),Q(s,o,l),i=!0},p(o,[l]){const m={};l&3&&(m.$$scope={dirty:l,ctx:o}),s.$set(m)},i(o){i||(X(s.$$.fragment,o),i=!0)},o(o){Y(s.$$.fragment,o),i=!1},d(o){o&&e(r),Z(s,o)}}}function st(T,r,s){let i=M;return tt.subscribe(o=>{o==="light"?s(0,i=M):s(0,i=ot)}),[i]}class pt extends U{constructor(r){super();V(this,r,st,rt,H,{})}}export{pt as default};

import{S as K,i as Q,s as X,k as h,e as n,t as p,L as Y,d as a,m as d,c as s,a as r,h as c,b as j,I as Z,g as H,J as t,E as R}from"../../chunks/index-269e7057.js";function $(U){let u,e,m,k,I,g,T,_,y,x,P,b,E,W,i,q,A,w,C,B,f,N,S,v,F;return{c(){u=h(),e=n("section"),m=n("p"),k=p("Feb 2020"),I=h(),g=n("p"),T=p(`Before going into details about what I\u2019ve been working on for the last month or so, I\u2019m going to
		preempt this text with an assumption that you, dear reader, know about javascript and node.js.
		Even still, some extra research may be required, don\u2019t just take my word for it.`),_=h(),y=n("p"),x=p(`Nobody had predicted that javascript would end up where it is today but now everybody wants in.
		Web development was completely separate from the native world until about 10 years ago when
		Nodejs came along. Up until that point, nobody in their right mind was writing anything half
		decent in the mess of a language that is javascript. Let\u2019s do a brief history recap. IT
		development of the past 20+ years has been dominated by two great languages. C and C++. These
		two languages have been the tools of choice for two main reasons. One, developers have to work
		within the boundaries of most people\u2019s computer\u2019s compute and memory capabilities. And two,
		libraries, tools and help was around because everyone else was using it. Browsers, applications,
		games, you name it, 9/10 times C or C++ was behind it. Javascript was a joke.`),P=h(),b=n("p"),E=p(`But javascript had the internet. Fast forward to today and javascript is top of the
		stackexchange survey as the most used language and still growing. What changed in between? Tons.
		Google's V8 engine for javascript came along. V8\u2019s sole purpose is the performance of
		javascript. Nodejs went and opened up native level programming to a language. WebGL and
		Webassembly gave compute power to web development like no other. Electron made it possible to
		deploy to all platforms using only javascript. Actually, hold on, I don\u2019t think I can do the
		history of javascript enough justice. If you\u2019ve got the time have a look into this video:`),W=h(),i=n("iframe"),A=h(),w=n("p"),C=p(`So where is C and C++ in all of this? Well, still back in system land. People were not about to
		jump up and down to rewrite all of their code in javascript. That would be silly. Instead, those
		languages saw their target - Webassembly. To the old and new, welcome to today's web.`),B=h(),f=n("p"),N=p(`Right so what am I working on? Threejs is one of the biggest and best javascript libraries for
		those who want to work with graphics. If you want to create something 3D, threejs is where it's
		at. The library started purely in javascript but over recent years has adopted type support for
		typescript. As far as development is concerned, types are a boon like no other. \u201CWhat was the
		name of that function I made in this other module?\u201D, \u201CWhere did all of these errors come from?\u201D,
		\u201CIs it ok for me to set this variable to x, y, z?\u201D. But type support is not typescript. The
		underlying code is still javascript and is staying there to maintain compatibility with older
		browser versions. New features like classes are never going to arrive. When people come along
		and want to adjust things to suit their needs, their options are rather limited.`),S=h(),v=n("p"),F=p(`I\u2019m one of those people. I wanted to add something in. Instead of throwing my hands up in the
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
		realizing part A. Here\u2019s to being a young developer everybody. Progress is hard.`),this.h()},l(l){Y('[data-svelte="svelte-2omp41"]',document.head).forEach(a),u=d(l),e=s(l,"SECTION",{class:!0});var o=r(e);m=s(o,"P",{});var L=r(m);k=c(L,"Feb 2020"),L.forEach(a),I=d(o),g=s(o,"P",{});var O=r(g);T=c(O,`Before going into details about what I\u2019ve been working on for the last month or so, I\u2019m going to
		preempt this text with an assumption that you, dear reader, know about javascript and node.js.
		Even still, some extra research may be required, don\u2019t just take my word for it.`),O.forEach(a),_=d(o),y=s(o,"P",{});var G=r(y);x=c(G,`Nobody had predicted that javascript would end up where it is today but now everybody wants in.
		Web development was completely separate from the native world until about 10 years ago when
		Nodejs came along. Up until that point, nobody in their right mind was writing anything half
		decent in the mess of a language that is javascript. Let\u2019s do a brief history recap. IT
		development of the past 20+ years has been dominated by two great languages. C and C++. These
		two languages have been the tools of choice for two main reasons. One, developers have to work
		within the boundaries of most people\u2019s computer\u2019s compute and memory capabilities. And two,
		libraries, tools and help was around because everyone else was using it. Browsers, applications,
		games, you name it, 9/10 times C or C++ was behind it. Javascript was a joke.`),G.forEach(a),P=d(o),b=s(o,"P",{});var V=r(b);E=c(V,`But javascript had the internet. Fast forward to today and javascript is top of the
		stackexchange survey as the most used language and still growing. What changed in between? Tons.
		Google's V8 engine for javascript came along. V8\u2019s sole purpose is the performance of
		javascript. Nodejs went and opened up native level programming to a language. WebGL and
		Webassembly gave compute power to web development like no other. Electron made it possible to
		deploy to all platforms using only javascript. Actually, hold on, I don\u2019t think I can do the
		history of javascript enough justice. If you\u2019ve got the time have a look into this video:`),V.forEach(a),W=d(o),i=s(o,"IFRAME",{title:!0,src:!0,class:!0}),r(i).forEach(a),A=d(o),w=s(o,"P",{});var J=r(w);C=c(J,`So where is C and C++ in all of this? Well, still back in system land. People were not about to
		jump up and down to rewrite all of their code in javascript. That would be silly. Instead, those
		languages saw their target - Webassembly. To the old and new, welcome to today's web.`),J.forEach(a),B=d(o),f=s(o,"P",{});var M=r(f);N=c(M,`Right so what am I working on? Threejs is one of the biggest and best javascript libraries for
		those who want to work with graphics. If you want to create something 3D, threejs is where it's
		at. The library started purely in javascript but over recent years has adopted type support for
		typescript. As far as development is concerned, types are a boon like no other. \u201CWhat was the
		name of that function I made in this other module?\u201D, \u201CWhere did all of these errors come from?\u201D,
		\u201CIs it ok for me to set this variable to x, y, z?\u201D. But type support is not typescript. The
		underlying code is still javascript and is staying there to maintain compatibility with older
		browser versions. New features like classes are never going to arrive. When people come along
		and want to adjust things to suit their needs, their options are rather limited.`),M.forEach(a),S=d(o),v=s(o,"P",{});var D=r(v);F=c(D,`I\u2019m one of those people. I wanted to add something in. Instead of throwing my hands up in the
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
		realizing part A. Here\u2019s to being a young developer everybody. Progress is hard.`),D.forEach(a),o.forEach(a),this.h()},h(){document.title="Three.js, Regular Expressions and me",j(i,"title","A fireship.io youtube video talking about the history of javascript"),Z(i.src,q="https://www.youtube.com/embed/Sh6lK57Cuk4")||j(i,"src",q),j(i,"class","py-4 aspect-video"),j(e,"class","flex flex-col")},m(l,z){H(l,u,z),H(l,e,z),t(e,m),t(m,k),t(e,I),t(e,g),t(g,T),t(e,_),t(e,y),t(y,x),t(e,P),t(e,b),t(b,E),t(e,W),t(e,i),t(e,A),t(e,w),t(w,C),t(e,B),t(e,f),t(f,N),t(e,S),t(e,v),t(v,F)},p:R,i:R,o:R,d(l){l&&a(u),l&&a(e)}}}class et extends K{constructor(u){super(),Q(this,u,null,$,X,{})}}export{et as default};

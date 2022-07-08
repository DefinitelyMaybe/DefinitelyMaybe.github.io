import{S as Q,i as X,s as Y,k as p,w as Z,J as tt,d as i,m as c,x as et,g as K,y as ot,q as at,o as st,B as nt,e as l,t as y,c as h,a as d,h as w,T as R,b as u,K as e}from"../../chunks/index-227296ef.js";import{t as rt}from"../../chunks/Header-d521b774.js";import{W as it}from"../../chunks/WriteUp-6587def7.js";import{t as H,a as lt}from"../../chunks/threejslogowhite-f8c556b8.js";import"../../chunks/index-d384d5a8.js";function ht(f){let t,a,n,s,r,b,P,v,W,x,j,E,$,k,A,B,m,G,C,I,N,S,_,F,q,T,z;return{c(){t=l("section"),a=l("img"),s=p(),r=l("p"),b=y("Feb 2020"),P=p(),v=l("p"),W=y(`Before going into details about what I\u2019ve been working on for the last month or so, I\u2019m going to
			preempt this text with an assumption that you, dear reader, know about javascript and node.js.
			Even still, some extra research may be required, don\u2019t just take my word for it.`),x=p(),j=l("p"),E=y(`Nobody had predicted that javascript would end up where it is today but now everybody wants in.
			Web development was completely separate from the native world until about 10 years ago when
			Nodejs came along. Up until that point, nobody in their right mind was writing anything half
			decent in the mess of a language that is javascript. Let\u2019s do a brief history recap. IT
			development of the past 20+ years has been dominated by two great languages. C and C++. These
			two languages have been the tools of choice for two main reasons. One, developers have to work
			within the boundaries of most people\u2019s computer\u2019s compute and memory capabilities. And two,
			libraries, tools and help was around because everyone else was using it. Browsers, applications,
			games, you name it, 9/10 times C or C++ was behind it. Javascript was a joke.`),$=p(),k=l("p"),A=y(`But javascript had the internet. Fast forward to today and javascript is top of the
			stackexchange survey as the most used language and still growing. What changed in between? Tons.
			Google's V8 engine for javascript came along. V8\u2019s sole purpose is the performance of
			javascript. Nodejs went and opened up native level programming to a language. WebGL and
			Webassembly gave compute power to web development like no other. Electron made it possible to
			deploy to all platforms using only javascript. Actually, hold on, I don\u2019t think I can do the
			history of javascript enough justice. If you\u2019ve got the time have a look into this video:`),B=p(),m=l("iframe"),C=p(),I=l("p"),N=y(`So where is C and C++ in all of this? Well, still back in system land. People were not about to
			jump up and down to rewrite all of their code in javascript. That would be silly. Instead, those
			languages saw their target - Webassembly. To the old and new, welcome to today's web.`),S=p(),_=l("p"),F=y(`Right so what am I working on? Threejs is one of the biggest and best javascript libraries for
			those who want to work with graphics. If you want to create something 3D, threejs is where it's
			at. The library started purely in javascript but over recent years has adopted type support for
			typescript. As far as development is concerned, types are a boon like no other. \u201CWhat was the
			name of that function I made in this other module?\u201D, \u201CWhere did all of these errors come from?\u201D,
			\u201CIs it ok for me to set this variable to x, y, z?\u201D. But type support is not typescript. The
			underlying code is still javascript and is staying there to maintain compatibility with older
			browser versions. New features like classes are never going to arrive. When people come along
			and want to adjust things to suit their needs, their options are rather limited.`),q=p(),T=l("p"),z=y(`I\u2019m one of those people. I wanted to add something in. Instead of throwing my hands up in the
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
			realizing part A. Here\u2019s to being a young developer everybody. Progress is hard.`),this.h()},l(g){t=h(g,"SECTION",{class:!0});var o=d(t);a=h(o,"IMG",{src:!0,alt:!0,class:!0}),s=c(o),r=h(o,"P",{});var O=d(r);b=w(O,"Feb 2020"),O.forEach(i),P=c(o),v=h(o,"P",{});var L=d(v);W=w(L,`Before going into details about what I\u2019ve been working on for the last month or so, I\u2019m going to
			preempt this text with an assumption that you, dear reader, know about javascript and node.js.
			Even still, some extra research may be required, don\u2019t just take my word for it.`),L.forEach(i),x=c(o),j=h(o,"P",{});var M=d(j);E=w(M,`Nobody had predicted that javascript would end up where it is today but now everybody wants in.
			Web development was completely separate from the native world until about 10 years ago when
			Nodejs came along. Up until that point, nobody in their right mind was writing anything half
			decent in the mess of a language that is javascript. Let\u2019s do a brief history recap. IT
			development of the past 20+ years has been dominated by two great languages. C and C++. These
			two languages have been the tools of choice for two main reasons. One, developers have to work
			within the boundaries of most people\u2019s computer\u2019s compute and memory capabilities. And two,
			libraries, tools and help was around because everyone else was using it. Browsers, applications,
			games, you name it, 9/10 times C or C++ was behind it. Javascript was a joke.`),M.forEach(i),$=c(o),k=h(o,"P",{});var V=d(k);A=w(V,`But javascript had the internet. Fast forward to today and javascript is top of the
			stackexchange survey as the most used language and still growing. What changed in between? Tons.
			Google's V8 engine for javascript came along. V8\u2019s sole purpose is the performance of
			javascript. Nodejs went and opened up native level programming to a language. WebGL and
			Webassembly gave compute power to web development like no other. Electron made it possible to
			deploy to all platforms using only javascript. Actually, hold on, I don\u2019t think I can do the
			history of javascript enough justice. If you\u2019ve got the time have a look into this video:`),V.forEach(i),B=c(o),m=h(o,"IFRAME",{title:!0,src:!0,class:!0}),d(m).forEach(i),C=c(o),I=h(o,"P",{});var J=d(I);N=w(J,`So where is C and C++ in all of this? Well, still back in system land. People were not about to
			jump up and down to rewrite all of their code in javascript. That would be silly. Instead, those
			languages saw their target - Webassembly. To the old and new, welcome to today's web.`),J.forEach(i),S=c(o),_=h(o,"P",{});var U=d(_);F=w(U,`Right so what am I working on? Threejs is one of the biggest and best javascript libraries for
			those who want to work with graphics. If you want to create something 3D, threejs is where it's
			at. The library started purely in javascript but over recent years has adopted type support for
			typescript. As far as development is concerned, types are a boon like no other. \u201CWhat was the
			name of that function I made in this other module?\u201D, \u201CWhere did all of these errors come from?\u201D,
			\u201CIs it ok for me to set this variable to x, y, z?\u201D. But type support is not typescript. The
			underlying code is still javascript and is staying there to maintain compatibility with older
			browser versions. New features like classes are never going to arrive. When people come along
			and want to adjust things to suit their needs, their options are rather limited.`),U.forEach(i),q=c(o),T=h(o,"P",{});var D=d(T);z=w(D,`I\u2019m one of those people. I wanted to add something in. Instead of throwing my hands up in the
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
			realizing part A. Here\u2019s to being a young developer everybody. Progress is hard.`),D.forEach(i),o.forEach(i),this.h()},h(){R(a.src,n=f[0])||u(a,"src",n),u(a,"alt","three.js logo"),u(a,"class","rounded-md"),u(m,"title","A fireship.io youtube video talking about the history of javascript"),R(m.src,G="https://www.youtube.com/embed/Sh6lK57Cuk4")||u(m,"src",G),u(m,"class","py-4"),u(t,"class","py-2 md:columns-2 lg:columns-3")},m(g,o){K(g,t,o),e(t,a),e(t,s),e(t,r),e(r,b),e(t,P),e(t,v),e(v,W),e(t,x),e(t,j),e(j,E),e(t,$),e(t,k),e(k,A),e(t,B),e(t,m),e(t,C),e(t,I),e(I,N),e(t,S),e(t,_),e(_,F),e(t,q),e(t,T),e(T,z)},p(g,o){o&1&&!R(a.src,n=g[0])&&u(a,"src",n)},d(g){g&&i(t)}}}function dt(f){let t,a,n;return a=new it({props:{$$slots:{default:[ht]},$$scope:{ctx:f}}}),{c(){t=p(),Z(a.$$.fragment),this.h()},l(s){tt('[data-svelte="svelte-2omp41"]',document.head).forEach(i),t=c(s),et(a.$$.fragment,s),this.h()},h(){document.title="Three.js, Regular Expressions and me"},m(s,r){K(s,t,r),ot(a,s,r),n=!0},p(s,[r]){const b={};r&3&&(b.$$scope={dirty:r,ctx:s}),a.$set(b)},i(s){n||(at(a.$$.fragment,s),n=!0)},o(s){st(a.$$.fragment,s),n=!1},d(s){s&&i(t),nt(a,s)}}}function pt(f,t,a){let n=H;return rt.subscribe(s=>{s==="light"?a(0,n=H):a(0,n=lt)}),[n]}class wt extends Q{constructor(t){super(),X(this,t,pt,dt,Y,{})}}export{wt as default};

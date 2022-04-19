<script>
	import { theme } from '$lib/Header.svelte';
	import WriteUp from '$lib/WriteUp.svelte';
	import threejsdarkImg from '$lib/assets/images/threejslogodark.png';
	import threejswhiteImg from '$lib/assets/images/threejslogowhite.png';

	let threeSrc = threejswhiteImg;

	theme.subscribe((val) => {
		if (val === 'light') {
			threeSrc = threejswhiteImg;
		} else {
			threeSrc = threejsdarkImg;
		}
	});
</script>

<svelte:head>
	<title>Three.js, Regular Expressions and me</title>
</svelte:head>

<WriteUp>
	<section class="py-2 md:columns-2 lg:columns-3">
		<img src={threeSrc} alt="three.js logo" class="rounded-md" />
		<p>Feb 2020</p>
		<p>
			Before going into details about what I’ve been working on for the last month or so, I’m going to
			preempt this text with an assumption that you, dear reader, know about javascript and node.js.
			Even still, some extra research may be required, don’t just take my word for it.
		</p>
		<p>
			Nobody had predicted that javascript would end up where it is today but now everybody wants in.
			Web development was completely separate from the native world until about 10 years ago when
			Nodejs came along. Up until that point, nobody in their right mind was writing anything half
			decent in the mess of a language that is javascript. Let’s do a brief history recap. IT
			development of the past 20+ years has been dominated by two great languages. C and C++. These
			two languages have been the tools of choice for two main reasons. One, developers have to work
			within the boundaries of most people’s computer’s compute and memory capabilities. And two,
			libraries, tools and help was around because everyone else was using it. Browsers, applications,
			games, you name it, 9/10 times C or C++ was behind it. Javascript was a joke.
		</p>
		<p>
			But javascript had the internet. Fast forward to today and javascript is top of the
			stackexchange survey as the most used language and still growing. What changed in between? Tons.
			Google's V8 engine for javascript came along. V8’s sole purpose is the performance of
			javascript. Nodejs went and opened up native level programming to a language. WebGL and
			Webassembly gave compute power to web development like no other. Electron made it possible to
			deploy to all platforms using only javascript. Actually, hold on, I don’t think I can do the
			history of javascript enough justice. If you’ve got the time have a look into this video:
		</p>
		<iframe
			title="A fireship.io youtube video talking about the history of javascript"
			src="https://www.youtube.com/embed/Sh6lK57Cuk4"
			class="py-4" />
		<p>
			So where is C and C++ in all of this? Well, still back in system land. People were not about to
			jump up and down to rewrite all of their code in javascript. That would be silly. Instead, those
			languages saw their target - Webassembly. To the old and new, welcome to today's web.
		</p>
		<p>
			Right so what am I working on? Threejs is one of the biggest and best javascript libraries for
			those who want to work with graphics. If you want to create something 3D, threejs is where it's
			at. The library started purely in javascript but over recent years has adopted type support for
			typescript. As far as development is concerned, types are a boon like no other. “What was the
			name of that function I made in this other module?”, “Where did all of these errors come from?”,
			“Is it ok for me to set this variable to x, y, z?”. But type support is not typescript. The
			underlying code is still javascript and is staying there to maintain compatibility with older
			browser versions. New features like classes are never going to arrive. When people come along
			and want to adjust things to suit their needs, their options are rather limited.
		</p>
		<p>
			I’m one of those people. I wanted to add something in. Instead of throwing my hands up in the
			air, I thought “surely I could just parse threejs into typescript, I mean the types are already
			there so it couldn’t be that hard ”. Problem number one. Threejs has a monthly rolling release
			cycle. If your typescript conversion is a manual process, you’ll basically constantly be playing
			catch up with the main library or separating the codebase into two. Both bad ideas and both as
			bad as each other. Problem number two. Threejs is big enough that parsing incorrectly will take
			too long. Thank goodness my BSc is becoming useful. In short, my first attempt was linearly
			scanning through strings to match brackets to pick out sections of code. After getting it to
			work nicely on a single file, I ran my script on the entire library. Minutes went by. Ok, I’ll
			go have some lunch. An hour or so went by. Still going. No good. Regular expressions and other
			tricks must be used. Finally problem number three comes in two parts. Part A is that I actually
			don’t know whether this can be done. If there’s some section of the code that assumes x, y, z
			and my parser breaks that, it’s done for. Part B is that I may send weeks on this project before
			realizing part A. Here’s to being a young developer everybody. Progress is hard.
		</p>
	</section>
</WriteUp>

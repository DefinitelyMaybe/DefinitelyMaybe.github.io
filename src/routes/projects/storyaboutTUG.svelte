<script>
	import WriteUp from '$lib/WriteUp.svelte';
	import golemImg from '$lib/assets/images/TUG/TUGconceptArtmini.jpg';
	import tugImg from '$lib/assets/images/TUG/TUGupdate.jpg';
	import tug2Img from '$lib/assets/images/TUG/TUGupdatedart.jpg';
	import tug3Img from '$lib/assets/images/TUG/TUGmount.gif';
</script>

<svelte:head>
	<title>A Story about TUG</title>
</svelte:head>

<WriteUp>
	<h1 class="text-center">Introducing TUG</h1>
	<p>August 2016</p>
	<h3>Where to begin?</h3>
	<p>
		We'll approach T.U.G. by circling around at the distance, gaining perspective as we go and then
		dive on in.
	</p>
	<p>
		Right, but where to begin? Probably with Minecraft. For the uninitiated, Minecraft is a
		procedurally generated block game. Procedural means that aspects of the game are not strictly
		pre-defined. The classic example is terrain. When the player starts a game there is not a
		pre-made map designed from head to toe. Instead, an algorithm executes a series of instructions
		building up a random map layer by layer.
	</p>
	<p>
		The next unique thing about Minecraft is that there is no story, no narrator, no objective, no
		tutorial - nothing. Naturally this stumps a lot of people. Why would people play a game that has
		no point to it? I could try to give a reason to this but instead let's point out a fun fact on
		sales: Minecraft has sold a total of 24 million copies since it's release in 2009, 10 million
		more than it's closest runner up - World of Warcraft.
	</p>
	<p>
		Now, onto the most notable thing about Minecraft - the blocks. How did that become a thing?
		Simply put, this is because behind the scenes terrain is explicitly coupled with grid
		coordinates. Hugely easier to implement in code but does restrict terrain aesthetics. It should
		be noted that even with the restriction, Minecraft’s community has built tons on-top of and
		around the game to the point where one would call it a feature rather than anything else.
	</p>
	<h3>What's TUG like at the moment?</h3>
	<p>
		It’s a sandbox like minecraft. You can explore an infinite world, craft weapons, tools and
		armour, build castles, hunt down animals and more. I’m a huge fan of the subtleties that come
		with the voxels - super nice curves in terrain when digging out caves and of course the 3D
		modeled objects populating that terrain are a big plus.
	</p>
	<p>
		Game development is like a long roller coaster ride and Nerd Kingdom has had it’s fair share of
		ups and downs. In brief, TUG was at an early stage of development. Nerd Kingdom is preparing to
		release version 2 around the end of 2016. With it will be a lessening of the hardware
		restrictions due to OpenGL, the introduction of Javascript for scripting, node.js integration, a
		new art style and much more.
	</p>
	<img src={golemImg} alt="TUG concept art of a golem" />
	<h3>Where do I come into the story?</h3>
	<p>
		Well, I had somehow managed to bump into NK’s Kickstarter campaign back in 2013. It caught my
		eye for a number of reasons among which was their simple approach to “we want to be bigger and
		better than Minecraft”. In plain, start where Minecraft should have - with the community and
		grow with them.
	</p>
	<p>
		I was a star grazer for at least a year. See, DirectX11 was a hardware requirement of the first
		version. I built myself a computer when I finally had the opportunity (#PoorStudent). After a
		while of playing the game normally I decided to give modding a go. I had heard of modders before
		but it had always been a black-box. Luckily for me, there were other members within the
		community for me to engage with and learn from.
	</p>
	<p>
		My Mods that I’ve put the most work into would be Portal Stones and Dark Ages. Both mods had
		elements of 3D model manipulation, GIMP image editing, scripting and MATHS! Forgive me but I’m
		the kind of person who gets super excited the intersections between maths and computer science.
		Portal Stones was all about quaternions - how to rotate objects in 3D space and Dark Ages was
		all about simplex noise - how to procedurally generate terrain.
	</p>
	<p>
		There is more to come for the future of TUG, namely neural networks/AI however that story is one
		that we should not speculate on. As a small teaser, here’s a render of the art direction for TUG
		v2.
	</p>
	<img src={tugImg} alt="The feet of an TUG avatar surrounding by seedlings" />
	<p>
		If you're interest here is a link to one of the <a
			href="https://cdn.akamai.steamstatic.com/steam/apps/256657525/movie480.webm?t=1447378587"
			>original videos talking about TUG</a
		>
		and as well as a mod that I developed for the game called
		<a href="https://github.com/DefinitelyMaybe/DarkAges">DarkAges</a>.
	</p>
	<hr />
	<p>December 2021</p>
	<p>
		This is one of those somber times looking back on the game.
		TUG is no more. Apparantly there was a lot of tension between @ino and another director within
		the company. @ino stepped down, communication with the commuinity was cut and nobody's heard
		anything since. The communitty deserved better than this and the game itself was heading in the right direction.
	</p>
	<img class="py-2" src="{tug2Img}" alt="TUG updated artwork style">
	<img class="py-2" src="{tug3Img}" alt="TUG mount artwork">
</WriteUp>

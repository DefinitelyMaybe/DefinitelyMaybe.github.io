<script>
	import Slide from "$lib/Slide.svelte";
</script>

<svelte:head>
	<title>The Last Slides</title>
	<meta name="description" content="A deck of slides appears" />
	<meta name="author" content="Aaron Dekker" />
</svelte:head>

<div class="snap-x flex stretch">
	<Slide>
		<p>hello world</p>
	</Slide>
	<!-- <Slide>
		<p>Sir Ken Robinson <a href="https://www.youtube.com/watch?v=iG9CE55wbtY&t=1s">video</a> </p>
	</Slide>
	<Slide>
		<p>Ron Finely & Simon Sinek <a href="https://youtu.be/eQ0A-4DhBeA">video</a></p>
	</Slide> -->
</div>

<!-- <WriteUp>
	<div>
		<div class="slides">
			<section>
				<h1>The Last Slides</h1>
				<h3>A presentation of select educational material</h3>
				by Aaron Dekker<br />
				<br />
				<br />
				<small
					><small
						><a font-size="smaller" href="https://github.com/hakimel/reveal.js">making your own</a
						></small
					></small
				>
			</section>
			<section id="maincontents">
				<h2>Contents:</h2>
				<ul>
					<li><a href="#/enggen">Engineering (General)</a></li>
					<li><a href="#/compsci">Computer Science</a></li>
					<li><a href="#/phil">Philosophy</a></li>
				</ul>
			</section>
			<section id="enggen">
				<h2>Engineering (General)</h2>
				<ul>
					<li><a href="#/sustainstart">Sustainibility</a></li>
					<li><a href="#/manufacturingstart">Manufacturing</a></li>
					<li><a href="#/failuresstart">Failures</a></li>
					<li><a href="#/commsstart">Communication</a></li>
				</ul>
				<br />
				<br />
				<small><a href="#/maincontents">contents</a></small>
			</section>
			<section>
				<section id="sustainstart">
					<h2>Sustainibility</h2>
					<br /><br /><br />
					<a href="#/enggen">back</a>
				</section>
				<section>
					<h3>Engineering Design Process</h3>
					<ol>
						<li>Define the problem</li>
						<li>Research & Requirements</li>
						<li>Brainstorm & choosing</li>
						<li>Develop Prototype</li>
						<ul>
							<li>Test & iterate</li>
							<li>Solved</li>
							<li>Communicate</li>
						</ul>
					</ol>
				</section>
				<section>
					<p>There are four types of technologies</p>
					<ul>
						<li>Emerging</li>
						<li>Sustaining</li>
						<li>Converging</li>
						<li>Disruptive</li>
					</ul>
				</section>
				<section>
					<p>
						<b>Emerging technologies</b> are unquie underdeveloped prototypes from anybody.
					</p>
				</section>
				<section>
					<p>
						<b>Sustaining technology</b> are already established technologies which continue to be developed
						and used.
					</p>
				</section>
				<section>
					<p>
						<b>Converging technologies</b> are sustaining technologies which are similar enough and tend
						to merge.
					</p>
				</section>
				<section>
					<p>
						<b>Disruptive technologies</b> are emerging technologies that displace an existing norm.
					</p>
				</section>
				<section>
					<h3>The Engineering side of Sustainable Development</h3>
					<p>Analysis should be holistic and include environmental impact.</p>
					<p>Local stakeholders and cultures should be involved.</p>
					<p>All costs should be included in the price of the good/service.</p>
				</section>
				<section>
					<h3>Sustainable technologies are:</h3>
					<ul>
						<li>Technically feasible</li>
						<li>Ecologically sound</li>
						<li>Economically viable</li>
						<li>Socially responsible</li>
					</ul>
				</section>
				<section>
					<p>The 12 Green Engineering Principles</p>
				</section>
				<section>
					<h3>Principle 1</h3>
					<h6>non-hazardous</h6>
					<p>
						Strive to ensure that all material and energy inputs and outputs are as inherently
						non-hazardous as possible.
					</p>
				</section>
				<section>
					<h3>Principle 2</h3>
					<h6>prevent waste</h6>
					<p>It is better to prevent waste than to treat or clean up waste after it is formed.</p>
				</section>
				<section>
					<h3>Principle 3</h3>
					<h6>separate and purify</h6>
					<p>Separation and purification operations should be a component of the design framework.</p>
				</section>
				<section>
					<h3>Principle 4</h3>
					<h6>maximize efficiency</h6>
					<p>
						System components should be designed to maximize mass, energy and temporal efficiency.
					</p>
				</section>
				<section>
					<h3>Principle 5</h3>
					<h6>pull not push</h6>
					<p>
						System components should be output pulled rather than input pushed through the use of
						energy and materials.
					</p>
				</section>
				<section>
					<h3>Principle 6</h3>
					<h6>entropy & complexity</h6>
					<p>
						Embedded entropy and complexity must be viewed as an investment when making design choices
						on recycle, reuse or beneficial disposition.
					</p>
				</section>
				<section>
					<h3>Principle 7</h3>
					<h6>durable</h6>
					<p>Targeted durability, not immortality, should be a design goal.</p>
				</section>
				<section>
					<h3>Principle 8</h3>
					<h6>big things fall hard</h6>
					<p>
						Design for unnecessary capacity or capability should be considered a design flaw. This
						includes engineering “one size fits all” solutions.
					</p>
				</section>
				<section>
					<h3>Principle 9</h3>
					<h6>diversity is a double edged sword</h6>
					<p>
						Multi-component products should strive for material unification to promote disassembly and
						value retention. (minimize material diversity)
					</p>
				</section>
				<section>
					<h3>Principle 10</h3>
					<h6>intergate</h6>
					<p>
						Design of processes and systems must include integration and interconnectivity with
						available energy and materials flows.
					</p>
				</section>
				<section>
					<h3>Principle 11</h3>
					<h6>unseen costs</h6>
					<p>Performance metrics include designing for performance in commercial “after-life”.</p>
				</section>
				<section>
					<h3>Principle 12</h3>
					<h6>the problem of the commons</h6>
					<p>Design should be based on renewable and readily available inputs.</p>
				</section>
				<section>
					<h3>Cradle-to-Cradle</h3>
					<h6>Waste = food.</h6>
					<p>Is a biomimicry applied to the processes and products developed by humans.</p>
				</section>
			</section>
			<section>
				<h3>Principles of Design for Sustainibility (DfS)</h3>
				<ul>
					<li>Efficient design</li>
					<li>Safe Design</li>
					<li>Cyclic Design</li>
					<li>Communications Design</li>
				</ul>
			</section>
			<section>
				<section id="manufacturingstart">
					<h2>Manufacturing</h2>
					<br /><br /><br />
					<a href="#/enggen">back</a>
				</section>
				<section>
					<h3>Industry 4.0</h3>
					<p>
						The industrial revolution is still on-going. While hardware improvements are showing some
						signs of slowing down, software improvements continue...
					</p>
				</section>
				<section>
					<h3>Industry 4.0</h3>
					<p>
						In short, people can improve manufacturing by a ton when they can measure and process
						those measurements in real-time.
					</p>
				</section>
				<section>
					<h3>Digital Twins</h3>
					<p>
						Definition: A digital replica of a physical thing. Furthermore, connection between the
						digital and physical thing is important as well as generating real-time data using
						sensors.
					</p>
				</section>
				<section>
					<h3>Digital Shadows/Footprint</h3>
					<p>
						Is the set of collected digital data associated with a particular thing. In the case of a
						footprint, one usually is refering to a person.
					</p>
				</section>
				<section>
					<h3>Digital Shadows/Footprint</h3>
					<p>Example: A persons browsing history and cookies.</p>
				</section>
				<section>
					<h3>Cyber Physical System</h3>
					<p>
						Is a symbiotic relationship between a digital system and a physical one. For example,
						buses real-time tracking for the departure boards.
					</p>
				</section>
				<section>
					<h3>Additive and subtractive manufacturing</h3>
					<p>
						Manufacturing is a fancy way of saying putting stuff together. <br />
						Subtractive manufacturing is all about controlling the process of removing material.
						<br />
						Additive manufacturing by contrast is controlling the process of adding material.
					</p>
				</section>
				<section>
					<h3>Additive Manufacturing</h3>
					<p>
						There are common types of fillament (raw material): metals, ceramics and plastics. <br
						/><br />
						Reactions include: Thermal (melting/solidifying), chemical (glue/adhesive) and electromagnetic
						(projected light, lasers, electron beam).
					</p>
				</section>
				<section>
					<h3>Additive Manufacturing</h3>
					<p>Common methods:</p>
					<ul>
						<li>Fused Deposition modelling (FDM/FFF)</li>
						<li>Inkjet printing</li>
						<li>Powder bed printing</li>
						<li>Stereolithography (SLA/SL)</li>
						<li>Laminated Object</li>
						<li>Selective Laser Sintering (SLS/SLM)</li>
					</ul>
				</section>
				<section>
					<h3>Additive Manufacturing</h3>
					<p>Each additive method/combination can be charaterized by:</p>
					<ul>
						<li>structure - infill?</li>
						<li>properties - brittle?, speed?</li>
						<li>processing - extra steps before having the finished object</li>
						<li>performance - how well it performs in the desired task/role</li>
					</ul>
				</section>
			</section>
			<section>
				<section id="failuresstart">
					<h2>Failures</h2>
					<br /><br /><br />
					<a href="#/enggen">back</a>
				</section>
				<section>a specific failure?</section>
			</section>
			<section>
				<section id="commsstart">
					<h2>Communication</h2>
					<br /><br /><br />
					<a href="#/enggen">back</a>
				</section>
				<section>
					<h3>Electromagnetic spectrum</h3>
					<p>
						The fundamental spectrum of waves. Radio waves, sound waves, visible light, Ultra-Violet
						waves, Infrared waves etc...
					</p>
				</section>
				<section>
					<h3>5G Cellular Radio</h3>
					<p>
						The next generation of communications. <br /> Featuring...
					</p>
					<ul>
						<li>Enhanced Mobile Broadbad</li>
						<li>Ultra Reliable, Low Latency Communications</li>
						<li>Massive Machine Type Communications</li>
					</ul>
				</section>
				<section>
					<h3>Packet switching</h3>
					<p>
						old school was circuit switching which meant that an entre channel was blocked for one
						persons communication.
					</p>
					<p>
						Packet switching requires the hardware to send the packets to different ports depending on
						their ip address.
					</p>
				</section>
				<section>
					<h3>Open Systems Interconnection model (OSI)</h3>
					<ul>
						<li>Application layer</li>
						<li>Presentation layer</li>
						<li>Session layer</li>
						<li>Transport layer</li>
						<li>Network layer</li>
						<li>Data link layer</li>
						<li>Physical layer</li>
					</ul>
				</section>
				<section>
					<h3>Satellite Communication</h3>
					<p>
						Things like Low Earth Orbit (LEO) and Medium Earth Orbit (MEO). Satellites tend to be the
						best option for remote coms.
					</p>
				</section>
				<section>
					<h3>The Internet of Things</h3>
					<p>
						Is electronic devices connecting to the internet. Some devices can be interfaced with i.e.
						turning your homes lights on/off, others would be for data collection i.e. air pollution
					</p>
				</section>
			</section>
			<section id="compsci">
				<h2>Computer Science:</h2>
				<ul>
					<li><a href="#/masteralgorithm">Master Algorithm</a></li>
				</ul>
				<br />
				<br />
				<a href="#/maincontents">contents</a>
			</section>
			<section id="masteralgorithm">
				<p>
					Suppose you have a recurrence relation: <br />
					<b>T(n) = a*T(n/b)+ f(n^c)</b> <br />
				</p>
			</section>
			<section>
				<p><b>T(n) = a*T(n/b)+ f(n^c)</b></p>
				<p>
					Case 1: a &gt b^c<br />
					then T(n) = O(n^(log_b(a)))
				</p>
			</section>
			<section>
				<p><b>T(n) = a*T(n/b)+ f(n^c)</b></p>
				<p>
					Case 2: a = b^c<br />
					then T(n) = O(n^c * log(n))
				</p>
			</section>
			<section>
				<p><b>T(n) = a*T(n/b)+ f(n^c)</b></p>
				<p>
					Case 3: a &lt b^c<br />
					then T(n) = O(n^c)
				</p>
			</section>
			<section id="phil">
				<h2>Philosophy</h2>
				<p>
					If you've made it this far in one go, how about a healthy dose of <a
						href="http://existentialcomics.com/">humour.</a
					>
				</p>
				<br />
				<br />
				<a href="#/maincontents">contents</a>
			</section>
			<section>
				<p>There are 7 different symbols used in the course.</p>
				<ul>
					<li>not: ¬</li>
					<li>and: ∧</li>
					<li>or: ∨</li>
					<li>implies: →</li>
					<li>equivilent: ↔</li>
					<li>there exists: ∃</li>
					<li>for all: ∀</li>
				</ul>
			</section>
		</div>
	</div>
</WriteUp> -->
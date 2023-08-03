	export default function home(obj) {
	return `
		<!-- HERO -->
		<section class="position-relative overflow-hidden">
			<div class="wrapper flex content-center">
				<h1 class="trigger opacity-0 fade-in">${obj.data.home.hero_heading}</h1>
			</div>
			<img class="star" src="/assets/shooting_star.svg">
			<img class="hero_clouds" src="/assets/clouds.svg" alt="">
		</section>

		<!-- SERVICES -->
		<section class="position-relative" id="services">
			<!-- <img class="airship" src="/assets/airship.svg" alt=""> -->
			<svg class="airship" viewBox="0 0 421 178" fill="none" xmlns="http://www.w3.org/2000/svg">
				<ellipse cx="209.5" cy="85.5" rx="209.5" ry="72.5" fill="currentColor"/>
				<path d="M99 137H270V178H124L99 137Z" fill="currentColor"/>
				<path d="M421 0L384.721 60H290L421 0Z" fill="currentColor"/>
				<path d="M419 167L382.721 107L288 107L419 167Z" fill="currentColor"/>
			</svg>
			<!-- <img class="balloon" src="/assets/balloon.svg" alt=""> -->
			<svg class="balloon" viewBox="0 0 202 304" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M158.504 178.576C184.789 160.882 202 131.391 202 98C202 43.8761 156.781 0 101 0C45.2192 0 0 43.8761 0 98C0 130.419 16.2232 159.161 41.222 177H41C43.1363 179.532 45.3234 182.025 47.4997 184.506C59.076 197.701 70.3435 210.545 72 227H129C128.307 210.109 139.848 198.061 154.959 182.285C156.121 181.072 157.304 179.837 158.504 178.576Z" fill="currentColor"/>
				<rect x="76" y="258" width="50" height="46" fill="currentColor"/>
			</svg>

			<div class="wrapper">
				<p class="hook | trigger opacity-0 fade-in">${obj.data.home.hero_des}</p>
				<h2 class="group-title">Services</h2>
				<div class="stack | lg-flex-row">
					<div class="card | stack gap-1 width-100 | trigger opacity-0 fade-in">

						<div class="services | stack lg-flex-row gap-2 width-100">
							<div class="stack gap-1">
								<div class="flex items-center gap-1">
									<h3>Websites</h3>
									<img class="card-icon" src="/assets/fm_icon-website.svg" alt="website icon">
								</div>
								<div class="stack gap-1">
									<p>${obj.data.home.websites_des}</p>
									<ul class="list-inside">
										${obj.data.home.websites_list.map(element => {
											return `<li>${element}</li>`;
										}).join('')}
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="card | stack gap-1 width-100 | trigger opacity-0 fade-in">
						<div class="services | stack lg-flex-row gap-2 width-100">
							<div class="stack gap-1">
								<div class="flex items-center gap-1">
									<h3>Web Apps</h3>
									<img class="card-icon" src="/assets/fm_icon-web_app.svg" alt="website icon">
								</div>
								<p>${obj.data.home.apps_des}</p>
								<ul class="list-inside">
									${obj.data.home.apps_list.map(element => {
										return `<li>${element}</li>`;
									}).join('')}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- RECENT WORKS -->
		<section id="projects">
			<div class="wrapper">
				<h2 class="group-title">Case Study</h2>
				<div class="case-study-card card | flex flex-column | lg-flex-row gap-2 | trigger opacity-0 fade-in">
					<div class="stack gap-1">

						<div class="stack gap-1">
							<div>
								<h3>Artist Retreats</h3>
								<p>An eCommerce platform for artist workshops hosted in Sicily where art students browse and sign up for workshops using a custom storefront.</p>
							</div>
							<button class="case-study-button button-main">Explore</button>
						</div>
					</div>
				
					<img class="case-study-thumbnail width-100 | lg-width-70" src="/assets/case-thumb.png" alt="thumbnail of homepage for Artist Retreats">
				</div>

				<br/>
				<br>

				<div class="flex flex-column | trigger opacity-0 fade-in">
					<h2 class="group-title">Recent Projects</h2>
					<div class="auto-grid gap-1">
						<img class="work-thumbnail" src="/assets/work-1.jpg" alt="thumbnail of recent work">
						<img class="work-thumbnail" src="/assets/work-2.jpg" alt="thumbnail of recent work">
						<img class="work-thumbnail" src="/assets/work-3.jpg" alt="thumbnail of recent work">
						<img class="work-thumbnail" src="/assets/work-4.jpg" alt="thumbnail of recent work">
						<img class="work-thumbnail" src="/assets/work-6.png" alt="thumbnail of recent work" style="height: 100%">
						<img class="work-thumbnail" src="/assets/work-7.png" alt="thumbnail of recent work">
					</div>
				</div>
			</div>

			<div class="case-study | position-relative none">
				<nav class="nav nav-scrolled flex content-between items-center width-100 padding-sm position-sticky top-0 left-0 z-1000">
					<a href="/#"><img class="nav-logo" src="/assets/fm_logo-white.svg" alt="feathermode"></a>
					<div>
						<!-- <button class="case-study-close">&#8592;</button> -->
						<button class="case-study-close | button-main bg-dark color-light border-none cursor-pointer">&#10006;</button>
					</div>
					
				</nav>
				<div class="wrapper stack items-center padding-tb-lg">
					<div data-anchor="case"></div>
					<p class="case-study-heading">Artist Retreats</p>
					<p class="case-study-sub">Online Booking Platform for a Variety of Artist Workshops Hosted in Sicily, Italy</p>
					<p>Web Captain | OOF</p>
					<div class="case-study-content">
						<p>I met with the Artist Retreats team to establish the type of platform they wanted by focusing on the goals they had for their business. They wanted have an easy way for artists to sign up for their classes while providing all of the required information for the workshop. I worked with their Program Director to hone in the branding and design system.</p>
						<img class="case-thumbnail" src="/assets/ar-screen-icons.png" alt="thumbnail of recent work">

						<p>The main factor when it comes to this particular design is finding the right balance of web design and content design. Since this platform was to feature artwork and photography from workshop participants, the mantra was, "let the content speak loudest." Therefore, the web design is centered around providing a subtle touch of Sicily on each page while web visitors can focus on appreciating the art and photography on the website.</p>
						<img class="case-thumbnail" src="/assets/ar-screen-1.png" alt="thumbnail of recent work">

						<p>Each workshop page leads into a checkout process that is straightforward and requires the visitor to fulfill one task at a time. Checkouts that require the user to attend to many things at once before moving onto the next step oftentimes discourage the user from continuing. Providing a unique and custom checkout process while maintaining that principle was a primary goal as I designed and developed the site.</p>
						<img class="case-thumbnail" src="/assets/ar-screen-2.png" alt="thumbnail of recent work">

						<p>I had a blast working with the Artist Retreats team and I can't wait to see how their web platform continues to grow.</p>

						<p>- OOF</p>
					</div>
				</div>
			</div>
		</section>

		<!-- PROCESS -->
		<section id="process" class="position-relative">
			<img class="fbl-1 | animate swell anim-infinite anim-running anim-2500ms" src="/assets/fuzzy_blue_light.svg" alt="" style="width: 200px; height: 200px;">
			<img class="fbl-2 | animate swell anim-infinite anim-running anim-2500ms" src="/assets/fuzzy_blue_light.svg" alt="" style="width: 200px; height: 200px;">
			<img class="fbl-3 | animate swell anim-infinite anim-running anim-2500ms" src="/assets/fuzzy_blue_light.svg" alt="" style="width: 100px; height: 100px;">
			<img class="fbl-4 | animate swell anim-infinite anim-running anim-2500ms" src="/assets/fuzzy_blue_light.svg" alt="" style="width: 100px; height: 100px;">
			<img class="fbl-5 | animate swell anim-infinite anim-running anim-2500ms" src="/assets/fuzzy_blue_light.svg" alt="" style="width: 200px; height: 200px;">

			<div class="wrapper | none | lg-grid gap-2" style="grid-template-columns: 1fr 2fr;">
				<div class="position-relative">
					<div class="stack gap-2 position-sticky top-0 left-0" style="top: 100px">
						<div>
							<h2 data-process-title="process">Our Process</h2>
							<p style="font-size: 30px;" data-process-title="detail">1. Detail</p>
							<p style="font-size: 30px;" data-process-title="design">2. Design</p>
							<p style="font-size: 30px;" data-process-title="develop">3. Develop</p>
							<p style="font-size: 30px;" data-process-title="deploy">4. Deploy</p>
							<p style="font-size: 30px;" data-process-title="dedicate">5. Dedicate</p>
						</div>

						<p>Learn more about our 5D Web Creation Process <a href="https://wwwinged.feathermode.com/5d-web-creation-process" rel="noopener" target="_blank">here.</a></p>
					</div>
				</div>
				<div class="process-lists stack gap-1 | trigger opacity-0 fade-in">
					<div class="" style="height: 50vh;" data-process-element="process">
						<p class="process-element">${obj.data.home.process_des}</p>
					</div>

					<ul class="list-inside" style="height: 50vh" data-process-element="detail">
						${obj.data.home.detail_list.map(element => {
							return `<li class="process-element">${element}</li>`
						}).join('')}
					</ul>

					<ul class="list-inside" style="height: 50vh" data-process-element="design">
						${obj.data.home.design_list.map(element => {
							return `<li class="process-element">${element}</li>`
						}).join('')}
					</ul>

					<ul class="list-inside" style="height: 50vh" data-process-element="develop">
						${obj.data.home.develop_list.map(element => {
							return `<li class="process-element">${element}</li>`
						}).join('')}
					</ul>

					<ul class="list-inside" style="height: 50vh" data-process-element="deploy">
						${obj.data.home.deploy_list.map(element => {
							return `<li class="process-element">${element}</li>`
						}).join('')}
					</ul>

					<ul class="list-inside" style="height: 50vh" data-process-element="dedicate">
						${obj.data.home.dedicate_list.map(element => {
							return `<li class="process-element">${element}</li>`
						}).join('')}
					</ul>
				</div>
			</div>


			<div class="wrapper | stack gap-1 | lg-none">
				<div>
					<h2>Our Process</h2>
					<p>${obj.data.home.process_des}</p>
				</div>
				<div class="auto-grid gap-1 | trigger opacity-0 fade-in">
					<div class="stack gap-1 padding-md">
						<h3>1. Detail</h3>
						<ul class="list-inside">
							${obj.data.home.detail_list.map(element => {
								return `<li>${element}</li>`
							}).join('')}
						</ul>
					</div>
					<div class="stack gap-1 padding-md">
						<h3>2. Design</h3>
						<ul class="list-inside">
							${obj.data.home.design_list.map(element => {
								return `<li>${element}</li>`
							}).join('')}
						</ul>
					</div>
					<div class="stack gap-1 padding-md">
						<h3>3. Develop</h3>
						<ul class="list-inside">
							${obj.data.home.develop_list.map(element => {
								return `<li>${element}</li>`
							}).join('')}
						</ul>
					</div>
					<div class="stack gap-1 padding-md">
						<h3>4. Deploy</h3>
						<ul class="list-inside">
							${obj.data.home.deploy_list.map(element => {
								return `<li>${element}</li>`
							}).join('')}
						</ul>
					</div>
					<div class="stack gap-1 padding-md">
						<h3>5. Dedicate</h3>
						<ul class="list-inside">
							${obj.data.home.dedicate_list.map(element => {
								return `<li>${element}</li>`
							}).join('')}
						</ul>
					</div>
				</div>
				<p>Learn more about our 5D Web Creation Process <a href="https://wwwinged.feathermode.com/5d-web-creation-process" rel="noopener" target="_blank">here.</a></p>
			</div>
		</section>

		<!-- FORM LINK SECTION -->
		<section>
			<div class="wrapper">
				<div class="form_cta | card | stack lg-flex-row items-center content-between width-100 | trigger opacity-0 fade-in">
					<p>${obj.data.home.form_cta}</p>
					<a class="button-light" href="#sign-up">Sign Up For a Web Consultation</a>
				</div>
			</div>
		</section>

		<!-- FROM WWWINGED -->

		<!-- FAQ -->
		<section id="faqs">
			<div class="wrapper">
				<h2 class="group-title">FAQs</h2>
				<div class="card width-100 | trigger opacity-0 fade-in">

					${obj.data.home.faqs.map(faq => {
						return `
							<details>
								<summary>${faq.summary}</summary>
								${faq.details}
							</details>
						`;
					}).join('')}
				</div>
			</div>
		</section>

		<!-- FORM -->
		<section id="sign-up" class="bg-primary">
			<div class="wrapper">
				<h2 class="group-title"> Start Your Next Digital Story with a Free Web Consultation</h2>
				<div class="card width-100 | trigger opacity-0 fade-in">

					<form netlify class="flex flex-column gap-1" name="web-consultation" action="/thank-you">
						<div class="auto-grid">
							<label for="name">
								Name
								<input id="name" name="name" type="text" required>
							</label>
							<label for="company">
								Company (optional)
								<input id="company" name="company" type="text">
							</label>
							<label for="email">
								Email
								<input id="email" name="email" type="email" required>
							</label>
						</div>

						<label for="service">
							What type of Platform or Service are you interested in?	
							<select class="width-fit-content" name="service" id="service" required>
								<option value="websites">Website</option>
								<option value="web-app">Web App</option>
							</select>
						</label>
						<label for="on-the-web">
							Do you have a live website or app? If so, let us know it's domain address.
							<input name="on-the-web" type="text" required>
						</label>
						<label for="budget">
							What is your budget? This will help us provide you with the appropriate project scope.
							<select class="width-fit-content" name="budget" id="budget" required>
								<option value="1-to-5k">$1000 - $5000</option>
								<option value="5-to-10k">$5000 - $10,000</option>
								<option value="10-to-15k">$10,000 - $15,000</option>
								<option value="15k-to-30k">$15,000 - $30,000</option>
								<option value="30k-to-50k">$30,000 - $50,000</option>
								<option value="50k-to-80k">$50,000 - $80,000</option>
								<option value="80k+">$80,000 +</option>
							</select>
						</label>
						<label for="project-details">
							Tell us more about your future Web Platform.
							<textarea name="project-details" id="project-details" cols="30" rows="10"></textarea required>
						</label>
						<button class="button-main">Let it FLY!</button>
					</form>
				</div>
			</div>
		</section>
	`;
}
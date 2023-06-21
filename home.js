	export default function home(obj) {
	return `
		<!-- HERO -->
		<section class="position-relative overflow-hidden">
			<div class="wrapper flex content-center">
				<!-- <div class="card | flex flex-column items-center gap-1 height-fit-content width-fit-content text-center">
					<h1>${obj.data.home.hero_heading}</h1>
					<p>${obj.data.home.hero_des}</p>
					<a class="button-alt" href="#services">${obj.data.home.hero_cta}</a>
				</div> -->
				<h1>${obj.data.home.hero_heading}</h1>
			</div>
			<img class="star" src="/assets/shooting_star.svg">
			<img class="hero_clouds" src="/assets/clouds.svg" alt="">
		</section>

		<!-- SERVICES -->
		<section id="services">
			<div class="wrapper">
				<p class="hook">${obj.data.home.hero_des}</p>
				<div class="card | flex flex-column gap-1 width-100">
					<h2>Our Services</h2>
					<div class="services | flex gap-1 width-100">
						<div class="stack gap-1">
							<div class="flex items-center gap-1">
								<h3>Websites</h3>
								<img class="card-icon" src="/assets/fm_icon-website.svg" alt="website icon">
							</div>
							<div class="stack gap-1">
								<p>We handle every aspect of the web creation process and fit into your environment, whether that be a team environment, a solo creator environment or a dynamic duo of savy go-getters.</p>
								<ul class="list-inside">
									<li>branding</li>
									<li>content architecture</li>
									<li>digital business architecture</li>
									<li>design systems</li>
									<li>web design</li>
									<li>web development</li>
									<li>domain and site maintenance plans</li>
								</ul>
							</div>
								
						</div>
						<div class="stack gap-1">
							<div class="flex items-center gap-1">
								<h3>Web Apps</h3>
								<img class="card-icon" src="/assets/fm_icon-web_app.svg" alt="website icon">
							</div>
							<p>Web Apps are used predominantly by businesses who offer software as a service or who have a need to provide dynamic functionality that goes beyond your regular contact form. However, we’re pushing every web creator to start converting their websites into Installable Web Apps. These apps operate and function just like native apps that you’d download from the App Store or Play Store, however they can be downloaded right from your website and saved on the users device. Learn more about Installable Web Apps here.</p>
						</div>
						<div class="stack gap-1">
							<div class="flex items-center gap-1">
								<h3>Content Marketing</h3>
								<img class="card-icon" src="/assets/fm_icon-content.svg" alt="website icon">
							</div>
							<p>Content is King. The content you provide your users is what they will use to determine the validity and trustworthiness of your platform. We can help you find your voice, provide content that for the launch of your new site that you can expand upon and enhance as you grow and help you establish a content marketing process along with the tools you'll need to communicate with your audience.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- RECENT WORKS -->
		<section id="work">
			<div class="wrapper">
				<div class="card | flex flex-column | lg-flex-row gap-2">
					<div class="stack gap-1">
						<h2>Case Study</h2>
						<div class="stack gap-1">
							<div>
								<h3>Artist Retreats</h3>
								<p>An eCommerce platform for artist workshops hosted in Sicily where art students browse and sign up for workshops using a custom storefront.</p>
							</div>
							<button class="case-study-button button-primary">Explore</button>
						</div>
					</div>
				
					<img class="case-study-thumbnail width-70" src="/assets/ar_thumb.png" alt="thumbnail of homepage for Artist Retreats">
				</div>

				<br/>
				<br>

				<div class="flex flex-column">
					<h2>Recent Projects</h2>
					<div class="auto-grid gap-1" data-min-size="30">
						<div class="test-image"></div>
						<div class="test-image"></div>
						<div class="test-image"></div>
						<div class="test-image"></div>
						<div class="test-image"></div>
						<div class="test-image"></div>
					</div>
				</div>
			</div>

			<div class="case-study | position-relative none">
				<nav class="flex content-between items-center width-100 bg-light padding-md position-sticky top-0 left-0 z-1000">
					<p>feathermode</p>
					<button class="case-study-close | bg-light border-none cursor-pointer">&#10006;</button>
				</nav>
				<div class="wrapper stack items-center">
					<p class="case-study-heading">Artist Retreats</p>
					<p class="case-study-sub">Online Booking Platform for a Variety of Artist Workshops Hosted in Sicily, Italy.</p>
					<div class="case-study-content">
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias voluptas libero ratione pariatur, reprehenderit impedit accusamus molestiae possimus nemo amet animi placeat quibusdam mollitia. Pariatur similique quibusdam nulla tempore reiciendis!</p>
						<div class="test-image"></div>

						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias voluptas libero ratione pariatur, reprehenderit impedit accusamus molestiae possimus nemo amet animi placeat quibusdam mollitia. Pariatur similique quibusdam nulla tempore reiciendis!</p>
						<div class="test-image"></div>

						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias voluptas libero ratione pariatur, reprehenderit impedit accusamus molestiae possimus nemo amet animi placeat quibusdam mollitia. Pariatur similique quibusdam nulla tempore reiciendis!</p>
					</div>
				</div>
			</div>
		</section>

		<!-- PROCESS -->
		<section id="process">
			<div class="wrapper | stack gap-1">
				<div>
					<h2>Our Process</h2>
					<p>The 5D's of Web Creation is a process we created to provide unique and poignant websites and web apps to clients in a timely and professional manner.</p>
				</div>
				<div class="auto-grid gap-1" data-min-size="30">
					<div class="card">
						<h3>1. Detail</h3>
						<p>In the Detail phase, we establish a project brief by going through a in-depth 1-1 session to figure out what content we have to work with, what content will be needed to launch the site and what the scope of the project is. We'll use the information to create the most appropriate design and infrastructure for your platform</p>
					</div>
					<div class="card">
						<h3>2. Design</h3>
						<p>In the Design Phase, we'll create a home page that is a mix off of your style preferences and our decisions on the structural necessities for your website or app. Once we confirm the home page we can use the resulting design system to create subsequent pages. We'll review asynchronously throughout the phase and come together at key points.</p>
					</div>
					<div class="card">
						<h3>3. Develop</h3>
						<p>In the Develop Phase, we'll take the green lit designs and hand code the website in a way that is adaptable to any screen, accessible, featherweight and performant. You'll be able to test the website or web app for interactivity and responsiveness.</p>
					</div>
					<div class="card">
						<h3>4. Deploy</h3>
						<p>In the Deploy Phase, we'll hook your website or web app files up to our hosting platform and connect your domain name as well as any other external integrations your platform may need. Once everything is ready to fly, we'll make it live for the world to see.</p>
					</div>
					<div class="card">
						<h3>5. Dedicate</h3>
						<p>By hosting with us, you'll be provided with year-round site maintenance and security as well as privacy-friendly analytics. We only host and dedicate our services to websites and web apps that preserve user privacy and security. Your site is hosted on a platform with a global reach so you can communicate with your audience no matter where they live in the world.</p>
					</div>
				</div>
				<!-- <p>Learn more about our 5D Web Creation Process <a href="">here.</a></p> -->
			</div>
		</section>

		<!-- FORM LINK SECTION -->
		<section>
			<div class="wrapper">
				<div class="form_cta | card | flex items-center content-between width-100">
					<p>${obj.data.home.form_cta}</p>
					<a class="button-light" href="#sign-up">Sign Up For a Web Consultation</a>
				</div>
			</div>
		</section>

		<!-- FROM WWWINGED -->

		<!-- FAQ -->
		<section id="faq">
			<div class="wrapper">
				<div class="card width-100">
					<h2>FAQ</h2>
					<details>
						<summary>What web building platform do you use?</summary>
						All of our websites and web apps are custom built. The structure is handcrafted, the styling is bespoke and the databases, content management systems and external integrations are all hardwired according to the particular project.
					</details>
					<details>
						<summary>How much does it cost?</summary>
						Every website and web app is different. We handle small portfolio sites for content creators as well as eCommerce stores for startups and solopreneurs. Since, each web platform requires different structural, styling and data needs each project has unique pricing that is tailored to the project. You can find out the pricing for your future platform by <a class="text-underline" href="#sign-up">signing up for a free web consultation with us</a>.
					</details>
					<details>
						<summary>Why should my business or project take the form of a web app?</summary>
						An installable web app allows you and your audience to have a more intimate relationship. If you run an online store, your audience can download your app to their phone and you can send them notifications when new products are released or when you have updated the company blog. If you're a content creator you can let your audience know when you've published new content. That's just the stratosphere of what is possible with a progressive web app. The bigger you dream the higher you'll fly!
					</details>
					<details>
						<summary>How long will it take to put my web platform up on the World Wide Web?</summary>
						It depends. A straightforward blogging website with no web app functionality usually will take 2-4 weeks from the web consultation to deployment. If a project has layers of complexity it will require us to meet more frequently to review design and development decisions.
					</details>
				</div>
			</div>
		</section>

		<!-- FORM -->
		<section id="sign-up">
			<div class="wrapper">
				<div class="card width-100">
					<h2> Start Your Next Digital Story with a Free Web Consultation</h2>
					<form class="flex flex-column gap-1" action="">\
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
								<option value="content-marketing">Content Marketing</option>
							</select>
						</label>
						<label for="on-the-web">
							Do you have a live website or app? If so, let us know it's domain address.
							<input name="on-the-web" type="text" required>
						</label>
						<label for="project-details">
							Tell us more about your future Web Platform.
							<textarea name="project-details" id="project-details" cols="30" rows="10"></textarea required>
						</label>
						<button class="button-primary">Let it Fly!</button>
					</form>
				</div>
			</div>
		</section>
	`;
}
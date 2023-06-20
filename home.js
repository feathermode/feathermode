export default function home(obj) {
	return `
		<!-- HERO -->
		<section style="padding-top: 2rem;">
			<div class="wrapper">
				<div class="flex">
					<div class="card | flex flex-column gap-1 height-fit-content">
						<h1>${obj.data.home.hero_heading}</h1>
						<p>${obj.data.home.hero_des}</p>
						<a class="button-alt" href="#services">${obj.data.home.hero_cta}</a>
					</div>
					<iframe src="https://app.vectary.com/p/7NxUVmbcUImjLSapgk009v" frameborder="0" width="100%" height="480"></iframe>
				</div>
			</div>
		</section>

		<!-- SERVICES -->
		<section id="services">
			<div class="wrapper">
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
		<section id="">
			<div class="wrapper">
				<div class="card | flex flex-column | lg-flex-row gap-1">
					<div class="stack gap-1">
						<h2>Case Study</h2>
						<div>
							<h3>Artist Retreats</h3>
							<p>Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Eum, sunt.</p>
						</div>
					</div>
				
					<div class="test-image"></div>
				</div>

				<br/>
				<div class="flex flex-column">
					<h2>Recent Projects</h2>
					<div class="auto-grid">
						<div class="test-image"></div>
						<div class="test-image"></div>
						<div class="test-image"></div>
						<div class="test-image"></div>
						<div class="test-image"></div>
						<div class="test-image"></div>
					</div>
				</div>
			</div>
		</section>

		<!-- PROCESS -->
		<section id="process">
			<div class="wrapper">
				<div>
					<h2>Our Process</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aliquam sequi, obcaecati repudiandae. Velit incidunt ut perspiciatis iste neque voluptates veniam.</p>
				</div>
			</div>

			<div class="stream">
				<div class="card">
					<h3>Detail</h3>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, tempora?</p>
				</div>
				<div class="card">
					<h3>Design</h3>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, tempora?</p>
				</div>
				<div class="card">
					<h3>Develop</h3>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, tempora?</p>
				</div>
				<div class="card">
					<h3>Deploy</h3>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, tempora?</p>
				</div>
				<div class="card">
					<h3>Dedicate</h3>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, tempora?</p>
				</div>
			</div>

			<div class="wrapper">	
				<p>Learn more about our 5D Web Creation Process <a href="">here.</a></p>
			</div>
		</section>

		<!-- FORM LINK SECTION -->
		<section>
			<div class="wrapper">
				<div class="form_cta | card | flex items-center content-between width-100">
					<p>${obj.data.home.form_cta}</p>
					<button class="button-primary">Sign Up For a Web Consultation</button>
				</div>
			</div>
		</section>

		<!-- FROM WWWINGED -->

		<!-- FAQ -->
		<section id="faq">
			<div class="wrapper">
				<div class="card width-100">
					<h2>FAQ</h2>
				</div>
			</div>
		</section>

		<!-- FORM -->
		<section id="sign-up">
			<div class="wrapper">
				<div class="card width-100">
					<h2> Start Your Next Digital Story with a Free Web Consultation</h2>
					<form class="flex flex-column gap-1" action="">
						<label for="name">
							Name	
							<input id="name" name="name" type="text" required>
						</label>
						<label for="name">
							Company (optional)
							<input id="company" name="company" type="text">
						</label>
						<label for="email">
							Email	
							<input id="email" name="email" type="email" required>
						</label>
						<label for="name">
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
							Tell us more about your future Web Platform
							<textarea name="project-details" id="project-details" cols="30" rows="10"></textarea required>
						</label>
						<button class="button-primary">Let it Fly!</button>
					</form>
				</div>
			</div>
		</section>
	`;
}
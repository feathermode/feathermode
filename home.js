export default function home(obj) {
	return `
		<!-- HERO -->
		<section>
			<div class="wrapper">
				<div class="flex">
					<div class="card | flex flex-column gap-1">
						<h1>Web Platforms <br/>Made to Fly</h1>
						<p>We create custom websites and web applications, small and large, from the ground up to fit each unique story.</p>
						<a href="#services">Learn About Our Services</a>
					</div>
					<iframe src="https://app.vectary.com/p/7NxUVmbcUImjLSapgk009v" frameborder="0" width="100%" height="480"></iframe>
				</div>
			</div>
		</section>

		<!-- SERVICES -3  -->
		<section id="services">
			<div class="wrapper">
				<div class="card | flex flex-column width-100">
					<h2>Our Services</h2>
					<div class="flex gap-1 width-100">
						<div>
							<h3>Websites</h3>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eaque ratione id! Distinctio tenetur atque perspiciatis consequuntur cumque eos odio quam. Molestias quis non quas odio, beatae. Esse, corporis, quibusdam.</p>
						</div>
						<div>
							<h3>Web Apps</h3>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eaque ratione id! Distinctio tenetur atque perspiciatis consequuntur cumque eos odio quam. Molestias quis non quas odio, beatae. Esse, corporis, quibusdam.</p>
						</div>
						<div>
							<h3>Content Marketing</h3>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eaque ratione id! Distinctio tenetur atque perspiciatis consequuntur cumque eos odio quam. Molestias quis non quas odio, beatae. Esse, corporis, quibusdam.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- RECENT WORKS -->
		<section id="">
			<div class="wrapper">
				<div class="card | flex flex-column">
					<h2>Case Study</h2>
					<h3>Artist Retreats</h3>
					<p>Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Eum, sunt.</p>
				</div>

				<div class="card | flex flex-column">
					<h2>Case Study</h2>
					<h3>Artist Retreats</h3>
					<p>Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Eum, sunt.</p>
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
				<div class="card | flex items-center content-between width-100">
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eaque?</p>
					<button>Sign Up For a Web Consultation</button>
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
						<button class="width-fit-content">Let it Fly!</button>
					</form>
				</div>
			</div>
		</section>
	`;
}
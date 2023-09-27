export default function web_apps(obj) {
	return `
	<section>
		<div class="wrapper | stack gap-3">
			<div class="flex items-center gap-1">
				<h1>Web Apps</h1>
				<img class="card-icon" src="/assets/fm_icon-web_app.svg" alt="website icon">
			</div>

			<div id="web-apps" class="card | stack gap-1 width-100 | trigger opacity-0 fade-in">
				<div class="services | stack lg-flex-row gap-2 width-100">
					<div class="stack gap-3">
						
						<div class="stack gap-1">
							<p>${obj.data.home.apps_des}</p>
							<div class="auto-flex content-start gap-1">
								${obj.data.home.apps_list.map(element => {
									return `<div class="pill">${element}</div>`;
								}).join('')}
							</div>
						</div>
						<div class="stack gap-1">
							<p>I offer fine-tuned development and hosting for your site so you get the best of what your web app needs and appropraite plan pricing.</p>
							<div class="auto-flex content-start gap-1">
								${obj.data.home.development_hosting_list.map(element => {
									return `<div class="pill">${element}</div>`;
								}).join('')}
							</div>
						</div>
						<div class="stack gap-1">
							<h4 class="">FAQs</h4>
							<div class="width-100">

								${obj.data.home.faqs.map(faq => {
									return `
										<details>
											<summary class="font-bold">${faq.summary}</summary>
											${faq.details}
										</details>
									`;
								}).join('')}
							</div>
						</div>

						<!-- <h4 class="group-title">Case Study</h4> -->
						<!-- <div class="case-study-card card | flex flex-column | lg-flex-row gap-2 | trigger opacity-0 fade-in">
							<div class="stack gap-1">
								<div class="stack gap-1">
									<div>
										<h5>Artist Retreats</h5>
										<p>An eCommerce platform for artist workshops hosted in Sicily where art students browse and sign up for workshops using a custom storefront.</p>
									</div>
									<button class="case-study-button button-main">Explore</button>
								</div>
							</div>
						
							<img class="case-study-thumbnail width-100 | lg-width-70" src="/assets/case-thumb.png" alt="thumbnail of homepage for Artist Retreats">
						</div> -->
					</div>
				</div>
			</div>

			<div class="card width-100 | trigger opacity-0 fade-in">
				<form netlify class="flex flex-column gap-1" name="web-app-consultation" action="/thank-you">
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

					<label for="on-the-web">
						Do you have a live website or app? If so, let me know it's domain address.
						<input name="on-the-web" type="text" required>
					</label>
					<label for="budget">
						What is your budget? This will help me provide you with the appropriate project scope.
						<select class="width-fit-content" name="budget" id="budget" required>
							<option value="250-350">$250 - $350</option>
							<option value="305-500">$350 - $500</option>
							<option value="500-1k">$500-$1000</option>
						</select>
					</label>
					<label for="project-details">
						Tell me more about your future Web Platform.
						<textarea name="project-details" id="project-details" cols="30" rows="10"></textarea required>
					</label>
					<button class="button-main">Let it FLY!</button>
				</form>
			</div>	
		</div>
	</section>

	`;
}
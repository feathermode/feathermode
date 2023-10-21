export function config() {
	const meta = {
		"title" : "Digital Marketing | feathermode",
		"description" : "The written word, images, videos, audio all come together to provide a worldview for your visitors. Digital marketing centers around creating content pathways that gets your website visitors to act.",
		"scripts": []
	}

	return {
		type: 'page',
		layout: '_includes/layout.js',
		state: 'publish',
		path: '/digital-marketing',
		meta: meta
	}
}

export default function web_apps(data, collections) {
	return `
	<section>
		<div class="wrapper | stack gap-3">
			<div class="flex items-center gap-1">
				<h1>Digital Marketing</h1>
				<!-- <img class="card-icon" src="/assets/fm_icon-web_app.svg" alt="website icon"> -->
			</div>

			<div id="web-apps" class="card | stack gap-1 width-100 | trigger opacity-0 fade-in">
				<div class="services | stack lg-flex-row gap-2 width-100">
					<div class="stack gap-3">
						
						<div class="stack gap-1">
							<p>${data.home.marketing_des}</p>
							<div class="auto-flex content-start gap-1">
								${data.home.marketing_list.map(element => {
									return `<div class="pill">${element}</div>`;
								}).join('')}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="card width-100 | trigger opacity-0 fade-in">
				<form netlify class="flex flex-column gap-1" name="content-marketing-consultation" action="/thank-you">
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
export default function web_apps(obj) {
	return `
	<section>
		<div class="wrapper">
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
									<div class="width-100 | trigger opacity-0 fade-in">

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
			
		</div>
	</section>

	`;
}
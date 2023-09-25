export default function spacelift(obj) {
	return `
	<section>
		<div class="wrapper | stack gap-3">
			<div class="flex items-center gap-1">
				<h1>SpaceLift</h1>
				<img class="card-icon" src="/assets/fm_icon-website.svg" alt="website icon">
			</div>

			<div id="spacelift" class="card | stack gap-1 width-100 | trigger opacity-0 fade-in">
				<div class="services | stack lg-flex-row gap-2 width-100">
					<div class="stack gap-3">
						<div class="stack gap-1">
							<div class="stack gap-1">
								<p>Websites On...</p>
								<div class="auto-flex gap-1 content-start font-bold">
									<div class="pill" style="background: #dab800;">
										<p>Wix</p>
									</div>
									<div class="pill" style="background: gray;">
										<p>Squarespace</p>
									</div>
									<div class="pill" style="background: lightblue;">
										<p>Wordpress</p>
									</div>
									<div class="pill" style="background: springgreen;">
										<p>Shopify</p>
									</div>
									<div class="pill" style="background: rebeccapurple;">
										<p>Webflow</p>
									</div>
									<div class="pill" style="background: royalblue;">
										<p>Weebly</p>
									</div>
									<div class="pill" style="background: orange;">
										<p>GoDaddy</p>
									</div>
									<div class="pill" style="background: black;">
										<p>Ionos</p>
									</div>
									<div class="pill" style="background: darkgray;">
										<p>Square</p>
									</div>
								</div>
								
								<p>can show up unfinished, generic, buggy and confusing to users. Web builders are great for getting started quickly, but they still require you to fine-tune and modify your website so that it is appropriate and effective for your audience. Generic, templated and unfinished websites do not convert users into customers. To remedy this common occurence I offer <strong>Spacelift</strong>, a service that involves diving into your setup, finding areas of improvement and providing effective solutions like:</p>
							</div>

							<div class="auto-flex content-start gap-1">
								<div class="pill">
									<p>Redesign</p>
								</div>
								<div class="pill">
									<p>Plugin Assistance</p>
								</div>
								<div class="pill">
									<p>SEO</p>
								</div>
								<div class="pill">
									<p>Platform Upgrades</p>
								</div>
								<div class="pill">
									<p>User Experience</p>
								</div>
								<div class="pill">
									<p>Site Performance</p>
								</div>
							</div>

							<!-- <div class="stack | lg-flex-row position-relative gap-1">
								<div class="auto-flex lg-stack lg-items-start content-start gap-1">
									<button class="button-main">
										<p>Redesign</p>
									</button>
									<button class="button-main">
										<p>Plugin Assistance</p>
									</button>
									<button class="button-main">
										<p>SEO</p>
									</button>
									<button class="button-main">
										<p>Platform Upgrades</p>
									</button>
									<button class="button-main">
										<p>User Experience</p>
									</button>
									<button class="button-main">
										<p>Site Performance</p>
									</button>
								</div>
								<div class="width-100 lg-width-80" style="background: var(--color-light); aspect-ratio: 16 / 9; border-radius: var(--radius);">
								</div>
							</div> -->
						</div>

						<div class="stack gap-1">
							<p>Turn your boring, templated, glitchy, unfinished webpages into a complete, integrated, helpful and effective website worthy of your digital story!</p>
							<div class="flex flex-column | trigger opacity-0 fade-in">
								<div class="auto-grid gap-1">
									<img class="work-thumbnail" src="/assets/case-thumb.png" alt="thumbnail of recent work">
									<img class="work-thumbnail" src="/assets/work-1.jpg" alt="thumbnail of recent work">
									<img class="work-thumbnail" src="/assets/work-2.jpg" alt="thumbnail of recent work">
									<img class="work-thumbnail" src="/assets/work-3.jpg" alt="thumbnail of recent work">
									<img class="work-thumbnail" src="/assets/work-4.jpg" alt="thumbnail of recent work">
									<img class="work-thumbnail" src="/assets/work-6.png" alt="thumbnail of recent work" style="height: 100%">
									<img class="work-thumbnail" src="/assets/work-7.png" alt="thumbnail of recent work">
									<img class="work-thumbnail" src="/assets/c4-cards.jpg" alt="thumbnail of recent work">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="card width-100 | trigger opacity-0 fade-in">
				<form netlify class="flex flex-column gap-1" name="spacelift-consultation" action="/thank-you">
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
						Let me know what your website's current domain address is.
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
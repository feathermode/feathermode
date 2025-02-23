export function config() {
	const meta = {
		"title" : "Thank You! | feathermode",
		"description" : "Thank you for contacting feathermode!",
		"scripts": []
	}

	return {
		type: 'page',
		layout: '_includes/layout.js',
		state: 'publish',
		path: '/thank-you',
		meta: meta
	}
}

export default function thank_you() {
	return `
		<!-- HERO -->
		<section class="position-relative overflow-hidden">
			<div class="wrapper stack flex-center">
				<h1 class="trigger opacity-0 fade-in">Thank you!</h1>
				<div>
				<p style="max-width: 60ch;">I appreciate you reaching out to learn more about how feathermode and my 5D Web Creation Process can help your web platform fly! You'll receive an email from oof@feathermode.com with details on scheduling your web consultation with me.</p>
				<br>
				<p>- OOF</p>
				</div>
			</div>
			<img class="hero_clouds" src="/assets/clouds.svg" alt="">
		</section>

	`;
}
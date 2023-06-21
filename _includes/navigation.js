export default function navigation() {
	return `
		<nav class="nav flex items-center content-between padding-md">
			<a href="#"><img class="nav-logo" src="/assets/fm_logo-white.svg" alt="feathermode"></a>
			<ul class="flex gap-1 list-none">
				<li><a href="#services">Services</a></li>
				<li><a href="#work">Work</a></li>
				<li><a href="#process">Process</a></li>
				<li><a href="#faq">FAQ</a></li>
				<li><a href="">Blog</a></li>
			</ul>
			<a class="button-main" href="#sign-up">Free Web Consultation</a>
		</nav>
	`;
}
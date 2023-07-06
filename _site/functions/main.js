import {trigger} from "./animations.js";

// Modal Function
const case_study = document.querySelector('.case-study');

document.addEventListener('click', e => {
	if (e.target.matches('.case-study-close')) {
		case_study.classList.add('none');
		case_study.classList.remove('stack');
	}

	if (e.target.matches('.case-study-button')) {
		case_study.classList.add('stack');
		case_study.classList.remove('none');
	}
});


// Animations

trigger({
	keyword: '.trigger',
	options: {
		threshold: 0,
		rootMargin: "0px 0px -200px 0px"
	}
});


// Navigation
const anchors = document.querySelectorAll('[data-anchor]');
const nav = document.querySelector('.nav');

const anchor_options = {
	rootMargin: "100px 0px 0px 0px"
}

const nav_animator = new IntersectionObserver(function(entries, animator) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			console.log("connected")
			nav.classList.add('nav-scrolled');
			return;
		} else {
			console.log('not')
			nav.classList.remove('nav-scrolled');
		}
	});
}, anchor_options);

anchors.forEach(anchor => {
	nav_animator.observe(anchor);
});
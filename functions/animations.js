// Envelope Animations from https://envelopeui.com

/* AIRTRIGGER: Triggers CSS Animations */
/* data attributes
	data-rate: from 0.1 to 0.5
	data-direction: vertical, horizontal
*/
export function trigger({keyword, options} = {}) {
	const triggers = document.querySelectorAll(keyword);

	const animator = new IntersectionObserver(function(entries, animator) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.remove('hidden');
				entry.target.classList.remove('invisible');
				entry.target.classList.add('animate');
				entry.target.classList.add('anim-running');
				animator.unobserve(entry.target);
			}
		});
	}, options);

	triggers.forEach(trigger => {
		animator.observe(trigger);
	});
}


/* AIRGLIDE: Movement and Parallax Function */
/* data attributes
	data-rate: from 0.1 to 0.5
	data-direction: vertical, horizontal
*/

export function glide(area, element, userOptions) {
	// Establish AREAS
	const areas = document.querySelectorAll(area);

	// Establish PARAMETERS
	let prevLocation = 0;
	let prevRatio = 0.0;
	let prevCount = 1;

	// Initiate GLIDER
	let glider;

	// Establish OPTIONS
	function establishOptions() {
	  let thresholds = [];
	  let numSteps = 100;

	  for (let i=1.0; i<=numSteps; i++) {
	    let ratio = i/numSteps;
	    thresholds.push(ratio);
	  }

	  thresholds.push(0);

	  const defaultOptions = {
	  	threshold: thresholds,
	  	rootMargin: "0px"
	  }

	  return { ...defaultOptions, ...userOptions}
	}
	const options = establishOptions();

	// New GLIDER
	glider = new IntersectionObserver(function(entries, glider) {
		entries.forEach(entry => {
			function translate() {
				const section_targets = entry.target.querySelectorAll(element);
				section_targets.forEach(target => {
					if (target.dataset.direction === 'vertical') {
						const position = target.dataset.rate
						console.log(prevCount)
						target.style.transform = `translate3d(0px, -${prevCount}px, 0px)`;
					} else if (target.dataset.direction === 'horizontal') {
						const position = window.pageYOffset * target.dataset.rate;
						target.style.transform = `translate3d(${position}px, 0px, 0px)`;
					} else {
						const positionX = window.pageYOffset * target.dataset.ratex;
						const positionY = window.pageYOffset * target.dataset.ratey;
						target.style.transform = `translate3d(${positionX}px, ${positionY}px, 0px)`;
					}
				});
			}

			if (!entry.isIntersecting) {
				console.log("not Intersecting")
				return;
			} else {
				console.log("is Intersecting");
				const newLocation = window.pageYOffset;

				if (newLocation > prevLocation) {
					console.log("GOING DOWN")
					prevCount = prevCount + 1;
					prevLocation = newLocation;
				} else {
					console.log("GOING UP")
					prevCount = prevCount - 1;
					prevLocation = newLocation;
				}

				translate();

				if (entry.intersectionRatio === 1) {
					console.log(entry)
				}

				prevRatio = entry.intersectionRatio;
			}
		});
	}, options);

	// Observe AREAS
	areas.forEach(area => glider.observe(area));
}

/* AIRPAGE: Page Transitions */
/* data attributes
	data-rate: from 0.1 to 0.5
	data-direction: vertical, horizontal
*/

export function page(animation) {
	const links = document.querySelectorAll('a');
	if (links) {
		links.forEach(link => {
			link.onclick = (e) => {
				const body = document.querySelecto('body');
				e.preventDefault(); // prevents link transition to href
				setTimeout(function(){
					if (body.classlist.contains(animation)) {
						console.log('navigating...');
						if (!e.srcElement.parentElement.href) {
							window.location = e.srcElement.href;
						} else {
							window.location = e.srcElement.parentElement.href;
						}
					} else {
						console.log('whoops', e.srcElement)
					}
				}, 500);
				body.classList.add(animation);
			}
		})
	}
}
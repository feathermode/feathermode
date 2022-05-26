/* */
export function replace(element, replacement) {
	let range = document.createRange();
	let target = document.querySelector(element);
	// let parentNode = document.querySelector(location);
	const newElement = range.createContextualFragment(replacement);

	target.replaceWith(newElement);
}
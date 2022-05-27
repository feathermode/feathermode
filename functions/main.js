import * as Hydrogen from './hydrogen/hydrogen.js';

function getContainerImage(location, description) {
	return `
	<p class="text-left">${description}</p>
	<img src="${location}" alt="process image" class="process_image"/>`
}

document.addEventListener('click', function(e) {
	if (e.target.matches('.process_button')) {
		const buttons = document.querySelectorAll('.process_button');
		buttons.forEach(button => {
			button.dataset.buttonState = "passive";
		});

		e.target.dataset.buttonState = "active";

		const location = e.target.dataset.img;
		const description = e.target.dataset.description;
		const template = getContainerImage(location, description);
		Hydrogen.render(template, '.process_container', 'clean');
	}

	if (e.target.matches('.nav-menu_toggle')) {
		const menu = document.querySelector('.nav-menu_list');
		console.log('clicked')
		menu.classList.toggle('flex');
		menu.classList.toggle('none');
	}
});
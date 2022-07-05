const squareGroups = document.querySelectorAll(".form_squares");

squareGroups.forEach(group => {
	const squares = group.querySelectorAll(".form_square");
	const selects = group.querySelectorAll(".form_square-select");

	squares.forEach(square => {
		square.addEventListener('click', function(e) {
			squares.forEach(square => {
				if (square.classList.contains("form_square-active")) {
					square.classList.remove("form_square-active");
				}
			});

			square.classList.toggle('form_square-active');

			if (square.classList.contains('form_square-active')) {
				const selection = e.target.dataset.selection;
				const select = group.querySelector("select");
				const options = [...select.options];
				select.value = selection;
			}

			const select = group.querySelector("select");
			console.log(select.value)

		});
	});

	selects.forEach(selector => {
		selector.addEventListener('click', function(e) {

			selector.classList.toggle('form_square-active');

			if (selector.classList.contains('form_square-active')) {
				const selection = e.target.dataset.selection;
				const checkboxes = document.querySelectorAll('.color_keywords-checkboxes input');
				checkboxes.forEach(checkbox => {
					if (selection === checkbox.value) {
						checkbox.checked = true;
						console.log(checkbox)
					}
				})
			} else {
				const selection = e.target.dataset.selection;
				const checkboxes = document.querySelectorAll('.color_keywords-checkboxes input');
				checkboxes.forEach(checkbox => {
					if (selection === checkbox.value) {
						checkbox.checked = false;
						console.log(checkbox)
					}
				})
			}
			const checkedBoxes = document.querySelectorAll('input:checked');
			console.log(checkedBoxes)
		});
	})
});

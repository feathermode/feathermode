import * as Hydrogen from './hydrogen/hydrogen.js';

const squareGroups = document.querySelectorAll(".form_squares");
let totalStyle = [];

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

				const squareStyle = e.target.dataset.style;
				totalStyle.push(squareStyle);
			}

			const select = group.querySelector("select");
			console.log(select.value)
			console.log(totalStyle)

			const demoArea = document.querySelector(".demo");
			const demoAreaStyleTag = demoArea.querySelector("style");
			if(typeof(demoAreaStyleTag) != 'undefined' && demoAreaStyleTag != null){
				demoAreaStyleTag.remove();
			} else{
				console.log('Element does not exist!');
			}

			const styleTag = document.createElement("style");
			styleTag.type = "text/css";
			demoArea.appendChild(styleTag);
			const textFromTotalStyle = totalStyle.join('');
			var styleText = document.createTextNode(`${textFromTotalStyle}`);
			styleTag.appendChild(styleText);
		});
	});
});

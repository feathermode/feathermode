const squareGroups = document.querySelectorAll(".form_squares");
let totalStyle = [];

squareGroups.forEach(group => {
	const squares = group.querySelectorAll(".form_square");
	const selects = group.querySelectorAll(".form_square-select");

	squares.forEach(square => {
		square.addEventListener('click', function(e) {
			totalStyle = [];

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

			const activeSquares = document.querySelectorAll(".form_square-active");
			activeSquares.forEach(active => {
				const squareStyle = active.dataset.style;
				totalStyle.push(squareStyle);
			});

			console.log(totalStyle);

			// APPLY COMBINED TEXT TO DEMO AREA WITH STYLE TAG
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

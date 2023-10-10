import head from './head.js';
import navigation from './navigation.js';
import footer from './footer.js';

export default function layout(data, collection, obj) {
	return `
		<!DOCTYPE html>
		<html lang="en">
		${head(obj)}
		<body>
			<div data-anchor="top"></div>
			${navigation()}

			<div class="wrapper articles padding-tb-lg">
				${obj.data
					.map(data_obj => {
						return `<div class="article-card">
						<p>${data_obj.title}</p>
						<p>${data_obj.summary}</p>
						</div>`
					})
					.join('')
				}
			</div>

			${footer()}
		</body>
		</html>
	`;
}
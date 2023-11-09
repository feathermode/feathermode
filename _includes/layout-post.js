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

			<section>
			<div class="wrapper blog-post padding-tb-lg">
				<h1>${obj.title}</h1>
				<h2>${obj.subtitle}</h2>
				<img src="${obj.thumbnail.image}" alt="${obj.thumbnail.alt}" title="${obj.thumbnail.alt}">
				${obj.contents}
			</div>
			</section>

			${footer()}
		</body>
		</html>
	`;
}
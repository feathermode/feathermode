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
				${obj.contents}
			</div>
			</section>

			${footer()}
		</body>
		</html>
	`;
}
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

			<div class="wrapper blog-post padding-tb-lg">
				${obj.contents}
			</div>

			${footer()}
		</body>
		</html>
	`;
}
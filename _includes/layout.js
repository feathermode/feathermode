import head from './head.js';
import navigation from './navigation.js';
import footer from './footer.js';

export default function layout(obj, global_data) {
	return `
		<!DOCTYPE html>
		<html lang="en">
		${head(obj)}
		<body>
			<div data-anchor="top"></div>
			${navigation()}
			${obj.inputs}
			${footer()}
		</body>
		</html>
	`;
}
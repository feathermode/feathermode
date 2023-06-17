import head from './head.js';
import navigation from './navigation.js';

export default function layout(obj, global_data) {
	return `
		<!DOCTYPE html>
		<html lang="en">
		${head()}
		<body>
			${navigation()}
			${obj.inputs}
		</body>
		</html>
	`;
}
import head from './head.js';

export default function layout(obj, global_data) {
	return `
		<!DOCTYPE html>
		<html lang="en">
		${head()}
		<body>
			${obj.inputs}
		</body>
		</html>
	`;
}
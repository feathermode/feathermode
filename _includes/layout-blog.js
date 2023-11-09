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
			<div class="wrapper articles padding-tb-lg">
				<h1>Articles</h1>
				${obj.data
					.map(data_obj => {
						return `<a href="${data_obj.path}"><div class="article-card">
						<img src="${data_obj.thumbnail.image}" alt="${data_obj.thumbnail.alt}" title="${data_obj.thumbnail.alt}">
						<h2 class="article-card-title">${data_obj.title}</h2s>
						<p class="article-card-summary">${data_obj.summary}</p>
						</div></a>`
					})
					.join('')
				}
			</div>
			</section>

			${footer()}
		</body>
		</html>
	`;
}
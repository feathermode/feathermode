export default function settings() {
	const articles = {
		name: "articles",
		action: "paginate",
		state: "publish",
		size: 6,
		startAt: 1,
		sort: {
			by: "date",
			order: "newest",
			format: "mmddyyyy"
		},
		path: "/articles",
		slug: "title",
		layout: "_includes/layout-blog.js",
		meta: {
			title: "Articles | feathermode",
			description: "Articles from feathermode on web design, development, marketing, content creation and best practices for businesses and content creators."
		}
	}

	return {
		pass: [
			"styles",
			"functions",
			"assets",
			"fonts",
			"_redirects"
		],
		collect: [
			articles
		]
	}
}
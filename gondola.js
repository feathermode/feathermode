export default function settings() {
	const articles = {
		name: "wwwinged",
		action: "paginate",
		state: "publish",
		size: 6,
		startAt: 1,
		sort: {
			by: "date",
			order: "newest",
			format: "mmddyyyy"
		},
		path: "/wwwinged",
		slug: "title",
		layout: "_includes/layout-blog.js",
		meta: {
			title: "WWWinged | feathermode",
			description: "WWWinged is feathermode's publication for resources on web design, development, marketing, content creation and best practices for businesses and content creators."
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
		],
		use: [
			{
				name: "syndication",
				feed: 'wwwinged',
				title: 'feathermode Articles',
				description: 'Articles from feathermode on web design, development, marketing, content creation and best practices for businesses and content creators.',
				link: 'https://feathermode.com/articles'
			}
		]
	}
}
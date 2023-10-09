export default function head(obj) {
	return `
		<head>
			<!-- GENERAL -->
			<title>${obj.meta ? obj.meta.title : ''}</title>
			<meta name="description" content="${obj.meta ? obj.meta.description : ''}" />
			<meta name="author" content="feathermode">
			
			<!-- META -->
			<meta charset="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<meta name="generator" content="Gondola" />
			<link rel="canonical" href="https://feathermode.com" />
			<meta property="og:title" content="Your Digital Story, Made to Fly"/>
			<meta property="og:type" content="website"/>
			<meta property="og:url" content="https://feathermode.com"/>
			<meta property="og:site_name" content="feathermode"/>
			<meta property="og:image" content="/assets/fm_icon-shadow-color.jpg"/>
			<meta property="og:description" content="feathermode is a service that offers bespoke website and web app creation for individuals and businesses looking to tell their story on the web."/>
			
			<!-- ICONS -->
			<link rel="icon" href="/assets/fm_icon-bird.svg" />
			
			<!-- CSS STYLESHEETS -->
			<link rel="stylesheet" href="/styles/main.css"/>
			
			<!-- ANALYTICS -->
			<script src="https://cdn.usefathom.com/script.js" data-site="MJCILIZC" defer></script>
			<script src="/functions/main.js" type="module" defer></script>
		</head>
	`;
}
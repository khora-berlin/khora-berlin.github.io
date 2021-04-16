module.exports = {
	siteMetadata: {
		title: `Khora`,
		subTitle: `Your favourite food delivery collective`,
		description: `Khora | Your favourite food delivery collective | Order food online`,
		author: `@denningk`,
		orderLink: `https://khora.berlin/de/`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Khora - Your favourite food delivery collective`,
				short_name: `Khora`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/heart.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-instagram`,
			options: {
				username: `18189163897`,
			},
		},
		`gatsby-plugin-typescript`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
	pathPrefix: '/khora-berlin',
};

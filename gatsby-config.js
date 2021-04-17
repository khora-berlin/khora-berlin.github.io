module.exports = {
	siteMetadata: {
		title: `Khora`,
		subTitle: `Your favourite food delivery collective`,
		description: `Khora | Your favourite food delivery collective | Order food online`,
		author: `@denningk`,
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
			resolve: `gatsby-source-instagram-all`,
			options: {
				access_token:
					'IGQVJXQ1NEUlZADZA1R1RlJuYVVrRU1WY0tmelkyb3gyZAEVCRU5hVmdRaUI2Tm1hMkZAyS1NwWFZAnZAjJod2ZAKdXB0RFRyWEVBZATAzQWRhaWd3dWdtTjBNNUp0MVpFX21uQV9WbG16WC1oTU9NVDFQbmJiWgZDZD',
			},
		},
		`gatsby-plugin-typescript`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
	pathPrefix: '/khora-berlin',
};

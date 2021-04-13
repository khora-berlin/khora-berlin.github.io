/**
 * Gallery component that queries data from the Khora Insta Account
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Gallery = (props: GalleryProps) => (
	<StaticQuery
		query={graphql`
		query {
			allInstaNode {
			  edges {
				node {
				  id
				  likes
				  comments
				  mediaType
				  preview
				  original
				  timestamp
				  caption
				  hashtags
				  localFile {
					childImageSharp {
					  fixed(width: 150, height: 150) {
						...GatsbyImageSharpFixed
					  }
					}
				  },
				  permalink,
				  carouselImages {
					preview,
					localFile {
					childImageSharp {
					  fixed(width: 150, height: 150) {
						...GatsbyImageSharpFixed
					  }
					}
				  },
				  # Only available with the public api scraper
				  thumbnails {
					src
					config_width
					config_height
				  }
				  dimensions {
					height
					width
				  }
				}
			  }
			}
		  }
		`}
		render={data => <></>}
	/>
);

interface GalleryProps {
	children: any;
}

export default Gallery;

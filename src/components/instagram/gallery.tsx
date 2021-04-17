/**
 * Gallery component that queries data from the Khora Insta Account
 */

import * as React from 'react';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';

const Gallery = (props: GalleryProps) => (
	<StaticQuery
		query={graphql`
			query myQuery {
				allInstagramContent {
					edges {
						node {
							caption
							media_url
							localImage {
								childImageSharp {
									fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
					}
				}
			}
		`}
		render={data => {
			console.log('data: ', data);
			return <>Gallery</>;
		}}
	/>
);
interface GalleryProps {}

export default Gallery;

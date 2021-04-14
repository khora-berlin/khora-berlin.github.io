/**
 * Gallery component that queries data from the Khora Insta Account
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Gallery = (props: GalleryProps) => (
	<StaticQuery
		query={graphql`
			query {
				allInstaNode(limit: 10) {
					nodes {
						id
						username
						caption
						localFile {
							childImageSharp {
								fluid(maxWidth: 120, maxHeight: 120) {
									...GatsbyImageSharpFluid_withWebp
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

/**
 * Gallery component that queries data from the Khora Insta Account
 */

import * as React from 'react';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';

const Gallery = (props: GalleryProps) => (
	<StaticQuery
		query={graphql`
			query InstaPosts {
				allInstaNode(limit: 6, sort: { fields: timestamp, order: DESC }) {
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
							localFile {
								childImageSharp {
									fixed(width: 280, height: 280) {
										...GatsbyImageSharpFixed
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

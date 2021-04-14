/**
 * Gallery component that queries data from the Khora Insta Account
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Gallery = (props: GalleryProps) => (
	<StaticQuery
		query={graphql`
			query TestQuery {
				site {
					siteMetadata {
						title
						subTitle
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

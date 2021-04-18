/**
 * Gallery component that queries data from the Khora Insta Account
 */

import * as React from 'react';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const InstaGrid = styled.div`
	margin: 2em 3em;
	grid-gap: 0.6em;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
`;

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
			const {
				allInstagramContent: { edges: instaPosts },
			} = data;
			console.log('data: ', instaPosts[0]);
			return (
				<InstaGrid>
					{instaPosts.slice(0, 15).map((post: any) => (
						<Img fluid={post.node.localImage.childImageSharp?.fluid} />
					))}
				</InstaGrid>
			);
		}}
	/>
);
interface GalleryProps {}

export default Gallery;

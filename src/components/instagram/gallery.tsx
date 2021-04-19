/**
 * Gallery component that queries data from the Khora Insta Account
 */

import * as React from 'react';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const InstaGrid = styled.div`
	@media only screen and (max-width: 500px) {
		width: calc(100% - 1.2em);
	}
	@media only screen and (min-width: 500px) {
		width: 95%;
	}
	@media only screen and (min-width: 600px) {
		width: 90%;
	}
	@media only screen and (min-width: 1200px) {
		width: 80%;
	}
	margin: 0em;
	grid-gap: 0.6em;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

const GalleryContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	z-index: 2;
	padding: 2em 0;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background: #ffffff;
		transform: skew(0, -3deg);
		height: 100%;
	}
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
			return (
				<GalleryContainer>
					<InstaGrid>
						{instaPosts.slice(0, 15).map((post: any) => (
							<Img fluid={post.node.localImage.childImageSharp?.fluid} />
						))}
					</InstaGrid>
				</GalleryContainer>
			);
		}}
	/>
);
interface GalleryProps {}

export default Gallery;

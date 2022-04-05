/**
 * Gallery component that queries data from the Khora Insta Account
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import Tooltip from '../tooltip/tooltip';
import { MediaContainer } from '../layout/global';

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
		width: 40%;
	}
	margin: 0em;
	grid-gap: 0.6em;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

const Bottom = styled.div`
	color: red;
	padding-top: 1em;
`;

const Gallery = () => (
	<StaticQuery
		query={graphql`
			query myQuery {
				fileName: file(relativePath: { eq: "insta.png" }) {
					childImageSharp {
						gatsbyImageData(width: 80, height: 80)
					}
				}
				allInstagramContent(filter: { media_type: { eq: "IMAGE" } }) {
					edges {
						node {
							caption
							media_url
							media_type
							id
							localImage {
								childImageSharp {
									gatsbyImageData(width: 150, height: 150, placeholder: BLURRED, quality: 85)
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
				<MediaContainer>
					<InstaGrid>
						{instaPosts.slice(0, 12).map((post: any) => (
							<Tooltip key={post.node.id} html={post.node.caption}>
								<GatsbyImage
									image={post.node.localImage.childImageSharp?.gatsbyImageData}
									alt="Instagram"
								/>
							</Tooltip>
						))}
					</InstaGrid>
					<Bottom>
						<a href={'https://www.instagram.com/khora.berlin'} target="__blank">
							more on <br />{' '}
							<GatsbyImage image={data.fileName.childImageSharp.gatsbyImageData} alt="Instagram" />
						</a>
					</Bottom>
				</MediaContainer>
			);
		}}
	/>
);

export default Gallery;

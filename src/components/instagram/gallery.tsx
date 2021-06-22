/**
 * Gallery component that queries data from the Khora Insta Account
 */

import * as React from 'react';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Tooltip from '../tooltip/tooltip';
import { mixinMediaQuery, MediaContainer } from '../layout/global';

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

const Gallery = (props: GalleryProps) => (
	<StaticQuery
		query={graphql`
			query myQuery {
				fileName: file(relativePath: { eq: "insta.png" }) {
					childImageSharp {
						fluid(maxWidth: 80, maxHeight: 80) {
							...GatsbyImageSharpFluid
						}
					}
				}
				allInstagramContent(filter: { media_type: { eq: "IMAGE" } }) {
					edges {
						node {
							caption
							media_url
							media_type
							localImage {
								childImageSharp {
									fluid(maxHeight: 150, maxWidth: 150, quality: 85) {
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
				<MediaContainer>
					<InstaGrid>
						{instaPosts.slice(0, 12).map((post: any) => (
							<Tooltip html={post.node.caption}>
								<Img fluid={post.node.localImage.childImageSharp?.fluid} />
							</Tooltip>
						))}
					</InstaGrid>
					<Bottom>
						<a href={'https://www.instagram.com/khora.berlin'} target="__blank">
							more on <br /> <Img fluid={data.fileName.childImageSharp.fluid} alt="Instagram" />
						</a>
					</Bottom>
				</MediaContainer>
			);
		}}
	/>
);
interface GalleryProps {}

export default Gallery;

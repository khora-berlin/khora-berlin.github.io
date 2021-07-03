import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Button from './button';
import Img from 'gatsby-image';
import styled from 'styled-components';

const LogoContainer = styled.div`
	margin-top: 20px;
`;

export default function OrderButton() {
	const data = useStaticQuery(graphql`
		query HeaderQuery {
			site {
				siteMetadata {
					orderLink
				}
			}
			playLogo: file(relativePath: { eq: "play.png" }) {
				childImageSharp {
					fixed(height: 80) {
						...GatsbyImageSharpFixed
					}
				}
			}
			appleLogo: file(relativePath: { eq: "apple.png" }) {
				childImageSharp {
					fixed(height: 80) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	return (
		<>
			<a href={data.site.siteMetadata.orderLink}>
				<Button title="Order now" iconL="B" iconR="B" size="lg" />
			</a>
			<LogoContainer>
				<a href={'https://play.google.com/store/apps/details?id=fr.coopcycle'} target="__blank">
					<Img fixed={data.playLogo.childImageSharp.fixed} alt="Google Play" />
				</a>
				<a href={'https://apps.apple.com/us/app/coopcycle/id1324884530?l=fr&ls=1'} target="__blank">
					<Img fixed={data.appleLogo.childImageSharp.fixed} alt="Appe Store" />
				</a>
			</LogoContainer>
		</>
	);
}

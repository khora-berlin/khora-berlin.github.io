import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Button from './button';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';


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
		}
	`);

	return (
		<>
			<a href={data.site.siteMetadata.orderLink}>
				<Button title="Order now" iconL="B" iconR="B" size="lg" />
			</a>
			<LogoContainer>
				<a href={'https://play.google.com/store/apps/details?id=fr.coopcycle'} target="__blank">
					<StaticImage src="../../images/play.png" alt="Google Play" />
				</a>
				<a href={'https://apps.apple.com/us/app/coopcycle/id1324884530?l=fr&ls=1'} target="__blank">
					<StaticImage src="../../images/apple.png" alt="App Store" />
				</a>
			</LogoContainer>
		</>
	);
}

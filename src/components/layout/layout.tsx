/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import styled from 'styled-components';
import GlobalStyle from './global';
import Footer from './footer';

const SiteContent = styled.div`
	background: var(--main-bg-color);
	color: var(--main-fg-color);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: var(--main-gap);
	min-height: 100vh;
	max-width: 800px;
	margin: 0 auto;
`;

const Main = styled.main`
	height: 100%;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
`;

const Layout = (props: LayoutProps) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
						subTitle
					}
				}
			}
		`}
		render={data => (
			<>
				<GlobalStyle />
				<SiteContent>
					<Header siteSubTitle={data.site.siteMetadata.subTitle} />
					<Main>{props.children}</Main>
					<Footer />
				</SiteContent>
			</>
		)}
	/>
);

interface LayoutProps {
	children: any;
}

export default Layout;

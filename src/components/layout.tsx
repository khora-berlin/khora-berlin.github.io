/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './main/header';
import styled from 'styled-components';
import GlobalStyle from './global';
import Footer from './main/footer';

const SiteContent = styled.div`
	background: var(--main-bg-color);
	color: var(--main-fg-color);
	display: flex;
	height: 100vh;
	max-width: 800px;
	margin: 0 auto;
	flex-direction: column;
	justify-content: space-between;
`;

const Main = styled.main`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-align: center;
	letter-spacing: 0.1em;
	line-height: 1.6em;
`;

const Layout = (props: LayoutProps) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<GlobalStyle />
				<SiteContent>
					<Header siteTitle={data.site.siteMetadata.title} />
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

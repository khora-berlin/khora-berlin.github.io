/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import GlobalStyle, { SiteContent, Main } from './global';
import Footer from './footer';
import Menu from './menu';

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
					<Menu />
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

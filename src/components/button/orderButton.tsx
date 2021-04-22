import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Button from './button';

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
		</>
	);
}

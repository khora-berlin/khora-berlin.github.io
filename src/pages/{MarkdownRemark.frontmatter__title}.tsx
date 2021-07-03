import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import OrderButton from '../components/button/orderButton';
import styled from 'styled-components';

interface IPage {
	data: {
		content: {
			html: string;
			frontmatter: {
				title: string;
			};
		};
	};
}

export const query = graphql`
	query($id: String) {
		content: markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
			}
			html
		}
	}
`;

const LeftAligned = styled.div`
	@media only screen and (max-width: 500px) {
		width: 85%;
	}
	@media only screen and (min-width: 500px) {
		width: 80%;
	}
	@media only screen and (min-width: 600px) {
		width: 60%;
	}
	@media only screen and (min-width: 1200px) {
		width: 40%;
	}
	margin: 0 auto 20px auto;
	text-align: left;
	p {
		margin: 0;
	}
`;

const Page = ({ data }: IPage) => {
	return (
		<Layout>
				<LeftAligned
					dangerouslySetInnerHTML={{
						__html: data.content.html,
					}}
				></LeftAligned>
			{data.content.frontmatter.title == 'contact' && <OrderButton />}
		</Layout>
	);
};

export default Page;

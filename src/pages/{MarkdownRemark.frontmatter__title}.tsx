import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';


interface IPage {
  data: {
		content: {
      html: string;
      frontmatter: {
        title: string
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


const Page = ({ data }: IPage) => {
	return (
		<Layout>
				<article
					dangerouslySetInnerHTML={{
						__html: data.content.html,
					}}
				></article>
		</Layout>
	);
};

export default Page;


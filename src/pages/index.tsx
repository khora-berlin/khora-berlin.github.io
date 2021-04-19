import * as React from 'react';
import Layout from '../components/layout/layout';
import OrderButton from '../components/button/orderButton';
import Video from '../components/video/video';
import { graphql } from 'gatsby';

interface IIndexProps {
	data: {
		allMarkdownRemark: {
			nodes: [
				{
					html: string;
					frontmatter: {
						title: string;
						videoSourceURL: string;
						videoTitle: string;
					};
				}
			];
		};
	};
}

export const query = graphql`
	query indexData {
		allMarkdownRemark {
			nodes {
				html
				frontmatter {
					title
					videoSourceURL
					videoTitle
				}
			}
		}
	}
`;

const IndexPage = ({ data }: IIndexProps) => {
	const { allMarkdownRemark } = data;
	const { nodes } = allMarkdownRemark;

	const video = nodes.find(node => node.frontmatter.title === `vimeo`);
	const officehours = nodes.find(node => node.frontmatter.title === `Office Hours`);
	const message = nodes.find(node => node.frontmatter.title === `Message`);

	return (
		<React.Fragment>
			<Layout>
				<article>
					<OrderButton />
				</article>
				{officehours && <article dangerouslySetInnerHTML={{ __html: officehours.html }} />}
				{video && (
					<article>
						<Video
							videoSrcURL={video.frontmatter.videoSourceURL}
							videoTitle={video.frontmatter.videoTitle}
							description={video.html}
						/>
					</article>
				)}
				{message && <article dangerouslySetInnerHTML={{ __html: message.html }} />}
			</Layout>
		</React.Fragment>
	);
};

export default IndexPage;

import * as React from 'react';
import Layout from '../components/layout/layout';
import OrderButton from '../components/button/orderButton';
import Video from '../components/video/video';
import { graphql, Link } from 'gatsby';
import Gallery from '../components/instagram/gallery';

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
	const aboutShort = nodes.find(node => node.frontmatter.title === `aboutShort`);

	const about = nodes.find(node => node.frontmatter.title === `about`);

	return (
		<React.Fragment>
			<Layout>
				{officehours && <article dangerouslySetInnerHTML={{ __html: officehours.html }} />}
				<article>
					<OrderButton />
				</article>
				<article>
					<Gallery />
				</article>
				{message && <article dangerouslySetInnerHTML={{ __html: message.html }} />}
				<article>
					{video && (
						<Video
							videoSrcURL={video.frontmatter.videoSourceURL}
							videoTitle={video.frontmatter.videoTitle}
							description={video.html}
						/>
					)}
				</article>
				{about && <article dangerouslySetInnerHTML={{ __html: aboutShort.html.toUpperCase() }} />}
				{about && (
					<article>
						<Link to="/about">show more ...</Link>
					</article>
				)}
			</Layout>
		</React.Fragment>
	);
};

export default IndexPage;

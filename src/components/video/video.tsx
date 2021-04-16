import * as React from 'react';
import styled from 'styled-components';

interface IVideo {
	videoSrcURL: string;
	videoTitle?: string;
	description: string;
}

const KhoraVideo = styled.div`
	width: 90%;
	padding: 10px;
	margin: 0 auto;
	text-align: center;
	border-radius: 5% 5%;
`;
const KhoraVideoFrame = styled.iframe`
	border: none;
	border-radius: 8px;
`;

const Video = ({ videoSrcURL, videoTitle, description }: IVideo) => {
	return (
		<KhoraVideo>
			<div style={{ padding: '41.88% 0 0 0', position: 'relative', margin: 'auto' }}>
				<KhoraVideoFrame
					src={`${videoSrcURL}?title=0&portrait=0`}
					style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
					frameborder="0"
					allowfullscreen
				></KhoraVideoFrame>
			</div>
			<script src="https://player.vimeo.com/api/player.js"></script>
			<div dangerouslySetInnerHTML={{ __html: description }} />
		</KhoraVideo>
	);
};
export default Video;

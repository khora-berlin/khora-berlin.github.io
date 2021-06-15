import * as React from 'react';
import styled from 'styled-components';
import { mixinMediaQuery, MediaContainer } from '../layout/global';

interface IVideo {
	videoSrcURL: string;
	videoTitle?: string;
	description: string;
}

const KhoraVideo = styled.div`
	${mixinMediaQuery(`xxs`, `width: 98%`)}
	${mixinMediaQuery(`mobile`, `width: 90%`)}
	${mixinMediaQuery(`tablet`, `width: 90%`)}
	${mixinMediaQuery(`desktop`, `width: 80%`)}
	${mixinMediaQuery(`largeDesktop`, `width: 45%`)}
	margin: 0 auto;
`;
const KhoraVideoFrame = styled.iframe`
	border: none;
`;

const Video = ({ videoSrcURL, videoTitle, description }: IVideo) => {
	return (
		<MediaContainer rotate="right">
			<KhoraVideo>
				<div style={{ padding: '41.88% 0 0 0', position: 'relative', margin: 'auto' }}>
					<KhoraVideoFrame
						src={`${videoSrcURL}?title=0&portrait=0`}
						style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
						frameBorder="0"
						allowFullScreen
					></KhoraVideoFrame>
				</div>
				<script src="https://player.vimeo.com/api/player.js"></script>
				<div dangerouslySetInnerHTML={{ __html: description }} />
			</KhoraVideo>
		</MediaContainer>
	);
};
export default Video;

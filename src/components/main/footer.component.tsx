import * as React from 'react';
import styled from 'styled-components';

const KhoraFooter = styled.div`
	text-align: center;
	padding: 1em 1em;
	margin-bottom: 30px;
	background: white;
	color: #fc3638;
`;

export default function Footer() {
	return <KhoraFooter>Feed the footer</KhoraFooter>;
}

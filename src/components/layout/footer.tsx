import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const KhoraFooter = styled.footer`
	font-family: 'ArcadeClassic';
	text-align: center;
	padding: 1em 1em;
	margin-bottom: 20px;
	background: var(--main-fg-color);
	color: var(--main-bg-color);
	*{
		margin: 0 10px;
	}
`;

export default function Footer() {
	return (
		<KhoraFooter>
			<Link to="/impressum">IMPRESSUM</Link>
			<Link to="/contact">CONTACT</Link>
		</KhoraFooter>
	);
}

import { Link } from 'gatsby';
import * as React from 'react';
import { Menu } from './global';

export default function Footer() {
	return (
		<Menu>
			<Link to="/">HOME</Link>
			<Link to="/about">ABOUT</Link>
			<Link to="/impressum">CONTACT</Link>
		</Menu>
	);
}

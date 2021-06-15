import { Link } from 'gatsby';
import * as React from 'react';
import { Menu } from './global';

export default function Footer() {
	return (
		<Menu type="footer">
			<Link to="/impressum">IMPRESSUM</Link>
			<Link to="/contact">CONTACT</Link>
		</Menu>
	);
}

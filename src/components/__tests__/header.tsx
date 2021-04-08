import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Header from '../layout/header';
import GlobalStyle from '../layout/global';

describe('Header', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(
				<>
					<GlobalStyle />
					<Header siteSubTitle="Your favourite food delivery collective" />
				</>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

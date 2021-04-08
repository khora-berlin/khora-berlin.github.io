import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Header from '../layout/header';
import GlobalStyle from '../layout/global';

const createNodeMock = (el: any) => {
	if (el.type === 'div') {
		const mockEl = document.createElement('div');
		mockEl.style.padding = '0';
		Object.defineProperty(mockEl, 'clientHeight', {
			get() {
				return 100;
			},
			enumerable: true,
			configurable: true,
		});
		Object.defineProperty(mockEl, 'clientWidth', {
			get() {
				return 300;
			},
			enumerable: true,
			configurable: true,
		});
		return mockEl;
	}
	return null;
};

describe('Header', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(
				<>
					<GlobalStyle />
					<Header siteSubTitle="Your favourite food delivery collective" />
				</>,
				{ createNodeMock }
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '../layout/header';
import GlobalStyle from '../layout/global';

const createNodeMock = (el: any) => {
	if (el.type === 'div') {
		const mockEl = document.createElement('div');
		return mockEl;
	}
	return null;
};

describe('Header', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(
				<>
					<GlobalStyle key="one" />
					<Header key="two" siteSubTitle="Your favourite food delivery collective" />
				</>,
				{ createNodeMock }
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
		render(<Header key="two" siteSubTitle="Your favourite food delivery collective" />);
		const text = screen.getByText('Your favourite food delivery collective');
		expect(text).toBeInTheDocument();
	});
});

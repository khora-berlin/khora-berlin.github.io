import * as React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '../layout/header';
import GlobalStyle from '../layout/global';

describe('Header', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(
			<>
				<GlobalStyle />
				<Header siteSubTitle="food delivery collective" />
			</>
		);
		expect(asFragment()).toMatchSnapshot();
	});
	it('contains correct siteSubTitle', () => {
		render(<Header key="two" siteSubTitle="food delivery collective" />);
		const text = screen.getByText('food delivery collective');
		expect(text).toBeInTheDocument();
	});
});

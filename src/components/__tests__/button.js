import * as React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from '../button/button';

describe('Button', () => {
	test('contains correct button title', () => {
		const title = "Test Title";		
		render(<Button title={title} />);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(title)
	});
	test('is able to show left and right icon', () => {
		const title = 'Icon Test';
		const iconL = 'B';
		const iconR = 'H';
		render(<Button title={title} iconL={iconL} iconR={iconR} />);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(title);
		expect(button).toHaveTextContent(iconL);
		expect(button).toHaveTextContent(iconR);
	});

	test('is able to handle correct diff sizes', () => {
		let title = 'small button';
		let size = 'sm';
		render(<Button title={title} size={size} />);
		const smallButton = screen.getByText(title);
		expect(smallButton).toBeInTheDocument();
		expect(smallButton).toHaveClass(size);
		expect(smallButton).toHaveStyle(`font-family: 'ArcadeClassic'`);

		title = 'large button';
		size = 'lg';
		render(<Button title={title} size={size} />);
		const largeButton = screen.getByText(title);
		expect(largeButton).toBeInTheDocument();
		expect(largeButton).toHaveClass(size);
		expect(largeButton).toHaveStyle(`font-family: 'ArcadeClassic'`);

		title = 'invalid size button';
		size = 'invalid';
		render(<Button title={title} size={size} />);
		const invalidButton = screen.getByText(title);
		expect(invalidButton).toBeInTheDocument();
		expect(invalidButton).toHaveClass(size);
		expect(invalidButton).not.toHaveStyle(`font-family: 'ArcadeClassic'`);
	});
});

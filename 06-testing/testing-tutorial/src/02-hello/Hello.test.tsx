/**

test appearance of a component

 */
 
import { Hello } from './Hello';
import { render } from '@testing-library/react';

 
test('check h1', () => {
	const { container } = render(<Hello />);
	const h1: HTMLHeadingElement | null = container.querySelector<HTMLHeadingElement>('h1')
	expect(h1?.textContent?.trim()).toBe('Hello Guest');
})

test('check h1', () => {
	const { container } = render(<Hello user={ {name: 'Piglet'} } />);
	const h1: HTMLHeadingElement | null = container.querySelector<HTMLHeadingElement>('h1')
	expect(h1?.textContent?.trim()).toBe('Hello Piglet');
})
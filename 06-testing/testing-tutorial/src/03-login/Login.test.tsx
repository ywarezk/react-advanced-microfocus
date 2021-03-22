/**

Testing the login

 */

import { render, RenderResult, fireEvent, waitFor } from "@testing-library/react"
import { Login } from "./Login"

describe('Login tests', () => {
	let renderResult: RenderResult;
	// let container: any;
	
	beforeEach(() => {
		renderResult = render(<Login />);
		// container = renderResult.container;
	})
	
	test('validation', async () => {
		const { container } = renderResult;
		const emailInput: any = container.querySelector('input[name="email"]');
		fireEvent.change(emailInput, { target: {value: "yariv"}});
		const passwordInput: any = container.querySelector('input[name="password"]');
		fireEvent.change(passwordInput, { target: { value: "123" } });
		const form: any = container.querySelector('form');
		fireEvent.submit(form);
		
		await waitFor(() => {
			const h3 = container.querySelector('h3');
			expect(h3).not.toBeInTheDocument();
		})
		
		const h3 = container.querySelectorAll('h3');
		expect(h3[0].textContent).toBe('Bad email format');
		expect(h3[1].textContent).toBe('too short');
		
	})

	test.only('server response - success', async () => {
		const fetchSpy = jest.spyOn(window, 'fetch');
		fetchSpy.mockResolvedValue({
			status: 200,
			json: () => Promise.resolve({token: 'hello'})
		} as any);
		
		const { container } = renderResult;
		const emailInput: any = container.querySelector('input[name="email"]');
		fireEvent.change(emailInput, { target: { value: "yariv@nerdeez.com" } });
		const passwordInput: any = container.querySelector('input[name="password"]');
		fireEvent.change(passwordInput, { target: { value: "12345678" } });
		const form: any = container.querySelector('form');
		fireEvent.submit(form);
		
		await waitFor(() => {
			const h1 = container.querySelector('h1');
			expect(h1).not.toBeInTheDocument();
		});
		
		const h1 = container.querySelector('h1');
		expect(h1?.textContent).toBe('Login Worked!');
		
		fetchSpy.mockRestore();
	})

	test('server response - fail', () => {
	})
		
});
 

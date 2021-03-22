/**

Testing the login

 */

import { render, RenderResult, fireEvent, waitFor } from "@testing-library/react"
import { Login } from "./Login"
import { UserService } from './user.service';

describe('Login tests', () => {
	let renderResult: RenderResult;
	// let container: any;
	
	beforeEach(() => {
		renderResult = render(<Login />);
		// container = renderResult.container;
	})
	
	

	test.only('server response - success', async () => {
		const fetchSpy = jest.spyOn(UserService.prototype, 'login');
		fetchSpy.mockResolvedValue('hello');
		
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

	
		
});
 

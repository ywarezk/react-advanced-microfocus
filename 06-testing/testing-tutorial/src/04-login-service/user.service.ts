

export class UserService {
	
	async login(values: any): Promise<string> {
		const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		// {token: ''}
		if (response.status !== 200) {
			throw new Error('bad credentials');
		} else {
			const tokenObj = await response.json();
			return tokenObj.token;
		}
	}
}
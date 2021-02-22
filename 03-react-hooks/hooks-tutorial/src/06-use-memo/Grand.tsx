

import { FC, useState } from 'react';

export const Grand: FC = () => {
	console.log('grand');
	
	function fibonacci(num: number, memo: any = {}): number {
		if (memo[num]) return memo[num];
		if (num <= 1) return 1;

		return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
	}
	const fib = fibonacci(1000);
	
	
	return (
		<h1>
			Grand {fib};
		</h1>	
	)
} 


import { FC, useState, useMemo, memo } from 'react';

export const Grand: FC< {counter?: number} > = ( {counter = 10} ) => {
	console.log('grand');
	
	const [msg, setMsg] = useState('hello');
	
	
	// remembers 42
	// 
	const memoValue = useMemo(() => {
		console.log('memo');
		return 42;
	}, [ msg ]);
	
	console.log('2');
	
	const fib = useMemo(() => {
		function fibonacci(num: number, memo: any = {}): number {
			let counter = 0;
			for (let i = 0; i < 1000000; i++) {
				counter++;
			}
			if (memo[num]) return memo[num];
			if (num <= 1) return 1;

			return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo) + counter;
		}
		const fib = fibonacci(1000);
		return fib;
	}, [])
	
	/*
	function fibonacci(num: number, memo: any = {}): number {
		let counter = 0;
		for (let i=0; i< 1000000; i++) {
			counter++;
		}
		if (memo[num]) return memo[num];
		if (num <= 1) return 1;

		return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo) + counter;
	}
	const fib = fibonacci(1000);
	*/
	
	
	
	
	
	return (
		<h1>
			Grand { fib };
		</h1>	
	)
} 

// export const Grand = memo(OldGrand);

/*
export const Grand = memo(() => {
	return (
		<h1>hello world</h1>
	)
});
*/

/*
function complex( arg1, arg2, ...argn ) {
	// something complex
	
}

complex(1,5,10); // => 20

complex(1, 5, 10); // => 20

complex(10,15, 20); // => 42

{
	[1, 5, 10]: 20,
	[10, 15,20]: 42
}
*/

export const Grand2: FC<{ someLongList: any[]}> = ( { someLongList } ) => {
	/**
	
	something complex with array
	
	 */
	 
	useMemo(() => {
		// some complex with array
		// someLongList === someLongListBefore
	}, [ someLongList ])
	
	return (
		<h1>
			hello world
		</h1>
	)
}
/**



 */
 
// -------O--|---------->
setTimeout(
	() => {
		console.log('this will run in the future');
	}, 
	1000
)

// ----O----O----O----O------>
setInterval(() => {
	console.log('this will repeat');
}, 1000)



/**

promise is suitable for this kind of async code

--------O--|--------->
----------X----------->

 */

/**
 * 
 
 Promise states
 1. pending
 2. fullfilled / rejected
 
 */

const timerPromise: Promise<number> = new Promise((resolve, reject) => {
	// i place the async code in this function
	
	setTimeout(
		() => {
			console.log('this will run in the future');
			// resolve(4);
			// resolve();
			reject(new Error('something happened'));
		},
		1000
	)

	
})

timerPromise.then(
	(four: number) => {
	
	},
	(err) => {
		
	}
)


class SomeService {
	
	someSyncCode(arr: number[]) {
		
		// 1. you can wrap the failure in try and catch
		try {
			
		} catch(err) {
			
		}
		
		// 2. do not wrap the failure let it bubble
		
		// 3. blend of the two
		try {
			
		} catch(err) {
			// so something repeating
			throw err;
		}
				
	}
	
}

const anotherPromise = timerPromise
	.catch((err) => {
		return []
	})
	
timerPromise.catch((err) => {
	// do something repeating
	throw err;
})

timerPromise.then(
	null,
	(err: Error) => {
		
	}
)

export {}

/**

------o-|--->

promise

promise.then

promise.catch


 */
 
/*
async function stam() {
	try {
		if (condition) {
			const someValue = await timerPromise;	
		}
		for(let i = 0; i<1000; i++) {
			
		}
		
		// const someValue2 = await promise2;
		// const someValue2 = await promise2;
		return 42;	
	} catch(err) {
		
	}
	
}

const promiseFourtyTwo: Promise<number> = stam();

promiseFourtyTwo.then((fourtyTwo: number) => {
	
})

*/
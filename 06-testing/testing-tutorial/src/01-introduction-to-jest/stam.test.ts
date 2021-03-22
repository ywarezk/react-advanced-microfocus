/**

what does jest bring me to write my tests

 */

// global functions you can use


 
// test('AppPage - some button', () => {
// 	expect(true).toBe(true);
// });

// test('hello', () => {
	
// });

describe('group of tests', () => {
	beforeEach(() => {
		console.log('before test prepare something for every test')
	});

	beforeAll(() => {
		console.log('prepare something once')
	});
	
	test('AppPage - some button', () => {
		expect(true).toBe(true);
	});

	test('hello', () => {

	});
});

describe('another group', () => {
	beforeEach(() => {
		console.log('before test prepare something for every test')
	});

	beforeAll(() => {
		console.log('prepare something once')
	});
	
	test('AppPage - some button', async () => {
		expect(true).toBe(true);
	});

	test('hello', async () => {

	});
})




## EX Redux Redux toolkit

- connect redux to the application
- your state should look like this:

```
{
	user: {
		token: ''
	},
	todo: {
		tasks: [],
		
		// derived state
		// do not place in state derived state
		somethingComplex: 
		
		// we do not place it in the state
		numberOftasks: 5
		
	}
}
```
- use configureStore
- install redux dev tools browser extension
- use createSlice to create a `user` and a `todo` slice
- there will be an action to set the token which the login component will call
- there will be an action to set the todo which the TodoList will call

## Summary redux

best practices:

1. folder structure should be by features
2. each section in the state should be managed by a slice
3. interaction with server / async stuff that should not be part of the ui  
you can place in async actions `createAsyncThunk`
4. state should be serializable
5. no derived state
6. use selectors to select items from the state `createSelector`
7. keep DRY - entites managment is with `createEntityAdapter`


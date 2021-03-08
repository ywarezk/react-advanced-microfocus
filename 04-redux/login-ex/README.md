## EX Redux Redux toolkit

- connect redux to the application
- your state should look like this:

```
{
	user: {
		token: ''
	},
	todo: {
		tasks: []
	}
}
```
- use configureStore
- install redux dev tools browser extension
- use createSlice to create a `user` and a `todo` slice
- there will be an action to set the token which the login component will call
- there will be an action to set the todo which the TodoList will call
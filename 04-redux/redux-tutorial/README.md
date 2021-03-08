# Redux

redux helps us manage our data  
data shared between the react components  
the data === state

## State

state is immutable

```
{
	user: {
		firstName: 'Yariv',
		lastName: 'Katz',
		email: 'yariv@nerdeez.com'
	},
	todo: {
		tasks: [ {id: 1, title: 'hello'} ],
		selectedTask: 1,
		isLoading: false
	}	
}
```

## Store

holds the state

```
import {createStore} from 'redux';

const store = createStore(...);

store.dispatch(...)

```

## Summary redux

- decide how the state object look like
- npm install redux react-redux @reduxjs/toolkit
- create the store configureStore
- use the Provider context to supply the store to all the components
- read from redux using the useSelector
- change the state in redux with a slice


## EX.

Install redux dev tools

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd


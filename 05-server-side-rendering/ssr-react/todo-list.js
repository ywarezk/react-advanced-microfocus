const React = require("react")
const axios = require('axios');
const { renderToString } = require('react-dom/server');





function TodoList( { tasks } ) {
	console.log(tasks);
	
	// useState()
	
	// useEffect(() => {
	// 	// will not run on the server side	
	// }, [])
	
	/*
	return (
		<ul>
			{
				tasks.map(() => (<li key> hello</li>))
			}
			<li></li>
		</ul>
	)
	*/
	
	return React.createElement(
		'ul',
		null,
		tasks.map((singleTask) => {
			return React.createElement(
				'li',
				{key: singleTask.id},
				singleTask.title
			)
		})
	)
}

axios.get('http://nztodo.herokuapp.com/api/tasks/?format=json')
	.then((response) => {
		return response.data;
	})
	.then((data) => {
		// console.log(data);
		const html = renderToString(
			// <TodoList tasks={} />
			React.createElement(
				TodoList,
				{tasks: data}
			)
		)
		console.log(html);
	})


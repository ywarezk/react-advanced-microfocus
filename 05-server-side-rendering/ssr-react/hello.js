const React = require('react');
const { renderToString } = require('react-dom/server');

function Hello() {
	/*
	React.createElement(...)
	return (
		<h1>
			hello world
		</h1>
	)
	*/
	
	return React.createElement('h1', null, 'hello world from react');
}

// ReactDOM.render(<Hello />, document.getElementById(''))

const html = renderToString(React.createElement(Hello));
console.log(html);
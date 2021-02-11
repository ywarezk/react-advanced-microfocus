/**

Basic typescript types
that are defined in @types/react
that we work with React

 */


import { ReactElement, createElement, ReactNode, ComponentType, FC } from "react";

 
const element: ReactElement = <h1>hello world</h1>

const element2 = createElement(
	'h1',
	null,
	'hello world'
)

const nodeElement: ReactNode = [true, false, <></>];

// jsx

const hello = (
	<>
		<p id={'hello'} style={ {color: 'red'}  }></p>
		<h1>hello { Math.random() } </h1>	
		<h1>hello { 'hello' } </h1>	
		<h1>hello {true} </h1>	
		<h1>hello {false} </h1>	
		<h1>hello {null} </h1>	
		<h1>hello { <span>hello</span> } </h1>	
		<h1>hello { [] } </h1>	
	</>
)

interface SomeComponentProps {
	msg: string;
}

const SomeComponent: FC<SomeComponentProps> = (props: SomeComponentProps) => {
	return (
		<h1>
			some component
		</h1>
	)
}
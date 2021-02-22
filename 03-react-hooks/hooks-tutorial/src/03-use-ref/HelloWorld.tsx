import { FC, useEffect, useState, useRef, MutableRefObject, forwardRef } from 'react';


const Child = forwardRef(
	(props, ref: any) => {
		return (
			<h1 ref={ref}>
				child
			</h1>
		)	
	}
	
) 

export const HelloWorld: FC = () => {
	// { current: 'hello' HeadingDomElement}
	// you get the same object in every render
	const helloRef: MutableRefObject<any> = useRef('hello');
	
	const childRef = useRef(null);
	
	// instance properties
	// this.hello = 'world'
	// { current: 36}
	const ageRef = useRef(36);
	
	ageRef.current++;
	
	return (
		<>
			<h1 ref={helloRef}>
				Hello world
			</h1>
			
			<Child ref={childRef} />
		</>
	)
}
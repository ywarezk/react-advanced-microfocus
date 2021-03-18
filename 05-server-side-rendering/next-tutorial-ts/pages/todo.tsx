

export default function Todo( {tasks}: any ) {
	
	return (
		<ul>
			{
				tasks?.map(( task: any ) => {
					return (
						<li key={task.id}>
							{task.title}
						</li>
					)
				})
			}
		</ul>
	)
	
}

/*
export async function getStaticProps() {
	const response = await fetch('https://nztodo.herokuapp.com/api/tasks/?format=json');
	const tasks = await response.json();
	return {
		props: {
			tasks
		}
	}
}
*/

export async function getServerSideProps() {
	const response = await fetch('https://nztodo.herokuapp.com/api/tasks/?format=json');
	const tasks = await response.json();
	return {
		props: {
			tasks
		}
	}
}
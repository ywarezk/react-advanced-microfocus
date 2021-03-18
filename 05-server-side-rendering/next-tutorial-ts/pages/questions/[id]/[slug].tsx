
import { useRouter } from 'next/router';

export default function Question() {
	const router = useRouter()
	
	// { id: '12345', slug: 'hello-world' }
	const {id, slug, foo} = router.query;
	
	return (
		<h1>
			This is a question page {id} {slug} {foo}
		</h1>
	)
}
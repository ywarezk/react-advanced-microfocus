import { AppProps } from 'next/app';
import Link from 'next/link';

export default function App( {Component, pageProps}: AppProps ) {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link href="/">
							<a>
								Homepage
							</a>
						</Link>			
					</li>
					<li>
						<Link href="/about">
							<a>
								About
							</a>
						</Link>
					</li>
					<li>
						<Link href="/questions/1/hello">
							<a>
								Some Question
							</a>
						</Link>
					</li>
				</ul>
			</nav>
			<Component {...pageProps} />
		</div>
	)	
}
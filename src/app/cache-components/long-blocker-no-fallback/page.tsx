import Link from 'next/link'
import { getDelayedData } from '@/dal/dal'

export default async function Page() {
	await getDelayedData()
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="container rounded-sm border p-8 text-center shadow-2xl">
				<h1 className="mb-4 font-bold text-2xl">
					Long Blocker without Fallback
				</h1>
				<p>
					This content is rendered after a delay, but without a
					loading fallback.
				</p>
				<div className="mt-8">
					<Link className="w-full md:w-auto" href="/cache-components">
						<button
							className={
								'rounded-sm border bg-blue-400 p-2 px-4 text-white hover:bg-blue-500'
							}
							type="button"
						>
							Back
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

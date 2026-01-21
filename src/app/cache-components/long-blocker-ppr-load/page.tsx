import Link from 'next/link'
import { Suspense } from 'react'
import CachedContent from '@/components/cached-content'
import DynamicContent from '@/components/dynamic-content'

export default function Page() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="container rounded-sm border p-8 shadow-2xl">
				<h1 className="mb-4 text-center font-bold text-2xl">
					PPR Load with Suspense
				</h1>
				<p className="mb-8 text-center">
					This page demonstrates how Partial Prerendering Cache
					Components(PPR) works with Suspense to load dynamic content.
				</p>
				<div className="space-y-8">
					<div className="rounded-lg border border-gray-300 border-dashed p-4">
						<h2 className="mb-2 font-semibold text-xl">
							Dynamic content with fallback
						</h2>
						<Suspense
							fallback={
								<p className="text-blue-500">
									Loading dynamic content with a fallback...
								</p>
							}
						>
							<DynamicContent />
						</Suspense>
					</div>
					<div className="rounded-lg border border-gray-300 border-dashed p-4">
						<h2 className="mb-2 font-semibold text-xl">
							Dynamic content without Fallback
						</h2>
						<Suspense>
							<DynamicContent />
						</Suspense>
					</div>
					<div className="rounded-lg border border-gray-300 border-dashed p-4">
						<h2 className="mb-2 font-semibold text-xl">
							Dynamic cached content
						</h2>
						{/* <Suspense> */}
						<CachedContent />
						{/* </Suspense> */}
					</div>
				</div>
				<div className="mt-8 text-center">
					<Link className="w-full md:w-auto" href="/">
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

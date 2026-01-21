export default function Loading() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="container rounded-sm border p-8 text-center shadow-2xl">
				<h1 className="mb-4 font-bold text-2xl">Loading...</h1>
				<p className="animate-pulse">
					Please wait while we load the content.
				</p>
			</div>
		</div>
	)
}

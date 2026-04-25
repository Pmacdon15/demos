import Background from '@/components/background'

export default function Loading() {
	return (
		<main className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-purple-500/30">
			<Background />
			<div className="relative z-10 flex min-h-screen items-center justify-center p-6">
				<div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-md">
					<div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
						<div className="h-6 w-6 animate-spin rounded-full border-2 border-purple-500/30 border-t-purple-500" />
					</div>
					<h1 className="mb-2 font-bold text-white text-2xl">
						Initializing...
					</h1>
					<p className="animate-pulse text-zinc-400">
						Fetching dynamic data for the standard suspense demo.
					</p>
				</div>
			</div>
		</main>
	)
}

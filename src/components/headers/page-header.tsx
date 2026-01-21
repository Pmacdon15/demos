export default function PageHeader() {
	return (
		//  <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
		<header className="mx-auto mb-16 max-w-3xl text-center">
			<h1 className="mb-6 bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text font-extrabold text-5xl text-transparent text-white tracking-tight">
				Server Actions & Optimistic UI
			</h1>
			<p className="mb-8 text-lg text-zinc-400 leading-relaxed">
				This demo showcases how{' '}
				<code className="text-emerald-400">useOptimistic</code> improves
				user experience during slow data mutations. We've simulated a{' '}
				<span className="rounded bg-white/10 px-2 py-0.5 font-mono text-white">
					2000ms
				</span>{' '}
				API delay on every action.
			</p>
			<div className="inline-flex gap-4 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
				<span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 font-medium text-red-400 text-sm">
					Slow API Simulation Active
				</span>
			</div>
		</header>
	)
}

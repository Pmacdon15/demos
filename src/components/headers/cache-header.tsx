export default function CacheHeader() {
	return (
		<header className="mx-auto mb-16 max-w-3xl text-center">
			<h1 className="mb-6 bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text font-extrabold text-5xl text-transparent text-white tracking-tight">
				Next.js Cache Strategies
			</h1>
			<p className="mb-8 text-lg text-zinc-400 leading-relaxed">
				Explore modern rendering patterns in Next.js, including{' '}
				<code className="text-blue-400">PPR</code>,{' '}
				<code className="text-blue-400">Suspense</code>, and various{' '}
				<code className="text-blue-400">Cache Component</code> methods. We've simulated a <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-white">
					4000ms
				</span>{' '}
				API delay on every action.
			</p>
			<div className="inline-flex gap-4 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
				<span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-medium text-blue-400 text-sm">
					Rendering Experiments Active
				</span>
			</div>
		</header>
	)
}

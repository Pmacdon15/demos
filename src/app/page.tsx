import { ArrowRight, Database, Github, Mail, Zap } from 'lucide-react'
import Link from 'next/link'
import Background from '@/components/background'

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-200 selection:bg-emerald-500/30">
			{/* Background decoration */}
			<Background />

			<main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6">
				<div className="w-full max-w-4xl space-y-12">
					{/* Hero Section */}
					<div className="space-y-4 text-center">
						<h1 className="font-bold text-5xl text-white tracking-tight md:text-6xl">
							Demo{' '}
							<span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
								Showcase
							</span>
						</h1>
						<p className="mx-auto max-w-2xl text-lg text-zinc-400 md:text-xl">
							A collection of modern web experiments demonstrating
							speed, responsiveness, and advanced rendering
							strategies.
						</p>
					</div>

					{/* Demo Cards */}
					<div className="grid gap-6 md:grid-cols-2">
						<Link
							className="group relative block rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-emerald-500/50"
							href="/optimistic"
						>
							<div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
							<div className="relative space-y-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-transform group-hover:scale-110">
									<Zap size={24} />
								</div>
								<div className="space-y-2">
									<h2 className="flex items-center gap-2 font-semibold text-2xl text-white">
										Optimistic UI
										<ArrowRight
											className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
											size={18}
										/>
									</h2>
									<p className="text-zinc-400">
										Experience lightning-fast feedback with
										immediate UI updates using React's
										useOptimistic hook.
									</p>
								</div>
							</div>
						</Link>

						<Link
							className="group relative block rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-blue-500/50"
							href="/cache-components"
						>
							<div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
							<div className="relative space-y-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-transform group-hover:scale-110">
									<Database size={24} />
								</div>
								<div className="space-y-2">
									<h2 className="flex items-center gap-2 font-semibold text-2xl text-white">
										Cache Strategies
										<ArrowRight
											className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
											size={18}
										/>
									</h2>
									<p className="text-zinc-400">
										Deep dive into Next.js rendering
										patterns including PPR, Suspense, and
										various caching methods.
									</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="relative z-10 w-full border-zinc-900 border-t py-8">
				<div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 md:flex-row">
					<p>© 2026 Demo Showcase. Crafted for performance.</p>
					<div className="flex items-center gap-6">
						<Link
							className="flex items-center gap-2 transition-colors hover:text-white"
							href="https://github.com/pmacon15"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Github size={16} />
							pmacon15
						</Link>
						<Link
							className="flex items-center gap-2 transition-colors hover:text-white"
							href="mailto:patrick@patmac.ca"
						>
							<Mail size={16} />
							patrick@patmac.ca
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}

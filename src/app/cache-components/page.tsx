import Link from 'next/link'
import { ArrowLeft, Database, Zap, Sparkles } from 'lucide-react'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import Background from '@/components/background'
import Footer from '@/components/footer'
import CacheHeader from '@/components/headers/cache-header'

export default function Page() {
	return (
		<main className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-blue-500/30">
			<Background />

			<div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
				<Link
					className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-sm text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
					href="/"
				>
					<ArrowLeft
						className="transition-transform group-hover:-translate-x-1"
						size={16}
					/>
					Back to Showcase
				</Link>

				<CacheHeader />

				<div className="grid gap-6 md:grid-cols-3">
					{/* Card 1 */}
					<div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
						<div className="relative z-10 flex flex-1 flex-col">
							<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
								<Database size={20} />
							</div>
							<h2 className="mb-2 font-bold text-white text-xl">
								Blocking (No Fallback)
							</h2>
							<p className="mb-6 flex-1 text-sm text-zinc-400 leading-relaxed">
								The slowest method. The entire page navigation
								is blocked while data fetches, resulting in a
								"stuck" feel.
							</p>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										className="inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-4 py-2.5 font-semibold text-white shadow-blue-500/20 shadow-lg transition-all hover:bg-blue-600"
										href="/cache-components/long-blocker-no-fallback"
									>
										Launch Demo
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p className="max-w-xs">
										Navigation will feel blocked for 4s
										while the server works.
									</p>
								</TooltipContent>
							</Tooltip>
						</div>
					</div>

					{/* Card 2 */}
					<div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
						<div className="relative z-10 flex flex-1 flex-col">
							<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
								<Zap size={20} />
							</div>
							<h2 className="mb-2 font-bold text-white text-xl">
								Standard Suspense
							</h2>
							<p className="mb-6 flex-1 text-sm text-zinc-400 leading-relaxed">
								A step up. Navigates immediately but shows a
								full-page loading state while sequence awaits
								complete.
							</p>
							<Link
								className="inline-flex w-full items-center justify-center rounded-xl bg-purple-500 px-4 py-2.5 font-semibold text-white shadow-purple-500/20 shadow-lg transition-all hover:bg-purple-600"
								href="/cache-components/long-blocker-fallback"
							>
								Launch Demo
							</Link>
						</div>
					</div>

					{/* Card 3 */}
					<div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
						<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
						<div className="relative z-10 flex flex-1 flex-col">
							<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
								<Sparkles size={20} />
							</div>
							<h2 className="mb-2 font-bold text-white text-xl">
								PPR Stream
							</h2>
							<p className="mb-6 flex-1 text-sm text-zinc-400 leading-relaxed">
								The gold standard. Static shell loads
								instantly, dynamic parts stream in parallel as
								they ready.
							</p>
							<Link
								className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-2.5 font-semibold text-white shadow-emerald-500/20 shadow-lg transition-all hover:bg-emerald-600"
								href="/cache-components/long-blocker-ppr-load"
							>
								Launch Demo
							</Link>
						</div>
					</div>
				</div>

				<div className="mt-16 grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
					<h3 className="font-bold text-white text-2xl tracking-tight">
						Strategic Comparison
					</h3>
					<div className="grid gap-6 md:grid-cols-3">
						<div className="space-y-2">
							<span className="font-bold text-blue-400 text-xs uppercase tracking-widest">
								Method A
							</span>
							<p className="text-sm text-zinc-400">
								Feels "broken" as the browser wait cursor appears. No UI feedback during fetch.
							</p>
						</div>
						<div className="space-y-2">
							<span className="font-bold text-purple-400 text-xs uppercase tracking-widest">
								Method B
							</span>
							<p className="text-sm text-zinc-400">
								Better feedback, but sequence awaits block the main thread, slowing down perceived speed.
							</p>
						</div>
						<div className="space-y-2">
							<span className="font-bold text-emerald-400 text-xs uppercase tracking-widest">
								Method C
							</span>
							<p className="text-sm text-zinc-400">
								Static shell is instant. Dynamic content fetches in parallel, keeping the UI alive.
							</p>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</main>
	)
}

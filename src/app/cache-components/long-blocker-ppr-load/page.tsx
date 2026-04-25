import { ArrowLeft, Sparkles, Terminal } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import Background from '@/components/background'
import CachedContent from '@/components/cached-content'
import DynamicContent from '@/components/dynamic-content'

export default function Page() {
	return (
		<main className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-emerald-500/30">
			<Background />

			<div className="relative z-10 mx-auto max-w-5xl px-6 py-20">
				<Link
					className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-sm text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
					href="/cache-components"
				>
					<ArrowLeft
						className="transition-transform group-hover:-translate-x-1"
						size={16}
					/>
					Back to Experiments
				</Link>

				<div className="mb-12">
					<h1 className="mb-4 flex items-center gap-3 font-bold text-white text-4xl tracking-tight">
						<Sparkles className="text-emerald-400" size={36} />
						PPR Stream Result
					</h1>
					<p className="text-lg text-zinc-400 leading-relaxed">
						Partial Prerendering (PPR) allows the static parts of
						this page to be served instantly from the edge, while
						dynamic sections stream in.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-2">
					<div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
						<div className="border-white/10 border-b bg-white/5 -m-8 mb-0 p-4 flex items-center gap-2">
							<Terminal className="text-emerald-400" size={14} />
							<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
								dynamic_streaming_sector
							</span>
						</div>
						<div className="mt-4">
							<h2 className="mb-4 font-semibold text-white text-xl">
								Dynamic Content (With Fallback)
							</h2>
							<Suspense
								fallback={
									<div className="flex h-20 items-center justify-center rounded-xl border border-white/5 bg-white/5 animate-pulse text-emerald-400/50 text-sm">
										Streaming dynamic data...
									</div>
								}
							>
								<DynamicContent />
							</Suspense>
						</div>
					</div>

					<div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
						<div className="border-white/10 border-b bg-white/5 -m-8 mb-0 p-4 flex items-center gap-2">
							<Terminal className="text-blue-400" size={14} />
							<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
								dynamic_direct_sector
							</span>
						</div>
						<div className="mt-4">
							<h2 className="mb-4 font-semibold text-white text-xl">
								Dynamic Content (No Fallback)
							</h2>
							<Suspense>
								<DynamicContent />
							</Suspense>
						</div>
					</div>

					<div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md lg:col-span-2">
						<div className="border-white/10 border-b bg-white/5 -m-8 mb-0 p-4 flex items-center gap-2">
							<Terminal className="text-purple-400" size={14} />
							<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
								cached_data_sector
							</span>
						</div>
						<div className="mt-4">
							<h2 className="mb-4 font-semibold text-white text-xl">
								Dynamic Cached Content
							</h2>
							<CachedContent />
						</div>
					</div>
				</div>
				<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
					<Link
						className="group inline-flex items-center gap-2 rounded-xl bg-white/5 px-6 py-3 font-medium text-zinc-200 transition-all hover:bg-white/10 hover:text-white border border-white/10"
						href="/cache-components"
					>
						<ArrowLeft
							className="transition-transform group-hover:-translate-x-1"
							size={18}
						/>
						Back to Experiments
					</Link>
				</div>
			</div>
		</main>
	)
}

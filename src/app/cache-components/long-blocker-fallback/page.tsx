import Link from 'next/link'
import { ArrowLeft, Zap, Terminal } from 'lucide-react'
import Background from '@/components/background'
import { getDelayedData } from '@/dal/dal'

export default async function Page() {
	await getDelayedData()
	return (
		<main className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-purple-500/30">
			<Background />

			<div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-20">
				<div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
					<div className="border-white/10 border-b bg-white/5 p-4 flex items-center gap-2">
						<Terminal size={16} className="text-purple-400" />
						<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">suspense_render_output</span>
					</div>
					
					<div className="p-8 text-center">
						<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
							<Zap size={32} />
						</div>
						<h1 className="mb-4 font-bold text-white text-3xl tracking-tight">
							Suspense Loaded
						</h1>
						<p className="mx-auto max-w-lg text-lg text-zinc-400 leading-relaxed">
							The shell of this page was visible immediately while the dynamic data loaded. This provides much better feedback than a full-page block.
						</p>

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
				</div>
			</div>
		</main>
	)
}

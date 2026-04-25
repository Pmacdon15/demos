import Link from 'next/link'
import { ArrowLeft, Database, Terminal } from 'lucide-react'
import Background from '@/components/background'
import { getDelayedData } from '@/dal/dal'

export default async function Page() {
	await getDelayedData()
	return (
		<main className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-blue-500/30">
			<Background />

			<div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-20">
				<div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
					<div className="border-white/10 border-b bg-white/5 p-4 flex items-center gap-2">
						<Terminal size={16} className="text-blue-400" />
						<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">blocking_render_output</span>
					</div>
					
					<div className="p-8 text-center">
						<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
							<Database size={32} />
						</div>
						<h1 className="mb-4 font-bold text-white text-3xl tracking-tight">
							Long Blocker Result
						</h1>
						<p className="mx-auto max-w-lg text-lg text-zinc-400 leading-relaxed">
							This page was completely blocked from rendering until the 4s fetch finished. You likely saw your browser's loading indicator in the tab.
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

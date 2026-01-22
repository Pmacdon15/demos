import type { Data } from '@/types/data-types'
import OptimisticDataDisplay from './Optimistic-data-display'

export default function OptimisticDataCard({
	dataPromise,
}: {
	dataPromise: Promise<Data[]>
}) {
	return (
		<section className="space-y-4">
			<div className="mb-2 flex items-center gap-3 px-2">
				<span className="font-bold text-xs text-zinc-500 uppercase tracking-widest">
					Method B
				</span>
				<div className="h-px flex-1 bg-white/5" />
			</div>
			{/* <Suspense fallback={<LoadingCard color="emerald" />}> */}
			<OptimisticDataDisplay dataPromise={dataPromise} />
			{/* </Suspense> */}
		</section>
	)
}

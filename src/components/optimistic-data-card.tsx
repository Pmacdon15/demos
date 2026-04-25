import type { UseMutateFunction } from '@tanstack/react-query'
import type { Data, OptimisticAction } from '@/types/data-types'
import OptimisticDataDisplay from './Optimistic-data-display'

export default function OptimisticDataCard({
	updateOptimistic,
	data,
	mutateDelete,
}: {
	updateOptimistic: (action: OptimisticAction) => void
	data: Data[] | undefined
	mutateDelete: UseMutateFunction<Data | null, Error, number, unknown>
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
			<OptimisticDataDisplay
				data={data}
				mutateDelete={mutateDelete}
				updateOptimistic={updateOptimistic}
			/>
			{/* </Suspense> */}
		</section>
	)
}

'use client'
import { use, useOptimistic } from 'react'
import type { Data, OptimisticAction } from '@/types/data-types'
import OptimisticDataCard from '../optimistic-data-card'
import SlowDataCard from '../slow-data-crad'

export default function DemoContainer({
	dataPromise,
}: {
	dataPromise: Promise<Data[] | undefined>
}) {
	const initialData = use(dataPromise)

	const [optimisticData, updateOptimistic] = useOptimistic(
		initialData ?? [],
		(state: Data[], action: OptimisticAction) => {
			switch (action.type) {
				case 'add':
					return [...state, action.item]
				case 'remove':
					return state.filter((item) => item.id !== action.id)
				default:
					return state
			}
		},
	)
	return (
		<div className="grid items-start gap-8 lg:grid-cols-2">
			<SlowDataCard data={initialData} updateOptimistic={updateOptimistic}/>
			<OptimisticDataCard
				data={optimisticData}
				updateOptimistic={updateOptimistic}
			/>
		</div>
	)
}

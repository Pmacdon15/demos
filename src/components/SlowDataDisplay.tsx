'use client'

import { useMutationState, type UseMutateFunction } from '@tanstack/react-query'
import { startTransition, useState } from 'react'
import {
	useAddDataMutation,
	useFailAddDataMutation,
	useFailDeleteDataMutation,
} from '@/mutations/data-mutations'
import type { Data, OptimisticAction } from '@/types/data-types'

export default function SlowDataDisplay({
	data,
	updateOptimistic,
	mutateDelete,
}: {
	data: Data[] | undefined
	updateOptimistic: (action: OptimisticAction) => void
	mutateDelete: UseMutateFunction<Data | null, Error, number, unknown>
}) {
	const [inputValue, setInputValue] = useState('')
	const { mutate: mutateAdd } = useAddDataMutation()
	const { mutate: mutateFailAdd } = useFailAddDataMutation()
	const { mutate: mutateFailDelete } = useFailDeleteDataMutation()

	const pendingDeletions = useMutationState({
		filters: { mutationKey: ['deleteData'], status: 'pending' },
		select: (mutation) => mutation.state.variables as number,
	})

	const pendingAdditions = useMutationState({
		filters: { mutationKey: ['addData'], status: 'pending' },
	})

	const isAdding = pendingAdditions.length > 0

	const handleAdd = async (e: React.FormEvent, isFail = false) => {
		e.preventDefault()
		const value = inputValue.trim()
		if (!value || isAdding) return

		startTransition(async () => {
			// Optimistic update
			updateOptimistic({
				type: 'add',
				item: {
					id: Math.random(), // temp id
					data: value,
				},
			})
			// Real action
			if (isFail) {
				await mutateFailAdd(value)
			} else {
				await mutateAdd(value)
			}
		})
		setInputValue('')
	}

	const handleDelete = async (id: number, isFail = false) => {
		startTransition(async () => {
			// Optimistic update
			updateOptimistic({ type: 'remove', id })
			// Real action
			if (isFail) {
				await mutateFailDelete(id)
			} else {
				await mutateDelete(id)
			}
		})
	}

	return (
		<div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
			<div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

			<div className="relative z-10">
				<h2 className="mb-2 flex items-center gap-2 font-bold text-white text-xl">
					<span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
					Standard Update
				</h2>
				<p className="mb-6 text-sm text-zinc-400">
					Wait for server response. Changes appear only after the 2s
					delay.
				</p>

				<div className="mb-6 space-y-3">
					{data?.map((item) => {
						const isDeleting = pendingDeletions.includes(item.id)
						return (
							<div
								className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-white/20"
								key={item.id}
							>
								<span className="font-medium text-zinc-200">
									{item.data}
								</span>
								<div className="flex gap-2">
									<button
										className="group/btn relative rounded-lg p-2 text-zinc-500 transition-colors hover:text-red-400 disabled:opacity-50"
										disabled={isDeleting}
										onClick={() =>
											handleDelete(item.id, true)
										}
										title="Simulate Delete Failure"
										type="button"
									>
										<svg
											fill="none"
											height="18"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											width="18"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="m15 9-6 6" />
											<path d="m9 9 6 6" />
											<circle cx="12" cy="12" r="10" />
										</svg>
									</button>
									<button
										className="p-2 text-zinc-500 transition-colors hover:text-red-400 disabled:opacity-50"
										disabled={isDeleting}
										onClick={() => handleDelete(item.id)}
										type="button"
									>
										{isDeleting ? (
											<div className="h-4 w-4 animate-spin rounded-full border-2 border-red-500/30 border-t-red-500" />
										) : (
											// biome-ignore lint/a11y/noSvgWithoutTitle: this is for a demo
											<svg
												fill="none"
												height="18"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												width="18"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M3 6h18" />
												<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
												<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
												<line x1="10" x2="10" y1="11" y2="17" />
												<line x1="14" x2="14" y1="11" y2="17" />
											</svg>
										)}
									</button>
								</div>
							</div>
						)
					})}
				</div>

				<form
					className="flex flex-col gap-3"
					onSubmit={(e) => handleAdd(e)}
				>
					<div className="flex gap-2">
						<input
							className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white transition-all placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 disabled:opacity-50"
							disabled={isAdding}
							onChange={(e) => setInputValue(e.target.value)}
							placeholder="Add something..."
							type="text"
							value={inputValue}
						/>
					</div>
					<div className="flex gap-2">
						<button
							className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 font-semibold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-600 disabled:opacity-50"
							disabled={isAdding}
							type="submit"
						>
							{isAdding ? (
								<div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
							) : (
								<svg
									fill="none"
									height="18"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									width="18"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line x1="12" x2="12" y1="5" y2="19" />
									<line x1="5" x2="19" y1="12" y2="12" />
								</svg>
							)}
							Add Success
						</button>
						<button
							className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-orange-500/50 bg-orange-500/10 px-4 py-2.5 font-semibold text-orange-400 transition-all hover:bg-orange-500/20 disabled:opacity-50"
							disabled={isAdding}
							onClick={(e) => handleAdd(e, true)}
							type="button"
						>
							<svg
								fill="none"
								height="18"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								width="18"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="m15 9-6 6" />
								<path d="m9 9 6 6" />
								<circle cx="12" cy="12" r="10" />
							</svg>
							Add Fail
						</button>
					</div>
				</form>
			</div>

			{(isAdding || pendingDeletions.length > 0) && (
				<div className="absolute right-6 bottom-2">
					<span className="animate-pulse font-bold text-[10px] text-red-400 uppercase tracking-widest">
						Processing...
					</span>
				</div>
			)}
		</div>
	)
}

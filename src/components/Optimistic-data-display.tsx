'use client'

import { startTransition, use, useOptimistic, useState } from 'react'
import { addData, deleteData } from '@/actions/data-actions'
import type { Data } from '@/types/data-types'

type OptimisticAction =
	| { type: 'add'; item: Data }
	| { type: 'remove'; id: number }

export default function OptimisticDataDisplay({
	dataPromise,
}: {
	dataPromise: Promise<Data[]>
}) {
	const initialData = use(dataPromise)
	const [inputValue, setInputValue] = useState('')

	const [optimisticData, updateOptimistic] = useOptimistic(
		initialData,
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

	const handleAdd = async (e: React.FormEvent) => {
		e.preventDefault()
		const value = inputValue.trim()
		if (!value) return

		setInputValue('')

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
			await addData(value)
		})
	}

	const handleDelete = async (id: number) => {
		startTransition(async () => {
			// Optimistic update
			updateOptimistic({ type: 'remove', id })
			// Real action
			await deleteData(id)
		})
	}

	return (
		<div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
			<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

			<div className="relative z-10">
				<h2 className="mb-2 flex items-center gap-2 font-bold text-white text-xl">
					<span className="h-2 w-2 rounded-full bg-emerald-500" />
					Optimistic Update
				</h2>
				<p className="mb-6 text-sm text-zinc-400">
					Instant feedback. UI updates immediately while the server
					works.
				</p>

				<div className="mb-6 space-y-3">
					{optimisticData.map((item) => (
						<div
							className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-white/20"
							key={item.id}
						>
							<span className="font-medium text-zinc-200">
								{item.data}
							</span>
							<button
								className="p-2 text-zinc-500 transition-colors hover:text-emerald-400"
								onClick={() => handleDelete(item.id)}
								type="button"
							>
								{/** biome-ignore lint/a11y/noSvgWithoutTitle: this is a demo */}
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
							</button>
						</div>
					))}
				</div>

				<form className="flex gap-2" onSubmit={handleAdd}>
					<input
						className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white transition-all placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="Add something..."
						type="text"
						value={inputValue}
					/>
					<button
						className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 font-semibold text-white shadow-emerald-500/20 shadow-lg transition-all hover:bg-emerald-600"
						type="submit"
					>
						{/** biome-ignore lint/a11y/noSvgWithoutTitle: this is a demo */}
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
						Add
					</button>
				</form>
			</div>

			<div className="absolute right-6 bottom-2">
				<span className="font-bold text-[10px] text-emerald-400 uppercase tracking-widest">
					Always Ready
				</span>
			</div>
		</div>
	)
}

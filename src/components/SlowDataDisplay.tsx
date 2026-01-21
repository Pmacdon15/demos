'use client'

import { use, useState, useTransition } from 'react'
import { addData, deleteData } from '@/actions/data-actions'
import type { Data } from '@/types/data-types'

export default function SlowDataDisplay({
	dataPromise,
}: {
	dataPromise: Promise<Data[]>
}) {
	const data = use(dataPromise)
	const [isPending, startTransition] = useTransition()
	const [inputValue, setInputValue] = useState('')

	const handleAdd = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!inputValue.trim()) return

		startTransition(async () => {
			await addData(inputValue)
			setInputValue('')
		})
	}

	const handleDelete = async (id: number) => {
		startTransition(async () => {
			await deleteData(id)
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
					{data.map((item) => (
						<div
							className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-white/20"
							key={item.id}
						>
							<span className="font-medium text-zinc-200">
								{item.data}
							</span>
							<button
								className="p-2 text-zinc-500 transition-colors hover:text-red-400 disabled:opacity-50"
								disabled={isPending}
								onClick={() => handleDelete(item.id)}
								type="button"
							>
								{/** biome-ignore lint/a11y/noSvgWithoutTitle: this is for a demo */}
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
						className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white transition-all placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 disabled:opacity-50"
						disabled={isPending}
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="Add something..."
						type="text"
						value={inputValue}
					/>
					<button
						className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 font-semibold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-600 disabled:bg-red-500/50"
						disabled={isPending}
						type="submit"
					>
						{isPending ? (
							<div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
						) : (
							// biome-ignore lint/a11y/noSvgWithoutTitle: This is a demo
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
						Add
					</button>
				</form>
			</div>

			{isPending && (
				<div className="absolute right-6 bottom-2">
					<span className="animate-pulse font-bold text-[10px] text-red-400 uppercase tracking-widest">
						Processing...
					</span>
				</div>
			)}
		</div>
	)
}

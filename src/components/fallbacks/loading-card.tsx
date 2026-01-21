export default function LoadingCard({ color }: { color: 'red' | 'emerald' }) {
	const colorClass = color === 'red' ? 'bg-red-500/20' : 'bg-emerald-500/20'
	return (
		<div className="flex h-[400px] animate-pulse items-center justify-center rounded-2xl border border-white/10 bg-white/5">
			<div
				className={`h-8 w-8 rounded-full ${colorClass} animate-bounce`}
			/>
		</div>
	)
}

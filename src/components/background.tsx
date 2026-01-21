export default function Background() {
	return (
		//   {/* Background decoration */}
		<div className="pointer-events-none fixed inset-0 overflow-hidden">
			<div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-red-500/10 blur-[120px]" />
			<div className="absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
		</div>
	)
}

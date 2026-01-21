import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="mt-20 flex flex-col items-center gap-6 border-white/5 border-t pt-12 text-center">
			<p className="text-sm text-zinc-500">
				Watch the difference when clicking{' '}
				<span className="text-zinc-300">"Add"</span> or{' '}
				<span className="text-zinc-300">"Delete"</span>.
				<br />
				Standard waits for the full round-trip. Optimistic updates the
				UI first.
			</p>
			<Link
				className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
				href="https://github.com/Pmacdon15/test-optimistic"
				rel="noopener noreferrer"
				target="_blank"
			>
				<svg
					aria-hidden="true"
					fill="none"
					height="20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					width="20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
					<path d="M9 18c-4.51 2-5-2-7-2" />
				</svg>
				<span className="font-medium text-sm">View on GitHub</span>
			</Link>
		</footer>
	)
}

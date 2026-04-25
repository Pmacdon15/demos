import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import Background from '@/components/background'
import Footer from '@/components/footer'
import PageHeader from '@/components/headers/page-header'
import DemoContainer from '@/components/optimistic/demo-container'
import { fetchData } from '@/dal/dal'

export default async function Home() {
	const dataPromise = fetchData()

	return (
		<main className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-emerald-500/30">
			<Background />

			<div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
				<Link
					className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-sm text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
					href="/"
				>
					<ArrowLeft
						className="transition-transform group-hover:-translate-x-1"
						size={16}
					/>
					Back to Showcase
				</Link>

				<PageHeader />

				<Suspense>
					<DemoContainer dataPromise={dataPromise} />
				</Suspense>

				<Footer />
			</div>
		</main>
	)
}

import { Suspense } from 'react'
import ClientDataCard from '@/components/client-vs-server/client-data-card'
import Container from '@/components/client-vs-server/container'
import ServerDataCard from '@/components/client-vs-server/server-data-card'
import { fetchData, fetchDataUncached } from '@/dal/dal'

export default function Page() {
	const dataUncachedPromise = fetchDataUncached()
	const dataCachedPromise = fetchData()

	return (
		<div className="flex flex-col justify-center items-center gap-4">
			<Container clientOrServer={'server'}>
				<h1>Cached</h1>
				<ServerDataCard dataPromise={dataCachedPromise} />
			</Container>
			<Container clientOrServer={'server'}>
				<h1>Uncached</h1>
				<Suspense fallback={<h1>Loading ...</h1>}>
					<ServerDataCard dataPromise={dataUncachedPromise} />
				</Suspense>
			</Container>
			<Container clientOrServer={'client'}>
				<ClientDataCard />
			</Container>
		</div>
	)
}

import type { Data } from '@/types/data-types'

export default async function ServerDataCard({
	dataPromise,
}: {
	dataPromise: Promise<Data[]|undefined>
}) {
	const data = await dataPromise
	return (
		<div>
			{data?.map((item) => (
				<div key={item.id}>{item.data}</div>
			))}
		</div>
	)
}

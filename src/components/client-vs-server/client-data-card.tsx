'use client'
import { useFetchData } from '@/hooks/data-hooks'

export default function ClientDataCard() {
	const { data, isLoading } = useFetchData()

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	return (
		<div>
			{data?.map((item) => (
				<div key={item.id}>{item.data}</div>
			))}
		</div>
	)
}

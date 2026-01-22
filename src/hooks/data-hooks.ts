'use client'

import { useQuery } from '@tanstack/react-query'
import type { Data } from '@/types/data-types'

async function fetchDataFromApi(): Promise<Data[]> {
	const res = await fetch('/api/data')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export function useFetchData() {
	return useQuery<Data[]>({
		queryKey: ['data1'],
		queryFn: fetchDataFromApi,
	})
}

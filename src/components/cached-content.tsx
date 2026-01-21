'use cache'
import { getDelayedData } from '@/dal/dal'

export default async function CachedContent() {
	await getDelayedData()
	return (
		<h1>
			{' '}
			This content is cached and is seen right away on the static shell
			load. there still is a delay on first load but its cached across the
			deployment
		</h1>
	)
}

import { fetchDataUncached } from '@/dal/dal'

export async function GET() {
	const data = await fetchDataUncached()

	return Response.json(data)
}

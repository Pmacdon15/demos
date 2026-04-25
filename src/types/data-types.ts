export type Data = {
	id: number
	data: string
}
export type OptimisticAction =
	| { type: 'add'; item: Data }
	| { type: 'remove'; id: number }

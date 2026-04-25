import { useMutation } from '@tanstack/react-query'
import { addData, deleteData } from '@/actions/data-actions'

export const useAddDataMutation = () =>
	useMutation({
		mutationFn: addData,
	})

export const useDeleteDataMutation = () =>
	useMutation({
		mutationFn: deleteData,
	})

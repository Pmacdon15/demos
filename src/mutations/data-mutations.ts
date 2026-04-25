import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { addData, deleteData } from '@/actions/data-actions'

export const useAddDataMutation = () =>
	useMutation({
		mutationKey: ['addData'],
		mutationFn: addData,
		onSuccess: (data) => {
			console.log('Data added successfully', data)
			toast.success('Data added successfully')
		},
		onError: (error) => {
			console.log('Error adding data', error)
			toast.success('Error added successfully')
		},
	})

export const useDeleteDataMutation = () =>
	useMutation({
		mutationKey: ['deleteData'],
		mutationFn: deleteData,
		onSuccess: (data) => {
			console.log('Data deleted successfully', data)
			toast.success('Data delete successfully')
		},
		onError: (error) => {
			console.log('Error deleting data', error)
			toast.success('Error delete successfully')
		},
	})

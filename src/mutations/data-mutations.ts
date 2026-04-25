import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import {
	addData,
	deleteData,
	failAddData,
	failDeleteData,
} from '@/actions/data-actions'

export const useAddDataMutation = () =>
	useMutation({
		mutationKey: ['addData'],
		mutationFn: addData,
		onSuccess: () => {
			toast.success('Successfully added data')
		},
		onError: (error) => {
			toast.error('Failed to add data')
			console.log('Error adding data', error)
		},
	})

export const useFailAddDataMutation = () =>
	useMutation({
		mutationKey: ['addData'],
		mutationFn: failAddData,
		onSuccess: () => {
			toast.success('Wait, this was supposed to fail!')
		},
		onError: (error) => {
			toast.error('Expected failure occurred')
			console.log('Expected failure occurred', error)
		},
	})

export const useDeleteDataMutation = () =>
	useMutation({
		mutationKey: ['deleteData'],
		mutationFn: deleteData,
		onSuccess: () => {
			toast.success('Successfully deleted data')
		},
		onError: (error) => {
			toast.error('Failed to delete data')
			console.log('Failed to delete data', error)
		},
	})

export const useFailDeleteDataMutation = () =>
	useMutation({
		mutationKey: ['deleteData'],
		mutationFn: failDeleteData,
		onSuccess: () => {
			toast.success('Wait, this was supposed to fail!')
		},
		onError: (error) => {
			toast.error('Expected failure occurred')
			console.log('Expected failure occurred', error)
		},
	})

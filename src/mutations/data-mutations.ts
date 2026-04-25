import { useMutation } from '@tanstack/react-query'
import { addData } from '@/actions/data-actions'

export const useAddDataMutation = () => useMutation({
	mutationFn: addData,
})

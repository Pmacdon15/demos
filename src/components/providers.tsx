'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import type * as React from 'react'
import { getQueryClient } from '@/lib/get-query-client'
import { TooltipProvider } from './ui/tooltip'

export default function Providers({ children }: { children: React.ReactNode }) {
	const queryClient = getQueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				{children}
			</TooltipProvider>
			{/* <ReactQueryDevtools /> */}
		</QueryClientProvider>
	)
}

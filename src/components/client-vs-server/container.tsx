export default function Container({
	clientOrServer = 'client',
	children,
}: {
	clientOrServer: 'client' | 'server'
	children: React.ReactNode
}) {
	return (
		<div className="p-8 border rounded-sm">
			<h1>
				{clientOrServer === 'client' ? 'Client' : 'Server '} Component
			</h1>
			{children}
		</div>
	)
}

interface Stat {
	value: string
	label: string
	description?: string
}

interface StatsSectionProps {
	heading?: string
	description?: string
	stats: Stat[]
}

export const StatsSection = ({
	heading = "Trusted by thousands",
	description = "Join the growing community of developers and companies using our platform.",
	stats = [],
}: StatsSectionProps) => {
	return (
		<section className="bg-white py-24 sm:py-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						{heading}
					</h2>
					<p className="mt-4 text-lg leading-8 text-gray-600">{description}</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
						{stats.map((stat, index) => (
							<div
								key={index}
								className="flex flex-col items-center text-center">
								<dt className="text-4xl font-bold leading-9 tracking-tight text-gray-900">
									{stat.value}
								</dt>
								<dd className="mt-2 text-base leading-7 text-gray-600">
									<p className="font-semibold text-gray-900">{stat.label}</p>
									{stat.description && (
										<p className="mt-1 text-sm">{stat.description}</p>
									)}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	)
}

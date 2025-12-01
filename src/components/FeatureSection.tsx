export interface Feature {
	icon?: React.ReactNode
	title: string
	description: string
}

interface FeatureSectionProps {
	heading?: string
	description?: string
	features: Feature[]
}

export const FeatureSection = ({
	heading = "Everything you need",
	description = "All the tools and features you need to build amazing products.",
	features = [],
}: FeatureSectionProps) => {
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
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature, index) => (
							<div key={index} className="flex flex-col">
								{feature.icon && (
									<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
										<div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-900 text-white">
											{feature.icon}
										</div>
									</dt>
								)}
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto font-semibold text-gray-900 mb-2">
										{feature.title}
									</p>
									<p className="flex-auto">{feature.description}</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	)
}

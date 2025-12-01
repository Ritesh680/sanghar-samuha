interface LogoCloudProps {
	heading?: string
	logos: Array<{ name: string; logo: string | React.ReactNode }>
}

export const LogoCloud = ({
	heading = "Trusted by industry leaders",
	logos = [],
}: LogoCloudProps) => {
	return (
		<section className="bg-gray-50 py-16 sm:py-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{heading && (
					<div className="mx-auto max-w-2xl text-center mb-12">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900">
							{heading}
						</h2>
					</div>
				)}
				<div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					{logos.map((item, index) => (
						<div
							key={index}
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
							{typeof item.logo === "string" ? (
								<img
									className="max-h-12 w-full object-contain"
									src={item.logo}
									alt={item.name}
								/>
							) : (
								<div className="text-gray-400 text-2xl font-bold">
									{item.logo}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

interface Testimonial {
	name: string
	role: string
	company: string
	image?: string
	content: string
}

interface TestimonialSectionProps {
	heading?: string
	testimonials: Testimonial[]
}

export const TestimonialSection = ({
	heading = "What our customers say",
	testimonials = [],
}: TestimonialSectionProps) => {
	return (
		<section className="bg-gray-50 py-24 sm:py-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						{heading}
					</h2>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-sm">
							<div>
								<p className="text-base leading-7 text-gray-600 mb-6">
									"{testimonial.content}"
								</p>
							</div>
							<div className="flex items-center gap-x-4">
								{testimonial.image ? (
									<img
										className="h-10 w-10 rounded-full bg-gray-50"
										src={testimonial.image}
										alt={testimonial.name}
									/>
								) : (
									<div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
										<span className="text-gray-600 font-semibold">
											{testimonial.name.charAt(0)}
										</span>
									</div>
								)}
								<div>
									<div className="text-base font-semibold text-gray-900">
										{testimonial.name}
									</div>
									<div className="text-sm text-gray-600">
										{testimonial.role}, {testimonial.company}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

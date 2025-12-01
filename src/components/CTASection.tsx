interface CTASectionProps {
	heading?: string
	description?: string
	primaryCta?: { text: string; href: string }
	secondaryCta?: { text: string; href: string }
	variant?: "default" | "dark"
}

export const CTASection = ({
	heading = "Ready to get started?",
	description = "Start building amazing experiences today.",
	primaryCta = { text: "Get Started", href: "#" },
	secondaryCta,
	variant = "default",
}: CTASectionProps) => {
	const isDark = variant === "dark"
	const bgClass = isDark ? "bg-gray-900" : "bg-white"
	const headingClass = isDark ? "text-white" : "text-gray-900"
	const descriptionClass = isDark ? "text-gray-300" : "text-gray-600"
	const primaryButtonClass = isDark
		? "bg-white text-gray-900 hover:bg-gray-100"
		: "bg-gray-900 text-white hover:bg-gray-800"
	const secondaryButtonClass = isDark
		? "text-white hover:text-gray-300"
		: "text-gray-900 hover:text-gray-700"

	return (
		<section className={`${bgClass} py-24 sm:py-32`}>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2
						className={`text-3xl font-bold tracking-tight ${headingClass} sm:text-4xl`}>
						{heading}
					</h2>
					<p className={`mt-4 text-lg leading-8 ${descriptionClass}`}>
						{description}
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href={primaryCta.href}
							className={`rounded-lg px-6 py-3 text-base font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${primaryButtonClass}`}>
							{primaryCta.text}
						</a>
						{secondaryCta && (
							<a
								href={secondaryCta.href}
								className={`text-base font-semibold leading-7 transition-colors ${secondaryButtonClass}`}>
								{secondaryCta.text} <span aria-hidden="true">→</span>
							</a>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

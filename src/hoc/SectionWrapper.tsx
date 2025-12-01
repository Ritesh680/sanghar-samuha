import { type PropsWithChildren } from "react"

const SectionWrapper = ({
	sectionId,
	heading,
	children,
}: PropsWithChildren<{ sectionId: string; heading: string }>) => {
	return (
		<section id={sectionId} className="bg-white py-24 sm:py-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						{heading}
					</h2>
				</div>
				{children}
			</div>
		</section>
	)
}

export default SectionWrapper

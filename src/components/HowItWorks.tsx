import React from "react"
import { Sun, CloudRain, Snowflake, Flower2, ArrowRight } from "lucide-react"

interface SeasonStep {
	id: number
	season: string
	months: string
	title: string
	description: string
	icon: React.ElementType
	color: string
	bgColor: string
}

const seasonalSteps: SeasonStep[] = [
	{
		id: 1,
		season: "Spring",
		months: "Jan - Mar",
		title: "High Energy Start",
		description:
			"We kick off the year with outdoor team sports like Cricket and Football to get the adrenaline pumping.",
		icon: Flower2,
		color: "text-emerald-600",
		bgColor: "bg-emerald-50",
	},
	{
		id: 2,
		season: "Summer",
		months: "Apr - Jun",
		title: "Beat the Heat",
		description:
			"Indoor tournaments take center stage. Badminton, Table Tennis, and Swimming galas keep us cool.",
		icon: Sun,
		color: "text-orange-500",
		bgColor: "bg-orange-50",
	},
	{
		id: 3,
		season: "Monsoon",
		months: "Jul - Sep",
		title: "Strategy & Skills",
		description:
			"Rainy days are for Chess, Carrom, and strategic team-building workshops inside the clubhouse.",
		icon: CloudRain,
		color: "text-blue-600",
		bgColor: "bg-blue-50",
	},
	{
		id: 4,
		season: "Winter",
		months: "Oct - Dec",
		title: "Grand Finale",
		description:
			"The weather is perfect for our annual Athletics Meet and the City Marathon. End the year strong.",
		icon: Snowflake,
		color: "text-cyan-600",
		bgColor: "bg-cyan-50",
	},
]

const HowItWorks: React.FC = () => {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						A New Challenge Every Quarter
					</h2>
					<p className="text-lg text-gray-600">
						We don't just host random games. We curate a seasonal calendar that
						keeps you active all year round.
					</p>
				</div>

				{/* Timeline Grid */}
				<div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Connector Line (Desktop Only) */}
					<div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10" />

					{seasonalSteps.map((step, index) => (
						<div
							key={step.id}
							className="relative flex flex-col items-center text-center group">
							{/* Step Number / Icon Bubble */}
							<div
								className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white ${step.bgColor} transition-transform duration-300 group-hover:scale-110`}>
								<step.icon className={`w-10 h-10 ${step.color}`} />
							</div>

							{/* Content Card */}
							<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 w-full h-full">
								<div className="flex items-center justify-center gap-2 mb-3">
									<span className="text-xs font-bold uppercase tracking-wider text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full">
										{step.season}
									</span>
									<span className="text-xs font-medium text-gray-500">
										{step.months}
									</span>
								</div>

								<h3 className="text-xl font-bold text-gray-900 mb-3">
									{step.title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{step.description}
								</p>
							</div>

							{/* Mobile Connector Arrow (Visible only on mobile/tablet between items) */}
							{index !== seasonalSteps.length - 1 && (
								<div className="lg:hidden my-4 text-gray-300">
									<ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
								</div>
							)}
						</div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="mt-16 text-center">
					<p className="text-gray-500 mb-4">
						Want to see what's happening right now?
					</p>
					<button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors">
						Check Current Season Schedule
					</button>
				</div>
			</div>
		</section>
	)
}

export default HowItWorks

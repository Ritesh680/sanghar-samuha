import React from "react"
import { Users, Calendar, Trophy, CheckCircle } from "lucide-react"
import { AboutUsData } from "../data/dummyData"

const stats = [
	{ label: "Active Members", value: "20+", icon: Users },
	{ label: "Events Hosted", value: "24", icon: Calendar },
	{ label: "Championships", value: "12", icon: Trophy },
]

const benefits = [
	"Open to all skill levels (Beginner to Pro)",
	"Professional grade equipment provided",
	"Networking opportunities after every game",
	"Safe and inclusive environment",
]

const AboutSection: React.FC = () => {
	return (
		<section className="py-20 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* --- LEFT COLUMN: Content & Stats --- */}
					<div>
						<div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
							Since 2022
						</div>

						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
							{AboutUsData.title} <br />
							<span className="text-blue-600">{AboutUsData.subTitle}</span>
						</h2>

						<p className="text-lg text-gray-600 mb-8 leading-relaxed">
							{AboutUsData.description}
						</p>

						{/* Feature List */}
						<ul className="space-y-3 mb-10">
							{benefits.map((item, index) => (
								<li key={index} className="flex items-start">
									<CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 shrink-0" />
									<span className="text-gray-700">{item}</span>
								</li>
							))}
						</ul>

						{/* Stats Row */}
						<div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
							{stats.map((stat, index) => (
								<div key={index}>
									<div className="flex items-center gap-2 mb-1">
										<stat.icon className="w-4 h-4 text-blue-600" />
										<span className="text-sm font-medium text-gray-500">
											{stat.label}
										</span>
									</div>
									<p className="text-2xl md:text-3xl font-bold text-gray-900">
										{stat.value}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* --- RIGHT COLUMN: Visuals --- */}
					<div className="relative">
						{/* Decorative colored blob background */}
						<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 z-0" />

						<div className="relative z-10 grid grid-cols-2 gap-4">
							<div className="space-y-4 mt-8">
								<img
									src="https://images.unsplash.com/photo-1599982946086-eb42d9e14eb8?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Community Group"
									className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
								/>
								<img
									src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600"
									alt="Running Event"
									className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<div className="space-y-4">
								<img
									src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=600"
									alt="Volleyball Match"
									className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
								/>
								<img
									src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
									alt="Gym Session"
									className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection

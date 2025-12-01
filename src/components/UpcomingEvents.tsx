import React from "react"
import { Calendar, MapPin, ArrowRight, Trophy, Clock } from "lucide-react"
import { UpcomingEventsData } from "../data/dummyData"
import { formatDate } from "date-fns"

const UpcomingEvents: React.FC = () => {
	const featuredEvent = UpcomingEventsData[0]
	const futureEvents = UpcomingEventsData.slice(1)

	return (
		<section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="mb-10 text-center md:text-left">
					<h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
					<p className="mt-2 text-gray-600">
						Mark your calendars for our quarterly showdowns.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* --- LEFT COLUMN: The Main Event (Takes up 2/3 width on large screens) --- */}
					<div className="lg:col-span-2">
						<div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden group">
							{/* Image Background */}
							<div className="absolute inset-0">
								<img
									src={featuredEvent.image}
									alt={featuredEvent.eventTitle}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
							</div>

							{/* Content Overlay */}
							<div className="relative h-full flex flex-col justify-end p-8">
								<div className="flex items-center gap-3 mb-4">
									<span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
										{featuredEvent.bannerTag}
									</span>
									<span className="flex items-center text-gray-300 text-sm">
										<Trophy className="w-4 h-4 mr-1 text-yellow-400" />
										{featuredEvent.category}
									</span>
								</div>

								<h3 className="text-3xl font-bold text-white mb-2">
									{featuredEvent.eventTitle}
								</h3>
								<p className="text-gray-300 mb-6 line-clamp-2">
									{featuredEvent.description}
								</p>

								<div className="flex flex-wrap gap-6 text-white/90 mb-8">
									<div className="flex items-center gap-2">
										<Calendar className="w-5 h-5 text-blue-400" />
										<span>
											{formatDate(
												new Date(featuredEvent.eventDate),
												"MMM d, yyyy"
											)}
										</span>
									</div>
									<div className="flex items-center gap-2">
										<Clock className="w-5 h-5 text-blue-400" />
										<span>
											{formatDate(
												new Date(featuredEvent.eventDate),
												"HH:mm aa"
											)}
										</span>
									</div>
									<div className="flex items-center gap-2">
										<MapPin className="w-5 h-5 text-blue-400" />
										<span>{featuredEvent.location}</span>
									</div>
								</div>

								<button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
									Register Now <ArrowRight className="w-4 h-4" />
								</button>
							</div>
						</div>
					</div>

					{/* --- RIGHT COLUMN: The Pipeline (Takes up 1/3 width) --- */}
					<div className="flex flex-col gap-6">
						<h4 className="text-lg font-semibold text-gray-700">
							Coming Later This Year
						</h4>

						{futureEvents.map((event) => (
							<div
								key={event.id}
								className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
								<div className="flex justify-between items-start mb-2">
									<span className="text-xs font-semibold text-blue-600 uppercase">
										{event.category}
									</span>
									<span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
										{event.bannerTag}
									</span>
								</div>
								<h5 className="font-bold text-gray-900 text-lg mb-2">
									{event.eventTitle}
								</h5>
								<div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
									<Calendar className="w-4 h-4" />
									{formatDate(new Date(event.eventDate), "MMM d, yyyy")}
								</div>
								<button className="text-sm text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1 group">
									View Details
									<ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
								</button>
							</div>
						))}

						{/* View All / Archive Link */}
						<div className="mt-auto pt-4 text-center border-t border-gray-200">
							<a
								href="/events"
								className="text-sm text-gray-500 hover:text-gray-900">
								View Past Event Gallery
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default UpcomingEvents

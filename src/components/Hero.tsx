import React from "react"
import { ArrowRight, Calendar, ChevronDown } from "lucide-react"

// Define props so this component can update dynamically from your Database
interface HeroProps {
	seasonName?: string // e.g. "Winter Season 2024"
	mainHeadline?: string // e.g. "Your Game. Your Community."
	subHeadline?: string // e.g. "Join the local club that introduces a new sport every three months."
	bgImage?: string // URL for the background photo
	registrationLink?: string
	memberCount?: number
}

const HeroSection: React.FC<HeroProps> = ({
	seasonName = "Winter Season 2025",
	mainHeadline = "Your Game. Your Community.",
	subHeadline = "Join the local club that introduces a new sport every three months. Compete, connect, and stay active all year round.",
	bgImage = "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	registrationLink = "#register",
	memberCount = 20,
}) => {
	const scrollToNextSection = () => {
		const nextSection = document.getElementById("upcoming-events")
		if (nextSection) {
			nextSection.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
			{/* 1. Background Image with Parallax-like feel */}
			<div className="absolute inset-0 z-0">
				<img
					src={bgImage}
					alt="Active Club Season"
					className="w-full h-full object-cover"
				/>
				{/* Gradient Overlay: Vital for text readability */}
				<div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/30" />
			</div>

			{/* 2. Main Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
				<div className="max-w-3xl">
					{/* Seasonal Tag */}
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white mb-8 animate-fade-in-up">
						<span className="relative flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
						</span>
						<span className="text-sm font-semibold tracking-wide uppercase">
							{seasonName} Registration Open
						</span>
					</div>

					{/* Headlines */}
					<h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
						{mainHeadline}
					</h1>

					<p className="text-lg md:text-2xl text-gray-200 mb-10 font-light leading-relaxed max-w-2xl">
						{subHeadline}
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 mb-12">
						<a
							href={registrationLink}
							className="group bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2">
							Register Now
							<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
						</a>

						<button
							onClick={scrollToNextSection}
							className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
							<Calendar className="w-5 h-5" />
							View Schedule
						</button>
					</div>

					{/* Social Proof (Avatar Stack) */}
					<div className="flex items-center gap-4 border-t border-white/10 pt-8">
						<div className="flex -space-x-4 rtl:space-x-reverse">
							{[1, 2, 3, 4].map((i) => (
								<img
									key={i}
									className="w-10 h-10 border-2 border-gray-900 rounded-full object-cover"
									src={`https://i.pravatar.cc/100?img=${i + 10}`}
									alt="Member"
								/>
							))}
							<div className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-gray-900 rounded-full hover:bg-gray-600 dark:border-gray-800">
								+99
							</div>
						</div>
						<div className="text-sm text-gray-300">
							<p className="font-semibold text-white">
								{memberCount}+ Active Members
							</p>
							<p>Ready to play in {seasonName}</p>
						</div>
					</div>
				</div>
			</div>

			{/* 3. Scroll Indicator (Animated) */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 text-white/50">
				<span className="text-xs uppercase tracking-widest">Scroll</span>
				<ChevronDown className="w-6 h-6" />
			</div>
		</section>
	)
}

export default HeroSection

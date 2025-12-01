import React, { useState } from "react"
import {
	Facebook,
	Instagram,
	Twitter,
	Mail,
	MapPin,
	Phone,
	ArrowRight,
	Send,
} from "lucide-react"

const Footer: React.FC = () => {
	const [email, setEmail] = useState("")

	const handleSubscribe = (e: React.FormEvent) => {
		e.preventDefault()
		// TODO: Connect to your MERN backend (e.g., POST /api/newsletter)
		alert(`Subscribed with: ${email}`)
		setEmail("")
	}

	return (
		<footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Top Section: Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
					{/* Column 1: Brand & Mission */}
					<div className="space-y-4">
						<div className="flex items-center gap-2 text-white font-bold text-xl">
							<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
								<span>S</span>
							</div>
							<span>Sanghar Samuha</span>
						</div>
						<p className="text-gray-400 text-sm leading-relaxed">
							Building a healthier community through quarterly sports events. We
							believe in competition, connection, and inclusivity for all skill
							levels.
						</p>
						<div className="flex space-x-4 pt-2">
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
								<Twitter className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Column 2: Quick Links */}
					<div>
						<h3 className="text-white font-semibold text-lg mb-4">Club Info</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#about"
									className="hover:text-blue-400 transition-colors flex items-center gap-2">
									<ArrowRight className="w-3 h-3" /> About Us
								</a>
							</li>
							<li>
								<a
									href="#events"
									className="hover:text-blue-400 transition-colors flex items-center gap-2">
									<ArrowRight className="w-3 h-3" /> Upcoming Events
								</a>
							</li>
							<li>
								<a
									href="#gallery"
									className="hover:text-blue-400 transition-colors flex items-center gap-2">
									<ArrowRight className="w-3 h-3" /> Photo Gallery
								</a>
							</li>
							<li>
								<a
									href="#schedule"
									className="hover:text-blue-400 transition-colors flex items-center gap-2">
									<ArrowRight className="w-3 h-3" /> Season Schedule
								</a>
							</li>
						</ul>
					</div>

					{/* Column 3: Contact */}
					<div>
						<h3 className="text-white font-semibold text-lg mb-4">
							Contact Us
						</h3>
						<ul className="space-y-4">
							<li className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
								<span className="text-sm">
									Devdaha, Bhaluhi
									<br />
									Rupandehi, Nepal
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
								<span className="text-sm">+977 9800000000</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
								<span className="text-sm">hello@sangharsamuha.com</span>
							</li>
						</ul>
					</div>

					{/* Column 4: Newsletter (Crucial for Quarterly Updates) */}
					<div>
						<h3 className="text-white font-semibold text-lg mb-4">
							Stay Updated
						</h3>
						<p className="text-sm text-gray-400 mb-4">
							Don't miss the next season registration. Get notified when we
							launch new events.
						</p>
						<form onSubmit={handleSubscribe} className="relative">
							<input
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500 pr-12"
								required
							/>
							<button
								type="submit"
								className="absolute right-2 top-2 p-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
								aria-label="Subscribe">
								<Send className="w-4 h-4" />
							</button>
						</form>
					</div>
				</div>

				{/* Bottom Section: Copyright & Legal */}
				<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-gray-500">
						&copy; {new Date().getFullYear()} Sanghar Samuha. All rights
						reserved.
					</p>
					<div className="flex space-x-6 text-sm text-gray-500">
						<a href="#" className="hover:text-white transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Terms of Service
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Cookie Settings
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

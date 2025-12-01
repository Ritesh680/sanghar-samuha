import { useState } from "react"

interface HeaderProps {
	logo?: string
	navItems?: Array<{ label: string; href: string }>
	ctaText?: string
	ctaHref?: string
}

export const Header = ({
	logo = "Sanghar",
	navItems = [],
	ctaText = "Get Started",
	ctaHref = "#",
}: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
			<nav className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<a href="/" className="text-2xl font-bold text-gray-900">
							{logo}
						</a>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex md:items-center md:space-x-8">
						{navItems.map((item, index) => (
							<a
								key={index}
								href={item.href}
								className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
								{item.label}
							</a>
						))}
						<a
							href={ctaHref}
							className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
							{ctaText}
						</a>
					</div>

					{/* Mobile menu button */}
					<button
						className="md:hidden p-2 text-gray-700"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu">
						<svg
							className="h-6 w-6"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor">
							{isMenuOpen ? (
								<path d="M6 18L18 6M6 6l12 12" />
							) : (
								<path d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden py-4 space-y-4">
						{navItems.map((item, index) => (
							<a
								key={index}
								href={item.href}
								className="block text-sm font-medium text-gray-700 hover:text-gray-900"
								onClick={() => setIsMenuOpen(false)}>
								{item.label}
							</a>
						))}
						<a
							href={ctaHref}
							className="block rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white text-center"
							onClick={() => setIsMenuOpen(false)}>
							{ctaText}
						</a>
					</div>
				)}
			</nav>
		</header>
	)
}

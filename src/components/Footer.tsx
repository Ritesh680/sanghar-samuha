interface FooterLink {
	label: string
	href: string
}

interface FooterColumn {
	title: string
	links: FooterLink[]
}

interface FooterProps {
	logo?: string
	description?: string
	columns?: FooterColumn[]
	copyright?: string
}

export const Footer = ({
	logo = "Sanghar",
	description = "Building amazing experiences.",
	columns = [],
	copyright = `© ${new Date().getFullYear()} Sanghar. All rights reserved.`,
}: FooterProps) => {
	return (
		<footer className="bg-white border-t">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					{/* Brand Section */}
					<div className="space-y-8">
						<div className="text-2xl font-bold text-gray-900">{logo}</div>
						<p className="text-sm leading-6 text-gray-600">{description}</p>
					</div>

					{/* Links Columns */}
					{columns.length > 0 && (
						<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
							{columns.map((column, index) => (
								<div key={index}>
									<h3 className="text-sm font-semibold leading-6 text-gray-900">
										{column.title}
									</h3>
									<ul role="list" className="mt-6 space-y-4">
										{column.links.map((link, linkIndex) => (
											<li key={linkIndex}>
												<a
													href={link.href}
													className="text-sm leading-6 text-gray-600 hover:text-gray-900 transition-colors">
													{link.label}
												</a>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Copyright */}
				<div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
					<p className="text-xs leading-5 text-gray-500">{copyright}</p>
				</div>
			</div>
		</footer>
	)
}

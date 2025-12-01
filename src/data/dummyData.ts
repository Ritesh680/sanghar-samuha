// Dummy data for the application
import type { Feature } from "../components/FeatureSection"

export const navItems = [
	{ label: "Features", href: "#features" },
	{ label: "How it works", href: "#how-it-works" },
	{ label: "Upcoming Events", href: "#upcoming-events" },
	{ label: "About Us", href: "#about-us" },
]

export const heroData = {
	heading: "Your Game. Your Community. Every Season.",
	description:
		"Join Sanghar Samuha for local sports tournaments. Open to all ages and skill levels.",
	primaryCta: { text: "Register for Upcoming Events", href: "#" },
	secondaryCta: { text: "View Past Events", href: "#" },
}

export const featuresData: Feature[] = [
	{
		icon: "",
		title: "A New Challenge Every Quarter",
		description:
			"Built with performance in mind. Our components are optimized for speed and efficiency.",
	},
	{
		icon: "",
		title: "Fully Customizable",
		description:
			"Easily customize every component to match your brand and design requirements.",
	},
	{
		icon: "",
		title: "Mobile First",
		description:
			"Responsive by default. All components work seamlessly across all devices and screen sizes.",
	},
	{
		icon: "",
		title: "Secure & Reliable",
		description:
			"Built with security best practices. Your data and applications are safe with us.",
	},
	{
		icon: "",
		title: "Great Support",
		description:
			"Get help when you need it. Our team is here to support you every step of the way.",
	},
	{
		icon: "",
		title: "Easy Integration",
		description:
			"Integrate seamlessly with your existing tools and workflows. Get started in minutes.",
	},
]

export const UpcomingEventsData = [
	{
		id: 1,
		bannerTag: "REGISTRATION OPEN",
		eventTitle: "The Winter Badminton Championship",
		eventDate: new Date("2026-01-15"),
		location: "Devdaha, Bhaluhi",
		description:
			"Whether you are a smash-pro or just playing for fun, join us for a day of shuttles and smiles. Categories for Juniors, Men’s Doubles, and Mixed Doubles.",
		registerButton: {
			text: "Register Now",
			href: "#",
			subText: "Rs 100 Entry Fee",
		},
		image:
			"https://images.unsplash.com/photo-1732737915298-ba37d6b1aa55?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Badminton",
	},
	{
		id: 2,
		bannerTag: "COMING SOON",
		eventTitle: "The Spring Cricket Bash",
		eventDate: new Date("2026-03-10"),
		location: "Devdaha, Bhaluhi",
		description:
			"T20 format tournament for local clubs. Open to all ages and skill levels.",
		registerButton: {
			text: "Register Now",
			href: "#",
			subText: "Rs 100 Entry Fee",
		},
		image:
			"https://images.unsplash.com/photo-1599982946086-eb42d9e14eb8?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Cricket",
	},
	{
		id: 3,
		bannerTag: "COMING SOON",
		eventTitle: "The Summer Swim Gala",
		eventDate: new Date("2026-06-20"),
		location: "Devdaha, Bhaluhi",
		description:
			"Open to all ages and skill levels. Categories for Juniors, Men’s Doubles, and Mixed Doubles.",
		registerButton: {
			text: "Register Now",
			href: "#",
			subText: "Rs 100 Entry Fee",
		},
		image:
			"https://images.unsplash.com/photo-1516549162266-9550b0423a95?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "General",
	},
]

export const AboutUsData = {
	title: "More than Just Sports",
	subTitle: "We Build Community.",
	description:
		"Sanghar Samuha was built to bring our neighbors together. We believe that a healthy community is a happy community. Our quarterly events are designed not just for competition, but to help you meet new friends, stay active, and take a break from the daily grind.",
}

export const testimonialsData = [
	{
		name: "Sarah Johnson",
		role: "Product Manager",
		company: "TechCorp",
		content:
			"This component library has transformed how we build products. The reusable components save us countless hours and the quality is outstanding.",
	},
	{
		name: "Michael Chen",
		role: "Frontend Developer",
		company: "StartupXYZ",
		content:
			"The best component library I've used. Clean, modern, and incredibly easy to customize. Highly recommend!",
	},
	{
		name: "Emily Rodriguez",
		role: "Design Lead",
		company: "CreativeStudio",
		content:
			"Beautiful design system that makes it easy to maintain consistency across all our projects. Our team loves it!",
	},
]

export const footerColumns = [
	{
		title: "Product",
		links: [
			{ label: "Features", href: "#features" },
			{ label: "Pricing", href: "#pricing" },
			{ label: "Documentation", href: "#docs" },
			{ label: "Changelog", href: "#changelog" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "About", href: "#about" },
			{ label: "Blog", href: "#blog" },
			{ label: "Careers", href: "#careers" },
			{ label: "Contact", href: "#contact" },
		],
	},
	{
		title: "Legal",
		links: [
			{ label: "Privacy", href: "#privacy" },
			{ label: "Terms", href: "#terms" },
			{ label: "Cookie Policy", href: "#cookies" },
		],
	},
]

export const ctaData = {
	heading: "Ready to get started?",
	description:
		"Start building amazing experiences today. Join thousands of developers already using our components.",
	primaryCta: { text: "Get Started", href: "#" },
	secondaryCta: { text: "View Documentation", href: "#docs" },
}

export const statsData = [
	{
		value: "10K+",
		label: "Active Users",
		description: "Growing every day",
	},
	{
		value: "50+",
		label: "Countries",
		description: "Worldwide presence",
	},
	{
		value: "99.9%",
		label: "Uptime",
		description: "Reliable service",
	},
	{
		value: "24/7",
		label: "Support",
		description: "Always here to help",
	},
]

export const logoCloudData = [
	{ name: "Company 1", logo: "ACME" },
	{ name: "Company 2", logo: "TechCorp" },
	{ name: "Company 3", logo: "StartupXYZ" },
	{ name: "Company 4", logo: "Innovate" },
	{ name: "Company 5", logo: "Digital" },
]

export const footerData = [
	{
		label: "Address",
		value: "Devdaha, Bhaluhi, Rupandehi",
	},
	{
		label: "Contact",
		value: "+977 9800000000",
	},
	{ label: "Socials", value: "Facebook, Instagram, Twitter" },
]

import { Header } from "./components/Header"

import { CTASection } from "./components/CTASection"
import { navItems, ctaData } from "./data/dummyData"
import HowItWorks from "./components/HowItWorks"
import UPcoming from "./components/UpcomingEvents"
import AboutSection from "./components/AboutSection"
import HeroSection from "./components/Hero"
import Footer from "./components/footers"

function App() {
	return (
		<div className="min-h-screen">
			<Header navItems={navItems} />
			<main>
				<HeroSection />
				<HowItWorks />
				<UPcoming />
				<AboutSection />

				<CTASection {...ctaData} variant="dark" />
				<Footer />
			</main>
		</div>
	)
}

export default App

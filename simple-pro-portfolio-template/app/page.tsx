'use client';

import { useTheme } from './components/theme/ThemeProvider';
import { ThemeToggle } from './components/theme/ThemeToggle';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function SimplePortfolioPro() {
	const { theme } = useTheme();

	return (
		<div className={theme}>
			<main className="min-h-screen bg-white dark:bg-gray-900 pt-12">
				<ThemeToggle />
				<HeroSection />
				<SkillsSection />
				<ProjectsSection />
				<ContactSection />
			</main>
		</div>
	);
}

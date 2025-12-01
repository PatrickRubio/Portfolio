'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				{/* Profile Photo */}
				<div className="mb-6 sm:mb-8">
					<Image
						src="/ProfilePhoto2.jpg"
						alt="Patrick Rubio"
						width={120}
						height={120}
						className="rounded-full mx-auto border-4 border-gray-50 dark:border-gray-700 shadow-lg"
					/>
				</div>

				{/* Name */}
				<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
					Patrick Rubio
				</h1>

				{/* Title */}
				<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
					Software Engineer • Backend & Full-Stack Development
				</p>

				{/* Summary */}
				<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					Software Engineer with hands on experience building production ready applications using
					Java, Android Studio, JavaScript, and AWS. I focus on creating clean, scalable, and
					reliable systems from cloud-powered backend APIs to polished user experiences. Passionate
					about solving real problems, learning quickly, and delivering software that works.
				</p>
			</div>
		</section>
	);
}

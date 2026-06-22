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
						width={150}
						height={150}
						className="rounded-full mx-auto border-4 border-gray-50 dark:border-gray-700 shadow-lg"
					/>
				</div>

				{/* Name */}
				<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
					Patrick Rubio
				</h1>

				{/* Title */}
				<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
					Software Engineer • Backend, Full-Stack & Cloud Development
				</p>
			
				{/* Summary */}
				<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					Software engineer building backend, cloud, mobile, and full-stack applications using Java, Spring Boot, SQL, TypeScript, React Native, and AWS. 
					I am the creator of BudgetPair, a privacy-focused budgeting app for couples, and have also developed REST APIs, serverless applications, and native Android software. 
					As a former Starbucks Store Manager who led a team of more than 30 employees, I value technical problem-solving, clear communication, strong leadership, and taking ownership of my work.
				</p>
			</div>
		</section>
	);
}

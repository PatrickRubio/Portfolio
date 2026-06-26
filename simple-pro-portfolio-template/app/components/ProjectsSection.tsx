import Image from 'next/image';

export default function ProjectsSection() {
	const projects = [
		{
			title: 'BudgetPair – Couples Budgeting App',
			description:
				'A privacy-focused, local-first budgeting application that helps couples organize shared finances. Built with React Native, Expo, and TypeScript, with offline functionality, optional Google and Apple sign-in, temporary couple synchronization, and RevenueCat-powered lifetime Pro access.',
			image: '/BudgetPair Promo 1.1.png',
			link: 'https://apps.apple.com/us/app/budgetpair-couples-budgeting/id6779858073',
			linkLabel: 'View on Apple App Store',
			technologies: [
				'React Native',
				'Expo',
				'TypeScript',
				'Hono',
				'tRPC',
				'Upstash Redis',
				'RevenueCat',
			],
			disabled: true,
		},
		{
			title: 'ReserveNow – Booking System Backend',
			description:
				'A Java and Spring Boot REST API for managing users, service listings, availability, and time-based reservations. Includes secure password hashing, relational database models, input validation, transactional workflows, and booking-conflict prevention.',
			image: '/reserveNow1.png',
			link: 'https://github.com/PatrickRubio/ReserveNow-Application',
			linkLabel: 'View on GitHub',
			technologies: [
				'Java',
				'Spring Boot',
				'PostgreSQL',
				'Spring Data JPA',
				'Hibernate',
				'REST APIs',
			],
		},
		{
			title: 'Wedding RSVP Platform – AWS Serverless App',
			description:
				'A full-stack RSVP platform used by more than 100 wedding guests. Features attendance tracking, meal selections, dietary restrictions, plus-one management, and event-specific responses through a responsive frontend and serverless AWS backend.',
			image: '/weddingWebsite1.png',
			link: 'https://briannapluspatrick.com',
			linkLabel: 'Visit Live Website',
			technologies: [
				'JavaScript',
				'AWS Lambda',
				'API Gateway',
				'DynamoDB',
				'AWS Amplify',
				'Route 53',
			],
		},
		{
			title: 'Vacation Planner – Android Application',
			description:
				'A native Android travel-planning application for managing vacations and associated excursions. Includes persistent local storage, CRUD operations, date validation, search, notifications, sharing, and multi-screen navigation.',
			image: '/vacationPlanner1.png',
			link: 'https://github.com/PatrickRubio/VacationPlannerMobileApp',
			linkLabel: 'View on GitHub',
			technologies: [
				'Java',
				'Android',
				'Room',
				'SQLite',
				'MVVM',
				'XML',
			],
		},
	];

	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
					Featured Projects
				</h2>

				<p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8 sm:mb-10">
					A selection of mobile, backend, full-stack, and cloud applications
					I have designed, developed, and deployed.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project) => (
						<article
							key={project.title}
							className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
						>
							<div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
								<Image
									src={project.image}
									alt={`${project.title} project preview`}
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									className="object-cover"
								/>
							</div>

							<div className="p-5 sm:p-6 flex flex-col flex-1">
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
									{project.title}
								</h3>

								<p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-5">
									{project.technologies.map((technology) => (
										<span
											key={technology}
											className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300"
										>
											{technology}
										</span>
									))}
								</div>

								<div className="mt-auto">
									{project.disabled ? (
										<span className="text-gray-500 dark:text-gray-400 font-medium text-sm">
											{project.linkLabel}
										</span>
									) : (
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm sm:text-base"
										>
											{project.linkLabel}
											<span aria-hidden="true" className="ml-1">
												→
											</span>
										</a>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
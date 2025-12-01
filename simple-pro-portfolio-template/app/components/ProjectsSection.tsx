import Image from 'next/image';

export default function ProjectsSection() {
	const projects = [
		{
			title: 'Vacation Planner – Android Mobile Application',
			description:
				'A full Android application built with Java and XML that allows users to browse destinations, manage itineraries, and view excursions. Includes clean UI design, API integration, SQL-backed data, and structured navigation. Demonstrates mobile development, state management, and Android Studio workflow.',
			image: '/vacationPlanner1.png', 
			link: 'https://github.com/PatrickRubio/VacationPlannerMobileApp',
		},
		{
			title: 'Wedding Website – AWS Cloud Full-Stack App',
			description:
				'A production-grade website built using HTML, CSS, and JavaScript with full AWS integration. Features a secure RSVP system powered by API Gateway, AWS Lambda (Node.js), and DynamoDB. Hosted on AWS Amplify with custom domain routing via Route 53. Demonstrates backend engineering, cloud architecture, and serverless deployment. Password: Olowalu',
			image: '/weddingWebsite1.png', 
			link: 'https://briannapluspatrick.com',
		},
	];

	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
					Featured Projects
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover"/>
							</div>

							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
									{project.title}
								</h3>

								<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
									{project.description}
								</p>

								<div className="flex gap-2">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

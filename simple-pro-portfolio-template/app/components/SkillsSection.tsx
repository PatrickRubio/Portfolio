export default function SkillsSection() {
	const skills = [
		// Core Languages
		'Java', 
		'JavaScript', 
		'Python', 
		'SQL',

		// Backend & APIs
		'Spring Boot',
		'REST APIs',
		'JSON / XML',
		'JWT Authentication',

		// Frontend
		'HTML',
		'CSS',
		'React',
		'Angular',

		// Mobile
		'Android Studio',
		'XML Layouts',

		// Databases
		'MySQL',
		'AWS Dynamo DB',
		
		// Cloud & DevOps
		'AWS Lambda',
		'AWS API Gateway',
		'AWS Amplify',
		'Docker',
		'Git',

		// Other
		// 'Agile / Scrum',
	];

	return (
		<section className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
					Skills & Technologies
				</h2>

				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
					{skills.map((skill) => (
						<div
							key={skill}
							className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow dark:hover:shadow-gray-500 text-sm sm:text-base text-gray-900 dark:text-gray-200"
						>
							{skill}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

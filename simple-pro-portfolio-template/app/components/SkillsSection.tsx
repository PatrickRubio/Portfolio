export default function SkillsSection() {
	const skillGroups = [
		{
			title: 'Backend Development',
			description:
				'Java, Spring Boot, REST APIs, Spring Data JPA, Hibernate',
		},
		{
			title: 'Frontend & Mobile',
			description:
				'TypeScript, JavaScript, React Native, Expo, HTML, CSS',
		},
		{
			title: 'Databases & Cloud',
			description:
				'PostgreSQL, MySQL, SQLite, DynamoDB, AWS, Vercel',
		},
		{
			title: 'Development Tools',
			description:
				'Git, GitHub, Docker, Maven, Postman, Android Studio',
		},
	];

	return (
		<section className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-20">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-3">
					Skills & Technologies
				</h2>

				<p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8 sm:mb-10">
					Technologies I use to build backend, full-stack, mobile, and
					cloud-based applications.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
					{skillGroups.map((group) => (
						<div
							key={group.title}
							className="bg-white dark:bg-gray-700 rounded-xl shadow-sm p-5 sm:p-6"
						>
							<h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
								{group.title}
							</h3>

							<p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
								{group.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

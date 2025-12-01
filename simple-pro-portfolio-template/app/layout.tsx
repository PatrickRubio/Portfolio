import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Patrick Rubio - Software Engineer',
	description:
		'Software Engineer based in Los Angeles specializing in Java, Android development, SQL, and cloud-based solutions on AWS. Passionate about building practical, user-focused applications with clean architecture and modern engineering practices.',
	keywords: [
		'Software Engineer',
		'Java Developer',
		'Backend Engineer',
		'Full Stack Developer',
		'Android Developer',
		'Spring Boot',
		'MySQL',
		'SQL',
		'JavaScript',
		'HTML',
		'CSS',
		'AWS',
		'AWS Amplify',
		'AWS RDS',
		'API Gateway',
		'Lambda',
		'React',
		'Next.js',
		'GitHub',
		'GitLab',
		'Clean Code',
		'Cloud Engineering',
		'Los Angeles Software Engineer',
		'Patrick Rubio',
	],
	authors: [{ name: 'Patrick Rubio' }],
	creator: 'Patrick Rubio',
	openGraph: {
		title: 'Patrick Rubio - Software Engineer Portfolio',
		description:
			'Explore the work of Patrick Rubio, a Software Engineer focused on backend development, Android apps, and cloud-based solutions using Java, SQL, and AWS.',
		url: 'https://your-domain.com',
		siteName: 'Patrick Rubio - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Patrick Rubio - Software Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Patrick Rubio - Software Engineer',
		description:
			'Software Engineer with experience in Java, Android, SQL, and AWS. Clean architecture, scalable backend systems, and modern mobile development.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider>
					{children}
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}

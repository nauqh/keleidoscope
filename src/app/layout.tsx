import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Nav from "@/components/Nav";

import "./globals.css";

const raleway = Raleway({
	weight: ["400", "700"],
	variable: "--font-raleway",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://keleidoscope.vercel.app"),
	title: {
		template: "%s | Keleidoscope",
		default: "Keleidoscope - Personal Writing Collection",
	},
	description:
		"A unique collection of fiction, poetry, and short stories by Keleidoscope",
	keywords: ["keleidoscope", "writing", "fiction", "poetry", "short stories"],
	verification: {
		google: "your-verification-code",
	},
	icons: {
		icon: "/logo.svg",
	},
	alternates: {
		canonical: "https://keleidoscope.vercel.app",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://keleidoscope.vercel.app",
		siteName: "Keleidoscope",
		title: "Keleidoscope - Personal Writing Collection",
		description:
			"This little corner of the internet is where my words and occasional existential crises live and breathe.",
		images: [
			{
				url: "/kel.png",
				width: 1200,
				height: 630,
				alt: "Keleidoscope - Personal Writing Collection",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Keleidoscope - Personal Writing Collection",
		description:
			"This little corner of the internet is where my words and occasional existential crises live and breathe.",
		images: ["/kel.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${raleway.variable} antialiased`}>
				<Nav />
				{children}
			</body>
		</html>
	);
}

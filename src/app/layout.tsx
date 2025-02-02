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

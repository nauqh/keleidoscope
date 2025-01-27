"use client";
import React, { Suspense, useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const PostHeader = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	return (
		<div className="container mx-auto px-4 py-5">
			<h2 className="text-sm font-semibold text-[hsl(var(--secondary-color))]">
				{searchParams.get("tags")?.toUpperCase().split(",").join("-")}
			</h2>
			<h1 className="text-4xl my-2 capitalize">
				{pathname.split("/").pop()?.replace(/-/g, " ")}
			</h1>
			<span className="tracking-wider text-sm">
				WRITTEN by{" "}
				<Link
					href="/"
					className="hover:text-[hsl(var(--secondary-color))] uppercase"
				>
					Kel
				</Link>
			</span>
		</div>
	);
};

export default function PostLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [showButton, setShowButton] = useState(false); // Add state for button visibility

	useEffect(() => {
		const handleScroll = () => {
			const totalHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const isFifth = window.scrollY > totalHeight / 5;
			setShowButton(isFifth);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<Fade cascade={true} triggerOnce={true}>
				<Suspense fallback={<div>Loading...</div>}>
					<PostHeader />
				</Suspense>
				<div
					className="container mx-auto px-4 py-5"
					style={{ marginBottom: "5rem" }}
				>
					{children}
				</div>
			</Fade>
			{showButton && (
				<button
					onClick={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })
					}
					className="fixed bottom-10 right-10 bg-[hsl(var(--secondary-color))] text-white p-4 text-xl rounded-full shadow-lg hover:opacity-80 transition-opacity"
					aria-label="Back to top"
				>
					<FaArrowUp size={20} />
				</button>
			)}
			<footer className="container mx-auto px-4 py-5 text-center text-sm text-gray-500">
				<p>
					{new Date().toLocaleDateString("en-US", {
						weekday: "long",
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</p>
			</footer>
		</>
	);
}

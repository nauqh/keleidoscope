"use client";
import React, { Suspense } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const PostHeader = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	return (
		<div className="container mx-auto px-4 py-5">
			<h2 className="text-sm font-semibold text-[hsl(var(--secondary-color))]">
				{searchParams.get("tags")?.toUpperCase().split(",").join(" ")}
			</h2>
			<h1 className="text-4xl my-2 capitalize">
				{pathname.split("/").pop()}
			</h1>
			<span className="tracking-wider text-sm">
				WRITTEN by{" "}
				<Link
					href="/"
					className="hover:text-[hsl(var(--secondary-color))] uppercase"
				>
					Keleidoscope
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

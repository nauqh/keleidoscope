"use client";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="sticky top-0 bg-white z-50 shadow-sm">
			<div className="container mx-auto p-1">
				<div className="my-4 px-2 flex items-center justify-between">
					<h1
						className="text-3xl font-semibold transition-transform duration-300 hover:scale-110"
						style={{ fontFamily: "'Reenie Beanie', cursive" }}
					>
						<Link href="/">Keleidoscope</Link>
					</h1>

					{/* Hamburger button */}
					<button
						className="md:hidden p-2"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<div className="w-6 h-0.5 bg-black mb-1"></div>
						<div className="w-6 h-0.5 bg-black mb-1"></div>
						<div className="w-6 h-0.5 bg-black"></div>
					</button>

					{/* Desktop menu */}
					<ul className="hidden md:flex space-x-8">
						{["Home", "About", "Contact"].map((text) => (
							<li key={text} className="hover:underline">
								<Link href={`/${text.toLowerCase()}`}>
									{text}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Mobile menu */}
				{isMenuOpen && (
					<ul className="md:hidden pb-4">
						{["Home", "About", "Contact"].map((text) => (
							<li key={text} className="hover:underline py-2">
								<Link href={`/${text.toLowerCase()}`}>
									{text}
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Nav;

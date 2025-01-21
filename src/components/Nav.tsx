"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

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
						<FaBars className="w-6 h-6" />
					</button>

					{/* Desktop menu */}
					<ul className="hidden md:flex space-x-8">
						{["Home", "About", "Contact"].map((text) => (
							<li
								key={text}
								className="hover:bg-gray-100 px-3 py-2 rounded-md"
							>
								<Link href={`/${text.toLowerCase()}`}>
									{text}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Mobile menu */}
				<div
					className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
						isMenuOpen
							? "max-h-48 opacity-100"
							: "max-h-0 opacity-0"
					}`}
				>
					<ul className="pb-4 text-center">
						{["Home", "About", "Contact"].map((text) => (
							<li
								key={text}
								className="hover:bg-gray-100 px-3 py-2 rounded-md"
							>
								<Link href={`/${text.toLowerCase()}`}>
									{text}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;

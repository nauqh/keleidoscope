"use client";
import Link from "next/link";
import { useState } from "react";
import {
	FaBars,
	FaTimes,
	FaSearch,
	FaInstagram,
	FaLinkedin,
	FaRegEnvelope,
} from "react-icons/fa";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="sticky top-0 bg-white z-50 shadow-md">
			<div className="container mx-auto p-1">
				<div className="my-2 px-2 flex items-center justify-between">
					<h1 className="hidden md:block text-xl transition-transform duration-300 hover:scale-110">
						<Link className="font-semibold" href="/">
							Keleidoscope
						</Link>
					</h1>

					{/* Hamburger button */}
					<button
						className="md:hidden p-2"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<FaTimes className="w-6 h-6 text-gray-800" />
						) : (
							<FaBars className="w-6 h-6 text-gray-800" />
						)}
					</button>

					{/* Desktop menu */}
					<ul className="hidden md:flex space-x-4">
						{["Home", "About", "Collection"].map((text) => (
							<li
								key={text}
								className="duration-300 hover:scale-110 px-3 py-2 rounded-md relative group"
							>
								{text === "Collection" ? (
									<div>
										<Link href="/posts/collection">
											{text}
										</Link>
										<ul className="hidden group-hover:block absolute left-0 bg-white shadow-md rounded-lg w-48 mt-2">
											{[
												{
													title: "Dream Journal",
													path: "dream-journal",
												},
												{ title: "Life", path: "life" },
											].map((item) => (
												<li
													key={item.path}
													className="hover:bg-[#f5efe7] hover:text-[hsl(var(--secondary-color))] px-3 py-2 rounded-md"
												>
													<Link
														href={`/posts/collection/${item.path}`}
													>
														{item.title}
													</Link>
												</li>
											))}
										</ul>
									</div>
								) : (
									<Link
										href={
											text === "Home"
												? "/"
												: `/${text.toLowerCase()}`
										}
										onClick={() => setIsMenuOpen(false)}
									>
										{text}
									</Link>
								)}
							</li>
						))}
					</ul>

					<div className="relative mx-4">
						<input
							type="text"
							placeholder="Search..."
							className="w-[200px] px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-[hsl(var(--secondary-color))]"
						/>
						<button className="absolute right-3 top-1/2 -translate-y-1/2">
							<FaSearch className="w-3 h-3 text-gray-400" />
						</button>
					</div>
				</div>

				{/* Mobile menu */}
				<div
					className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
						isMenuOpen
							? "max-h-48 opacity-100"
							: "max-h-0 opacity-0"
					}`}
				>
					<ul className="pb-4 absolute left-0 bg-[#faf6f1] shadow-md rounded-b-lg w-48">
						{["Home", "About", "Collection"].map((text) => (
							<li key={text} className="px-3 py-2 rounded-md">
								{text === "Collection" ? (
									<div>
										<button
											className="w-full text-left"
											onClick={(e) => {
												e.preventDefault();
												const submenu =
													e.currentTarget
														.nextElementSibling;
												if (submenu) {
													submenu.classList.toggle(
														"hidden"
													);
												}
											}}
										>
											{text}
										</button>
										<ul className="mt-2 ml-4 hidden">
											{[
												{
													title: "Dream Journal",
													path: "dream-journal",
												},
												{ title: "Life", path: "life" },
											].map((item) => (
												<li
													key={item.path}
													className="hover:bg-[#f5efe7] hover:text-[hsl(var(--secondary-color))] px-3 py-2 rounded-md"
												>
													<Link
														href={`/posts/collection/${item.path}`}
														onClick={() =>
															setIsMenuOpen(false)
														}
													>
														{item.title}
													</Link>
												</li>
											))}
										</ul>
									</div>
								) : (
									<Link
										href={
											text === "Home"
												? "/"
												: `/${text.toLowerCase()}`
										}
										onClick={() => setIsMenuOpen(false)}
									>
										{text}
									</Link>
								)}
							</li>
						))}
						{/* Social links for mobile */}
						<div className="flex px-3 gap-4 mt-4">
							<Link href="https://www.instagram.com/kelramel_/">
								<FaInstagram className="text-xl" />
							</Link>
							<Link href="#">
								<FaLinkedin className="text-xl" />
							</Link>
							<Link href="mailto:hodominhquan.self@gmail.com">
								<FaRegEnvelope className="text-xl" />
							</Link>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;

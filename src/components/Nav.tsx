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
import postsData from "@/data/posts.json";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const availablePosts = postsData.posts;
	const { toast } = useToast();

	const handleSearch = () => {
		const query = searchQuery.toLowerCase();
		const result = availablePosts.find(
			(post) =>
				post.tags.some((keyword) => keyword.includes(query)) ||
				post.title.toLowerCase().includes(query)
		);

		if (result) {
			setSearchQuery("");
			window.location.href = result.url;
		} else {
			toast({
				description: "Blank space? I’m no Taylor Swift—fill it up!",
				className: "bg-yellow-100 text-yellow-800",
				duration: 3000,
			});
			setSearchQuery("");
		}
	};

	const handleTagClick = (tag: string) => {
		setSearchQuery(tag);
	};

	return (
		<nav className="sticky top-0 bg-white z-50 shadow-sm">
			<div className="container mx-auto p-1 max-w-5xl">
				<div className="my-2 px-2 flex items-center justify-between">
					<h1 className="text-xl hover:opacity-60">
						<Link
							className="tracking-[0.2rem] font-light uppercase"
							href="/"
							onClick={() => {
								setIsMenuOpen(false);
								setIsSearchOpen(false);
							}}
						>
							Keleidoscope
						</Link>
					</h1>

					<div className="flex items-center gap-4 ml-auto">
						{/* Search button  */}
						<button
							className="p-2 z-50 relative"
							onClick={() => setIsSearchOpen(!isSearchOpen)}
						>
							<div className="relative w-5 h-5">
								<FaSearch
									className={`w-5 h-5 text-gray-600 absolute top-0 left-0 transition-all duration-300 ease-in-out ${
										isSearchOpen ? "rotate-90" : "rotate-0"
									}`}
								/>
							</div>
						</button>

						{/* Menu button */}
						<button
							className="p-2 z-50 relative"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<div className="relative w-6 h-6">
								<FaTimes
									className={`w-6 h-6 text-gray-600 absolute top-0 left-0 transition-all duration-300 ease-in-out ${
										isMenuOpen
											? "opacity-100 rotate-0"
											: "opacity-0 rotate-90"
									}`}
								/>
								<FaBars
									className={`w-6 h-6 text-gray-600 absolute top-0 left-0 transition-all duration-300 ease-in-out ${
										isMenuOpen
											? "opacity-0 -rotate-90"
											: "opacity-100 rotate-0"
									}`}
								/>
							</div>
						</button>
					</div>
				</div>
			</div>

			{/* Search Overlay */}
			<div
				className={`fixed inset-0 bg-[#faf6f1] transition-all duration-300 ease-in-out ${
					isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				style={{ top: "64px" }}
			>
				<div className="container mx-auto p-8 max-w-5xl">
					<div className="max-w-2xl mx-auto">
						<div className="relative">
							<input
								type="text"
								placeholder="Type something..."
								className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[hsl(var(--secondary-color))] bg-white"
								autoFocus={isSearchOpen}
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<button
								className="absolute right-0 top-0 h-full px-6 rounded-r-lg bg-transparent hover:bg-[#a08977] text-[#a08977] hover:text-white transition-all"
								onClick={() => {
									if (!searchQuery.trim()) {
										toast({
											description:
												"Blank space? I’m no Taylor Swift—fill it up!",
											className:
												"bg-yellow-100 text-yellow-800",
											duration: 3000,
										});
									} else {
										handleSearch();
									}
								}}
							>
								Search
							</button>
						</div>
						<div className="mt-8">
							<h3 className="text-lg font-medium mb-4">
								Popular Tags
							</h3>
							<div className="flex flex-wrap gap-2">
								{[
									"fiction",
									"short story",
									"collection",
									"poetry",
								].map((tag) => (
									<button
										key={tag}
										className="px-4 py-2 rounded-full bg-white hover:bg-[#a08977] hover:text-white transition-colors"
										onClick={() => handleTagClick(tag)}
									>
										{tag}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Menu Overlay */}
			<div
				className={`fixed inset-0 bg-[#faf6f1] transition-all duration-300 ease-in-out ${
					isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				style={{ top: "64px" }}
			>
				<div className="h-full flex flex-col items-center justify-center">
					<ul className="text-center">
						{["Home", "About", "Collection"].map((text) => (
							<li key={text} className="mb-6">
								{text === "Collection" ? (
									<div className="relative">
										<button
											className="text-2xl font-medium hover:text-[hsl(var(--secondary-color))]"
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
										<ul className="hidden mt-4 space-y-2">
											{[
												{
													title: "Sweet Cavity",
													path: "sweet-cavity",
													img: "https://static01.nyt.com/images/2022/03/01/arts/28flora1/28flora1-videoSixteenByNineJumbo1600.jpg",
													tags: [
														"fiction",
														"collection",
													],
												},
												{
													title: "Dream Journal",
													path: "dream-journal",
													img: "https://images8.alphacoders.com/119/1197975.jpg",
													tags: [
														"fiction",
														"short story",
														"collection",
													],
												},
											].map((item) => (
												<li
													key={item.path}
													className="hover:bg-[#f5efe7] hover:text-[hsl(var(--secondary-color))] px-3 py-2 rounded-md"
												>
													<Link
														href={`/posts/collection/${
															item.path
														}?tags=${item.tags.join()}&img=${
															item.img
														}`}
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
										className="text-2xl font-medium hover:text-[hsl(var(--secondary-color))]"
									>
										{text}
									</Link>
								)}
							</li>
						))}
					</ul>
					{/* Social links */}
					<div className="flex gap-4 mt-8">
						<Link
							href="https://www.instagram.com/kelramel_/"
							className="text-2xl hover:text-[hsl(var(--secondary-color))]"
						>
							<FaInstagram />
						</Link>
						<Link
							href="https://www.linkedin.com/in/kel-thai-76119a20a"
							className="text-2xl hover:text-[hsl(var(--secondary-color))]"
						>
							<FaLinkedin />
						</Link>
						<Link
							href="mailto:hodominhquan.self@gmail.com"
							className="text-2xl hover:text-[hsl(var(--secondary-color))]"
						>
							<FaRegEnvelope />
						</Link>
					</div>
				</div>
			</div>
			<Toaster />
		</nav>
	);
};

export default Nav;

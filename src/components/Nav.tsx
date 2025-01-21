import Link from "next/link";

const Nav = () => {
	return (
		<nav className="sticky top-0 bg-white z-50 shadow-sm">
			<div className="container mx-auto p-1">
				<div className="my-4 flex items-center justify-between">
					<h1
						className="text-3xl font-semibold transition-transform duration-300 hover:scale-110"
						style={{ fontFamily: "'Reenie Beanie', cursive" }}
					>
						<Link href="/">Keleidoscope</Link>
					</h1>
					<ul className="flex space-x-8">
						{["Home", "About", "Contact"].map((text) => (
							<li key={text} className="hover:underline">
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

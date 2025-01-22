import Link from "next/link";

const Footer = () => {
	return (
		<footer
			className="container mx-auto"
			style={{
				marginTop: "5rem",
			}}
		>
			<div className="my-4 flex justify-between tracking-wider">
				<div className="mx-auto font-light">
					<span>© {new Date().getFullYear()} Keleidoscope. </span>
					Made with 🤎 by{" "}
					<span className="transition-transform duration-300 hover:scale-110 inline-block text-[hsl(var(--secondary-color))]">
						<Link href="https://nauqh.dev">Nauqh</Link>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

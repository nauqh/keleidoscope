import Link from "next/link";

const Footer = () => {
	return (
		<footer
			className="container mx-auto"
			style={{
				marginTop: "5rem",
			}}
		>
			<div className="my-4 flex justify-between">
				<div className="mx-auto font-light">
					Made with 💗 by{" "}
					<span className="transition-transform duration-300 hover:scale-110 inline-block font-bold">
						<Link href="https://nauqh.github.io">Nauqh</Link>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

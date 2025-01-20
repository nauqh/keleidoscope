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
					Design & Built by{" "}
					<span className="transition-transform duration-300 hover:scale-110 inline-block font-bold">
						<a href="https://nauqh.github.io">Nauqh</a>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import { buttonVariants } from "@/components/ui/button";

import { Fade } from "react-awesome-reveal";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center">
			<Fade>
				<div className="text-center p-5" style={{ marginTop: "10rem" }}>
					<h1 className="text-6xl mb-4">404</h1>
					<Typewriter text="Page Not Found" delay={100} />
					<p className="text-xl font-light text-muted-foreground mb-8">
						The page you're looking for has drifted away into the
						void
					</p>
					<Link
						href="/"
						className={buttonVariants({ variant: "outline" })}
					>
						Return home
					</Link>
				</div>
			</Fade>
		</div>
	);
}

import React from "react";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";

const page = () => {
	return (
		<div className="container mx-auto px-4 py-5">
			<Typewriter text="unreliable narrator" delay={100} />
			<div className="container mx-auto w-[80%]">
				<h1 className="text-left text-2xl">About.</h1>
				<div className="flex-col md:flex-row flex justify-between items-center gap-4">
					<Image
						src="/self.jpg"
						alt="Author's photo"
						width={300}
						height={300}
						className="rounded-md my-4 h-auto"
					/>
					<div className="space-y-4">
						<p>
							Erin Boyle is the writer and photographer behind
							Reading My Tea Leaves. Shes a minimalist with a
							penchant for a good story and a soft spot for an
							aged patina. Her approach to living simply is one
							that acknowledges that life isnt always simple, but
							the curtains can be.
						</p>
						<p>
							Erin grew up in a house full of sisters on the
							Connecticut shoreline. She studied history as an
							undergrad at Sarah Lawrence College and has a
							masters in public humanities from Brown University.
							Past work in historic and cultural preservation
							informs her desire to cherish what is beautiful,
							useful, and meaningful. Time spent living in an
							apartment with a footprint of just 173 square feet
							taught her to reevaluate everything else.
						</p>
						<p>
							Erins first book, Simple Matters, came out in
							January, 2016. Its a nod to the growing consensus
							that living simply and purposefully is more
							sustainable not only for the environment, but for
							our own happiness and well-being, too. Erin embraces
							the notion that "living small" is beneficial and
							accessible to us all—whether were renting a tiny
							apartment or purchasing a three-story house.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;

"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import dynamic from "next/dynamic";

const InstagramEmbed = dynamic(
	() => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
	{
		ssr: false,
	}
);

const page = () => {
	return (
		<>
			<div className="container mx-auto px-4 py-5">
				<Fade cascade={true}>
					<Typewriter text="unreliable narrator" delay={100} />
					<div className="container mx-auto w-[80%]">
						<div className="flex my-8">
							<div>
								<h1 className="text-center text-2xl tracking-wider uppercase">
									About me.
								</h1>
								<Image
									src="/self.jpg"
									alt="Authors photo"
									width={200}
									height={200}
									className="rounded-md my-12"
								/>
							</div>
							<div className="flex-1 flex justify-end">
								<div className="p-14 bg-[#eae7e4]">
									<Image
										src="/self.jpg"
										alt="Authors photo"
										width={300}
										height={300}
										className="rounded-md h-auto"
									/>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<p className="text-lg">
								Erin Boyle is the writer and photographer behind
								Reading My Tea Leaves. Shes a minimalist with a
								penchant for a good story and a soft spot for an
								aged patina. Her approach to living simply is
								one that acknowledges that life isnt always
								simple, but the curtains can be.
							</p>
							<p className="text-lg">
								Erin grew up in a house full of sisters on the
								Connecticut shoreline. She studied history as an
								undergrad at Sarah Lawrence College and has a
								masters in public humanities from Brown
								University. Past work in historic and cultural
								preservation informs her desire to cherish what
								is beautiful, useful, and meaningful. Time spent
								living in an apartment with a footprint of just
								173 square feet taught her to reevaluate
								everything else.
							</p>
							<p className="text-lg">
								Erins first book, Simple Matters, came out in
								January, 2016. Its a nod to the growing
								consensus that living simply and purposefully is
								more sustainable not only for the environment,
								but for our own happiness and well-being, too.
								Erin embraces the notion that living small is
								beneficial and accessible to us all—whether were
								renting a tiny apartment or purchasing a
								three-story house.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-8 my-8">
							<button className="p-2 rounded-sm w-full text-lg font-light hover:bg-[#eae7e4] hover:text-white transition-colors border border-gray-800 hover:border-[#eae7e4]">
								<Link href="/home">Read my featured blog</Link>
							</button>
							<button className="p-2 rounded-sm w-full text-lg font-light hover:bg-[#eae7e4] hover:text-white transition-colors border border-gray-800 hover:border-[#eae7e4]">
								<Link href="/home">Visit my collections</Link>
							</button>
							<button className="p-2 rounded-sm w-full text-lg font-light hover:bg-[#eae7e4] hover:text-white transition-colors border border-gray-800 hover:border-[#eae7e4]">
								<Link href="/home">Connect with me</Link>
							</button>
						</div>
					</div>
					<div className="my-8 rounded-md">
						<div className="flex flex-col sm:flex-row gap-8 justify-around">
							<div>
								<h1 className="text-center text-xl">
									ON INSTAGRAM
								</h1>
								<h3 className="text-center text-xg p-2 hover:scale-105">
									<Link href="https://www.instagram.com/kelramel_/">
										@kelramel_
									</Link>
								</h3>

								<InstagramEmbed url="https://www.instagram.com/kelramel_/" />
							</div>
						</div>
					</div>
				</Fade>
			</div>
			<footer className="container mx-auto px-4 py-5 text-center text-sm text-gray-500">
				<p>
					{new Date().toLocaleDateString("en-US", {
						weekday: "long",
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</p>
			</footer>
		</>
	);
};

export default page;

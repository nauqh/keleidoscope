"use client";
import { useEffect } from "react";
import Post from "@/components/Post";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";
import Footer from "@/components/Footer";
import mailgo from "mailgo";

import { Fade } from "react-awesome-reveal";

import { FaInstagram, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const Page = () => {
	useEffect(() => {
		mailgo();
	}, []);

	return (
		<div>
			<Fade cascade={true} triggerOnce={true}>
				<ul
					className="hidden md:flex fixed left-8 top-1/2 flex-col gap-2 z-10"
					id="social"
				>
					<li>
						<Link href="https://www.instagram.com/kelramel_/">
							<FaInstagram className="text-2xl transition-all duration-300 hover:scale-110" />
						</Link>
					</li>
					<li>
						<Link href="/linkedin">
							<FaLinkedin className="text-2xl transition-all duration-300 hover:scale-110" />
						</Link>
					</li>
					<li>
						<Link href="mailto:hodominhquan.self@gmail.com">
							<FaRegEnvelope className="text-2xl transition-all duration-300 hover:scale-110" />
						</Link>
					</li>
				</ul>

				<div className="container mx-auto px-4 pt-5" id="slogan">
					<div className="hidden md:block">
						<Typewriter
							text="dumping thoughts on dumb ears"
							delay={100}
						/>
					</div>
					<div className="md:hidden">
						<Typewriter text="a voice in the void" delay={100} />
					</div>
				</div>

				<div className="container mx-auto px-4 py-5" id="posts">
					<div className="columns-1 md:columns-2 gap-6 space-y-6">
						<Fade cascade={true} triggerOnce={true}>
							<Post
								title="DREAM JOURNAL"
								img="https://images8.alphacoders.com/119/1197975.jpg"
								posted_at="2023-12-14T15:30:00Z"
								description="There's so much I've been taught in school. But I've learned one thing: how much people deny their need for good stories. A lie, a truth, doesn't really matter. What matters is control. That's the gist: if you hold it, they buy it."
								tags={["fiction", "short story"]}
							/>

							<Post
								title="UNSPOILED"
								img="https://openaccess-cdn.clevelandart.org/1971.47/1971.47_print.jpg"
								posted_at="2023-12-14T15:30:00Z"
								description="The cotton drifted, unfolding the pristine blue that played a melodic acoustic soundtrack by my ear. The maple leaves rustling beneath my striped pyjamas pants joined the serene tweeting, occupying the main performing slot."
								tags={["short story", "nature"]}
							/>

							<Post
								title="SWEET CAVITY"
								img="https://static01.nyt.com/images/2022/03/01/arts/28flora1/28flora1-videoSixteenByNineJumbo1600.jpg"
								posted_at="2023-12-15T12:00:00Z"
								description="Sweet Cavity can be enjoyed as an experimental sweet menu, my attempt to figure out the ultimate etiquette to devour the umami of companionship. The bonbon textures of language and structure serve to pierce, to dip, to scoop, to shovel in unique ways, challenging your poetic pancreas."
								tags={["poetry", "collection"]}
							/>
							<Post
								title="NAOMI"
								img="https://i.pinimg.com/736x/4a/be/59/4abe5946d2209fd260363b751ad4e93c.jpg"
								posted_at="2023-12-14T15:30:00Z"
								description="Some of my classmates were startled when they saw me on stage, but they applauded. I've never really stepped foot on a stage since. My dad said no. He switched from Ted Talks to Trump."
								tags={["fiction", "short story"]}
							/>
						</Fade>
					</div>
				</div>
			</Fade>
			<Footer />
		</div>
	);
};

export default Page;

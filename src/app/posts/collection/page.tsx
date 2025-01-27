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
				<div className="container mx-auto px-4 pt-5" id="slogan">
					<div className="hidden md:block">
						<Typewriter
							text="a collection of thoughts and stories"
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
								title="SWEET CAVITY"
								img="/sweet-cavity.jpeg"
								posted_at="2023-12-15T12:00:00Z"
								description="Sweet Cavity can be enjoyed as an experimental sweet menu, my attempt to figure out the ultimate etiquette to devour the umami of companionship. The bonbon textures of language and structure serve to pierce, to dip, to scoop, to shovel in unique ways, challenging your poetic pancreas."
								tags={["fiction", "collection"]}
							/>
							<Post
								title="LIFE"
								img="https://s3-eu-west-1.amazonaws.com/asthebirdfliesblog.com/content/images/posts/beige-minimal-aesthetic-photo-collage_x960.jpg?v=1"
								posted_at="2023-12-14T15:30:00Z"
								tags={["fiction", "collection"]}
							/>
						</Fade>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Page;

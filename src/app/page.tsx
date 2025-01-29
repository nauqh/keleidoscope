"use client";
import { useEffect } from "react";
import Post from "@/components/Post";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";
import Footer from "@/components/Footer";
import mailgo from "mailgo";
import postsData from "@/data/posts.json";

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
							{postsData.posts.map((post, index) => (
								<Post
									key={index}
									title={post.title}
									img={post.img}
									posted_at={post.posted_at}
									description={post.description}
									tags={post.tags}
								/>
							))}
						</Fade>
					</div>
				</div>
			</Fade>
			<Footer />
		</div>
	);
};

export default Page;

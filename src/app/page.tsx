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

import dynamic from "next/dynamic";

const InstagramEmbed = dynamic(
	() => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
	{
		ssr: false,
	}
);

const Page = () => {
	useEffect(() => {
		mailgo();
	}, []);

	return (
		<div>
			<Fade cascade={true} triggerOnce={true}>
				<ul
					className="hidden  fixed left-8 top-1/2 flex-col gap-2 z-10"
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
				<ul
					className="hidden lg:flex fixed -left-10 top-1/2 flex-row gap-8 z-10 uppercase text-sm"
					style={{ transform: "rotate(-90deg)" }}
				>
					{[
						{
							text: "email me",
							href: "mailto:hodominhquan.self@gmail.com",
							hasEmbed: false,
						},
						{ text: "feature", href: "/linkedin", hasEmbed: true },
						{
							text: "social",
							href: "https://www.instagram.com/kelramel_/",
							hasEmbed: true,
						},
					].map((item, index) => (
						<li key={index} className="relative group">
							<Link href={item.href}>{item.text}</Link>
							{item.hasEmbed ? (
								<div className="hidden group-hover:block absolute -right-20 transform rotate-90 w-[320px] h-[420px] z-20">
									<InstagramEmbed url="https://www.instagram.com/kelramel_/" />
								</div>
							) : (
								<div className="hidden group-hover:block absolute -right-20 transform rotate-90 w-[320px] h-[420px] z-20 bg-secondary" />
							)}
						</li>
					))}
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

				<div className="container my-4 mx-auto px-4 py-8 bg-[#faf6f1] rounded-sm">
					<div className="max-w-md mx-auto text-center">
						<h2 className="text-xl mb-4 uppercase">
							Subscribe to Newsletter
						</h2>
						<p className="mb-6 text-gray-600">
							Stay updated with my latest thoughts and stories.
						</p>
						<div className="flex gap-2">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#b39d90]"
							/>
							<button className="px-6 py-2 bg-[#b39d90] text-white rounded-sm hover:bg-[#a08977] transition-colors">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</Fade>
			<Footer />
		</div>
	);
};

export default Page;

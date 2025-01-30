"use client";
import { useEffect } from "react";
import Post from "@/components/Post";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";
import Footer from "@/components/Footer";
import mailgo from "mailgo";
import postsData from "@/data/posts.json";
import Image from "next/image";

import { Fade } from "react-awesome-reveal";
import { FaInstagram, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

import dynamic from "next/dynamic";

const CollectionHover = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-start">
				<div>
					<h3 className="text-lg">
						<Link
							href="/posts/collection/sweet-cavity?tags=poetry,collection&img=https://static01.nyt.com/images/2022/03/01/arts/28flora1/28flora1-videoSixteenByNineJumbo1600.jpg"
							className="hover:text-[#b39d90]"
						>
							Sweet Cavity
						</Link>
					</h3>
					<Image
						src="https://static01.nyt.com/images/2022/03/01/arts/28flora1/28flora1-videoSixteenByNineJumbo1600.jpg"
						alt="Description"
						width={150}
						height={150}
						className="mt-4 w-auto rounded-sm"
					/>
				</div>
			</div>
			<div className="flex justify-end">
				<div>
					<h3 className="text-lg">
						<Link
							href="/posts/collection/dream-journal?tags=fiction,short%20story,collection&img=https://images8.alphacoders.com/119/1197975.jpg"
							className="hover:text-[#b39d90]"
						>
							Dream Journal
						</Link>
					</h3>
					<Image
						src="https://images8.alphacoders.com/119/1197975.jpg"
						alt="Description"
						width={150}
						height={150}
						className="mt-4 w-auto rounded-sm"
					/>
				</div>
			</div>
		</div>
	);
};

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
			<div>
				<ul
					className="hidden lg:flex fixed top-1/2 flex-row gap-8 z-10 text-sm"
					style={{ transform: "rotate(-90deg)" }}
				>
					{[
						{
							text: "collection",
							href: "mailto:hodominhquan.self@gmail.com",
							hasEmbed: false,
						},
						{
							text: "social",
							href: "https://www.instagram.com/kelramel_/",
							hasEmbed: false,
						},
					].map((item, index) => (
						<li key={index} className="relative group">
							<Link
								className="hover:text-[#b39d90] uppercase"
								href={item.href}
							>
								{item.text}
							</Link>

							<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute -right-40 transform rotate-90 w-[400px] h-[420px] rounded-sm -z-10 transition-all duration-300 ease-in-out">
								<div className="absolute -left-[70px] top-[180px] w-20 h-10" />
								{item.text === "collection" ? (
									<div className="bg-[#faf6f1] p-8 h-full rounded-sm">
										<h2 className="text-2xl uppercase">
											{item.text}
										</h2>
										<hr className="my-2 border-gray-600" />
										<CollectionHover />
									</div>
								) : (
									<InstagramEmbed
										url="https://www.instagram.com/kelramel_/"
										width={328}
									/>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
			<Fade cascade={true} triggerOnce={true}>
				<ul
					className="hidden fixed left-8 top-1/2 flex-col gap-2 z-10"
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

				<div className="my-4 px-4 py-20 bg-[#faf6f1] rounded-sm">
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

"use client";
import { useEffect, useState } from "react";
import Post from "@/components/Post";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";
import Footer from "@/components/Footer";
import mailgo from "mailgo";
import postsData from "@/data/posts.json";
import Image from "next/image";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

import { Fade } from "react-awesome-reveal";
import dynamic from "next/dynamic";

const CollectionHover = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-start">
				<Link
					href="/posts/collection/sweet-cavity?tags=poetry,collection&img=https://static01.nyt.com/images/2022/03/01/arts/28flora1/28flora1-videoSixteenByNineJumbo1600.jpg"
					className="hover:text-[#b39d90]"
				>
					<h3 className="text-lg">Sweet Cavity</h3>
					<Image
						src="https://static01.nyt.com/images/2022/03/01/arts/28flora1/28flora1-videoSixteenByNineJumbo1600.jpg"
						alt="Description"
						width={150}
						height={150}
						className="mt-4 w-auto rounded-sm"
					/>
				</Link>
			</div>
			<div className="flex justify-end">
				<Link
					href="/posts/collection/dream-journal?tags=fiction,short%20story,collection&img=https://images8.alphacoders.com/119/1197975.jpg"
					className="hover:text-[#b39d90]"
				>
					<h3 className="text-lg">Dream Journal</h3>
					<Image
						src="https://images8.alphacoders.com/119/1197975.jpg"
						alt="Description"
						width={150}
						height={150}
						className="mt-4 w-auto rounded-sm"
					/>
				</Link>
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
	const [message, setMessage] = useState("");
	const { toast } = useToast();

	useEffect(() => {
		mailgo();
	}, []);

	const handleSend = () => {
		console.log("Message:", message);
		setMessage("");
	};

	return (
		<div>
			<Fade cascade={true} triggerOnce={true}>
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
									<div className="bg-[#faf6f1] p-8 h-full rounded-sm shadow-md">
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
							{postsData.posts.map((post, index) =>
								post.posted_at ? (
									<Post
										key={index}
										title={post.title}
										img={post.img}
										posted_at={post.posted_at}
										description={post.description}
										tags={post.tags}
									/>
								) : null
							)}
						</Fade>
					</div>
				</div>

				<div className="my-4 px-4 py-20 bg-[#faf6f1] rounded-sm">
					<div className="max-w-md mx-auto text-center">
						<h2 className="text-xl mb-4 uppercase">
							Send me your thoughts
						</h2>
						<p className="mb-6 text-gray-600">
							Roast me (or hype me up) - anonymously
						</p>
						<div className="flex flex-col gap-3">
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder="Your message"
								rows={4}
								className="px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#b39d90] resize-none"
							></textarea>
							<button
								onClick={() => {
									if (!message.trim()) {
										toast({
											description:
												"Hey! Be sneaky, not empty!",
											variant: "destructive",
											duration: 3000,
										});
										return;
									}
									handleSend();
									toast({
										description:
											"Your message has been sent.",
										duration: 3000,
									});
								}}
								className="px-6 py-2 bg-[#b39d90] text-white rounded-sm hover:bg-[#a08977] transition-colors"
							>
								Send
							</button>
						</div>
					</div>
				</div>
			</Fade>
			<Toaster />
			<Footer />
		</div>
	);
};

export default Page;

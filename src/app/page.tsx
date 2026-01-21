"use client";
import { useEffect, useState, useMemo } from "react";
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

type SortOrder = "newest" | "oldest";

const CollectionHover = () => {
	return (
		<div className="flex flex-col gap-6 h-[calc(420px-120px)]">
			<Link
				href="/posts/collection/sweet-cavity?tags=poetry,collection&img=https://static01.nyt.com/images/2022/03/01/arts/28flora1/28flora1-videoSixteenByNineJumbo1600.jpg"
				className="hover:text-[#b39d90] flex flex-col items-start"
			>
				<h3 className="text-lg mb-2">Sweet Cavity</h3>
				<Image
					src="https://static01.nyt.com/images/2022/03/01/arts/28flora1/28flora1-videoSixteenByNineJumbo1600.jpg"
					alt="Description"
					width={150}
					height={150}
					className="w-auto rounded-sm"
				/>
			</Link>
			<Link
				href="/posts/collection/dream-journal?tags=fiction,short%20story,collection&img=https://images8.alphacoders.com/119/1197975.jpg"
				className="hover:text-[#b39d90] flex flex-col items-end"
			>
				<h3 className="text-lg mb-2">Dream Journal</h3>
				<Image
					src="https://images8.alphacoders.com/119/1197975.jpg"
					alt="Description"
					width={150}
					height={150}
					className="w-auto rounded-sm"
				/>
			</Link>
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
	const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
	const { toast } = useToast();

	useEffect(() => {
		mailgo();
	}, []);

	const sortedPosts = useMemo(() => {
		const postsWithDates = postsData.posts.filter((post) => post.posted_at);
		return [...postsWithDates].sort((a, b) => {
			const dateA = new Date(a.posted_at!).getTime();
			const dateB = new Date(b.posted_at!).getTime();
			return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
		});
	}, [sortOrder]);

	const handleSend = () => {
		fetch("https://keleidoserve.up.railway.app/feedback", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				message: message,
			}),
		});
		setMessage("");
	};

	return (
		<div>
			<Fade cascade={true} triggerOnce={true}>
				<div className="container mx-auto my-12 max-w-5xl px-4">
					<ul
						className="hidden lg:flex absolute left-12 top-[40%] flex-row gap-8 z-10 text-sm mt-10"
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
					<div className="flex flex-col sm:flex-row gap-4 justify-around max-w-3xl mx-auto">
						<div className="p-4 sm:p-0 flex justify-center order-first sm:order-last">
							<div className="p-10 bg-[#faf6f1] rounded-md relative">
								<Image
									src="https://images.saatchiart.com/saatchi/401164/art/3953923/3023779-HSC00001-7.jpg"
									alt="Authors photo"
									width={250}
									height={300}
									className="rounded-md h-full"
								/>
								<Image
									src="/home_logo.svg"
									alt="Authors photo"
									width={90}
									height={90}
									className="absolute sm:-left-16 sm:-bottom-8 left-1/2 bottom-4 sm:transform-none transform -translate-x-1/2 translate-y-20 w-[80px] sm:w-[90px] h-[80px] sm:h-[90px]"
								/>
							</div>
						</div>

						<div className="mt-12 sm:my-0 p-4 sm:p-0 flex flex-col justify-center order-last sm:order-first">
							<h2 className="text-sm font-light uppercase">
								featured
							</h2>
							<h1 className="text-4xl my-2">Unspoiled</h1>
							<p className="max-w-sm my-8 tracking-wider">
								The cotton drifted, unfolding the pristine blue
								that played a melodic acoustic soundtrack by my
								ear. The maple leaves rustling beneath my
								striped pyjamas pants joined the serene
								tweeting, occupying the main performing slot.
							</p>

							<Link
								href="/posts/unspoiled?tags=short story,nature&img=https://openaccess-cdn.clevelandart.org/1971.47/1971.47_print.jpg"
								className="w-fit px-6 py-1 tracking-wider border border-gray-400 rounded-sm hover:bg-[#b39d90] hover:text-white hover:border-[#b39d90] transition-colors"
							>
								Read the post
							</Link>
						</div>
					</div>
				</div>

				<div
					className="container mx-auto px-4 pt-5 md:mt-24 max-w-5xl"
					id="slogan"
				>
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

				<div
					className="container mx-auto px-4 py-5 max-w-5xl"
					id="posts"
				>
					<div className="flex justify-end mb-6">
						<div className="flex items-center gap-3 text-sm text-gray-500">
							<span className="tracking-wide">Sort by</span>
							<div className="flex border border-gray-300 rounded-sm overflow-hidden">
								<button
									onClick={() => setSortOrder("newest")}
									className={`px-3 py-1.5 transition-all duration-200 ${
										sortOrder === "newest"
											? "bg-[#b39d90] text-white"
											: "bg-transparent hover:bg-gray-100"
									}`}
								>
									Newest
								</button>
								<button
									onClick={() => setSortOrder("oldest")}
									className={`px-3 py-1.5 transition-all duration-200 ${
										sortOrder === "oldest"
											? "bg-[#b39d90] text-white"
											: "bg-transparent hover:bg-gray-100"
									}`}
								>
									Oldest
								</button>
							</div>
						</div>
					</div>
					<div className="columns-1 md:columns-2 gap-4 space-y-4">
						<Fade cascade={true} triggerOnce={true} damping={0.1}>
							{sortedPosts.map((post, index) => (
								<Post
									key={`${post.title}-${index}`}
									title={post.title}
									img={post.img}
									posted_at={post.posted_at!}
									description={post.description}
									tags={post.tags}
								/>
							))}
						</Fade>
					</div>
				</div>

				<div className="my-4 px-4 py-20 bg-[#faf6f1] rounded-sm">
					<div className="max-w-sm mx-auto text-center">
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
											className:
												"bg-yellow-100 text-yellow-800",
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

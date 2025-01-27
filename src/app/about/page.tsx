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
			<div className="container mx-auto py-5">
				<Fade cascade={true} triggerOnce={true}>
					<Typewriter text="Read with a grain of salt" delay={100} />
					<div className="container mx-auto w-[80%]">
						<div className="flex flex-col sm:flex-row my-8">
							<div>
								<h1 className="text-2xl tracking-wider uppercase">
									About me.
								</h1>
								<Image
									src="/kel.jpg"
									alt="Authors photo"
									width={200}
									height={200}
									className="rounded-md my-12"
								/>
								<Typewriter
									text="unreliable narrator"
									delay={100}
								/>
							</div>
							<div className="flex-1 flex justify-end">
								<div className="p-14 bg-[#eae7e4]">
									<Image
										src="/portrait.jpg"
										alt="Authors photo"
										width={300}
										height={300}
										className="rounded-md h-auto"
									/>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<p className="text-lg tracking-wider">
								I’m Kel, a made-not-born storyteller who
								stumbled into writing and just kind of… stayed.
								There’s no grand plan here—just massive
								appreciation for stories and self-expression.
								Whether it’s a poem, a short story, or whatever
								spills out of my head, I enjoy sharing my work
								and seeing where my creativity takes me. This
								little corner of the internet is where my words
								and occasional existential crises live and
								breathe.
							</p>
							<p className="text-lg tracking-wider">
								If you somehow ended up here, I have
								questions... but also, welcome! I write simply
								because I can and because I love it. No big
								aspirations (yet). For now, I’m just throwing my
								thoughts into the void, hoping they might
								resonate with someone, somewhere. Or not. Maybe
								my words will just exist, hanging around like
								that awkward friend who never knows when to
								leave.
							</p>
							<p className="text-lg tracking-wider">
								Let me bend your expectations a little—my
								writing isn't exactly a soothing balm for the
								soul. It's more like punching a bag: your wrists
								might hurt, your heart might burn, but in the
								end you’ll feel somewhat lighter. Or at the very
								least, you’ll feel something, maybe a little
								less alone in the chaos. My work leans toward
								dark humor and a healthy dose of resentment, so
								if you're looking for healing... Well, I
								wouldn’t bet on it. But if you enjoy cheeky
								quips and a touch of horror—think urban horror,
								where the unreal creeps into the most realistic
								settings—then you’re in the right place.
							</p>
							<p className="text-lg tracking-wider">
								A bit about how I got here: I wasn’t born with a
								passion for writing. In fact, I swore multiple
								times that I'd never take another writing class
								after GCSEs. Yet irony hit me like a brick, and
								I ended up taking English Literature at A-level.
								Why? Because I wanted to take psychology at
								university. Why didn’t I? Because my math wasn’t
								mathing. So here I am, an accidental writer who
								found solace in words after years of unintended
								practice.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 my-8">
								<button className="p-2 rounded-sm w-full text-lg font-light hover:bg-[#eae7e4] hover:text-white transition-colors border border-gray-800 hover:border-[#eae7e4]">
									<Link href="/">Read my featured blog</Link>
								</button>
								<button className="p-2 rounded-sm w-full text-lg font-light hover:bg-[#eae7e4] hover:text-white transition-colors border border-gray-800 hover:border-[#eae7e4]">
									<Link href="/posts/collection">
										Visit my collections
									</Link>
								</button>
								<button className="p-2 rounded-sm w-full text-lg font-light hover:bg-[#eae7e4] hover:text-white transition-colors border border-gray-800 hover:border-[#eae7e4]">
									<Link href="/">Connect with me</Link>
								</button>
							</div>
							<p className="text-lg tracking-wider">
								Fast forward to 2024—I graduated from the
								University of Melbourne with a Bachelor of Arts
								in Media & Communications, sprinkled in some
								creative writing along the way, and now I'm
								pursuing a master’s degree at Monash University.
								It's got nothing to do with what you'll find
								here, but hey, it helps keep the lights on and
								funds my writing habit.
							</p>
							<p className="text-lg tracking-wider">
								So, what can you expect? A mix of introspection,
								fiction, and a lot of unreliable narration. Take
								everything you read here with a grain of salt.
								Seriously, don't fact-check anything except for
								this sentence. I talk to myself (a lot), and I
								have way too many characters living rent-free in
								my head. If you enjoy reading things that might
								feel introspective but probably aren’t, stick
								around.
							</p>
						</div>
					</div>
					<div className="my-8 p-4">
						<div className="flex flex-col sm:flex-row justify-around">
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
							<div className="md:w-[50%] space-y-4">
								<p className="text-lg tracking-wider">
									Maybe one day, when I hit my 40s, I'll think
									about publishing in a more traditional
									sense. Until then, this space is mine to
									experiment and overshare.
								</p>
								<p className="text-lg tracking-wider">
									So, happy reading! If you leave here feeling
									a little more—or less—frustrated, I consider
									that a win.
								</p>
								<p className="text-lg tracking-wider italic ">
									Oh, and before you rage-quit over my
									writing—the website? Not my fault. It
									actually looks this good because my
									boyfriend made it happen. He’s been nagging
									me (fondly, I think) to send him my work. So
									here we are. Enjoy the website! It’s
									probably the most organised thing about me.
								</p>
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

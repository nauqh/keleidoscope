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
			<Fade cascade={true}>
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
						<Link href="/something">
							<FaLinkedin className="text-2xl transition-all duration-300 hover:scale-110" />
						</Link>
					</li>
					<li>
						<Link href="mailto:hodominhquan.self@gmail.com">
							<FaRegEnvelope className="text-2xl transition-all duration-300 hover:scale-110" />
						</Link>
					</li>
				</ul>

				<div className="container mx-auto px-4 py-5" id="slogan">
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
							<div className="break-inside-avoid">
								<Post
									title="UNSPOILED"
									img="https://openaccess-cdn.clevelandart.org/1971.47/1971.47_print.jpg"
									posted_at="2023-12-14T15:30:00Z"
									description="The cotton drifted, unfolding the pristine blue that played a melodic acoustic soundtrack by my ear. The maple leaves rustling beneath my striped pyjamas pants joined the serene tweeting, occupying the main performing slot."
									tags={["poetry", "nature"]}
								/>
							</div>
							<div className="break-inside-avoid">
								<Post
									title="DREAM JOURNAL"
									img="https://images8.alphacoders.com/119/1197975.jpg"
									posted_at="2023-12-14T15:30:00Z"
									tags={["fiction", "short story"]}
								/>
							</div>
							<div className="break-inside-avoid">
								<Post
									title="SWEET CAVITY"
									img="/sweet-cavity.jpeg"
									posted_at="2023-12-15T12:00:00Z"
									tags={["fiction", "collection"]}
								/>
							</div>
							<div className="break-inside-avoid">
								<Post
									title="A SUNNY PLACE FOR SHADY PEOPLE"
									img="https://s3-eu-west-1.amazonaws.com/asthebirdfliesblog.com/content/images/posts/beige-minimal-aesthetic-photo-collage_x960.jpg?v=1"
									posted_at="2023-12-14T15:30:00Z"
									tags={["fiction", "short story"]}
								/>
							</div>
						</Fade>
					</div>
				</div>
			</Fade>
			<Footer />
		</div>
	);
};

export default Page;

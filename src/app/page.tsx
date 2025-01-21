import Nav from "../components/Nav";
import Post from "@/components/Post";
import Typewriter from "@/components/Typewriter";
import Footer from "@/components/Footer";

import { FaInstagram, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const page = () => {
	return (
		<div>
			<Nav />

			<ul
				className="hidden md:flex fixed left-8 top-1/2 flex-col gap-2"
				id="social"
			>
				<li>
					<a href="https://www.instagram.com/kelramel_/">
						<FaInstagram className="text-2xl transition-all duration-300 hover:scale-110" />
					</a>
				</li>
				<li>
					<a href="#">
						<FaLinkedin className="text-2xl transition-all duration-300 hover:scale-110" />
					</a>
				</li>
				<li>
					<a href="#">
						<FaRegEnvelope className="text-2xl transition-all duration-300 hover:scale-110" />
					</a>
				</li>
			</ul>

			<div className="container mx-auto px-4 py-8" id="slogan">
				<Typewriter
					text="braindump that dumbs a generative world"
					delay={100}
				/>
			</div>

			<div className="container mx-auto px-4 py-8" id="posts">
				<div className="columns-1 md:columns-2 gap-6 space-y-6">
					<Post
						title="DANGER OF SMOKING IN BED"
						img="https://s3-eu-west-1.amazonaws.com/asthebirdfliesblog.com/content/images/posts/pexels-lalesh-aldarwish-147634_x960.jpg?v=1"
						posted_at="2023-12-15T12:00:00Z"
					/>
					<Post
						title="A SUNNY PLACE FOR SHADY PEOPLE"
						img="https://s3-eu-west-1.amazonaws.com/asthebirdfliesblog.com/content/images/posts/beige-minimal-aesthetic-photo-collage_x960.jpg?v=1"
						posted_at="2023-12-14T15:30:00Z"
					/>
					<Post
						title="A SUNNY PLACE FOR SHADY PEOPLE"
						img="https://s3-eu-west-1.amazonaws.com/asthebirdfliesblog.com/content/images/posts/beige-minimal-aesthetic-photo-collage_x960.jpg?v=1"
						posted_at="2023-12-14T15:30:00Z"
					/>
					<Post
						title="DANGER OF SMOKING IN BED"
						img="https://s3-eu-west-1.amazonaws.com/asthebirdfliesblog.com/content/images/posts/pexels-lalesh-aldarwish-147634_x960.jpg?v=1"
						posted_at="2023-12-15T12:00:00Z"
					/>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default page;

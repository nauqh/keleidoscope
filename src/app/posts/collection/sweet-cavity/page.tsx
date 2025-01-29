"use client";
import React, { Suspense } from "react";
import styles from "../page.module.css";
import ImageHeader from "@/components/ImageHeader";
import { Fade } from "react-awesome-reveal";
import Post from "@/components/Post";

const Paragraph = ({ text }: { text: string }) => (
	<p className={styles.baseText}>{text}</p>
);

const paragraphs = [
	"This is a disclaimer: I wasn’t writing back to friendship in this work. I was crawling back to beloved bonds that choke. Mourning past relationships is likely to be evolutionary, yet I choose to be stuck in time.",
	"Sweet Cavity can be enjoyed as an experimental sweet menu, my attempt to figure out the ultimate etiquette to devour the umami of companionship. The bonbon textures of language and structure serve to pierce, to dip, to scoop, to shovel in unique ways, challenging your poetic pancreas. In short, this collection is decaying sweetness atop a pungent wellspring.",
	"As one dissects this, they may find themselves either having digestive disorders or consuming the violence that has been long buried within. The innate vulgarity that shakes up one’s childhood, snapping them into a realisation that they’ve been entangled in strings of BFFs.",
	"Nerdy glasses. Double chin. Rolling in dirt. Thick cream smeared all over the face. Lying on sand, getting rashes. That’s where this work refuses to evolve.",
	"By all means, I was not rejecting or disagreeing with the way most people choose to read this abbreviation aloud, like how January Gill-O’Neil chooses to read it in In The Company of Women:",
	"“Make me laugh over coffee",
	"Make it a double, make it frothy",
	"So it seethes in our delight",
	"Make my cup overflow",
	"With your small happiness",
	"I want to hoot and snort and cackle and chuckle.”",
	"This work will only propose an affectionate tweak that my readers might consider snorting, cackling and chuckling over: Bitter False Façades.",
	"I initially named this collection Ruining Your Day, One At A Time, since it shed tears for days when there were no tears, only sweet laughter. A work that screams for days when there were no voices, only soft giggles. A work that enacts violence upon a space almost discrete and fragile. This work manifests the feeling of ripping out damp old bandages and squirrelling needles into small mouth wounds that plunge deep into a vast abyss. A work that utilises internal violence to tear apart external violence.",
	"Nevertheless, I realise reading dosage shouldn’t be a concern, as my writing momentum was fuelled by John Keats’ Ode on Melancholy, specifically when he wrote:",
	"“Ay, in the very temple of Delight",
	"Veil’d Melancholy has her sovran shrine,",
	"Though seen of none save him whose strenuous tongue",
	"Can burst Joy’s grape against his palate fine;”",
	"Therefore, it seems reasonable that we allow our days to be overwhelmed and ruined by bitterness. For in its wake, Joy would vividly emerge like an aftertaste bursting upon our palate, gently reminding us of the emotional continuum necessary to savour delight.",
	"At certain points, this collection refuses to be read in a conventional way, which is greatly inspired by many avant-garde works of Aaron Guiz, particularly My Scattered Morning Thoughts that was part of Alay Anthology’s Ingat. In some ways, the structural experimentation with blank spaces, acrostics, lines that defied gravity, were bricks and mortars to build a shrine to decaying friendship. This is because a shrine cannot be constructed with a single structure – it should be a collage of roots, pillars, ceilings, doorways, windows and steps.",
	"The mechanism is much like the bitterness found in green tea, citrus peel, coffee, cocoa, dandelion green, which are consumable in many forms. These mirror the essence of friendship in Sweet Cavity: no matter how much one dislikes or rejects the bitter threads weaving the embroidery of connection, their existence is inescapable. These sharp flavours may also be fundamental in reminding us that there’s life.",
	"Moreover, the collection calls in nature by resisting nature, from beautiful plants with jarring names to the process of a snake’s shedding skin or the shared family name Canidae of dogs and foxes. Specifically, it was my artistic defiance to utilise hyphens, despite it being discouraged in poetry, as binding agents that visually and rhythmically obstruct the flow of words, embodying the image of snake’s struggling to get rid of clinging skin flakes. Again, this works to echo the reality that a person’s life is naturally bound by the persistent decaying flakes of companionship, or any connection in general.",
	"Writing back to these big concepts makes me wonder whether nature are the limits of life, limits that can feel as frustrating as Panda Wong so eloquently puts it in free meat on a suburban street:",
	"Everything has limits",
	"Pressing inwards",
	"Like a stern finger",
	"It’s like a chronic chicken shortage at kfc",
	"It’s like wearing ur best gown to the met gala",
	"& getting locked in the toilet",
	"Finally, I would like to dedicate the opening and closing of this collection to you, my readers. To properly greet you, to spare nothing of my heart. This work is crafted to not withhold anything but ruin your day, so that once it’s over, you’ll taste Joy bursting on your tongue. Yet, I must confess this is a win-win relationship between us and I am not solely acting out of charity. Autumn Royal’s words in her poem [Regarding] The Pain Of Others has deeply inspired and perfectly encapsulated my motive: “to embracing other people’s anguishes for the sake of my own creative endeavours.”",
	"I’d leave these words as my final mark: this work doesn’t exist for civility. It only exists tosatisfy the unspoken desire to destroy, to perhaps become armour that defends one’s innerchild from bloodless ties.",
];

const posts = [
	{
		title: "HOUSEWARMING",
		img: "https://i.etsystatic.com/22484508/r/il/7d9619/3610414449/il_fullxfull.3610414449_jrgw.jpg",
		posted_at: "2023-12-14T15:30:00Z",
	},
	{
		title: "SWEET COURSES",
		img: "https://i.pinimg.com/736x/5c/f1/c8/5cf1c8b8e1511c55212772762976a472.jpg",
		posted_at: "2023-12-14T15:30:00Z",
	},
	{
		title: "CECILIA",
		img: "/sweet-cavity.jpeg",
		posted_at: "2023-12-15T12:00:00Z",
	},
	{
		title: "A TOAST TO YOUR BEAUTY",
		img: "https://i.pinimg.com/736x/8a/c9/51/8ac951937a0535ea2c77f07b1d8488a9.jpg",
		posted_at: "2023-12-14T15:30:00Z",
	},
	{
		title: "UNSHEDDING",
		img: "https://fccagallery.org/wp-content/uploads/2021/09/Unshed-Tears-Acrylic-on-Canvas-by-Tarver-Harris-36in-x-36in-2000-scaled.jpg",
		posted_at: "2023-12-14T15:30:00Z",
	},
	{
		title: "ASYMMETRY",
		img: "https://finearttutorials.com/wp-content/uploads/2022/05/cafe-terrace-place-du-forum-arles-18881.jpgHD_-807x1024.jpg",
		posted_at: "2023-12-14T15:30:00Z",
	},
	{
		title: "ADVICE ON RAISING MY FOX",
		img: "https://i.etsystatic.com/16719255/r/il/354f4f/2680727372/il_fullxfull.2680727372_79g7.jpg",
		posted_at: "2023-12-14T15:30:00Z",
	},
	{
		title: "OFF SCREEN",
		img: "https://media.newyorker.com/photos/64122aeb0bdfe815c7db3a5f/4:3/w_2560,h_1920,c_limit/ra1145.jpg",
		posted_at: "2023-12-14T15:30:00Z",
	},
	{
		title: "ANOTHER GUY",
		img: "https://i.pinimg.com/736x/97/fd/8e/97fd8e51acbd0b88e3e2b3caa38f3435.jpg",
		posted_at: "2023-12-14T15:30:00Z",
	},
];

function SweetCavity() {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ImageHeader />
			</Suspense>
			<p className="text-xs text-gray-500 mt-2 text-center">
				Image from{" "}
				<a
					href="https://www.pinterest.com"
					className="hover:text-[hsl(var(--secondary-color))]"
				>
					Beyond the Void
				</a>
			</p>

			<h2 className="text-xl font-semibold leading-relaxed my-4">
				Poetics Manifesto
			</h2>
			{paragraphs.map((text, index) => (
				<Paragraph key={index} text={text} />
			))}

			<div className="container mx-auto px-4 py-5" id="posts">
				<div className="columns-1 md:columns-3 gap-6 space-y-6">
					<Fade cascade={true} triggerOnce={true}>
						{posts.map((post) => (
							<Post
								key={post.title
									.toLowerCase()
									.replace(/\s+/g, "-")}
								title={post.title}
								img={post.img}
								posted_at={post.posted_at}
								url={`/posts/collection/sweet-cavity/${post.title
									.toLowerCase()
									.replace(/\s+/g, "-")}?img=${post.img}`}
							/>
						))}
					</Fade>
				</div>
			</div>
		</>
	);
}

export default SweetCavity;

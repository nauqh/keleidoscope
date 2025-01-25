"use client";
import React from "react";
import Image from "next/image";
import HoverCard from "@/components/HoverCard";
import styles from "./page.module.css";

const Paragraph = ({ text }: { text: string }) => (
	<p className={styles.indentedText}>{text}</p>
);

const paragraphs = [
	"Skin burns. My lungs grasp for air that can't be found. Damp earth presses into my nostrils, my mouth. I'm on the ground. No. I'm in it. I try to move my fingers, but the stench of stale blood weighs down my heavy eyelids. A battlefield of death nettles refuses to let go as I try to crawl through. Thorns dig deeper into my flesh. Someone else is near, scraping the earth. It could be their claws or something peculiar that I can't think of right away. Something is ripping the brambles, gaining on me. They hastily drag through the soil, through the thickets. Always closer.",
	"A scream echoes, not in my ears, but in my skull. It's vibrating in my teeth, under my skin, mingling with the crackling chaos of thoughts. Is it me? Hardly. Mouth is full of dirt. Is it something else? Something outside. Or inside. I can't really tell.",
	"But it's dreadful. Dreadfully pulls their face down, dripping like paint, fluid and wrong. Like a Witch. Their disoriented face is yearning for me, in despair.",
	"Move. Crawl. Quicker. Not Quick Enough. I can feel the nettles inside me now, spreading, rooting under my skin, making me part of the earth. The more I pull, the deeper they burrow in, but I can't stop crawling. I have to. They're coming for me. Their whisper is wavering on top of my ears but can't win over the pounding of my own heartbeat. For whatever reason—they might just want to join me. To have fun and eat dirt.",
	"Car horns blare from afar, drowned by the dead silence within. Yet I crawl till the nettles grow as my bones. Their breath comes close—no, not breath. Colder. Emptier. It's like the space where breath should be but isn't.",
	"They're here. Their fingers, brittle like branches, clutch my ankle. A frozen flame crawls up my spine. Yet I never scream for help. I lunge toward the traffic noise, swallowed by the dirt. Even when the nettles blind me and choke me, I keep crawling.",
	"Then nothing.",
];

const paragraphs2 = [
	"There's so much I've been taught in school. But I've learned one thing: how much people deny their need for good stories. A lie, a truth, doesn't really matter. What matters is control. That's the gist: if you hold it, they buy it.",
	"I once told a teacher that she could get fired.",
	"Kindergarten. She left the classroom as punishment for us kids being noisy. Lights out, doors shut, wailing kids. Urg kids. Their crying pissed me off, although I must admit, the stifling, sweaty air made my breathing stuffy. I forced out some tears because, well, FOMO.",
	"But I couldn't help wondering: were my peers too fragile or was my teacher too naïve for her age? I stayed calm because I knew it wasn't right, ethically. If I've heard it correctly from my dad's morning news:'Private school teachers: one mistake and you're out!' I knew the real power wasn't in the darkness or silence. It's in the bluff. So I did.",
	"\"Would you mind if I told my dad about what happened today? I'm afraid he'd be disappointed and might think I should switch schools. You know my dad. He's always ready to have a word with Miss Principal.\"",
	"Of course, none of that was true, except for the part about my dad genuinely loving a good rant. He would’ve sided with her – he sent me here to be educated, after all. But it didn’t matter. The art wasn’t in having control. The art was in making her believe I did. These days, surviving is about knowing the story they need to hear.",
];

const paragraphs3 = [
	"I follow my apartment floor's hallway to a small alley. The morning air is filled with red lanterns swaying overhead, people tinkling their bikes against worn stone while meandering through lively stalls bursting with delicious treats. I recognised a few faces – neighbours across the hallway perhaps – slurping on shimmering cubes of grass jelly coated in coconut milk. Vietnamese people call it Che Thai, meaning Thai sweet soup. A curious name as it doesn't seem to be a Thai dish.",
	"Tantalising fragrance awakens my inner craving for sweetness. Stomach grumbles to a siren song of zesty cocktails, glistening caramelised Tanghulu, refreshing strawberry Hwachae. I reach for my pockets. Empty. No money. No phone. Panic flares as I rummaged deeper, almost digging a hole in the fabric. Eyes darted around. I yearn for a friendly face who might lend me a few coins (I hope they also think I look familiar). As this strangely huge FOMO kicks in, I already imagine myself begging the sellers to return to pay later.",
	"I wander down the alley, hypnotised by the precious trove of delights. Fruit yoghurts, pandan sauce, melon cakes… All come to Mama! (maybe not the tiramisu – chocolate's never been my thing).",
	"Ferocious footsteps suddenly stumble over and crush the festive air. A crowd starts rushing out like startled ants, fear etched in their eyes. My tinnitus was triggered. Vulnerable ears felt as if ripped apart by high-pitched screams. “This town is haunted! Run!” Head spins. I was barely wobbling through the sweaty wave of humans. Vision blurs. The scene before me loses its dimension, turning into a vibrant painting with wild swirls of violent brush strokes.",
	"In the moment of a dazzling carnival of motion, when red bleeds into everything, I see her. A gigantic, floating theatre mask floating in the alley’s heart. She looks like she belongs to Tuồng, a Vietnamese theatrical opera with masks painted in bold, primary colours embodying Yin and Yang's spirits. No audience is supposed to see the face behind them. Or the masks’ owners deny being seen.",
	"Twisted black and red stripes on her face flare up like lacquered armour, garnishing the swirling crimson sky. She is Yin. Or she embodies a theatrical spirit that carries such alluring darkness in their soul. Charming and menacing. Flames can’t help licking at her edges, crowning her the queen of havoc with beautifully burnt roses.",
	"Undeniable fear battling with odd fascination. My urge to escape is pinned down by twisted ankles as if they’ve forgotten their place. Her dainty silk threads elegantly brush against my skin as she suffocates me in her haunting orbit. My disjointed leg muscles desperately drag my body away with monumental effort. Yet my mind is caught. I grow addicted to that terrifying beauty.",
];

const Dream = () => {
	return (
		<>
			<Image
				src="https://images8.alphacoders.com/119/1197975.jpg"
				alt="Unspoiled"
				width={1920}
				height={1080}
				className="rounded-md h-full w-full"
			/>
			<p className="text-xs text-gray-500 mt-2 text-center">
				Image from{" "}
				<a
					href="https://wall.alphacoders.com/big.php?i=1197975"
					className="hover:text-[hsl(var(--secondary-color))]"
				>
					Beyond the Void
				</a>
			</p>
			<h2 className="text-lg text-center leading-relaxed my-10 italic">
				I don't write journals. I dream them. I dream by them, with
				them, through them.
			</h2>

			<HoverCard title="Crawl Witch Crawl">
				{paragraphs.map((text, index) => (
					<Paragraph key={index} text={text} />
				))}
			</HoverCard>

			<p className={styles.indentedText}>
				I dream a lot. But I don’t chase – I hunt them. After all, as
				people say, dreams don’t work unless you do.
			</p>
			<ol className="list-decimal list-inside">
				<li className="flex">
					<span className="ml-10">1.</span>
					<div className="ml-8">
						<p className={styles.baseText}>
							I have always enjoyed the language of clothing. My
							GCSE Art teacher hated the coloured liners in my
							sketchbook. For my final piece, I made my friends
							cover their hollow eyes. That's when I discovered my
							talent for oil pastels, and I finally decluttered
							all the watercolours I'd been hoarding for years
							(most of them borrowed from the art room anyway).
						</p>
						<p className={styles.baseText}>
							I performed surgery on my painting: Dissected
							furious faces, splashed them in paint, monochromatic
							rage. That piece made it to the school exhibition,
							framed and all. 'In Disguise' – I wrote in my
							annotations that ambiguity is the true colour of
							life. The Cambridge people loved it and gave me an
							A. I've never touched the drawing pad ever since.
						</p>
					</div>
				</li>
				<li className="flex">
					<span className="ml-10">2.</span>
					<div className="ml-8">
						<p className={styles.baseText}>
							A level Drama happened because of my dad, a Ted Talk
							fanatic. I did end up falling in love with stage
							directing and design. Teachers were shocked by how
							fast I improved. I performed a girl trapped in an
							asylum for my monologue assessment. Frankly
							speaking, it looked more like demonic possession
							than illness. Pyjamas, smeared mascara, pale lips,
							dark circles, and twitchy, unstable moves. She'd
							gone insane for her career. I don't really remember
							the details of her ruined career I bluffed to my
							teacher about. Just flashes of drugs and alcohol –
							she was a painter.
						</p>
						<p className={styles.baseText}>
							Some of my classmates were startled when they saw me
							on stage, but they applauded. I've never really
							stepped foot on a stage since. My dad said no. He
							switched from Ted Talks to Trump.
						</p>
					</div>
				</li>
			</ol>
			{paragraphs2.map((text, index) => (
				<Paragraph key={index} text={text} />
			))}
			{/* <div className="flex items-center justify-center my-8">
				<span className="text-2xl">#</span>
			</div> */}

			<HoverCard title="Queen of Havoc">
				{paragraphs3.map((text, index) => (
					<Paragraph key={index} text={text} />
				))}
			</HoverCard>
		</>
	);
};

export default Dream;

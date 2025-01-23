import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const page = () => {
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
				I don’t write journals. I dream them. I dream by them, with
				them, through them.
			</h2>
			<h2 className="text-lg text-center font-semibold my-5">
				Crawl Witch Crawl
			</h2>
			<p className={styles.indentedText}>
				Skin burns. My lungs grasp for air that can’t be found. Damp
				earth presses into my nostrils, my mouth. I’m on the ground. No.
				I’m in it. I try to move my fingers, but the stench of stale
				blood weighs down my heavy eyelids. A battlefield of death
				nettles refuses to let go as I try to crawl through. Thorns dig
				deeper into my flesh. Someone else is near, scraping the earth.
				It could be their claws or something peculiar that I can't think
				of right away. Something is ripping the brambles, gaining on me.
				They hastily drag through the soil, through the thickets. Always
				closer.
			</p>
			<p className={styles.indentedText}>
				A scream echoes, not in my ears, but in my skull. It's vibrating
				in my teeth, under my skin, mingling with the crackling chaos of
				thoughts. Is it me? Hardly. Mouth is full of dirt. Is it
				something else? Something outside. Or inside. I can't really
				tell.
			</p>
			<p className={styles.indentedText}>
				But it's dreadful. Dreadfully pulls their face down, dripping
				like paint, fluid and wrong. Like a Witch. Their disoriented
				face is yearning for me, in despair.
			</p>
			<p className={styles.indentedText}>
				Move. Crawl. Quicker. Not Quick Enough. I can feel the nettles
				inside me now, spreading, rooting under my skin, making me part
				of the earth. The more I pull, the deeper they burrow in, but I
				can’t stop crawling. I have to. They’re coming for me. Their
				whisper is wavering on top of my ears but can’t win over the
				pounding of my own heartbeat. For whatever reason—they might
				just want to join me. To have fun and eat dirt.
			</p>
		</>
	);
};

export default page;

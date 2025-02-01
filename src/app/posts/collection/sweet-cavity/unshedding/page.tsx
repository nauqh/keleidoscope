"use client";
import { Suspense } from "react";
import styles from "../page.module.css";
import ImageHeader from "@/components/ImageHeader";

const paragraphs = [
	["Nooffense,", "I hate liars who", "speak-their-mind"],
	[
		"Looking into her murky-blue-eyes, wondering what-if-they're-brown.",
		"Spilling-hot-coffee over hard-rock,",
		"watch-it-softens, steams-into clouds",
	],
	[
		"Tug-her-crown-in-old-socks,",
		"her lungs rub gently in-cracked-earth",
		"so she's-settled. So",
		"when-light-hits-her-too-sharp, no beam would bounce off her-glossy-skin",
		"(which is too real, too-raw, too-much-tonot-be-offended.)",
	],
	[
		"I wish I had more-time-with-her-hiss-",
		"delicate words, meant-to-be-blessings,",
		"only if air wasn’t thick-with-noise-and-smog,",
		"only if herwords didn’t burn-on-their-way out.",
		"But I cut-her-off",
		"Slice-the-hissing-in-half, just-to-hear-the-silence-after.",
	],
	[
		"She speaks her mind, she tells-her-lies.",
		"It-wouldn’t-kill, but",
		"I pray she stays safe-and-sound",
		"Held-tight-in-her skin,",
		"antique-and-cracked, but still-whole.",
		"Eyes like glass, but-never-too-clear.",
		"Bubbles. delusions. daydreams (that-stays-floating, never burst)",
		"That’s-what-I-want. That’s-what-I-need.",
		"Hush-the-hissing, shut-the-voice-down,",
		"so she stays small,",
		"keeps her-tail-cosy-before-winter,",
		"never feels-the-itch-to-stretch-beyond, never-wriggles-out.",
	],
	[
		"I-love-the-way-you-hiss,",
		"But-only-when-the-voice-in-your-skull-is-smothered",
		"Kept-lenient-enough, that-it-never-escapes.",
	],
];

const paragraphsleft = [
	"*Signs if your snake is about to shed:",
	"Her eyes would turn opaque blue.",
	"She’d need abrasive rocks",
	"to rub her head",
	"so the rough layer of skin",
	"can crack open, and",
	"old scales slowly flake off.",
	"She’d be shy, so play hide",
	"but don’t seek,",
	"until she glows as a",
	"living jewel.",
];

const Paragraph = () => (
	<>
		{paragraphs.map((group, groupIndex) => (
			<div key={groupIndex} className="mb-12">
				{group.map((text, index) => (
					<p key={index} className={styles.baseTextCenter}>
						{text}
					</p>
				))}
			</div>
		))}
	</>
);

const ParagraphLeft = () => (
	<>
		{paragraphsleft.map((text, index) => (
			<p key={index} className={styles.baseText}>
				{text}
			</p>
		))}
	</>
);

const Unshedding = () => {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ImageHeader />
			</Suspense>
			<p className="text-xs text-gray-500 mt-2 text-center mb-8">
				Image from{" "}
				<a
					href="https://wall.alphacoders.com/big.php?i=1197975"
					className="hover:text-[hsl(var(--secondary-color))]"
				>
					Beyond the Void
				</a>
			</p>
			<Paragraph />
			<ParagraphLeft />
		</>
	);
};

export default Unshedding;

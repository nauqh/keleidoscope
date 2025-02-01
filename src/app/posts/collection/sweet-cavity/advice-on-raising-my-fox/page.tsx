"use client";
import { Suspense } from "react";
import styles from "../page.module.css";
import ImageHeader from "@/components/ImageHeader";

const paragraphs = [
	[
		"Hey, how have you been?",
		"I’ve seen you bloom",
		"like a red bow,",
		"so pretty on snowy days.",
		"Gentle heart like honey",
		"melting on warm bread,",
		"so tender that I want to",
		"keep you close.",
		"But I’m glad to see you mastered",
		"the art of loving",
		"yourself.",
	],
	[
		"I’m writing for advice",
		"about raising my fox.",
		"I got her as a gift",
		"on snowy days,",
		"so pretty in her red fur,",
		"so I keep her close.",
		"But the art of self-love,",
		"she hasn’t quite mastered.",
	],
	[
		"How can I teach her",
		"to not chew on her own tail,",
		"to do tricks, don’t fall for them,",
		"to differentiate herself from her kin-",
		"ones that are just as lively",
		"yet loud and large,",
		"Or should I just let her be,",
		"and ask them herself:",
		"Tell me, trickster,",
		"are you",
		"dog in disguise",
	],
];

const Paragraph = () => (
	<>
		{paragraphs.map((group, groupIndex) => (
			<div key={groupIndex} className="mb-12">
				{group.map((text, index) => (
					<p key={index} className={styles.baseText}>
						{text}
					</p>
				))}
			</div>
		))}
	</>
);

const Advice = () => {
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
		</>
	);
};

export default Advice;

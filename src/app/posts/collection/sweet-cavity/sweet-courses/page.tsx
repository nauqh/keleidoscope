"use client";
import { Suspense } from "react";
import styles from "../page.module.css";
import ImageHeader from "@/components/ImageHeader";

const Paragraph = ({ text }: { text: string }) => (
	<>
		<p className={`md:hidden ${styles.baseTextMobile}`}>{text}</p>
		<p className={`hidden md:block ${styles.baseText}`}>{text}</p>
	</>
);

const Section = ({
	title,
	subtitle,
	paragraphs,
}: {
	title: string;
	subtitle: string;
	paragraphs: string[][];
}) => (
	<>
		<h2 className="text-xl leading-relaxed font-semibold">{title}</h2>
		<h2 className="text-xl leading-relaxed font-semibold">{subtitle}</h2>
		{paragraphs.map((group, groupIndex) => (
			<div key={groupIndex} className="mb-8">
				{group.map((text, index) => (
					<Paragraph key={index} text={text} />
				))}
			</div>
		))}
	</>
);

const content = {
	desserts: {
		title: "I",
		subtitle: "Desserts",
		paragraphs: [
			[
				"Dulce de leche, dense and sweet, wraps around fingertips",
				"endless laughters, tongues dripping honey",
				"show me your playroom, where we dance in bliss",
				"snuggling in bed, whistling away our weary worries.",
			],
			[
				"Endless hums of sharing heartbreaks over molten cakes",
				"resting by the window, where sunflowers gleam",
				"tenderness tingles tongue, candy cane craving awakes",
				"save me, please, from the caramel threads I once dreamt.",
			],
		],
	},
	stressed: {
		title: "II",
		subtitle: "Stressed",
		paragraphs: [
			[
				"See you tomorrow, where you lead the way",
				"Tell me left-right chambers while I blindly hear heart murmurs",
				"Remind me to meet halfway, where feelings aren't your trade",
				"Edelweiss reigns, numbers rule, where rhymes are silenced and still.",
			],
			[
				"Sleepless nights, curling in deadly dominion",
				"Stale blood drips, come taste my palate",
				"Eyes from paintings mold smushy dough, inviting you in.",
				"Dirt cake, the last meal we ate – fuck you and your dumb soul.",
			],
		],
	},
};

export default function SweetCourses() {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ImageHeader />
			</Suspense>
			<p className="text-xs text-gray-500 mt-2 text-center mb-4">
				Image from{" "}
				<a
					href="https://wall.alphacoders.com/big.php?i=1197975"
					className="hover:text-[hsl(var(--secondary-color))]"
				>
					Beyond the Void
				</a>
			</p>
			{Object.values(content).map((section, index) => (
				<Section key={index} {...section} />
			))}
		</>
	);
}

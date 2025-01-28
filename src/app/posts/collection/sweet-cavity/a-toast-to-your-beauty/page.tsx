"use client";
import { Suspense } from "react";
import styles from "../page.module.css";
import ImageHeader from "@/components/ImageHeader";

const Paragraph = ({ text }: { text: string }) => (
	<p className={styles.baseTextCenter}>{text}</p>
);

const paragraphs = [
	"A toast to the face that was kissed",
	"by angels of morning,",
	"by Lucifer, by",
	"Satan,",
	"to the nose that smells sunset",
	"of first spring,",
	"of mimosa, of mahogany",
	"monsters,",
	"to the ylang ylang that blooms over",
	"your ears, crowning your",
	"delicate defiance to",
	"wisdom,",
	"to the skin that shines as pristine",
	"porcelain, poised and",
	"layered,",
	"to the fabric that sewed the curve of your",
	"smile, was it scrim or",
	"seersucker,",
	"to the days that we burst out",
	"laughing at jokes, at puns, at",
	"questions, at people, at each other,",
	"at ourselves.",
];

export default function Atoast() {
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
			{paragraphs.map((text, index) => (
				<Paragraph key={index} text={text} />
			))}
		</>
	);
}

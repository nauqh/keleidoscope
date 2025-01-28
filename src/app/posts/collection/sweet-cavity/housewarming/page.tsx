"use client";
import { Suspense } from "react";
import styles from "../page.module.css";
import ImageHeader from "@/components/ImageHeader";

const Paragraph = ({ text }: { text: string }) => (
	<p className={styles.baseText}>{text}</p>
);

const paragraphs = [
	"Welcome to the culture of get-together,",
	"where laughters and stories stir,",
	"where friendly feast fills your soul,",
	"where fresh bakes and fresh paints",
	"warm the homely pit-a-pat,",
	"and probiotics",
	"for you to take, just in case,",
	"it’s growling within.",
];

export default function Housewarming() {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ImageHeader />
			</Suspense>
			<p className="text-xs text-gray-500 mt-2 text-center">
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

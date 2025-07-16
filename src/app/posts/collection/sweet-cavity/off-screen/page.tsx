"use client";
import { Suspense } from "react";
import styles from "../page.module.css";
import ImageHeader from "@/components/ImageHeader";

const paragraphs = [
	["elegance", "hues", "whispers", "grace"],
	["Muted"],
	["blue", "glow", "echoes", "you."],
];

const Paragraph = () => (
	<div className="flex flex-col gap-2">
		{paragraphs.map((group, groupIndex) => (
			<div key={groupIndex} className="mb-12">
				{group.map((text, index) => (
					<p key={index} className={styles.baseTextCenter}>
						{text}
					</p>
				))}
			</div>
		))}
	</div>
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
		</>
	);
};

export default Unshedding;

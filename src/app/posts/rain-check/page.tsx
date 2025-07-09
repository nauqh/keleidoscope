"use client";
import React, { Suspense } from "react";
import ImageHeader from "@/components/ImageHeader";
import styles from "./page.module.css";
import PdfViewer from "@/components/PdfViewer";

const Paragraph = ({ text }: { text: string }) => (
	<p className={styles.baseTextCenter}>{text}</p>
);

const paragraphs = [
	"Rain Check is a contemporary theatre piece that gives form to the quiet things we often leave unsaid. Every character, in their own way, embodies the concept of taking a rain check.",
	"The play explores that idea through blurred relational boundaries, intergenerational trauma and the murky grey areas of emotional life. It does so with empathy, but not with easy answers.",
	"I was deeply conflicted about even writing this, because I know it brushes up against topics that are morally and emotionally difficult. And yes, I'm aware it simplifies things that are layered and deeply personal. Things that often go unnoticed, but are far more common than we'd like to admit. Still, I chose not to shy away from that discomfort. Because I believe discomfort doesn't mean something shouldn't be said. I want to set stepping stones for talking about controversial topics. Not to sensationalise, but to open space.",
	"There's a quote from The Princess Diaries that kept me going as I wrote this: 'Courage is not the absence of fear, but rather the judgement that something else is more important than fear.'",
	"That is Rain Check for me.",
];

const Page = () => {
	const pdfUrl =
		"https://drive.google.com/file/d/1QSXuzHy8Gi4NXoovIrXkMrzQo7J357Of/view?usp=sharing";
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ImageHeader />
			</Suspense>
			<p className="text-xs text-gray-500 mt-2 text-center mb-8">
				Image from{" "}
				<a
					href="https://www.tresbohemes.com/wp-content/uploads/2015/06/New-York-Rains-Jeremy-Mann-Tres-Bohemes.jpg"
					className="hover:text-[hsl(var(--secondary-color))]"
				>
					Beyond the Void
				</a>
			</p>

			{paragraphs.map((text, index) => (
				<Paragraph key={index} text={text} />
			))}

			{/* PDF Viewer Component */}
			<div className="w-full mx-auto my-8 ">
				<PdfViewer
					googleDriveUrl={pdfUrl}
					height="800px"
					className="shadow-lg"
				/>
			</div>
		</>
	);
};

export default Page;

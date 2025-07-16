"use client";
import React, { Suspense } from "react";
import ImageHeader from "@/components/ImageHeader";
import PdfViewer from "@/components/PdfViewer";
import styles from "./page.module.css";

const Paragraph = ({ text }: { text: string }) => (
	<p className={styles.italicText}>{text}</p>
);

const paragraphs = [
	"They only knock when they know your door. Take it personally.",
];

const Page = () => {
	// Example Google Drive URL - replace with your actual PDF link
	const pdfUrl =
		"https://drive.google.com/file/d/1QzN4K3E6QSmNjn0bxwA7wOuBoDrYkKxF/view?usp=sharing";

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ImageHeader />
			</Suspense>
			<p className="text-xs text-gray-500 mt-2 text-center">
				Image from{" "}
				<a
					href="https://i.ebayimg.com/images/g/VzkAAOSwGjRkOZkD/s-l1600.webp"
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

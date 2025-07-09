"use client";
import React, { Suspense } from "react";
import ImageHeader from "@/components/ImageHeader";
import PdfViewer from "@/components/PdfViewer";

// http://localhost:3000/posts/script?tags=fiction,short%20story,collection&img=/raincheck.jpg

const Page = () => {
	// Example Google Drive URL - replace with your actual PDF link
	const pdfUrl =
		"https://drive.google.com/file/d/1QSXuzHy8Gi4NXoovIrXkMrzQo7J357Of/view?usp=sharing";

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ImageHeader />
			</Suspense>
			<p className="text-xs text-gray-500 mt-2 text-center">
				Image from{" "}
				<a
					href="https://www.tresbohemes.com/wp-content/uploads/2015/06/New-York-Rains-Jeremy-Mann-Tres-Bohemes.jpg"
					className="hover:text-[hsl(var(--secondary-color))]"
				>
					Beyond the Void
				</a>
			</p>

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

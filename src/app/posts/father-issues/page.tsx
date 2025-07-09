"use client";
import React, { Suspense } from "react";
import ImageHeader from "@/components/ImageHeader";
import PdfViewer from "@/components/PdfViewer";

const Page = () => {
	// Example Google Drive URL - replace with your actual PDF link
	const pdfUrl =
		"https://drive.google.com/file/d/1caM6PPbFnA4Vp966DzU4TisysGI3jPJu/view?usp=sharing";

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

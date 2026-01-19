"use client";
import React, { Suspense } from "react";
import ImageHeader from "@/components/ImageHeader";
import PdfViewer from "@/components/PdfViewer";

const Page = () => {
	const pdfUrl =
		"https://drive.google.com/file/d/1TPnhe6O1M3uTVeCT5whnfNniqs0VRA0x/view?usp=sharing";
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ImageHeader />
			</Suspense>
			<p className="text-xs text-gray-500 mt-2 text-center mb-8">
				Image from{" "}
				<a
					href="https://wallpapercave.com/wp/wp8987819.jpg"
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

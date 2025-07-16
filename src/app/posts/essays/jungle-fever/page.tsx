"use client";
import React, { Suspense } from "react";
import ImageHeader from "@/components/ImageHeader";
import PdfViewer from "@/components/PdfViewer";
import styles from "./page.module.css";

const Page = () => {
	const pdfUrl =
		"https://drive.google.com/file/d/1K-VRpzku1C3HUFwHqUUSivD4kw66wFbt/view?usp=sharing";

	// img: https://artlogic-res.cloudinary.com/w_800,c_limit,f_auto,fl_lossy,q_auto:best,dpr_2.0/artlogicstorage/pilarcorrias/images/view/d3cb656e6a8916a56a8b75553de3501bj/pilarcorrias-pierre-knop-cornwall-summer-2025.jpg
	const youtubeVideoId = "mnuJ_YVLL64";

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

			{/* YouTube Video Embed */}
			<div className="w-full max-w-4xl mx-auto my-12">
				<div
					className="relative w-full"
					style={{ paddingBottom: "56.25%" }}
				>
					<iframe
						src={`https://www.youtube.com/embed/${youtubeVideoId}`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border-0"
					></iframe>
				</div>
			</div>

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

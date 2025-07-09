"use client";
import React, { useState } from "react";

interface PdfViewerProps {
	googleDriveUrl: string;
	height?: string;
	className?: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({
	googleDriveUrl,
	height = "600px",
	className = "",
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	// Extract file ID from Google Drive URL
	const extractFileId = (url: string): string | null => {
		const regex = /\/file\/d\/([a-zA-Z0-9-_]+)/;
		const match = url.match(regex);
		return match ? match[1] : null;
	};

	// Convert Google Drive sharing URL to embeddable URL
	const getEmbedUrl = (url: string): string | null => {
		const fileId = extractFileId(url);
		if (!fileId) return null;
		return `https://drive.google.com/file/d/${fileId}/preview`;
	};

	const embedUrl = getEmbedUrl(googleDriveUrl);

	if (!embedUrl) {
		return (
			<div
				className={`flex items-center justify-center bg-gray-50 ${className}`}
				style={{ height }}
			>
				<p className="text-sm text-gray-600">
					Invalid Google Drive URL
				</p>
			</div>
		);
	}

	return (
		<div
			className={`relative border border-black shadow-lg rounded-lg overflow-hidden ${className}`}
			style={{ height }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-20">
					<div className="text-sm text-gray-500">Loading...</div>
				</div>
			)}
			{hasError && (
				<div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-20">
					<div className="text-sm text-gray-600">
						Failed to load PDF
					</div>
				</div>
			)}

			{/* Blur overlay */}
			<div
				className={`absolute inset-0 backdrop-blur-sm bg-white/10 z-10 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
					isHovered || isLoading || hasError
						? "opacity-0 pointer-events-none"
						: "opacity-100"
				}`}
			>
				<div className="text-sm text-gray-700 bg-white/80 px-3 py-2 rounded-md shadow-sm">
					Put your cursor here
				</div>
			</div>

			<iframe
				src={embedUrl}
				width="100%"
				height="100%"
				style={{ border: "none" }}
				onLoad={() => setIsLoading(false)}
				onError={() => {
					setIsLoading(false);
					setHasError(true);
				}}
				title="PDF Viewer"
			/>
		</div>
	);
};

export default PdfViewer;

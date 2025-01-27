"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface HoverCardProps {
	title: string;
	img: string;
	children: React.ReactNode;
}

const HoverCard = ({ title, img, children }: HoverCardProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleToggle = () => setIsExpanded(!isExpanded);
	const handleClose = () => setIsExpanded(false);

	return (
		<>
			<div
				className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
					isExpanded
						? "opacity-100 visible"
						: "opacity-0 invisible pointer-events-none"
				}`}
				onClick={handleClose}
				aria-hidden={!isExpanded}
			/>

			<Card
				className="border-none transition-transform duration-300 cursor-pointer mx-auto my-4 hover:scale-105 group w-[400px]"
				onClick={handleToggle}
				role="button"
				aria-expanded={isExpanded}
				tabIndex={0}
			>
				<CardHeader>
					<CardTitle className="text-xl text-center font-light group-hover:text-[hsl(var(--secondary-color))]">
						{title}
					</CardTitle>
					<p className="text-center text-sm text-muted-foreground mt-2">
						Click to read more...
					</p>
					<Image
						src={img}
						alt="Unspoiled"
						width={300}
						height={169}
						className="rounded-md h-48 w-auto mx-auto object-cover"
					/>
				</CardHeader>
			</Card>

			<Card
				className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-h-[80vh] 
                    overflow-y-auto w-[90vw] border-none cursor-pointer transition-all duration-300
                    ${
						isExpanded
							? "opacity-100 scale-100"
							: "opacity-0 scale-95 pointer-events-none"
					}`}
				onClick={handleClose}
				role="dialog"
				aria-modal="true"
				aria-hidden={!isExpanded}
			>
				<CardHeader>
					<CardTitle className="text-xl text-center font-semibold">
						{title}
					</CardTitle>
				</CardHeader>
				<CardContent>{children}</CardContent>
			</Card>
		</>
	);
};

export default HoverCard;

"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HoverCardProps {
	title: string;
	children: React.ReactNode;
}

const HoverCard = ({ title, children }: HoverCardProps) => {
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
				className="border-none transition-transform duration-300 cursor-pointer mx-auto my-4 hover:-translate-y-2 group"
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

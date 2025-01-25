"use client";
import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface HoverCardProps {
	title: string;
	children: React.ReactNode;
}

const HoverCard = ({ title, children }: HoverCardProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<>
			<div
				className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
					isExpanded ? "visible" : "invisible"
				}`}
				onClick={() => setIsExpanded(false)}
			/>

			<Card
				className={`border-none transition-all duration-300 cursor-pointer max-w-4xl mx-auto my-4
                    ${
						isExpanded
							? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-h-[80vh] overflow-y-auto w-[90vw]"
							: "hover:-translate-y-2"
					} 
                    group`}
				onClick={() => setIsExpanded(!isExpanded)}
			>
				<CardHeader>
					<CardTitle className="text-xl text-center font-light group-hover:text-[hsl(var(--secondary-color))]">
						{title}
					</CardTitle>
					{!isExpanded && (
						<CardDescription className="text-center text-sm text-muted-foreground mt-2">
							Click to read more...
						</CardDescription>
					)}
				</CardHeader>
				{isExpanded ? <CardContent>{children}</CardContent> : null}
			</Card>
		</>
	);
};

export default HoverCard;

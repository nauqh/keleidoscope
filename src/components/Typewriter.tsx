"use client";
import React, { useState, useEffect } from "react";

interface TypewriterProps {
	text: string;
	delay: number;
}

const Typewriter = ({ text, delay }: TypewriterProps) => {
	const [currentText, setCurrentText] = useState<string>("");
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		const typeNextCharacter = () => {
			if (currentIndex < text.length) {
				setCurrentText((prevText) => prevText + text[currentIndex]);
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}
		};

		const timeout = setTimeout(typeNextCharacter, delay);

		return () => clearTimeout(timeout);
	}, [currentIndex, delay, text]);

	return (
		<h2
			className="text-center text-4xl md:text-5xl min-h-[60px] my-4"
			style={{ fontFamily: "'Reenie Beanie', cursive" }}
		>
			{currentText}
		</h2>
	);
};

export default Typewriter;

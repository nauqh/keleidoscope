"use client";
import { Suspense } from "react";
import styles from "./page.module.css";
import ImageHeader from "@/components/ImageHeader";

const PoemLine = ({ text, italic = false }: { text: string; italic?: boolean }) => (
	<>
		<p className={`sm:hidden ${italic ? styles.italicLineMobile : styles.poemLineMobile}`}>
			{text}
		</p>
		<p className={`hidden sm:block ${italic ? styles.italicLine : styles.poemLine}`}>
			{text}
		</p>
	</>
);

const Stanza = ({ lines }: { lines: { text: string; italic?: boolean }[] }) => (
	<div className={styles.stanza}>
		{lines.map((line, index) => (
			<PoemLine key={index} text={line.text} italic={line.italic} />
		))}
	</div>
);

const poem = {
	title: "Housekeeping",
	stanzas: [
		{
			lines: [
				{ text: "I saw a woman dragging her broom" },
				{ text: "low and slow" },
				{ text: "along the rain that gathered" },
				{ text: "where the sidewalk rose," },
				{ text: "where the street lay clean." },
			],
		},
		{
			lines: [
				{ text: "I couldn't tell what she meant to clear," },
				{ text: "only that she kept going," },
				{ text: "as if the doing mattered" },
				{ text: "more than what was done." },
			],
		},
		{
			lines: [
				{ text: "You said the broom was only for rooms" },
				{ text: "you cared about." },
				{ text: "But I swept the whole house," },
				{ text: "even the places you walked past," },
				{ text: "even the quiet you didn't mean." },
			],
		},
		{
			lines: [
				{ text: "You cleared the middle, stacked things straight," },
				{ text: "said:" },
				{ text: "see, it's fine now.", italic: true },
			],
		},
		{
			lines: [
				{ text: "I stayed in the corner" },
				{ text: "where dust settles and stays," },
				{ text: "where it learns how to live." },
			],
		},
		{
			lines: [
				{ text: "When grit scratched my bare feet," },
				{ text: "I said it hurt." },
				{ text: "You swept it away, quick and quiet," },
				{ text: "smoothed it flat" },
				{ text: "like pain should know where to go." },
			],
		},
		{
			lines: [
				{ text: "I told myself" },
				{ text: "I was lucky." },
			],
		},
		{
			lines: [
				{ text: "you were always ready," },
				{ text: "you never refused." },
			],
		},
		{
			lines: [
				{ text: "That was the problem." },
			],
		},
		{
			lines: [
				{ text: "You cleaned the way you knew," },
				{ text: "the way you always had." },
				{ text: "I didn't know how to ask for corners" },
				{ text: "without sounding ungrateful," },
				{ text: "without asking for more" },
				{ text: "than you could give." },
			],
		},
		{
			lines: [
				{ text: "I learned the push, the pull," },
				{ text: "the places you reached," },
				{ text: "the places you couldn't." },
			],
		},
		{
			lines: [
				{ text: "Sometimes, passing a window," },
				{ text: "I'd see another room" },
				{ text: "where light moved softer" },
				{ text: "along the walls," },
				{ text: "where corners kept" },
				{ text: "without asking." },
			],
		},
		{
			lines: [
				{ text: "I never went in." },
			],
		},
		{
			lines: [
				{ text: "But I noticed." },
			],
		},
		{
			lines: [
				{ text: "I told myself this was my house," },
				{ text: "that some dust was mine to live with," },
				{ text: "that staying was a kind of care." },
			],
		},
		{
			lines: [
				{ text: "Still," },
				{ text: "I think we were cleaning" },
				{ text: "for different reasons," },
				{ text: "hoping for different days." },
			],
		},
		{
			lines: [
				{ text: "Even this poem" },
				{ text: "will stay" },
				{ text: "where you never look," },
				{ text: "not because you won't," },
				{ text: "but because you don't." },
			],
		},
	],
};

export default function Housekeeping() {
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
			{poem.stanzas.map((stanza, index) => (
				<Stanza key={index} lines={stanza.lines} />
			))}
		</>
	);
}

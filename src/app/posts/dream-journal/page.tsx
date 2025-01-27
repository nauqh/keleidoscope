"use client";
import React from "react";
import Image from "next/image";
import HoverCard from "@/components/HoverCard";
import styles from "./page.module.css";

const Paragraph = ({ text }: { text: string }) => (
	<p className={styles.indentedText}>{text}</p>
);
const Paragraph2 = ({ text }: { text: string }) => (
	<p className={styles.baseText}>{text}</p>
);

const paragraphs = [
	"Skin burns. My lungs grasp for air that can't be found. Damp earth presses into my nostrils, my mouth. I'm on the ground. No. I'm in it. I try to move my fingers, but the stench of stale blood weighs down my heavy eyelids. A battlefield of death nettles refuses to let go as I try to crawl through. Thorns dig deeper into my flesh. Someone else is near, scraping the earth. It could be their claws or something peculiar that I can't think of right away. Something is ripping the brambles, gaining on me. They hastily drag through the soil, through the thickets. Always closer.",
	"A scream echoes, not in my ears, but in my skull. It's vibrating in my teeth, under my skin, mingling with the crackling chaos of thoughts. Is it me? Hardly. Mouth is full of dirt. Is it something else? Something outside. Or inside. I can't really tell.",
	"But it's dreadful. Dreadfully pulls their face down, dripping like paint, fluid and wrong. Like a Witch. Their disoriented face is yearning for me, in despair.",
	"Move. Crawl. Quicker. Not Quick Enough. I can feel the nettles inside me now, spreading, rooting under my skin, making me part of the earth. The more I pull, the deeper they burrow in, but I can't stop crawling. I have to. They're coming for me. Their whisper is wavering on top of my ears but can't win over the pounding of my own heartbeat. For whatever reason—they might just want to join me. To have fun and eat dirt.",
	"Car horns blare from afar, drowned by the dead silence within. Yet I crawl till the nettles grow as my bones. Their breath comes close—no, not breath. Colder. Emptier. It's like the space where breath should be but isn't.",
	"They're here. Their fingers, brittle like branches, clutch my ankle. A frozen flame crawls up my spine. Yet I never scream for help. I lunge toward the traffic noise, swallowed by the dirt. Even when the nettles blind me and choke me, I keep crawling.",
	"Then nothing.",
];

const paragraphs2 = [
	"There's so much I've been taught in school. But I've learned one thing: how much people deny their need for good stories. A lie, a truth, doesn't really matter. What matters is control. That's the gist: if you hold it, they buy it.",
	"I once told a teacher that she could get fired.",
	"Kindergarten. She left the classroom as punishment for us kids being noisy. Lights out, doors shut, wailing kids. Urg kids. Their crying pissed me off, although I must admit, the stifling, sweaty air made my breathing stuffy. I forced out some tears because, well, FOMO.",
	"But I couldn't help wondering: were my peers too fragile or was my teacher too naïve for her age? I stayed calm because I knew it wasn't right, ethically. If I've heard it correctly from my dad's morning news:'Private school teachers: one mistake and you're out!' I knew the real power wasn't in the darkness or silence. It's in the bluff. So I did.",
	"\"Would you mind if I told my dad about what happened today? I'm afraid he'd be disappointed and might think I should switch schools. You know my dad. He's always ready to have a word with Miss Principal.\"",
	"Of course, none of that was true, except for the part about my dad genuinely loving a good rant. He would’ve sided with her – he sent me here to be educated, after all. But it didn’t matter. The art wasn’t in having control. The art was in making her believe I did. These days, surviving is about knowing the story they need to hear.",
];

const paragraphs3 = [
	"I follow my apartment floor's hallway to a small alley. The morning air is filled with red lanterns swaying overhead, people tinkling their bikes against worn stone while meandering through lively stalls bursting with delicious treats. I recognised a few faces – neighbours across the hallway perhaps – slurping on shimmering cubes of grass jelly coated in coconut milk. Vietnamese people call it Che Thai, meaning Thai sweet soup. A curious name as it doesn't seem to be a Thai dish.",
	"Tantalising fragrance awakens my inner craving for sweetness. Stomach grumbles to a siren song of zesty cocktails, glistening caramelised Tanghulu, refreshing strawberry Hwachae. I reach for my pockets. Empty. No money. No phone. Panic flares as I rummaged deeper, almost digging a hole in the fabric. Eyes darted around. I yearn for a friendly face who might lend me a few coins (I hope they also think I look familiar). As this strangely huge FOMO kicks in, I already imagine myself begging the sellers to return to pay later.",
	"I wander down the alley, hypnotised by the precious trove of delights. Fruit yoghurts, pandan sauce, melon cakes… All come to Mama! (maybe not the tiramisu – chocolate's never been my thing).",
	"Ferocious footsteps suddenly stumble over and crush the festive air. A crowd starts rushing out like startled ants, fear etched in their eyes. My tinnitus was triggered. Vulnerable ears felt as if ripped apart by high-pitched screams. “This town is haunted! Run!” Head spins. I was barely wobbling through the sweaty wave of humans. Vision blurs. The scene before me loses its dimension, turning into a vibrant painting with wild swirls of violent brush strokes.",
	"In the moment of a dazzling carnival of motion, when red bleeds into everything, I see her. A gigantic, floating theatre mask floating in the alley’s heart. She looks like she belongs to Tuồng, a Vietnamese theatrical opera with masks painted in bold, primary colours embodying Yin and Yang's spirits. No audience is supposed to see the face behind them. Or the masks’ owners deny being seen.",
	"Twisted black and red stripes on her face flare up like lacquered armour, garnishing the swirling crimson sky. She is Yin. Or she embodies a theatrical spirit that carries such alluring darkness in their soul. Charming and menacing. Flames can’t help licking at her edges, crowning her the queen of havoc with beautifully burnt roses.",
	"Undeniable fear battling with odd fascination. My urge to escape is pinned down by twisted ankles as if they’ve forgotten their place. Her dainty silk threads elegantly brush against my skin as she suffocates me in her haunting orbit. My disjointed leg muscles desperately drag my body away with monumental effort. Yet my mind is caught. I grow addicted to that terrifying beauty.",
];
const paragraphs4 = [
	"CommonApp.",
	"I spent my school years in a British school uniform, carrying Dad’s American fascination. My American experience boiled down to Arthur Miller’s A View from the Bridge or Tennessee Williams’ The Glass Menagerie, hardly the global citizenship he’d envisioned. Don’t get me wrong, I did really cherish Christmas pantomimes and Remembrance Day poppies with gusto. Yet the American Dream was so alluring to most Vietnamese parents that very few people blinked at British university fairs. So I hustled to show my ‘leader’ facade – prepped for ACTs, stacked up on competitions and volunteer hours, organised doughnutmaking and reading sessions for kids, ran student council – anything that would make my resume look intimidating and impressive to Texan universities (still, there was this art exhibition to raise money for children needing heart transplants that I genuinely enjoyed producing artworks for).",
];
const paragraphs5 = [
	"So, I did what any (self-respecting) student would do: I stalked their website and socials. I found their police department (security: check), friendly community (vibe: check), and Aikido (which I’d quit five years ago, though I could still nail hand locks and spins): “For a person who has practised Aikido since eight, I am interested in the Aikido Club because very few schools celebrate this kind of martial art.”",
	"I also waxed lyrical about enriching the campus with my Vietnamese heritage, considering one hour a week of language class was all we got just to assure our parents that we wouldn’t forget where we came from.",
	"Hot tip for uni applicants: ten minutes of intense Googling could make you sound like a lifelong follower. It also worked for UT Austin, which I didn’t think I succeeded due to: Firstly, their ranking. Secondly, I wanted to pursue psychology in a school well-known for their American football spirit. When asked about leadership experience, I tried to imagine my inner Texan screaming ‘Hook em’ Horns’, which was indeed a trip. Leadership was never my strength. Especially after my parents’ divorce, I have been horribly avoidant of leadership. Still, I managed to whip an answer about being a ‘democratic leader with a hint of autocratic, who concerns members’ personal and professional satisfaction.’",
	"Psychology was more of a natural pick – I wanted to understand my hand tremor, something I got from Dad. In fact, everyone has been saying I’m his female version. Tell us your story. What unique opportunities or challenges have you experienced throughout high school that have shaped who you are today?",
];
const paragraphs6 = [
	"Our living room is bathed in a dim olive-green glow from the old chandelier. At six, when I first moved into the house, I used to think this green light was so sick and couldn’t wait until Lunar New Year when Mom turned it on. Maybe that rare use adds to what makes it so sacred; plus, I don’t think I ever see anyone change that lightbulb. Every door across the town is wide open tonight, inviting luck to come as we begin our New Year – Tet ritual.",
	"In the front yard, the incense is starting to burn, the comforting aroma mingling with candles warming up the midnight air. In Vietnam, we tend to wait for the incense sticks to burn out fully, as we believe that our prayers will come with the curling smoke when our ancestors depart from the celebration. There’s something so fluttering about New Year’s Eve. Maybe it is the spring breeze, rare in Saigon, where it only gets hot, even hotter, hottest. Maybe it is the blessings that brighten the city, a present that brings us into the new year. Maybe it’s the awareness that we’ll have to rise at six in the morning to breathe in the first air of Tet despite going to bed at four. The day will be filled with family gatherings, the crimson and amber of apricot blossoms and national flags, and the star of the show – the lucky red envelopes tugging tights in our pockets. Like every other year, it’s just me, Mom and my brother. While my mom and brother make phone calls while walking back and forth, I quietly look into the living room, inhaling the sweetness of another fresh start.",
	"I somehow feel more jittery this year due to something I can’t quite place, which the excitement might have overshadowed. Moving my gaze to the dark stairs. We’re trying to save some electricity since everyone’s here. But of course, the upstairs is filled with things that mark our 15 years of stay in this home:",
	"Books, shelves, pencils, pen holders, papers, PUPPETS.",
	"Lively colourful puppets with flimsy long hands peeking from the shadow as if they also want to join us for Tet.",
	"I then see her. A guest of my brother, I assume, since I hear their footsteps approaching the table of incense. I can’t see her face clearly, probably due to the green glow that makes everything seem unrealistic. Even my skin looks green. But I’m aware she’s all dressed up, just like us, to celebrate.",
	"Mom smiles as she offers to shake hands. So annoying. Though I’m generally nonjudgemental to visitors, the way she waves at the puppets irritates me. How rude. This isn’t playtime.",
	"More hands, longer hands trying to reach her from darkness as she stands beyond the incense smoke. Something sharp stirring in my stomach.",
	"Snap, snap. The puppets' heads come free. I make sure to also treat our guest a neck massage.",
	"Pop. Spiralling, she seems to give way.",
	"No red. Just messy fluffs mixed with smoky haze. I let my hands slash freely through the air until there are no more floating cotton balls, until I can only feel the heat from friction and gravity against my relentless movement.",
	"Very quickly a burning sensation crawls all over my body. I press Mom and my brother out of the house as smoke starts to cover their expressions. Smoke must have lurked in my senses – Flashes of my dad sleeping upstairs in my bed pulls my heart down as if every beat feed the flames, making it impossible to ignore. Yet I hesitate. Part of me resists, hovering over memories between us, like how he barely checked on me if I was ten steps behind during our walk or never realised I could not have chocolate. But I guess his blood and his name I’m carrying within me is slightly stronger. And the urge to keep referring to him as dad. I rushed back. We’re all safe.",
	"Outside, there’s nothing in that moment, but my house being engulfed in monstrous flame. The brightest spark to celebrate the first day of the year’s first morning.",
];
const paragraphs7 = [
	"You see, I pretty much dedicated my life to bluffing my way through a foolproof plan to reach the glorious American Dream. But damn, there must be a reason ‘fool’ is right there in foolproof. I didn’t prepare for Mom’s fight with her boyfriend to blow up, making her decide she’s not going to America They’re still together, yet it turns out bluffing couldn’t do much in that situation. No mom, no reasons for Texas.",
	"Clutching the Longhorns welcome package, I thought as if I wasn’t living. American dream, A-levels, ACT suddenly sounded unfamiliar. I didn’t want to know them. But I didn’t know what’s next either. Too Vietnamese for the world, too foreign for Vietnamese. I felt like a true osu, Nigerian term for ‘cultural outsider’ that kids from our school jokingly labelled ourselves as after reading Chinua Achebe’s novel.",
	"Journalism. Wrong turn. Sure, it was fun to promise active speakers from protests that their voices would be heard. On my LMS. Most of the time, ‘your news article is too creative’, not in a good way. More precision, less description. Honestly, I don’t get it. I had never been this truthful for the longest time in my life. Regardless, I took the feedback constructively.",
	"I took Creative Writing.",
	"I wasn’t requested to be bluntly truthful, which is great, but my first storytelling attempts were just forced positivity. My writing sounded as confused as I was, especially when I claimed that was ‘for children’. Or maybe I was just a bad writer.",
	"Two years on, still confused. One tutor told me never to skip the drama because no one cares about happy stories, while another was horrified by that.",
	"Yet I’ve cried more than my entire life combined. I cried as I wrote about my nightmares. I cried as I wrote about the ringing in my ear. The last time I cried was yesterday when watching Trump’s granddaughter describing him as a typical grandpa. I’m actually tearing up when writing this.",
	"It’s tough. But fascinating. Storytelling has allowed me to, as Nam Le said:",
];

const paragraphs8 = [
	"“Hold to trauma",
	"Even if it never happened to you",
	"You may claim it.”",
	"And I’m ready, for some more good tears.",
];
const Dream = () => {
	return (
		<>
			<Image
				src="https://images8.alphacoders.com/119/1197975.jpg"
				alt="Unspoiled"
				width={1920}
				height={1080}
				className="rounded-md h-full w-full"
			/>
			<p className="text-xs text-gray-500 mt-2 text-center">
				Image from{" "}
				<a
					href="https://wall.alphacoders.com/big.php?i=1197975"
					className="hover:text-[hsl(var(--secondary-color))]"
				>
					Beyond the Void
				</a>
			</p>
			<h2 className="text-lg text-center leading-relaxed my-10 italic">
				I don't write journals. I dream them. I dream by them, with
				them, through them.
			</h2>

			<HoverCard title="Crawl Witch Crawl">
				{paragraphs.map((text, index) => (
					<Paragraph key={index} text={text} />
				))}
			</HoverCard>
			<div className="flex items-center justify-center">
				<span className="text-2xl">#</span>
			</div>
			<p className={`${styles.indentedText} my-4`}>
				I dream a lot. But I don’t chase – I hunt them. After all, as
				people say, dreams don’t work unless you do.
			</p>
			<p className={`${styles.baseText} my-4`}>
				1. I have always enjoyed the language of clothing. My GCSE Art
				teacher hated the coloured liners in my sketchbook. For my final
				piece, I made my friends cover their hollow eyes. That's when I
				discovered my talent for oil pastels, and I finally decluttered
				all the watercolours I'd been hoarding for years (most of them
				borrowed from the art room anyway).
			</p>
			<p className={`${styles.baseText} my-4`}>
				I performed surgery on my painting: Dissected furious faces,
				splashed them in paint, monochromatic rage. That piece made it
				to the school exhibition, framed and all. 'In Disguise' – I
				wrote in my annotations that ambiguity is the true colour of
				life. The Cambridge people loved it and gave me an A. I've never
				touched the drawing pad ever since.
			</p>
			<p className={`${styles.baseText} my-4`}>
				2. A level Drama happened because of my dad, a Ted Talk fanatic.
				I did end up falling in love with stage directing and design.
				Teachers were shocked by how fast I improved. I performed a girl
				trapped in an asylum for my monologue assessment. Frankly
				speaking, it looked more like demonic possession than illness.
				Pyjamas, smeared mascara, pale lips, dark circles, and twitchy,
				unstable moves. She'd gone insane for her career. I don't really
				remember the details of her ruined career I bluffed to my
				teacher about. Just flashes of drugs and alcohol – she was a
				painter.
			</p>
			<p className={`${styles.baseText} my-4`}>
				Some of my classmates were startled when they saw me on stage,
				but they applauded. I've never really stepped foot on a stage
				since. My dad said no. He switched from Ted Talks to Trump.
			</p>
			{paragraphs2.map((text, index) => (
				<Paragraph key={index} text={text} />
			))}
			<HoverCard title="Queen of Havoc">
				{paragraphs3.map((text, index) => (
					<Paragraph key={index} text={text} />
				))}
			</HoverCard>
			<div className="flex items-center justify-center">
				<span className="text-2xl">#</span>
			</div>
			{paragraphs4.map((text, index) => (
				<Paragraph key={index} text={text} />
			))}
			<p className={styles.indentedText}>Reasons to choose Texas:</p>
			<p className={styles.baseText}>
				1. NASA was right there, and everyone has been going to the East
				side, so it’s unique. Plus, everything is BIG in Texas, quoted
				my biology teacher.
			</p>
			<p className={styles.baseText}>
				2. (If I wasn’t lying) My mom’s boyfriend worked at NASA
				headquarters in Houston (I know), so she’d love it for us to
				stay close.
			</p>
			<p className={styles.indentedText}>
				Decent reasons, but none of them would get me to college.
			</p>
			<p className={styles.indentedText}>
				I first applied to Baylor, a Baptist university, as someone
				whose nationality screamed Buddhism and was raised in a home of
				scientists. Being brutally honest usually wouldn’t get me
				anywhere, especially answering this question without just
				mentioning their cute Bear mascot:
			</p>
			<p className={styles.baseText}>
				<i>
					Why do you want to attend Baylor and how do you see yourself
					contributing to the Baylor Community?
				</i>
			</p>
			{paragraphs5.map((text, index) => (
				<Paragraph key={index} text={text} />
			))}
			<p className={styles.indentedText}>
				<s>
					…. sophomore chemistry lab (I searched up what sixth form
					means in the American system) … I struggled with titration …
					I could not control my hands' shakiness… too much acid
					flowed into the base.
				</s>
			</p>
			<p className={styles.indentedText}>
				… The internal breakdown is still so fresh that I hardly forget.
				My condition worsened one month before finals…. my parents'
				divorce tore me… I had to be my younger brother's only emotional
				support…. It’s impossible to tell my parents since I frequently
				heard my mother talk down on dad's shaky hands and call him
				'mentally ill'.... even my dad did not admit that his hands also
				trembled.{" "}
				<s>
					Solution: I spent more time after school in the laboratory…
					I practised hand positioning and balancing at home. With a
					bit of luck, I passed the practical exam.
				</s>
			</p>
			<p className={styles.indentedText}>
				I was afraid my ‘opportunity’ appeared too unique. If the essay
				practically wrote itself, besides the messy divorce and Mom’s
				brutal digs at Dad’s tremors, there would also be how I
				accidentally discovered Dad’s affairs and didn’t say a word for
				two years. Or how I subtly let Mom find out and played innocent.
				Or how I defended Dad from Mom’s Scorpio sting, as I thought he
				also had his side of the story. And Dad’s words about me being
				the cause that ruined our family stung me more than his refusal
				to be a pawn in their failing marriage. In short, my teenage
				years were when I denied my family name.
			</p>
			<p className={styles.indentedText}>
				But to sum up everything, traumatic white lies were marketable,
				and I was welcomed as a ‘Longhorn.’
			</p>

			<HoverCard title="I watch my house burning before me">
				{paragraphs6.map((text, index) => (
					<Paragraph key={index} text={text} />
				))}
			</HoverCard>
			<div className="flex items-center justify-center">
				<span className="text-2xl">#</span>
			</div>

			<p className={styles.baseText}>
				<i>Melbourne, 2022. Zero plans.</i>
			</p>
			{paragraphs7.map((text, index) => (
				<Paragraph key={index} text={text} />
			))}
			{paragraphs8.map((text, index) => (
				<Paragraph2 key={index} text={text} />
			))}
		</>
	);
};

export default Dream;

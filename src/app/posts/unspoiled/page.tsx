"use client";
import React, { Suspense } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Page = () => {
	const searchParams = useSearchParams();

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Image
					src={searchParams.get("img") || ""}
					alt="Unspoiled"
					width={1920}
					height={1080}
					className="rounded-md h-full w-full"
				/>
			</Suspense>
			<p className="text-xs text-gray-500 mt-2 text-center">
				Image from{" "}
				<a
					href="https://unsplash.com"
					className="hover:text-[hsl(var(--secondary-color))]"
				>
					Beyond the Void
				</a>
			</p>
			<h2 className="text-lg text-center leading-relaxed my-10">
				We all had been wanting plums to have a strawberry aftertaste.
			</h2>
			<p className={styles.italicText}>Strawberry-picking</p>
			<p className={styles.baseText}>
				She was late. He waved at her under the traffic light as she
				jumped off the tram and squeezed through the weekend crowd. She
				did not look into his eyes but could feel his gaze glued on her
				hairline. She was too busy holding on to the warm strawberry
				crepe with both hands. The creamy odour of butter and vanilla
				harmonised with the fruitiness of strawberry fillings. Her
				fingertips urged to poke through the fluffy white cream,
				caressing freshly picked strawberry pieces. They ambled along,
				elbows tenderly touching. Genuinely clumsy (or clumsily genuine)
				verbal connections were made while looking at the stars. "Are
				you coming tomorrow?" He gently asked for the third time. The
				silence was at its loudest. She timidly enclasped his sleeve as
				they crossed the road, yet the superficially comforting
				strawberries picking got her mind fully sucked up. She missed
				the question.
			</p>
			<p className={styles.baseText}>
				She <span className="italic">misses</span> it.
			</p>
			<p className={styles.italicText}>August 4, 20xx, 10:09 pm</p>

			<p className={styles.rightAlignedItalicText}>Plums in the dark</p>
			<p className={styles.rightAlignedText}>
				He was late. She whispered into her tiny hands and rubbed them
				together. "A table for one, please," she did not bother to wait.
				Her hands hastily embraced the sweet, slightly smoky, smelling
				candle mistaken as a drinking cup a minute earlier. Stiff upper
				lips, she smiled as she saw a shadow approaching. Smooth convo.
				His nods and 'ums' to her excessive rants touched her
				delicately. Sometimes it felt like she was giving multiple short
				lectures, but she did not hate it. She was being verbally
				productive, even when the plum tart appeared as a purple-red
				mosaic dazzling under the candlelight. She played with his ring,
				calling for his fingers to wrap around hers. Connection not
				found. Neither physically nor emotionally. "I'm coming to your
				place tonight." A seizing pressure suddenly awakened her numb
				fingertips. She stared into the candle, desperately longing for
				the lifeless flame to engulf her away from this intimate
				ambiance. Biting lips, the scrumptious plum bit in her mouth
				rotten. Her mouth got paralysed. She heard the question.
			</p>
			<p className={styles.rightAlignedItalicText}>
				March 25, 20xx, 01:34 am
			</p>

			<p className={styles.indentedItalicText}>Da-dum, da-dum, da-dum,</p>
			<p className={styles.indentedText}>
				Nostrils were about to explode. Head tilted. Chin lifted. I went
				a bit overboard with grasping the fresh autumn breeze into my
				lungs. Cough, cough. If Granny was here, she would nag me with
				her high-pitched nasal voice for not drinking enough hot
				Artichoke tea. Trying real hard to not let down the inherited,
				if any, Asian-weather-forecast gene, I studied the vast picture
				to see if I could call after someone for once, "Remember to
				bring your umbrella!" Living up to the A-star daughter standard,
				all I did was intensely stare at the blue canvas with humongous
				floating cotton balls. The wobbly edges compliantly bumped into
				each other as the wind told them to. The cotton drifted,
				unfolding the pristine blue that played a melodic acoustic
				soundtrack by my ear. The maple leaves rustling beneath my
				striped pyjamas pants joined the serene tweeting, occupying the
				main performing slot. The slanting rays slipped through the
				greens and yellows, brushing glossy strokes onto the existing
				ethereal canvas. With her motherly nature, the beam patiently
				approached and blew good morning kisses to the munchkins.
				Munchkins, that's how she called the fragile periwinkle petals,
				the olive greens covered with dew drops, the hundred-year-old
				gnarled oak to the deep emerald grassy hill over there.
			</p>
			<p className={styles.indentedText}>
				Crisp into the crispy. The gust of season tousled my thinning
				hair, tousled the crusty gold that tickled my bare feet. I
				inched my way through the lustre sugarbush, feeling orange. Here
				She was. Grooving in the muddy foot bath, showing off her fiery
				autumn crown. Swish, swoosh. She invented music. She hummed. She
				groaned. She possessed the tranquillity and aggression from all
				the book chapters I had ever skimmed through. She spared the rod
				to un-spoil the child. I'm her child.
			</p>
			<p className={styles.indentedText}>"What do we have for today?"</p>
			<p className={styles.indentedText}>
				No more strawberries, please. I devoured my intrusive thoughts
				as soon as my tongue felt slippery. Three months – it would even
				make total sense if I woke up one day seeing bright red arms and
				legs and a pimply face. Strawberry skin – not handsome, or at
				least I wouldn't consider it conventionally attractive. The
				crusty yellow dots, some called them ovaries, but I just called
				them seeds, did not look appealing on the scarlet coat.
				Hesitantly sliding against a bumpy heart, my fingertips stung a
				little. Pinching my nose while chewing. I thought it was better
				to do something before I could sniff out an aching daydream.
			</p>
			<p className={styles.indentedItalicText}>
				“Plum for today, yeah?” She cackled.
			</p>
			<p className={styles.indentedText}>
				Rubbing my hands a few times until enough warmth was there to
				fuel my self-reassurance, I cupped them together, getting ready
				for a good catch. A-choo. Her sneeze sent the withered maple
				leaves jiggling on the creamy soil, composing an aromatically
				brittle soundtrack. Nice catch! My long sleeve now came in
				handy. The plum was vigorously polished and ready to be chomped
				away.
			</p>
			<p className={styles.indentedText}>
				It sat perfectly in my palm. Rounded. Hues of maroon red weaved
				into the glossy dark purple, tailoring a luminously dandy
				appearance. Stroking its satiny smooth surface, I was more than
				ready to fulfil my wish of a sensuous juicy bite. The sour
				crunch was suavely followed by the sweet, velvety flesh that
				carried a muted, tangy undertone. My thirst was quenched to its
				sublime as if there had been a sudden drizzle on parched lands.
				Irresistible. Addictive. Mesmerising. I would beg for more.
				Mouth wide opened, I shovelled the very last central bit with
				eagerness.
			</p>
			<p className={styles.indentedText}>
				<span className="font-semibold italic">Awk!</span> A tingling
				chime snapped me out of the coma. It was subtle at first.
				Something like a bullet just tightened a knot in my oesophagus,
				and somehow forgot to buy the ticket to an abdominal carnival.
				Feeling stiff. Stuffed. Strained. It should be non-fatal. Tongue
				endeavoured to nail a backward spin to the vocal chord.{" "}
				<span className="italic">Gulp</span>. Light rain did not satisfy
				my greed at this point. <span className="italic">Gulp</span>.
				The desire of being inundated. Being flooded. Being washed away
				in the most severe downpours, torrential rains, and
				thunderstorms. My gaze crawled up to her crown, hoping for a
				response to this yearning to flush the plum’s missile shot that
				was too dry to puke up. Delightfully watching, She spared her
				rod.
			</p>
			<p className={styles.indentedText}>
				The adrenaline died down, giving way to the excruciating burn of
				someone pressing his palms against my neck. Screaming in
				silence, I risk my last gasp of breath to spring up and rush. To
				nowhere. To anywhere that I could dump this suffocation. A
				stale, metallic pungency provoked, with an oddly familiar sweet
				aftertaste lurking around the corner. My taste buds recalled the
				very first sensations of plucking the scarlet heart from its
				vine, popping it between shrunken lips, and letting it freely
				take the slide. Three months of hitting the bull’s eye in one
				bite had made the bed for me to sleep on my laurels. I slept on
				the feathery pressure of vibrant ripe strawberries overflowing
				from my front pockets. A cooling heart to touch. A cooling heart
				to tongue. A tender soul was hidden behind a bumpy body. It was
				like poking a jelly bead, which took minimal effort to crush
				through the crunchy coat to attain the exquisite squeeze of
				essence. A small but mighty essence that fondly softened a tough
				day, soothed an unsettled mind, and healed a wounded heart.
			</p>
			<p className={styles.indentedText}>
				[An internal order received, waiting to be confirmed: one soft,
				heavenly sweet bite with a pump of lingering tartness, the
				non-overbearing type.]
			</p>
			<p className={styles.indentedText}>
				I coughed out crimson. It must be my energy that escaped. Hands
				loaded with gravity. I must have been over-running. It’s time
				for a breather. It’s time to{" "}
				<span className="italic">un-spoil</span>.
			</p>
			<p className={styles.indentedItalicText}>da…dum…da…dum…da……</p>
			<p className={styles.rightAlignedItalicText}>Shhh. It’s bedtime.</p>
		</>
	);
};

export default Page;

import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const page = () => {
	return (
		<>
			<div className="container mx-auto px-4 py-5">
				<h2 className="text-sm font-semibold text-[hsl(var(--secondary-color))]">
					DECLUTER
				</h2>
				<h1 className="text-4xl my-2">Unspoiled</h1>
				<div className="flex items-center gap-2">
					<Avatar>
						<AvatarImage src="/self.jpg" alt="@shadcn" />
					</Avatar>
					<span>
						by{" "}
						<Link
							href="/"
							className="hover:text-[hsl(var(--secondary-color))]"
						>
							{" "}
							Keleidoscope
						</Link>
					</span>
				</div>
			</div>
			<div className="container mx-auto px-4 py-5">
				<h2 className="text-lg font-semibold text-center leading-relaxed">
					We all had been wanting plums to have a strawberry
					aftertaste.
				</h2>
				<p className="italic text-xl leading-relaxed">
					Strawberry-picking
				</p>
				<p className="text-xl leading-relaxed">
					She was late. He waved at her under the traffic light as she
					jumped off the tram and squeezed through the weekend crowd.
					She did not look into his eyes but could feel his gaze glued
					on her hairline. She was too busy holding on to the warm
					strawberry crepe with both hands. The creamy odour of butter
					and vanilla harmonised with the fruitiness of strawberry
					fillings. Her fingertips urged to poke through the fluffy
					white cream, caressing freshly picked strawberry pieces.
					They ambled along, elbows tenderly touching. Genuinely
					clumsy (or clumsily genuine) verbal connections were made
					while looking at the stars. "Are you coming tomorrow?" He
					gently asked for the third time. The silence was at its
					loudest. She timidly enclasped his sleeve as they crossed
					the road, yet the superficially comforting strawberries
					picking got her mind fully sucked up. She missed the
					question.
				</p>
				<p className="text-xl leading-relaxed">
					She <span className="italic">misses</span> it.
				</p>
				<p className="text-xl italic leading-relaxed">
					August 4, 20xx, 10:09 pm
				</p>

				<p className="text-xl text-right italic leading-relaxed">
					Plums in the dark
				</p>
				<p className="text-xl text-right leading-relaxed">
					He was late. She whispered into her tiny hands and rubbed
					them together. "A table for one, please," she did not bother
					to wait. Her hands hastily embraced the sweet, slightly
					smoky, smelling candle mistaken as a drinking cup a minute
					earlier. Stiff upper lips, she smiled as she saw a shadow
					approaching. Smooth convo. His nods and 'ums' to her
					excessive rants touched her delicately. Sometimes it felt
					like she was giving multiple short lectures, but she did not
					hate it. She was being verbally productive, even when the
					plum tart appeared as a purple-red mosaic dazzling under the
					candlelight. She played with his ring, calling for his
					fingers to wrap around hers. Connection not found. Neither
					physically nor emotionally. "I'm coming to your place
					tonight." A seizing pressure suddenly awakened her numb
					fingertips. She stared into the candle, desperately longing
					for the lifeless flame to engulf her away from this intimate
					ambiance. Biting lips, the scrumptious plum bit in her mouth
					rotten. Her mouth got paralysed. She heard the question.
				</p>
				<p className="text-xl text-right italic leading-relaxed">
					March 25, 20xx, 01:34 am
				</p>

				<p
					className="text-xl italic leading-relaxed"
					style={{ textIndent: "4rem" }}
				>
					Da-dum, da-dum, da-dum,
				</p>
				<p
					className="text-xl leading-relaxed"
					style={{ textIndent: "4rem" }}
				>
					Nostrils were about to explode. Head tilted. Chin lifted. I
					went a bit overboard with grasping the fresh autumn breeze
					into my lungs. Cough, cough. If Granny was here, she would
					nag me with her high-pitched nasal voice for not drinking
					enough hot Artichoke tea. Trying real hard to not let down
					the inherited, if any, Asian-weather-forecast gene, I
					studied the vast picture to see if I could call after
					someone for once, "Remember to bring your umbrella!" Living
					up to the A-star daughter standard, all I did was intensely
					stare at the blue canvas with humongous floating cotton
					balls. The wobbly edges compliantly bumped into each other
					as the wind told them to. The cotton drifted, unfolding the
					pristine blue that played a melodic acoustic soundtrack by
					my ear. The maple leaves rustling beneath my striped pyjamas
					pants joined the serene tweeting, occupying the main
					performing slot. The slanting rays slipped through the
					greens and yellows, brushing glossy strokes onto the
					existing ethereal canvas. With her motherly nature, the beam
					patiently approached and blew good morning kisses to the
					munchkins. Munchkins, that's how she called the fragile
					periwinkle petals, the olive greens covered with dew drops,
					the hundred-year-old gnarled oak to the deep emerald grassy
					hill over there.
				</p>
				<p
					className="text-xl leading-relaxed"
					style={{ textIndent: "4rem" }}
				>
					Crisp into the crispy. The gust of season tousled my
					thinning hair, tousled the crusty gold that tickled my bare
					feet. I inched my way through the lustre sugarbush, feeling
					orange. Here She was. Grooving in the muddy foot bath,
					showing off her fiery autumn crown. Swish, swoosh. She
					invented music. She hummed. She groaned. She possessed the
					tranquillity and aggression from all the book chapters I had
					ever skimmed through. She spared the rod to un-spoil the
					child. I'm her child.
				</p>
				<p
					className="text-xl leading-relaxed"
					style={{ textIndent: "4rem" }}
				>
					"What do we have for today?"
				</p>
				<p
					className="text-xl leading-relaxed"
					style={{ textIndent: "4rem" }}
				>
					No more strawberries, please. I devoured my intrusive
					thoughts as soon as my tongue felt slippery. Three months –
					it would even make total sense if I woke up one day seeing
					bright red arms and legs and a pimply face. Strawberry skin
					– not handsome, or at least I wouldn't consider it
					conventionally attractive. The crusty yellow dots, some
					called them ovaries, but I just called them seeds, did not
					look appealing on the scarlet coat. Hesitantly sliding
					against a bumpy heart, my fingertips stung a little.
					Pinching my nose while chewing. I thought it was better to
					do something before I could sniff out an aching daydream.
				</p>
			</div>
		</>
	);
};

export default page;

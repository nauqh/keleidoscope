import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface PostProps {
	title: string;
	img: string;
	posted_at: string;
}

const Post = ({ title, img, posted_at }: PostProps) => {
	return (
		<Link href={`/posts/${title.toLowerCase().replace(/\s+/g, "-")}`}>
			<Card className="border-none h-fit transition-all duration-300 hover:-translate-y-2">
				<CardHeader>
					<CardTitle className="my-4 text-xl text-center font-normal">
						{title}
					</CardTitle>
					<CardDescription className="text-center">
						{new Intl.DateTimeFormat("en-US", {
							weekday: "long",
							month: "long",
							day: "numeric",
							year: "numeric",
						}).format(new Date(Date.parse(posted_at)))}
					</CardDescription>
				</CardHeader>

				<CardContent>
					<img src={img} className="w-auto h-auto rounded" />
					<p className="text-justify mt-4 font-thin">
						It&apos;s only when my jaw starts to ache and I can no
						longer ignore the thick ridge of his erection against my
						stomach that I stop kissing Charlie and look down
						between us. My hands rush to the belt he&apos;s wearing
						but I get nowhere before he&apos;s covering my fingers
					</p>
				</CardContent>
				<CardFooter className="gap-2">
					<Badge variant="secondary">Badge</Badge>
					<Badge variant="secondary">Badge</Badge>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default Post;

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
	description?: string;
	tags?: Array<string>;
	url?: string;
}

const Post = ({ title, img, posted_at, description, tags, url }: PostProps) => {
	return (
		<Card className="border-none h-fit transition-all duration-300 hover:-translate-y-2 group break-inside-avoid">
			<Link
				href={
					url ||
					`/posts/${
						tags?.includes("collection") ? "collection/" : ""
					}${title.toLowerCase().replace(/\s+/g, "-")}${
						tags
							? `?tags=${tags.join(",")}&img=${img}`
							: `?img=${img}`
					}`
				}
			>
				<CardHeader>
					<CardTitle className="my-4 text-xl text-center font-light group-hover:text-[hsl(var(--secondary-color))]">
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
					{description && (
						<p className="text-justify mt-4 font-thin">
							{description}
						</p>
					)}
				</CardContent>
				<CardFooter className="gap-2">
					{tags?.map((tag) => (
						<Badge key={tag} variant="secondary">
							{tag}
						</Badge>
					))}
				</CardFooter>
			</Link>
		</Card>
	);
};

export default Post;

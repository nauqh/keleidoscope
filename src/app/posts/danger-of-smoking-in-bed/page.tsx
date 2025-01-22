import React from "react";
import Image from "next/image";

const page = () => {
	return (
		<>
			<Image
				src="https://s3-eu-west-1.amazonaws.com/asthebirdfliesblog.com/content/images/posts/pexels-lalesh-aldarwish-147634_x960.jpg?v=1"
				alt="Unspoiled"
				width={1920}
				height={1080}
				className="rounded-md h-full w-full"
			/>
		</>
	);
};

export default page;

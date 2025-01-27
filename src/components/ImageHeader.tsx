import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const ImageHeader = () => {
	const searchParams = useSearchParams();
	return (
		<Image
			src={searchParams.get("img") || ""}
			alt="Unspoiled"
			width={1920}
			height={1080}
			className="rounded-md h-full w-full"
		/>
	);
};

export default ImageHeader;

"use client";
import React, { Suspense } from "react";

import ImageHeader from "@/components/ImageHeader";

export default function Post() {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ImageHeader />
			</Suspense>
		</>
	);
}

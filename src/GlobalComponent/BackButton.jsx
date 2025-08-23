"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = ({
	label = "Back",
	className = "inline-flex items-center gap-2 text-[#024B53] hover:text-[#01383E] text-sm font-medium",
	onFallback,
}) => {
	const router = useRouter();

	const handleBack = () => {
		if (typeof window !== "undefined" && window.history.length > 1) {
			router.back();
		} else if (typeof onFallback === "function") {
			onFallback();
		} else {
			router.push("/");
		}
	};

	return (
		<button type="button" onClick={handleBack} className={className} aria-label="Go back">
			<ArrowLeft size={18} />
			<span>{label}</span>
		</button>
	);
};

export default BackButton;
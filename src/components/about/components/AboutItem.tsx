import { motion } from "framer-motion";
import React from "react";
import { aboutAnimation } from "../../../utils/aboutAnimation";

interface AboutProps {
	content: string;
	href?: string;
}

const AboutItem = ({ content, href }: AboutProps) => {
	return (
		<motion.a
			className="flex transition-all ease-linear hover:text-blue"
			variants={aboutAnimation}
			href={href}
		>
			{content}
		</motion.a>
	);
};

export default AboutItem;

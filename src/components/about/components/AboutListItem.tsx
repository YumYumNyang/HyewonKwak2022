import { motion } from "framer-motion";
import React from "react";
import { aboutAnimation } from "../../../utils/aboutAnimation";

interface AboutProps {
	content: string;
}

const AboutListItem = ({ content }: AboutProps) => {
	return <motion.li variants={aboutAnimation}>{content}</motion.li>;
};

export default AboutListItem;

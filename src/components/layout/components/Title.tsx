import { motion } from "framer-motion";
import React from "react";

type TitleProps = {
	title: string;
};
const str = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		scale: [0, 1.1, 0.95, 1],
		transition: { times: [0, 0.6, 0.7, 0.8] },
	},
};
const Title = ({ title }: TitleProps) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="show"
			variants={str}
			className="my-20 text-center font-title text-7xl sm:text-4xl md:text-5xl lg:text-5xl sm:my-8 md:my-5 lg:my-5 :my-5"
		>
			{title}
		</motion.div>
	);
};

export default Title;

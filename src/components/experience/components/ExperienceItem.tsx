import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { comeUpAnimation } from "../../../utils/comeUpAnimation";
import { descAnimation } from "../../../utils/descAnimation";

interface Props {
	title: string;
	desc: ReactElement;
	period: string;
}

const date = {
	hidden: { opacity: 0, y: -20 },
	show: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.8 } },
};

const ExperienceItem = ({ title, desc, period }: Props) => {
	return (
		<div className="container flex justify-between p-20 sm:flex-col sm:p-3 md:p-3 lg:p-5 xl:p-5">
			<motion.div
				initial="hidden"
				whileInView="show"
				variants={descAnimation}
				viewport={{ once: true }}
			>
				<motion.div
					variants={comeUpAnimation}
					className="text-3xl font-subTitle sm:text-base md:text-2xl lg:text-3xl "
				>
					{title}
				</motion.div>
				<motion.div
					variants={comeUpAnimation}
					className="py-2 mt-2 font-etc sm:text-2xs md:text-xs lg:text-sm"
				>
					{desc}
				</motion.div>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="show"
				variants={date}
				viewport={{ once: true }}
				className="py-2 overflow-visible text-right font-desc sm:text-left sm:text-xs md:text-xs lg:text-xs xl:text-sm"
			>
				{period}
			</motion.div>
		</div>
	);
};

export default ExperienceItem;

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { comeUpAnimation } from "../utils/comeUpAnimation";
import { descAnimation } from "../utils/descAnimation";

interface Props {
  src: StaticImageData;
  title: string;
  subTitle: string;
  description: string;
}
const LeftProject = ({ src, title, subTitle, description }: Props) => {
  return (
    <div className="text-right project-container sm:left-mobile-project-container md:left-mobile-project-container lg:left-mobile-project-container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={comeUpAnimation}
        className="relative image-container sm:mobile-image-container md:mobile-image-container lg:mobile-image-container"
      >
        <Image
          alt={title}
          src={src}
          objectFit="contain"
          layout="fill"
          objectPosition="center"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={descAnimation}
        viewport={{ once: true }}
        className="flex flex-col justify-center sm:mobile-desc-container md:mobile-desc-container  lg:mobile-desc-container"
      >
        <motion.div
          variants={comeUpAnimation}
          className="font-subTitle border-text-black dark:border-text-whtie-white sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl dark:border-text-white-white text-6xl"
        >
          {title}
        </motion.div>
        <motion.div
          variants={comeUpAnimation}
          className="font-subTitle sm:text-xs md:text-xs lg:text-sm text-lg xl:text-base"
        >
          {subTitle}
        </motion.div>
        <motion.div
          variants={comeUpAnimation}
          className="font-desc sm:text-2xs md:text-2xs lg:text-xs xl:text-sm  "
        >
          {description}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LeftProject;
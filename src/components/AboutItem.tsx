import { motion } from "framer-motion";
import React from "react";

interface AboutProps {
  content: string;
  href?: string;
}
const about = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const AboutItem = ({ content, href }: AboutProps) => {
  return (
    <motion.a
      className="flex hover:text-blue transition-all ease-linear"
      variants={about}
      href={href}
    >
      {content}
    </motion.a>
  );
};

export default AboutItem;

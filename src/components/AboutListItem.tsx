import { motion } from "framer-motion";
import React from "react";

interface AboutProps {
  content: string;
}
const about = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const AboutListItem = ({ content }: AboutProps) => {
  return <motion.li variants={about}>{content}</motion.li>;
};

export default AboutListItem;

import { motion } from "framer-motion";
import React from "react";

const line = {
  hidden: { opacity: 0, width: "0px" },
  show: { opacity: 1, width: "90%", transition: { duration: 0.5 } },
};

const Line = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={line}
      className="border-b"
    ></motion.div>
  );
};

export default Line;

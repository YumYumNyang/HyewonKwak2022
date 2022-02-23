import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import Introduce from "../../src/components/Introduce";
import Title from "../../src/components/Title";
import surfer from "../../public/surfer.jpeg";
import { motion } from "framer-motion";
import { comeUpAnimation } from "../../src/utils/comeUpAnimation";
import { talkAnimation } from "../../src/utils/talkAnimtaion";
import { buttonAnimation } from "../../src/utils/buttonAnimation";
import AboutItem from "../../src/components/AboutItem";
import AboutListItem from "../../src/components/AboutListItem";

const About: NextPage = () => {
  return (
    <div className="container min-w-full min-h-screen overflow-scroll flex flex-col items-center">
      <Title title={"Who am I?"} />
      <Introduce />
      <motion.div
        initial="hidden"
        animate="show"
        variants={table}
        className="container min-w-full flex flex-col flex-auto items-center m-10"
      >
        <motion.div
          variants={logo}
          className="mt-4 logo w-40 h-40 relative sm:w-28 sm:h-28 md:w-30 md:h-30 lg:w-58 lg:h-58 xl:w-62 xl:h-62 "
        >
          <Image
            id="logo"
            priority={true}
            src={surfer}
            objectFit="contain"
            layout="fill"
            alt="hyewon"
          />
        </motion.div>
        <motion.div
          variants={comeUpAnimation}
          className="font-subTitle text-black dark:text-white my-5"
        >
          Hyewon kwak,
          <br />
          _yumyumnyang
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={table}
          viewport={{ once: true }}
          className={borderClassName}
        >
          <motion.div variants={comeUpAnimation} className={titleClassName}>
            info.
          </motion.div>
          <AboutItem content={`🏠`} />
          <AboutItem content={`Busan, South Korea`} />
          <AboutItem
            href="mailto:khw121699@gmail.com?subject:Let's Talk"
            content={`📧`}
          />
          <AboutItem
            href="mailto:khw121699@gmail.com?subject:Let's Talk"
            content={`khw121699@gamil.com`}
          />
          <AboutItem href="https://yumyumnyang.github.io/" content={`📓`} />
          <AboutItem
            href="https://yumyumnyang.github.io/"
            content={`YumYumnyang.github.io (current)`}
          />
          <AboutItem
            href="https://yumyumcoding.tistory.com/"
            content={`YumYumNyang.tistory.com`}
          />
          <AboutItem
            href="https://www.instagram.com/theonlyone_hye1/"
            content={`👩🏻‍💻`}
          />
          <AboutItem
            href="https://www.instagram.com/theonlyone_hye1/"
            content={`Instagram`}
          />
          <AboutItem href="https://github.com/YumYumNyang" content={"Github"} />
          <AboutItem
            href="https://www.linkedin.com/in/hyewon-kwak-7ba5531b7/"
            content={"Linked In"}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={table}
          viewport={{ once: true }}
          className={borderClassName}
        >
          <motion.div variants={comeUpAnimation} className={titleClassName}>
            skills.
          </motion.div>
          <motion.div variants={comeUpAnimation} className={subTitleClassName}>
            frontend
          </motion.div>
          <motion.ul
            initial="hidden"
            whileInView="show"
            variants={table}
            viewport={{ once: true }}
            className={ulClassName}
          >
            <AboutListItem content={"HTML"} />
            <AboutListItem
              content={"CSS (CSS3, SCSS, CSS in JS, tailwindCSS)"}
            />
            <AboutListItem content={"Javascript"} />
            <AboutListItem content={"Typescript"} />
            <AboutListItem content={"React (Next.js)"} />
            <AboutListItem
              content={"Redux, React-redux, Redux-toolkit, Redux-saga"}
            />
          </motion.ul>
          <motion.div
            className={subTitleClassName}
            variants={comeUpAnimation}
          >{`Design & illustration`}</motion.div>
          <motion.ul
            initial="hidden"
            whileInView="show"
            variants={table}
            viewport={{ once: true }}
            className={ulClassName}
          >
            <AboutListItem content={"Figma"} />
            <AboutListItem content={"Procreate"} />
          </motion.ul>
          <motion.div
            className={subTitleClassName}
            variants={comeUpAnimation}
          >{`Communication`}</motion.div>
          <motion.ul
            initial="hidden"
            whileInView="show"
            variants={table}
            viewport={{ once: true }}
            className={ulClassName}
          >
            <AboutListItem content={"English"} />
            <AboutListItem content={"Korean"} />
          </motion.ul>
          <motion.div
            className={subTitleClassName}
            variants={comeUpAnimation}
          >{`Collaborate`}</motion.div>
          <motion.ul
            initial="hidden"
            whileInView="show"
            variants={table}
            viewport={{ once: true }}
            className={ulClassName}
          >
            <AboutListItem content={"Git, Github, Gitlab, Source tree"} />
            <AboutListItem content={"Slack"} />
            <AboutListItem content={"Notion"} />
          </motion.ul>
        </motion.div>
        <motion.div
          className={borderClassName}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={comeUpAnimation} className={titleClassName}>
            Education.
          </motion.div>
          <AboutItem
            content={`B.S. Computer Science and Engineering 
at Pusan National University (2018.03~2022.08-planned)`}
          />
        </motion.div>
      </motion.div>
      <motion.div className="w-full text-center bg-blue relative">
        <div className="wave bg-wave min-w-full bg-repeat-x bg-contain " />
        <motion.a
          whileTap="tap"
          whileHover="hover"
          variants={talkAnimation}
          href="mailto:khw121699@gmail.com?subject:Let's Talk"
          className="text-white font-title text-7xl sm:text-4xl md:text-5xl lg:text-5xl"
        >
          {`let's talk!`}
        </motion.a>
      </motion.div>
    </div>
  );
};
export default About;

const table = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const logo = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};

const titleClassName =
  "font-subTitle text-3xl sm:text-xl md:text-2xl lg:text-3xl text-blue";
const subTitleClassName =
  "font-subTitle text-lg sm:text-sm md:text-sm lg:text-base mt-4 border-top-2 ";
const ulClassName = "list-disc list-inside mb-4";
const borderClassName = "w-3/4 sm:w-5/6 text-xs border-blue border-8 xl:border-8 lg:border-8 md:border-8 sm:border-8  p-6 my-4";;
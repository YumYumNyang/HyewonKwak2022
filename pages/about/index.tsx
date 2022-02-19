import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import Introduce from "../../src/components/Introduce";
import Title from "../../src/components/Title";
import surfer from "../../public/surfer.jpeg";
import { motion } from "framer-motion";
import { comeUpAnimation } from "../../src/utils/comeUpAnimation";
const td = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.5 },
  },
};
const About: NextPage = () => {
  
const table = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.5,
      staggerChildren: 0.5,
      delayChildren: 1.7,
    },
  },
};

const logo = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};


  return (
    <div className="container min-w-full min-h-screen overflow-scroll flex flex-col items-center">
      <Title title={"Who am I?"} />

      <motion.div
        initial="hidden"
        animate="show"
        variants={table}
        className="container min-w-full bg-darkblue flex flex-col flex-auto items-center mt-10"
      >
        <div className="wave bg-wave min-w-full  bg-repeat-x bg-contain " />
        <motion.div
          variants={logo}
          className="logo w-40 h-40 relative sm:w-28 sm:h-28 md:w-30 md:h-30 lg:w-58 lg:h-58 xl:w-62 xl:h-62 "
        >
          <Image
            id="logo"
            src={surfer}
            objectFit="contain"
            layout="fill"
            alt="hyewon"
          />
        </motion.div>
        <motion.div
          variants={comeUpAnimation}
          className="font-subTitle  text-white m-5"
        >
          Hyewon kwak,
          <br />
          _yumyumnyang
        </motion.div>
        <motion.table
          variants={comeUpAnimation}
          className="w-11/12 table-fixed text-left border-white border-4 sm:border-2  text-white m-10 "
        >
          <motion.thead className="font-subTitle text-lg sm:text-tiny md:text-xs border-text-white ">
            <motion.th className="p-2 border-white border-2 ">info.</motion.th>
            <motion.th className="p-2 border-white border-2 ">
              skills.
            </motion.th>
            <motion.th className="p-2 border-white border-2 ">
              education.
            </motion.th>
          </motion.thead>
          <tbody className="font-desc border-white border-2 sm:border-1 sm:text-xs ">
            <td className="p-2 border-white border-2 space-y-3 ">
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={td}
                viewport={{ once: true }}
              >
                🏠
                <br />
                Busan, South Korea
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={td}
                viewport={{ once: true }}
              >
                📧 <br />
                khw121699@gamil.com
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={td}
                viewport={{ once: true }}
              >
                ✏️
                <br />
                <motion.a>YUmYUmnyang.github.io (current)</motion.a>
                <br />
                <motion.a>YumYumNyang.tistory.com</motion.a>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={td}
                viewport={{ once: true }}
              >
                👋😺
                <br />
                <motion.a>Instagram</motion.a>
                <br />
                <motion.a>Github profile</motion.a>
                <br />
                <motion.a>linked in </motion.a>
              </motion.div>
            </td>
            <td className="p-2 border-white border-2 space-y-3">
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={td}
                viewport={{ once: true }}
              >
                {`frontend
- HTML
- css (css3, sass, css in js)
- javascript
- typescript
- React (next.js)
- Redux (React-redux, Redux-toolkit), Redux-saga`}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={td}
                viewport={{ once: true }}
              >
                {`Design & illustration
- figma
- procreate`}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={td}
                viewport={{ once: true }}
              >
                {`Communication
- English, korean`}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={td}
                viewport={{ once: true }}
              >
                {`Collaborate 
- git, github, source tree
- slack
- notion`}
              </motion.div>
            </td>
            <td className="p-2 border-white border-2">
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={td}
                viewport={{ once: true }}
              >{`
B.S. Computer Science and Engineering 
at Pusan National University`}</motion.div>
            </td>
          </tbody>
        </motion.table>
        <Introduce />
      </motion.div>
    </div>
  );
};
export default About;

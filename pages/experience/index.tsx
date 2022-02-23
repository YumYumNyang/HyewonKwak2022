import { motion } from "framer-motion";
import { NextPage } from "next";
import ExperienceItem from "../../src/components/ExperienceItem";
import Title from "../../src/components/Title";
import { buttonAnimation } from "../../src/utils/buttonAnimation";

const Experience: NextPage = () => {
  return (
    <div className="container min-w-full min-h-screen overflow-scroll flex flex-col items-center">
      <Title title={"What I've done!"} />

      {experience.map((ex) => (
        <ExperienceItem
          key={ex.title}
          title={ex.title}
          desc={ex.desc}
          period={ex.period}
        />
      ))}
    </div>
  );
};
export default Experience;

const experience = [
  {
    title: `NINEHIRE
FRONTEND
DEVELOPMENT`,
    desc: (
      <div>
        {`Front-end intern at `}
        <motion.a whileTap="tap" whileHover="hover" variants={buttonAnimation}>
          Ninehire
        </motion.a>
        <br />
        {`development of recruit management solution`}
      </div>
    ),
    period: `2020.09-2021.02`,
  },

  {
    title: `LIKE
A
LION`,
    desc: (
      <div>{`Colleage IT Club
Learned about basic web developments
toy projects with team
organizing events
`}</div>
    ),
    period: `2020.02-2021.02`,
  },
  {
    title: `Google
DEVELOPER
STUDENTS
CLUB `,
    desc: (
      <div>{`Colleage IT Club
As a core-member of  club, 
holding sessions, organizing events
`}</div>
    ),
    period: `2019.09-2020.09`,
  },

  {
    title: `ZZOORI
SALON
ILLUstrator`,
    desc: (
      <div>{`working as a illustrator at BubbleCloud
drawing instagram toon about grooming
`}</div>
    ),
    period: `2020.09-CURRENT`,
  },
];

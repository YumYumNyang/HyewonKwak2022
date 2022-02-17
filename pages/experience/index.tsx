import { NextPage } from "next";
import ExperienceItem from "../../src/components/ExperienceItem";
import Title from "../../src/components/Title";

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
    desc: `Front-end intern at Ninehire
development of recruit management solution 
`,
    period: `2020.09-2021.02`,
  },

  {
    title: `Google
DEVELOPER
STUDENTS
CLUB `,
    desc: `Colleage IT Club
As a core-member of  club, 
holding sessions, organizing events
`,
    period: `2019.09-2020.09`,
  },

  {
    title: `LIKE
A
LION`,
    desc: `Colleage IT Club
Learned about basic web developments
toy projects with team
organizing events
`,
    period: `2020.02-2021.02`,
  },

  {
    title: `ZZOORI
SALON
ILLUstrator`,
    desc: `working as a illustrator at BubbleCloud
drawing instagram toon about grooming
`,
    period: `2020.09-CURRENT`,
  },
];
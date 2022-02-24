import { NextPage } from "next";
import LeftProject from "../../src/components/LeftProject";
import RightProject from "../../src/components/RightProject";
import Title from "../../src/components/Title";
import gotgam from "../../public/gotgam.png";
import lolmbti from "../../public/lolmbti.png";
import eggcation from "../../public/eggcation.png";
import pixelskin from "../../public/pixelskin.png";
import { motion } from "framer-motion";
import Line from "../../src/components/Line";


const Project: NextPage = () => {
  return (
    <motion.div className="container min-w-full items-center min-h-screen overflow-scroll flex flex-col ">
      <Title title={"See My Works!"} />
      <Line />
      <RightProject
        src={gotgam}
        title={`GOT, GAM`}
        subTitle={`Travel record platform`}
        description={`wanted hackathon best participant 50 

2021.10-11 making demo service
2022.01- Refactoring, migration to Next.js`}
      />
      <Line />
      <LeftProject
        src={lolmbti}
        title={`Lol-mbti
test`}
        subTitle={`mbti test service`}
        description={`2021.09`}
      />
      <Line />
      <RightProject
        src={eggcation}
        title={`Egg cation`}
        subTitle={`metaverse for education`}
        description={`pnu creative convergence hackathon 2nd prize

2021.06-08 `}
      />
      <Line />
      <LeftProject
        src={pixelskin}
        title={`pixel
skin`}
        subTitle={`pixel theme
for tistory blog`}
        description={`2020.09`}
      />
    </motion.div>
  );
};
export default Project;

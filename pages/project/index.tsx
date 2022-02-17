import { NextPage } from "next";
import LeftProject from "../../src/components/LeftProject";
import RightProject from "../../src/components/RightProject";
import Title from "../../src/components/Title";

const Project: NextPage = () => {
  return (
    <div className="container min-w-full items-center min-h-screen overflow-scroll flex flex-col ">
      <Title title={"See My Works!"} />
      <div className="w-10/12 border-b"></div>
      <RightProject
        src={`/gotgam.png`}
        title={`GOT,GAM`}
        subTitle={`TraveL record platfrom`}
        description={`wanted hackathon best  participant 50 

2021.10-11 making demo service
2022.01- Refactoring, migration to Next.js`}
      />
      <div className="w-10/12 border-b"></div>
      <LeftProject
        src={`/lolmbti.png`}
        title={`Lol-mbti
test`}
        subTitle={`mbti test service`}
        description={`2022.08-`}
      />
      <div className="w-10/12 border-b"></div>
      <RightProject
        src={`/Eggcation.webp`}
        title={`Eggcation`}
        subTitle={`metaverse for education`}
        description={`pnu  creative convergence hackathon 2nd prize

2021.07-08 `}
      />
      <div className="w-10/12 border-b"></div>
      <LeftProject
        src={`/pixelskin.png`}
        title={`pixel
skin`}
        subTitle={`pixel theme for tistory blog`}
        description={`2022.08-`}
      />
    </div>
  );
};
export default Project;

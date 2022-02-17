import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import Introduce from "../../src/components/Introduce";
import Title from "../../src/components/Title";

const About: NextPage = () => {
  
  return (
    <div className="container min-w-full min-h-screen overflow-scroll flex flex-col items-center">
      <Title title={"Who am I?"} />
      <div className="container min-w-full bg-blue flex flex-col flex-auto items-center mt-10">
        <div className="logo w-40 h-40 relative ">
          <Image
            id="logo"
            src="/surfer.jpeg"
            objectFit="contain"
            className="rounded-full"
            layout="fill"
          />
        </div>
        <div className="font-subTitle  text-white m-5">
          Hyewon kwak,
          <br />
          _yumyumnyang
        </div>
        <table className="w-8/12 table-fixed text-left border-white border-4  text-white ">
          <thead className="font-subTitle text-lg border-text-white ">
            <th className="p-2 border-white border-2 ">info.</th>
            <th className="p-2 border-white border-2 ">skills.</th>
            <th className="p-2 border-white border-2 ">education.</th>
          </thead>
          <tbody className="font-desc border-white border-2 ">
            <td className="p-2 border-white border-2 ">{`🏠 
Busan, South Korea

📧 
khw121699@gamil.com

✏️
YUmYUmnyang.github.io (current)
YumYumNyang.tistory.com

👋😺
Instagram
Github profile
linked in 



`}</td>
            <td className="p-2 border-white border-2">{`frontend
- HTML
- css (css3, sass, css in js)
- javascript
- typescript
- React (next.js)
- Redux (React-redux, Redux-toolkit), Redux-saga

Design & illustration
- figma
- procreate

Communication
- English, korean

Collaborate 
- git, github, source tree
- slack
- notion`}</td>
            <td className="p-2 border-white border-2">{`
B.S. Computer Science and Engineering 
at Pusan National University`}</td>
          </tbody>
        </table>
        <Introduce />
      </div>
    </div>
  );
};
export default About;

import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Contact from "../../src/components/Contact";
import Footer from "../../src/components/Footer";
import Introduce from "../../src/components/Introduce";
import Title from "../../src/components/Title";
const routes = [
  { key: "home", route: "/" },
  { key: "about", route: "/about" },
  { key: "project", route: "/project" },
  { key: "experience", route: "/experience" },
];
const Menu: NextPage = () => {
  const router = useRouter();
  return (
    <div className={`flex flex-col flex-auto justify-center container`}>
      <div className="flex items-center justify-center space-x-8">
        <div className="flex flex-col space-y-6 justify-center">
          {routes.map((route, index) => {
            return (
              <div
                onClick={() => {
                  router.push(route.route);
                }}
                key={route.key}
                className="flex "
              >
                <div className="font-desc">0{index + 1}</div>
                <div className="font-subTitle text-6xl ml-5">{route.key}</div>
              </div>
            );
          })}
        </div>
        <Contact />
      </div>
    </div>
  );
};
export default Menu;

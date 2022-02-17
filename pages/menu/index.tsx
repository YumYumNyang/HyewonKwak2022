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
    <div className="conatiner flex-auto flex sm:flex-col items-center justify-center space-x-8 sm:space-x-0 md:space-x-2 lg:space-x-2 ">
      <div className="flex flex-col space-y-3  justify-center">
        {routes.map((route, index) => {
          return (
            <div
              onClick={() => {
                router.push(route.route);
              }}
              key={route.key}
              className="flex "
            >
              <div className="font-desc break-normal">0{index + 1}</div>
              <div className="group font-subTitle relative text-6xl sm:text-2xl md:text-3xl lg:text-4xl ml-5 sm:ml-2 md:ml-2 lg:ml-0 ">
                <div className="absolute h-0 bg-blue w-full group-hover:back"></div>
                <div>{route.key}</div>
              </div>
            </div>
          );
        })}
      </div>
      <Contact />
    </div>
  );
};
export default Menu;

import { route } from "next/dist/server/router";
import Router from "next/router";
import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";

const routes = [
  { key: "home", route: "/" },
  { key: "about", route: "/about" },
  { key: "project", route: "/project" },
  { key: "experience", route: "/experience" },
];

type MenuProps = {
  show: boolean;
  onClose: () => void;
};

const Menu = ({ show, onClose }: MenuProps) => {
  return (
    <div
      className={`top-0 flex flex-col justify-between container min-w-full h-screen  bg-white ${
        !show && "hidden"
      }`}
    >
      <div className="mx-3 px-3 flex items-center justify-between h-8 font-desc border-b-2 text-xs border-black">
        <div onClick={() => Router.push("/")}>hyewon kwak</div>
        <div onClick={onClose}>close</div>
      </div>
      <div className="flex items-center justify-center space-x-8">
        <div className="flex flex-col space-y-6 justify-center">
          {routes.map((route, index) => {
            return (
              <div key={route.key} className="flex ">
                <div className="font-desc">0{index + 1}</div>
                <div className="font-subTitle text-6xl ml-5">{route.key}</div>
              </div>
            );
          })}
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Menu;

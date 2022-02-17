
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const {theme, setTheme} = useTheme();
  const router = useRouter();
  return (
    <>
      <div className="mx-3 px-3 flex items-center justify-between h-8 font-desc border-b-2 text-xs  border-black dark:border-white">
        <div onClick={() => router.push("/")}>hyewon kwak</div>
        {router.pathname === "/menu" ? (
          <div className="cursor-pointer" onClick={() => router.back()}>
            close
          </div>
        ) : (
          <div className="cursor-pointer flex items-center ">
            <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className=" bg-blue dark:bg-white w-3 h-3 m-2 rounded-full " />
            <div onClick={() => router.push("/menu")}>
              {router.pathname === "/"
                ? "home"
                : router.pathname.replace("/", "")}
              /menu
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

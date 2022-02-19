import { motion } from "framer-motion";
import gsap from "gsap";
import { NextPage, NextPageContext } from "next";
import React, {
  ReactElement,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Cursor, { CursorHandle } from "./Cursor";
import Footer from "./Footer";
import Header from "./Header";
import { TransitionContext } from "./TransitionProvider";

type LayoutProps = {
  children: ReactElement;
};

type moveProps = {
  clientX: number;
  clientY: number;
};

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const cursorRef = useRef<CursorHandle>(null);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.moveTo(innerWidth / 2, innerHeight / 2);
      const onMove = ({ clientX, clientY }: moveProps) => {
        if (cursorRef.current) cursorRef.current.moveTo(clientX, clientY);
      };
      window.addEventListener("pointermove", onMove);
      return () => window.removeEventListener("pointermove", onMove);
    }
  }, []);

  return (
    <div className="container flex flex-col min-h-screen min-w-full dark:text-white dark:bg-black">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
//MyAPP의 higher order component, wrapper로 쓰일 것임

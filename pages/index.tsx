import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import RotateSpark from "../src/components/RotateSpark";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="container flex flex-col flex-auto min-w-full items-center justify-center text-center">
      <div className="font-title tracking-wider uppercase text-3xl">
        Hi! I'm Hyewon Kwak
      </div>
      <div className="relative h-80 w-80 bg-contain bg-no-repeat bg-[url('../public/yumyumnyang.png')]">
        <div className="absolute top-40 right-0 font-desc text-left whitespace-pre break-normal text-xs">{`based in
busan, south korea`}</div>
        <RotateSpark
          className="absolute top-14 left-0 w-14 h-14 flex"
          animationOption="5s"
        />
        <RotateSpark
          className="absolute top-0 left-5 w-20 h-20 flex"
          animationOption="3s"
        />
        <RotateSpark
          className="absolute top-40 right-0 w-12 h-12 flex"
          animationOption="5s"
        />
      </div>
      <div className="font-title tracking-wider uppercase text-3xl text-blue">
        frontend developer!
      </div>
      <div className="font-subTitle whitespace-pre break-normal text-xs ">{`A creative FRONT-end developer 
with a passion For
web Technologies,
Design, and Problem solving.
_`}</div>
    </div>
  );
}

export default Home

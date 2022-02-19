import '../styles/globals.css'
import gsap from "gsap";
import type { AppProps } from 'next/app'
import Layout from "../src/components/Layout";
import { createContext, useEffect, useRef, useState } from "react";

import { ThemeProvider } from "next-themes";
import { TransitionProvider } from "../src/components/TransitionProvider";
import Head from "next/head";
type moveProps = {
  clientX: number;
  clientY: number;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransitionProvider>
      <ThemeProvider attribute="class">
        <Head>
          <title>Hyewon Kwak frontend developer</title>
        </Head>
        {/* <Cursor ref={cursorRef} /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </TransitionProvider>
  );
}

export default MyApp

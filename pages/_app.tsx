import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../src/components/Layout";
import { useEffect, useRef } from "react";
import Cursor, { CursorHandle } from "../src/components/Cursor";
import { ThemeProvider } from "next-themes";
type moveProps = {
  clientX: number;
  clientY: number;
};

function MyApp({ Component, pageProps }: AppProps) {
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
    <ThemeProvider attribute="class">
      {/* <Cursor ref={cursorRef} /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp

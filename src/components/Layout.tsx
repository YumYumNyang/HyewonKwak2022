import gsap from "gsap";
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

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const Layout = ({ children }: LayoutProps) => {
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
  // const [displayChildren, setDisplayChildren] = useState(children);
  // const { timeline, background } = useContext(TransitionContext);
  // const el = useRef<HTMLDivElement>();

  // useIsomorphicLayoutEffect(() => {
  //   if (children !== displayChildren) {
  //     if (timeline.duration() === 0) {
  //       // there are no outro animations, so immediately transition
  //       setDisplayChildren(children);
  //     } else {
  //       timeline.play().then(() => {
  //         // outro complete so reset to an empty paused timeline
  //         timeline.seek(0).pause().clear();
  //         setDisplayChildren(children);
  //       });
  //     }
  //   }
  // }, [children]);

  // useIsomorphicLayoutEffect(() => {
  //   gsap.to(el.current, {
  //     background,
  //     duration: 1,
  //   });
  // }, [background]);

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

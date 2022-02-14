import { gsap } from "gsap";
import { forwardRef, useImperativeHandle, useRef } from "react";

type CursorProps = {};

export type CursorHandle = {
  moveTo: (x: number, y: number) => void;
};
const Cursor = forwardRef<CursorHandle, CursorProps>((props, ref) => {
  const el = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x: number, y: number) {
          gsap.to(el.current, { x, y });
        },
      };
    },
    []
  );

  return <div className=" z-50 bg-blue w-8 h-8 rounded-full " ref={el}></div>;
});
export default Cursor;

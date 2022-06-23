import { gsap } from "gsap";
import { forwardRef, useImperativeHandle, useRef } from "react";

type CursorProps = {};

export type CursorHandle = {
  moveTo: (x: number, y: number) => void;
};
//eslint-disable-next-line react/display-name
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

  return (
    <div
      className="fixed top-0 left-0 bg-blue w-8 h-8 rounded-full "
      ref={el}
    ></div>
  );
});
Cursor.displayName = "Cursor";
export default Cursor;

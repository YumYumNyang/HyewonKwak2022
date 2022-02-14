import Router from "next/router";
import React, { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="mx-3 px-3 flex items-center justify-between h-8 font-desc border-b-2 text-xs border-black">
        <div  onClick={()=>Router.push('/')}>hyewon kwak</div>
        <div  onClick={() => setShow(true)}>
          menu
        </div>
      </div>
      <Menu show={show} onClose={() => setShow(false)} />
    </>
  );
};

export default Header;

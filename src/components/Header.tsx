import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  return <div className="sticky top-0 mx-3 px-3 flex items-center justify-between h-8 font-desc border-b-2 text-xs border-black" >
    <div>hyewon kwak</div>
    <div>menu</div>
  </div>;
};

export default Header;

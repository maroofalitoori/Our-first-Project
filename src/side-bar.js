import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className=" w-36 h-[calc(100vh-73px)] bg-gradient-to-t from-slate-900 via-rose-900 to-slate-900 text-white flex flex-col justify-start">
        <ul className=" flex flex-col gap-3 relative top-10 left-3 ">
          <NavLink to="/" state={{ name: "maroof Ali", age: 23 }}>
            Nature Beauty
          </NavLink>
          <NavLink to="/birds/Parrot">Birds</NavLink>
          <NavLink to="/mountain">Mountain</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

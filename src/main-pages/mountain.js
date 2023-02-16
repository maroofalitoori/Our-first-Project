import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const Mountain = () => {
  // const [nowParams, setNowParams] = useSearchParams();

  return (
    <>
      <h1 className="text-white">Mountain</h1>
      {/* <h1 className="text-white">{nowParams.get("age")}</h1> */}
      {/* <h1 className="text-white">{nowParams.get("area")}</h1> */}
      {/* <input onChange={(e) => setNowParams({ area: e.target.value })} /> */}
      {/* <button
        onClick={() => setNowParams({ age: 20 })}
        className="text-white outline-dotted outline-red-100"
      >
        change Params
      </button> */}
      <NavLink to="type">Go to Type Page</NavLink>
      <Outlet />
    </>
  );
};

export default Mountain;

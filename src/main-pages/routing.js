import React from "react";
import { Routes, Route } from "react-router-dom";
import Birds from "./Birds";
import ErrorPage from "./Error";
import Mountain from "./mountain";
import NatureBeauty from "./tree";
import Type from "./Type";

const Routing = () => {
  return (
    <div className="outline-dashed outline-red-500 w-full">
      <Routes>
        <Route path="/" element={<NatureBeauty />} />
        <Route path="/birds/:name" element={<Birds />} />
        <Route path="mountain" element={<Mountain />}>
          <Route path="type" element={<Type />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Routing;

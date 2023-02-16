import React from "react";
import { useLocation } from "react-router-dom";
import Card from "./card";

const NatureBeauty = () => {
  const location = useLocation();
  console.log("🚀 ~ file: tree.js:7 ~ NatureBeauty ~ location", location);
  return (
    <div className="outline-dashed outline-white flex justify-center">
      <Card>
        <h1 className="text-black">NatureBeauty is Gift of Allah</h1>
      </Card>
    </div>
  );
};

export default NatureBeauty;

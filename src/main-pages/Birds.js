import React from "react";
import { useParams } from "react-router-dom";

const Birds = () => {
  const { name } = useParams();
  return <h1 className="text-white">Birds {name}</h1>;
};

export default Birds;

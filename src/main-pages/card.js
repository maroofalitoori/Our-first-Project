import React from "react";

const Card = (props) => {
  return <div className="bg-white shadow-lg max-w-fit">{props.children}</div>;
};

export default Card;

import React from "react";
import Card from "./Card";
// import { Link } from "react-router-dom";

const ModalOverlay = (props) => {
  return <Card className="z-[50] fixed h-[100vh] w-[60%] rounded-none">{props.children}</Card>;
};

export default ModalOverlay;

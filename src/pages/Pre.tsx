import React from "react";

// Définition de l'interface des props
interface PreProps {
  load: boolean;
}

const Pre: React.FC<PreProps> = (props) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};

export default Pre;

import React from "react";
import "./Floating.css";

function Floating({ enabled, children }) {
  return <div className={enabled ? "react-floater-animated" : ''}>{children}</div>;
}

export default Floating;
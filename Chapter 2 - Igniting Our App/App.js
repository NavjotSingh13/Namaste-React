import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("div", {id: "divine"}, 
React.createElement("div", {id: "divison"} , "Division"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

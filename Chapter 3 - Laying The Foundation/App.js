import React from "react";
import ReactDOM from "react-dom";

const Title = () => (
    <h2>This is React</h2>
);

const HeadingComponent = () => (
    <>
        <h1>Namaste React</h1>
        <Title />
    </>
);  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

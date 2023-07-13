import React from "react";
import ReactDOM from "react-dom";

const HeadingComponent = () => (
    <div>
        <h1>Namaste React</h1>
    </div>
);  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

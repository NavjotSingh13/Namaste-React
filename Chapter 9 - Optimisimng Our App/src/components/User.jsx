import { useState } from "react";

const User = ({name}) => {
    const [count1] = useState(1);
    const [count2] = useState(2);
    return (
        <div>
            <h1>Navjot Singh</h1>
            <h2>Using Functional Component</h2>
            <h3>{name}</h3>
            <h4>{count1}</h4>
            <h4>{count2}</h4>
        </div>
    );
}

export default User;
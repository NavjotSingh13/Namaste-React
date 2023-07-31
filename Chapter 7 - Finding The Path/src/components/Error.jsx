import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>OOPS! Page Not Found</h1>
            <h3>{error.status}</h3>
        </div>
    )
}

export default Error;
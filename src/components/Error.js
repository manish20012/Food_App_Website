import { useRouteError } from "react-router-dom";

const Error =() =>{
    const err = useRouteError();
    console.log(err);
    return (
       <div className="error">
        <h1>Oops!</h1>
        <h1>Something went wrong</h1>
        <h1>{err.status +" :  "+ err.statusText }</h1>
       </div>
    );

}

export default Error;
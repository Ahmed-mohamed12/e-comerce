import { Link } from "react-router-dom";

export default function Page404(){
    return(<>
    <div>
        <h1>Page Not Found</h1>
        <h3>Error 404;</h3>
        <Link to="/Home">Go Home</Link>
    </div>
    
    </>)
}
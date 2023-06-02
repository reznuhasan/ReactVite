import { Link } from "react-router-dom";


const About=()=>{
    return(
        <div>
            <h1>This is my About Page</h1>
            <button><Link to="/">Home Page</Link></button>
        </div>
    )
}

export default About;
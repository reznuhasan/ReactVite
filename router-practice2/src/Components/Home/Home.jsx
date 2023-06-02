import { Link } from "react-router-dom";


const Home=()=>{
    return(
        <div>
            <h1>This is my Home Page</h1>

            <button><Link to="/about">About Page</Link></button>
        </div>
    )
}

export default Home;
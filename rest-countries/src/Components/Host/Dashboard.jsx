import { NavLink, Outlet } from "react-router-dom";

const Dashboard=()=>{
    return(
        <div>
            <h1>Dashboard goes here</h1>
            <NavLink to="/host/income">Income</NavLink>
            <NavLink to="/host/reviews">Reviews</NavLink>
            <Outlet></Outlet>
        </div>
    )
}

export default Dashboard;
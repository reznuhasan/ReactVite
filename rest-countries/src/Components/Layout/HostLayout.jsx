import { NavLink, Outlet } from "react-router-dom";

const classNameFunc=({isActive})=>(isActive)?"active_link":null;
const HostLayout=()=>{
    return(
        <div>
            <h1>This is my host route</h1>
            <nav className="nav">
            <NavLink 
            className={classNameFunc}
            to="/host" end>Dashboard</NavLink>
            <NavLink 
            className={classNameFunc}
            to="/host/income">Income</NavLink>
            <NavLink 
            className={classNameFunc}
            to="/host/service">Service</NavLink>
            <NavLink 
            className={classNameFunc}
            to="/host/reviews">Reviews</NavLink>
            </nav>
           <Outlet></Outlet>
        </div>
    )
}

export default HostLayout;
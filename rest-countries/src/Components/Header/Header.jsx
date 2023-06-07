import { NavLink } from "react-router-dom"

const Header=()=>{
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/host">Host</NavLink>
        </div>
    )
}
export default Header;
import { NavLink } from "react-router-dom"
import './Header.css'
const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");
const Header=()=>{
    return(
        <div className="nav">
            <NavLink
            className={classNameFunc} 
             to="/" end>Home</NavLink>
            <NavLink 
            className={classNameFunc} 
            to="/service">Service</NavLink>
            <NavLink
            className={classNameFunc} 
             to="/host">Host</NavLink>
        </div>
    )
}
export default Header;
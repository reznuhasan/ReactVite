import { NavLink, Outlet } from "react-router-dom";
import Country from "../Country/Country"
import './HostLayout.css'
const classNameFunc=({isActive})=>(isActive)?"active_link":null;
const CountryLayout = () => {
    return (
        <>
            <Country />
            <div className="nav">
                <NavLink
                    className={classNameFunc}
                    to="/host/service/:name" end>Details</NavLink>
                <NavLink
                    className={classNameFunc}
                    to="/host/service/:name/population">Others</NavLink>
                <NavLink
                    className={classNameFunc}
                    to="/host/service/:name/others">Population</NavLink>
            </div>
            <Outlet/>
        </>
    )
}
export default CountryLayout;
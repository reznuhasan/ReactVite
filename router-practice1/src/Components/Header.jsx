import { Link } from "react-router-dom";
import classes from './header.module.css'

const Header=()=>{
    return(
        <div>
            <Link className={classes.nav} to="/home">Home</Link>
            <Link className={classes.nav} to="/about">About</Link>
            <Link className={classes.nav} to="/contact">Contact</Link>
        </div>
    )
}

export default Header;
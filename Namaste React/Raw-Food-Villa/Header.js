import logo from "./assest/logo.jpg"

const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Product</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default Header;
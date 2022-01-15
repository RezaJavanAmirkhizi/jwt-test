import {Link} from "react-router-dom";

function Nav(props) {
   
    return(
        <div className="nav-bar">
        <ul>
            <li>
                <Link className="menu-item" to="/">Home</Link>
            </li>
           {props.user ? (<li><Link className="menu-item" to="/">Log Out</Link></li>) : (<><li><Link className="menu-item" to="/SignIn">Sign In</Link></li><li><Link className="menu-item" to="/SignUp">Sign Up</Link></li></>)}
        </ul>
    </div>
    )

};

export default Nav;
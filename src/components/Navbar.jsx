import CartWidget from "./CartWidget";
import "../css/navbar.css"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
        return (
            <div>
                <header>
                <nav className="navbar navbar-dark fixed-top rgb-navbar">
                    <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">MrHardware</NavLink>
                            <div className="flex-navbar">
                            <>
                            <CartWidget />
                            </>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">MrHardware</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                    <Link to='/category/1'> <p> AMD </p> </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/category/2'> <p> INTEL </p> </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                </header>
            </div>
        );
}

export default NavBar;
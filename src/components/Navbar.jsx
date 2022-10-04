import CartWidget from "./CartWidget";
import "../css/navbar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top rgb-navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">MrHardware</Link>
                            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Filtrar
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li><Link className="dropdown-item" to='/category/1'>AMD</Link></li>
                                            <li><Link className="dropdown-item" to='/category/2'>INTEL</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <CartWidget />
                            </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
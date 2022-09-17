import CartWidget from "./CartWidget";
import "../css/navbar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav class="navbar navbar-dark navbar-expand-lg fixed-top rgb-navbar">
                <div class="container-fluid">
                    <Link className="navbar-brand" to="/">MrHardware</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                <ul class="navbar-nav me-auto">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Filtrar
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-dark">
                                            <li><Link class="dropdown-item" to='/category/1'>AMD</Link></li>
                                            <li><Link class="dropdown-item" to='/category/2'>INTEL</Link></li>
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
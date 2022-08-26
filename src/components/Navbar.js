import CartWidget from "./CartWidget";

const NavBar = () => {
        return (
            <div classNameName="App">
                <header>
                <nav className="navbar navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                            <a className="navbar-brand" href="#">MrHardware</a>
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
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                        <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
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
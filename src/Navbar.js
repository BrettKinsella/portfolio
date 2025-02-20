import { Link } from "react-router-dom";
import logo from "./static/Oculat1.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="nav-logo">
                        <img src={logo} alt="Logo" className="logo-image" />
                    </Link>
                </div>
                <div className="nav-right">
                    <ul className="nav-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
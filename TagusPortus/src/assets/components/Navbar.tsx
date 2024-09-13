import { NavLink, Link } from 'react-router-dom'
import activeStyles from './ActiveStyles'
import HamburgerMenu from './HamburguerMenuOpen'
import scrollToTop from './ScrollToTop.tsx'

//Viewport prop from the App Layout determines whether to render a larger navbar or a smaller navbar with an hamburguer menu 
interface NavbarProps {
    isLargeViewPort: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLargeViewPort }) => {

    return (
        <>
            {isLargeViewPort ? (
                <header className="navigation-menu-lg">
                    <Link
                        className="logo-link"
                        to="/"
                        onClick={scrollToTop}
                    >

                        <img className="logo"
                            src="/icons/logo.svg"
                            alt="Tagus Portus Logo" />

                    </Link>
                    <nav>
                        <ul className="navigation-lg-screen">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                    onClick={scrollToTop}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                    onClick={scrollToTop}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/works"
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                    onClick={scrollToTop}
                                >
                                    Works
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                    onClick={scrollToTop}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contacts"
                                    style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                    onClick={scrollToTop}
                                >
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            ) :
                <header className="navigation-menu-sml">
                    <Link className='logo-link' to="/">
                        <img className="logo" src="/icons/logo.svg" alt="Tagus Portus Logo"
                            onClick={scrollToTop} />
                    </Link>
                    <HamburgerMenu />
                </header>}
        </>
    )
}

export default Navbar
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import activeStyles from './ActiveStyles'
import scrollToTop from './ScrollToTop.tsx'

//Active State of the Hamburguer Menu
const HamburgerMenu: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const closeMenu = () => setIsOpen(false)

    // Handle two click functions
    const handleLinkClick = () => {
        closeMenu()
        scrollToTop()
    }

    return (
        <>

            {isOpen && <div className="overlay show" onClick={closeMenu}></div>}

            <div className="hamburger-button-container">
                <div className="hamburger-menu">
                    <div
                        className="hamburguer-button"
                    >
                        <Hamburger
                            toggled={isOpen}
                            toggle={setIsOpen}
                            color="#774936"
                            easing="ease-in"
                            rounded
                            label="Show navigation bar"
                        />
                    </div>

                    <div className={`hamburguer-ceiling ${isOpen ? 'open' : ''}`}> </div>

                    <div className={`hamburguer-navbar-content ${isOpen ? 'open' : ''}`}>
                        <nav>
                            <ul className="hamburguer-navigation">
                                <li>
                                    <NavLink
                                        to="/"
                                        end
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        onClick={handleLinkClick}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        onClick={handleLinkClick}
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/works"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        onClick={handleLinkClick}
                                    >
                                        Works
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/services"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        onClick={handleLinkClick}
                                    >
                                        Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/Contacts"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        onClick={handleLinkClick}
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>

                            <ul className="hamburguer-navigation">
                                <li>
                                    <NavLink
                                        to="/Privacy-Policies"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        onClick={handleLinkClick}
                                    >
                                        Privacy Policies
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/Legal-Warnings"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        onClick={handleLinkClick}
                                    >
                                        Legal Warnings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/Cookies-Policies"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        onClick={handleLinkClick}
                                    >
                                        Cookies Policies
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HamburgerMenu
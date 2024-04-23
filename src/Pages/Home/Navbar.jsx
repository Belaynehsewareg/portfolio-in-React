/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";


function Navbar(){
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }


    useEffect(() => {
        const handleResize =() => {
            if (window.innerWidth <= 500){
                closeMenu();
            }
        }

        window.addEventListener("resize",handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    
    },  []);

    useEffect(() => {
        if (window.innerWidth <= 1200){
            closeMenu;
        }
    }, []);
    return(
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className="navbar--images">
                <img src="./images/S.png" alt="Logo" width="80px" />
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} 
                onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="heroSection"
                            className="text-md"
                        >
                            Home
                        </Link> 
                    </li>
                    <li>
                        <Link
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="mySkills"
                            className="text-md"
                        >
                            My Skills
                            </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="AboutMe"
                            className="text-md"
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MyPortfolio"
                            className="text-md"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="testimonial"
                            className="text-md"
                        >
                            Testimonials
                        </Link>
                    </li>
                </ul>
            </div>
            <Link onClick={closeMenu} 
                activeClass="navbar--active-content"
                spy={true} smooth={true} offset={-70} 
                duration={500} to="Contact"
                className="btn btn-outline-primary">
                    Contact Me
            </Link>
        </nav>
    );
}

export default Navbar;

import * as React from "react"
import "../styles/mystyles.scss"
import { Link } from "gatsby"
import { faAddressBook, faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'

//TODO add js to get hamburger working, add github, linkedin, itch.io icons
const Navigation = () => {
    return (
        <nav className="navbar is-light has-shadow is-fixed-top" role="navigation" aria-label="main navigation">   
            <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item has-text-link" to="/">
                        <strong className="">Ryan Cross</strong>
                    </Link>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarRyan">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarRyan" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/projects">Projects</Link>
                        {/* <Link className="navbar-item" to="/projects">Jams</Link> */}
                        {/* <Link className="navbar-item" to="/projects">Hire Me</Link> */}
                    </div>
                    <div className="navbar-end">
                        <Link className="navbar-item" to="https://github.com/RyanCross"><FontAwesomeIcon icon={faGithub} size="2x" color="#485fc7" /></Link>
                    </div>
                </div>
            </div>
       </nav>
    )
}

export default Navigation
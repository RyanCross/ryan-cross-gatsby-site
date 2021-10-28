import * as React from "react"
import "../styles/mystyles.scss"
import { Link } from "gatsby"

const Navigation = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <Link className="button is-white title is-4" to="/">
                        Ryan Cross
                    </Link>
                </div>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link className="button is-primary" to="/projects">Projects</Link>
                            <Link className="button is-primary " to="/jams">Jams</Link>
                            <Link className="button is-danger" to="/projects">Hire Me</Link>
                        </div>
                    </div>
                </div>
            </div>

       </nav>
    )
}

export default Navigation
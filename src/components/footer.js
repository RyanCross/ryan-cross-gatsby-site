import * as React from 'react'
import '../styles/mystyles.scss'
import { Link } from 'gatsby'

const Footer = () => {

    return (
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                Built by Ryan Cross. Powered by <a href="https://www.gatsbyjs.com/">Gatsby </a>
                 and <a href="https://bulma.io/">Bulma</a>. 
                 </p>
            </div>
        </footer>
    )
}
export default Footer
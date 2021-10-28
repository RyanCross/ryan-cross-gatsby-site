import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `)

    return (
        <div>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/jams">Jams</Link></li>
                <li><Link to="/hireme">Hire Me</Link></li>

            </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Navigation from './navigation'

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
            <Navigation></Navigation>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
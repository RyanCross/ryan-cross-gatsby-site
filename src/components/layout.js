import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Navigation from './navigation'
import Footer from './footer'

const Layout = ({ pageTitle, children }) => {
  document.body.classList.add('has-navbar-fixed-top');  
  
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
        <>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <Navigation></Navigation>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout
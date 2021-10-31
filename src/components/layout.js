import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Navigation from './navigation'
import Footer from './footer'
import { Helmet } from 'react-helmet'

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
        <>
            <Helmet>
              <title>{pageTitle} | {data.site.siteMetadata.title}</title>
              <body className="has-navbar-fixed-top"></body>
            </Helmet>    
            <Navigation></Navigation>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout
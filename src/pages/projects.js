import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
// markup
const Projects = () => {
  return (
    <Layout pageTitle="Projects">
      <p>Hello!</p>
      <StaticImage src="../images/me.jpg" alt="A picture of Ryan Cross, smiling like a goof."></StaticImage> 
      <p>This site is under construction, check back soon for an overhaul!</p>
    </Layout>
  )
}

export default Projects

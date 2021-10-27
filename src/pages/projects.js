import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import * as dataParsers from "../dataParsers"

const Projects = ({ data }) => {
  const pinnedRepositories = dataParsers.parsePinnedRepositories(data);
    
  return (
    <Layout pageTitle="Projects">
      <p>Hello!</p>
      <StaticImage src="../images/me.jpg" alt="A picture of Ryan Cross, smiling like a goof."></StaticImage> 
      <p>This site is under construction, check back soon for an overhaul!</p>
      <pre>{JSON.stringify(pinnedRepositories)}</pre>
    </Layout>
  )
}

export const query = graphql`
  {
    githubData {
      data {
        user {
          pinnedItems {
            nodes {
              description
              id
              languages {
                nodes {
                  color
                  name
                }
              }
              name
              watchers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`

export default Projects

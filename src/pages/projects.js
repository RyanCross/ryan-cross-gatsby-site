import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import TileGrid from "../components/tilegrid"
import { graphql } from "gatsby"
import * as dataParsers from "../dataParsers"

const Projects = ({ data }) => {
  const pinnedRepositories = dataParsers.parsePinnedRepositories(data);

  return (
    <Layout pageTitle="Projects">
      <section class="hero is-primary">
        <div class="hero-body has-text-centered">
          <p class="title is-1">
            Projects
          </p>
        </div>
      </section>
      <section>
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <TileGrid></TileGrid>
          </div>
        </div>
      </section>
  


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

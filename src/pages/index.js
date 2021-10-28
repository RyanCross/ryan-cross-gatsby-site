import * as React from "react"
import {  } from "gatsby-plugin-image"
import Layout from "../components/layout"
import "../styles/mystyles.scss"
import me from "../images/me.jpg"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Hello!</p>
      <figure class="image is-128x128">
        <img src={me} className="is-rounded" alt="Ryan Cross, smiling like a goof."></img> 
      </figure>
      <p>This site is under construction, check back soon for an overhaul!</p>
    </Layout>
  )
}

export default IndexPage

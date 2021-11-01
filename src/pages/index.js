import * as React from "react"
import {  } from "gatsby-plugin-image"
import Layout from "../components/layout"
import "../styles/mystyles.scss"
import me from "../images/me.jpg"

const Introduction = () => {
  return (
    <content>
        <div className="columns is-centered is-mobile">
          <div className="column is-narrow">
            <figure className="image is-256x256">
              <img className="is-rounded" src={me}></img>  
            </figure>
          </div>
        </div>           
        <div className="block">
          <p>This site is under construction, check back soon for an overhaul!</p>
        </div>

        <div className="block">
          <p> 
            I'm Ryan, and I'm an engineer whose spent the last few years working in the Healthcare space. I've worked across a variety of tech stacks building robust APIs and web applications with the goal of improving patient care.
            Throughout all this, I've been fortunate to work with a team of extremely talented engineers from which I have learned a great deal. 
          </p>
        </div>
        <div className="block">
          <p>
            Outside of work, I enjoy building games. Particularly in the game jam setting. What's a game jam? Think Hackathon, but just for game devs. I find the theme restraints and artificial time pressure of game jams to be both a fun and exciting way to get the creative juices flowing.
            You can find several of my jam games that I've hacked away at on my Jams page.
          </p>
        </div>
        <div className="block">
          <p>
            Occasionally, I like to go outside. To travel, be in nature, or for just from some good ol' huu-man interaction; away from a screen.
          </p>
        </div>
    </content>
  )
}

const IndexPage = () => {

  return (
    <Layout pageTitle="Home">
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
              <p className="title is-1">
                Ryan Cross
              </p>
              <p className="subtitle">
                Software Engineer
              </p>
            </div>
        </div>
      </section>
      <section>
        <div className="container is-fluid">
          <div className="columns is-centered">
            <div className="column is-6">
              <p className="title is-1 has-text-centered">Welcome!</p>
              <Introduction></Introduction>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

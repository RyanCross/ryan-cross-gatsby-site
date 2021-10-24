import * as React from "react"
import { Link } from 'gatsby'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1> Welcome to my freakin site </h1>
      <p> I'm making this following the gatsby tutorial </p>
      <Link to="/hireme">Hire Me</Link>
    </main>
  )
}

export default IndexPage

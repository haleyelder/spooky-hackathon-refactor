import React from 'react'
import { Link } from 'gatsby'

const Familiar = () => (
  <Layout>
    <h1>Meet Your Familiar!</h1>
    <p>Welcome to page 2</p>
    <img src="https://raw.githubusercontent.com/nikkiawong/hackathon/master/src/spookyimage.png" alt="Magical Familiar, doggo"></img>
    <Link to="/house.js">Get Sorted</Link>
  </Layout>
)

export default Familiar;
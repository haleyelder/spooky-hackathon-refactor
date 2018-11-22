import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const StartPage = () => (
  <Layout>
     <div class="start-background">
      <h2>Want to play a game?</h2>
      <Link to="/name.js/">Start</Link>
    </div>
  </Layout>
)

export default StartPage

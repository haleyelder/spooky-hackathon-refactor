import React from 'react'
import { Link } from 'gatsby'

const NameInvite = () => (
  <Layout>
      <form id="nameForm" action="index.html" method="post">
        <h3>1. Enter your name:</h3>
        <input type="text" name="name" value="">
        <button type="submit" name="button" class="btn btn-danger">Start</button>
      </form>
      <div class="envelope">
        <img src="https://mbtskoudsalg.com/images/hogwarts-envelope-png.png" alt="envelope">
      </div>
      <div class="invitation">
        <h2>Hogwarts School of Witchcraft and Wizardry</h2>
        <p>Dear <span id="student-name"></span>,</p>
        <p>We are pleased to infom you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. Students shall be required to report to the Chamber of Reception upon arrival. We await your owl no later than 31 July.</p>
        <p>Please make your way to Kings Cross Station and onto platform 9 3/4 where you will meet the Hogwarts Express. Term begins on 1 September.</p>
        <p>We very much look forward to receiving you as part of the new generation of Hogwarts Heritage.</p>
        <p>Yours sincerely,</p>
        <p>Professor Minerva McGonagall</p>
        <p>Deputy Headmistress</p>

    <h4>Do you accept?</h4>
    <Link to="/welcome.js/">Yes</Link>
    <Link to="/no.js/">No</Link>

        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/430111&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
     
  </Layout>
)

export default NameInvite

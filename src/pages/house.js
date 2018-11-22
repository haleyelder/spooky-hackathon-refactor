import React from 'react'
import { Link } from 'gatsby'

const HouseSorting = () => (
  <Layout>
    <h1> The Sorting Hat </h1>
    <p> Let's see what house you're in...</p>
    <button class="btn btn-danger" onclick="sortMe()" id="sort">Sort me! </button>
    <div id="house"></div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default HouseSorting

//sorting script
function sortMe() {

  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.potterapi.com/v1/sortingHat");
  xhr.send(data);


      xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        document.getElementById("house").innerHTML = this.responseText;
      }
     });
  }

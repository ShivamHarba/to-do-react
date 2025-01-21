import React from 'react'
// import {Link} from `react-router-dom`
import { Link,useParams} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Home</h1>
    <Link to="about"> About</Link>
    <br />
    <Link to="contact">Contact</Link>
    <br />
    <Link to="detail">Detail INfo</Link>

    
    </>
  )
}

export default Home
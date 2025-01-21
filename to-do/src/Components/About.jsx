import React from 'react'
import { Link,useParams} from 'react-router-dom'

const About = () => {
  // const {id}=useParams()
  return (
    <>
    <h1>About</h1>

    <Link to="/">Home</Link>
    </>
  )
}

export default About
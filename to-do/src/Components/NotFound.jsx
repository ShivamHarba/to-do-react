import React, { useState } from 'react'
import { Link,useParams} from 'react-router-dom'

const NotFound = () => {
  return (
    <>
   <h1>Error.........</h1>
   <Link to="/">Home</Link>

   </>
  )
}

export default NotFound
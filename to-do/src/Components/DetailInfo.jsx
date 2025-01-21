import React, { useEffect, useState } from 'react'
import { Link,useParams} from 'react-router-dom'
const DetailInfo = () => {
  
    const[name, setName]=useState([])

    async function call() {
        const res= await fetch("https://dummyjson.com/users");
        const data= await res.json();
        setName(data.users)
    }

    useEffect(()=>{
        call()
    },[]);

  return (
    <>
   <h1>Detail Info </h1>

   {name.map((n)=>{
    return <Link to={`about${n.id}`} style={{display:"block"}} key={n.id} >{n.firstName}</Link>
   })}
   

   <Link to="/">Home</Link>
   </>
  )
}

export default DetailInfo
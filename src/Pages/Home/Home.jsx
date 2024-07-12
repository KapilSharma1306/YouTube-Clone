import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../component/Sidebar/Sidebar'
import Feed from '../../component/Feed/Feed'
const Home = ({sidebar}) => {

   const [category,setCategory] = useState(0);
   const [catdata,setCatdata] = useState(0);

  return (
    <>
     <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
     <div className={`container ${sidebar? " ":"large-container"}`}>
        <Feed category={category} catdata={catdata}/>
     </div>
    </>
  )
}

export default Home

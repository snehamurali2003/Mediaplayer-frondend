import React, { useState } from 'react'
import Add from '../Component/Add'
import View from '../Component/View'
import Category from '../Component/Catogery'
import { Link } from 'react-router-dom'

function Home() {

    const[uploadVideoResponse,setUploadVideoResponse]=useState({})
    const[dropVideoResponse,setDropVideoResponse]=useState({})

  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      
      <div className="add-videos">
    
        <Add  setUploadVideoResponse={setUploadVideoResponse}/>
      </div>

      <Link to={'/watch-history'} style={{textDecoration:'none',color:'blueviolet',fontSize:'30px'}} className='mt-2'>
      Watch-History<i class="fa-regular fa-file fa-beat ms-1"></i>
      </Link>
    
    </div>

    <div className="container-fluid d-flex w-100 mt-5 mb-5">

      <div className="all-videos col-lg-9">
        <h2 className='mt-4 ms-2'>All Videos</h2>
        <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
      </div>


      <div className="all-videos col-lg-9 mt-5">
        <Category dropVideoResponse={dropVideoResponse}/>
      </div>

    </div>
    </>
  )
}

export default Home
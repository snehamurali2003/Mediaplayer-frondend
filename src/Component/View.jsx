import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllvideosAPI, getcategoryAPI, updateCategoryAPI } from '../../services/allAPI'


function View({uploadVideoResponse,setDropVideoResponse}) {

  const[Allvideos,setAllvideos]=useState([])


  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)

  useEffect(()=>{
    getUploadvideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])


  const getUploadvideos =async()=>{
    const result=await getAllvideosAPI()
    console.log(result);
    if(result.status=200){
      setAllvideos(result.data)
    }else{
      setAllvideos({})
      console.log("API FAILED");
    }

  }

console.log(Allvideos);



// video from category component functionalities

const videoDraggedOver = (e) => {
  e.preventDefault();
}

const videoDropped = async(e) => {
  const {videoId,categoryID} = JSON.parse(e.dataTransfer.getData("data"));
  // console.log(videoId,categoryID);

  const {data} = await getcategoryAPI();
  // console.log(data);

  const selectedCategory = data.find(item => item.id === categoryID);
  // console.log(selectedCategory);
  
  let result = selectedCategory.allVideos.filter(video => video.id !== videoId)
  // console.log(result);

  let{id,categoryName} = selectedCategory;
  let newCategory = {id,categoryName,allVideos:result}

  const res = await updateCategoryAPI(categoryID,newCategory)
  setDropVideoResponse(res);
  

}


  return (
    <div>
      <Row droppable="true" onDragOver = {e => videoDraggedOver(e)} onDrop = {e => videoDropped(e)}>
        {
        Allvideos?.length>0?Allvideos.map(video=>(
        <Col sm={12} md={6} lg={4} xl={3} className='mt-3'>
          <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
        )):<p>Nothing to Display</p>
        }
      </Row>

    </div>
  )
}

export default View
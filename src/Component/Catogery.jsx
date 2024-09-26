import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { addcategoryAPI, deletecategoryAPI, getAvideoAPI, getcategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard';



function Catogery(dropVideoResponse) {

  const [categoryName,setCategoryName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async() => {

    if(categoryName){
      const result = await addcategoryAPI({categoryName,allVideos:[]})
      console.log(result);

      if(result.status>=200 && result.status<300){
        handleClose();
        setCategoryName("");
        getCategories();
      }
      else{
        alert(result.message);
      }
      
    }
    else{
      alert("Plase Fill the field")
    }

  }

  const [allCategories,setAllCategories] = useState([]);

  useEffect(()=>{
    getCategories();
  },[dropVideoResponse]);

  const getCategories = async () => {
    const {data} = await getcategoryAPI()
    setAllCategories(data);
  }

  console.log(allCategories);


  // deleting categories
  const removeCategory = async(id) => {
    await deletecategoryAPI(id)
    getCategories();
  }
  
  // Dropping video

  const dragOver = (e) => {
    console.log("video drragingOver started");
    e.preventDefault();
  }

  const videoDrop = async(e,categoryID) => {
    const videoId = e.dataTransfer.getData("videoId");
    console.log("video with Id",videoId,"videodropped inside category",categoryID);
    const {data} = await getAvideoAPI(videoId)
    // console.log(data);
    const selectedcategory =allCategories.find(item=>item.id===categoryID)
    selectedcategory.allVideos.push(data)
    console.log(selectedcategory);
    await updateCategoryAPI(categoryID,selectedcategory)
    getCategories()
  }


  // dropping video from category to view component

  const videoDragstarted = (e,videoId,categoryID) => {
      let dataShare = {videoId,categoryID};
      // console.log(dataShare);
      e.dataTransfer.setData("data",JSON.stringify((dataShare)));
  }


  return (
    <>
            <div className="d-grid">
        <button className='btn btn-info w-25' onClick={handleShow} style={{marginLeft:'60px'}}>Add Category</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered  
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className='form-control' placeholder='Enter Category Name' onChange={e=>setCategoryName(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleAdd}>ADD</Button>
        </Modal.Footer>
      </Modal>

    { 
      allCategories?.length>0?allCategories.map(category => (
        <div className="border rounded mt-3 p-3 ms-4" style={{width:'350px'}} droppable="true" onDragOver={e => dragOver(e)} onDrop={e => videoDrop(e,category.id)}>
        <div className="d-flex justify-content-center align-itmes-center">
          <h5 className='mt-1'>{category.categoryName}</h5>
          <button className='btn' onClick={()=>removeCategory(category.id)}><i className='fa-solid fa-trash text-danger'></i></button>
        </div>

        <Row droppable="true">
          {

            category?.allVideos?.length>0?category.allVideos.map(card=>(
              <Col sm={12} className='mt-3 ms-4' draggable onDragStart={e => videoDragstarted(e,card.id,category.id)}>
                <VideoCard video={card} insidecategory={true}/>
              </Col>
            )):null
          }
        </Row>
      </div>
      )):<p className='text-danger fw-bolder ms-5'>Nothing to display</p>
  }

    </>
  )
}

export default Catogery

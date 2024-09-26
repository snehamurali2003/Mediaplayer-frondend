import { Button,FloatingLabel,Form,Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { uploadvideoAPI } from '../../services/allAPI';


function Add({setUploadVideoResponse}) {

  const [uploadVideos,setUploadVideo] = useState({
    id:"",title:"", url:"",link:""
  });
   


  console.log(uploadVideos);

  const getYoutubeLink =(e)=> {
    const {value}=e.target

  if(value.includes("v=")){
    let VID =value.split("v=")[1].slice(0,11)
    console.log({ ...uploadVideos,link:`https://www.youtube.com/embed/${VID}`});
    setUploadVideo({...uploadVideos,link:`https://www.youtube.com/embed/${VID}`})

  }else{
    setUploadVideo({...uploadVideos,link:""})
  }
    
  }
  

  // Adding a video using handleAdd

  const handleAdd =async()=>{
    const {id,caption,url,link} = uploadVideos;
    
   if(!id || !caption || !url || !link){
     alert("please fill missing field")
   }else{
    const result= await uploadvideoAPI(uploadVideos)
    console.log(result);
    if(result.status>=200 && result.status<300){
      handleClose();
        alert("video successfully uploaded")

        // after getting successful response
        setUploadVideo({
          id:"",title:"", url:"",link:""
        })
        setUploadVideoResponse(result.data);
      
    }else{
      console.log(result.message);
      alert(result.message)   
    }    
   }
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-itmes-center">
        <h5 className='mt-2 fs-4'>Upload Videos</h5>
        <Button className='ms-2' onClick={handleShow} style={{backgroundColor:'grey'}}><i class="fa-solid fa-arrow-up-from-bracket fa-fade fs-5"></i>
        </Button>
      </div>

    

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FloatingLabel
          controlId="floatingInput"
          label="Video Id"
          className="mb-3"
          >
          <Form.Control type="text" placeholder="Video Id" 
          onChange={(e) => setUploadVideo ({ ...uploadVideos,id: e.target.value})} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingtitle" label="Video Title">
            <Form.Control type="text" placeholder="Video Title" 
            onChange={(e) => setUploadVideo ({ ...uploadVideos,caption: e.target.value})}/>
          </FloatingLabel>


          <FloatingLabel
          controlId="floatingInput"
          label="Image URL"
          className="mb-3 mt-3"
          >
          <Form.Control type="text" placeholder="Image UR"
          onChange={(e) => setUploadVideo ({ ...uploadVideos,url: e.target.value})}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingtitle" label="Video URL">
            <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeLink}/>
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add
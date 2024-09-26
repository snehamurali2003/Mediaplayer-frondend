import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { MDBBtn } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navByUrl =useNavigate();
  return (
    <>
      <Row className='d-flex align-items-center mt-5 mb-5'>
          <Col></Col>

          <Col lg={5}>
            <h1 style={{fontSize:'40px'}}>Welcome to <span>Media Player</span></h1>
            <p>This media player app is a software designed to play audio and video files, providing users with essential features like playback controls, format support, and streaming capabilities. It allows for easy management of media content, whether offline or online, with options like playlist creation and subtitle support. These apps are versatile, offering customization and seamless experiences across multiple devices, making them an essential tool for consuming and enjoying multimedia content.</p>
            <MDBBtn color='info' onClick={()=>navByUrl('/home')}>
              Get Started
            </MDBBtn>
          </Col>

          <Col lg={5}>
            <img src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" alt="" style={{width:'540px', height:'350px'}} />
          </Col>

          <Col></Col>
      </Row>

      <div className='container mb-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Features</h3>

        <div className="cards">
          <Row>
            <Col>
              <MDBCard>
                <MDBCardImage src='https://png.pngtree.com/thumb_back/fh260/background/20231226/pngtree-vibrant-and-colorful-abstract-graffiti-music-dj-photographer-vector-art-pattern-image_13914866.png' style={{ width:'300px', height:'300px'}} alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                  <h5 className='text-center'> Media Format Support</h5>
                    <p className='p-3'>One of the core strengths of a good media player is its ability to support various audio and video formats.
                       Popular formats like MP3, WAV, and AAC for audio and MP4, AVI, and MKV for video are essential, but advanced players may 
                       support additional formats and codecs. This feature ensures that users can play nearly any media file they have, making 
                       the player versatile and reducing the need for multiple software applications.</p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>

            <Col>
              <MDBCard>
                <MDBCardImage src='https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=300/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/2ca28aa5-6543-4f85-ab91-f71a0eb5023d/cad0c4b8-5ab8-42e3-a0c5-187be18653bf.png' style={{ width:'300px', height:'300px'}}  alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                  <h5 className='text-center'>Streaming Capabilities</h5>
                    <p className='p-3'>With the rise of online media, the ability to stream content is a major feature in modern media players. 
                      Streaming capabilities allow users to access audio and video from platforms like YouTube, Spotify, or live streams, as 
                      well as connect to internet radio stations and podcasts. This expands the scope of content available beyond stored files 
                      on the device, making media players a hub for both offline and online content consumption.</p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>

            <Col>
              <MDBCard>
                <MDBCardImage src='https://c4.wallpaperflare.com/wallpaper/849/765/214/music-dj-audio-spectrum-wallpaper-thumb.jpg' style={{ width:'300px', height:'300px'}} alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                    <h5 className='text-center'>Playback Controls</h5>
                    <p className='p-3'>Playback controls are the most fundamental feature of any media player, allowing users to control the media they are watching or
                    listening to. These controls typically include play, pause, stop, rewind, and fast forward options. They ensure smooth navigation
                    through audio or video files,letting users easily skip to specific points in the media. Without these essential controls, managing 
                    content would be frustrating</p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>

            <Col>
              <MDBCard>
                <MDBCardImage src='https://static.vecteezy.com/system/resources/previews/030/637/699/large_2x/dj-equipment-in-a-club-with-a-blurred-background-free-photo.jpg' style={{ width:'300px', height:'300px'}} alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                  <h5 className='text-center'>Customization and Settings</h5>
                    <p className='p-3'>Media players provide a range of customization options, such as adjusting video settings audio settings (equalizer, surround sound), and user interface themes or skins. These settings 
                      allow users to personalize their viewing and listening experiences. Custom shortcuts and user-friendly settings further enhance the functionality of the media player, making it 
                      adaptable to individual preferences.</p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
        </div>
      </div>

      <div className='container  border rounded p-5 mt-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>
        <div className="col-lg-5">
          <h4 className='text-info'>Simple,Powerful & fast</h4>
          <h6 className='mb-5 mt-3'><span className='text-info fw-bolder'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Eius sed aliquam consequatur rem a? Natus labore, ipsum sequi ipsa nisi quis facere fugit eum eius accusamus 
          aperiam minima at a!</h6>

          <h6 className='mb-5 mt-3'><span className='text-info fw-bolder'>Categorize videos :</span>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Eius sed aliquam consequatur rem a? Natus labore, ipsum sequi ipsa nisi quis facere fugit eum eius accusamus 
          aperiam minima at a!</h6>

          <h6 className='mb-5 mt-3'><span className='text-info fw-bolder'>Managing videos :</span>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Eius sed aliquam consequatur rem a? Natus labore, ipsum sequi ipsa nisi quis facere fugit eum eius accusamus 
          aperiam minima at a!</h6>
        </div>

        <div className="col-lg-5">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/GV3HUDMQ-F8?si=SPnfM0lmAawOv8ge" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
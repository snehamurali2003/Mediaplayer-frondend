import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';


function Footer() {
  return (
    <div>
      <MDBFooter className='text-white text-center text-lg-left bg-info'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Media-Player</h5>

            <p>
            media player app lets users easily play audio and video content on their devices, offering essential controls, format support, 
            and streaming options. With features like playlists, subtitles, and audio customization, 
            it enhances the media experience for both offline and online content, making it a versatile tool for entertainment across platforms
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/#!' className='text-white'>
                  LandingPage
                </a>
              </li>
              <li>
                <a href='/home' className='text-white'>
                  Home
                </a>
              </li>
              <li>
                <a href='/WatchHistory' className='text-white'>
                  Watch-History
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Reviews
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Subscribe
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Complaints
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Back to top
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='/'>
          MediaPlayer.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
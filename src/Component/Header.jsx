import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <Navbar className="bg-info bg-info">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>
            <Link to={'/'} style={{textDecoration:"none",color:"white"}}>
                <i class="fa-solid fa-play fa-beat me-3 fs-5"></i>
                Media-Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
import { useState, useEffect } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { AppBarLinks } from '../data';
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'


const AppBarComponent = () => {
    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
      if(window.scrollY > 10) {
        setChangeColor(true)
      } else {
        setChangeColor(false)
      }
    };

    useEffect(() => {
      changeBackgroundColor();

      window.addEventListener('scroll', changeBackgroundColor)
    })

    return (
        <div>    
        <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
        <Navbar.Brand className='fs-4 fw-bold ms-auto brand' href="#home"><img src={logo} width="150px"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
                {AppBarLinks.map((link) => {
                  return (
                    <div key={link.id} className="nav-link">
                            <NavLink   className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "active" : "" 
                            } end to ={link.path}>{link.text}</NavLink>
                        </div>
                    )
                  })}
            </Nav>
          </Navbar.Collapse>
                  
        </Container>
      </Navbar>
      </div>
    )
}

export default AppBarComponent;
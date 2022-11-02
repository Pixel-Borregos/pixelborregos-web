import "../style/pixelNavbar.css";
import React from "react";
import { Navbar, Image } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import PixelNavbarElement from "./pixelNavbarElement";
import { Nav } from "react-bootstrap";
import "../style/pixelNavbarElement.css";

class PixelNavbar extends React.Component
{
    
    render()
    {
        return(
            <Navbar id="PixelNavbar" fixed-top expand="lg" className ="pixelNavbarBackground">
                <Image height="60vh" width = "130vw" src={"/images/logo.png"}/>
                <h2 className="pixelNavbarText">Pixel Borregos</h2>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className = "pixelNavbarElements topnav">
                        <Nav.Link href="/" className="pixelNavbarElementText" >Nosotros</Nav.Link>
                        <Nav.Link href="/Projects" className="pixelNavbarElementText" >Proyectos</Nav.Link>
                        <Nav.Link href="/News" className="pixelNavbarElementText" >Noticias</Nav.Link>
                        <Nav.Link href="/ContactUs" className="pixelNavbarElementText" >Contáctanos</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
    
}

export default PixelNavbar;
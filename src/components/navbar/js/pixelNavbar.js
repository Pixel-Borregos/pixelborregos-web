import "../style/pixelNavbar.css";
import React from "react";
import { Navbar, Image } from "react-bootstrap";
import PixelNavbarElement from "./pixelNavbarElement";

class PixelNavbar extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.state = {
            selected_button: 'about_us'
        };
    }

    render()
    {
        return(
            <Navbar id="PixelNavbar" fixed-top expand="lg" className ="pixelNavbarBackground">
                <Image height="60vh" width = "130vw" src={"/images/logo.png"}/>
                <h2 className="pixelNavbarText">Pixel Borregos</h2>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className = "pixelNavbarElements topnav">
                    <PixelNavbarElement
                        view = "AboutUs"
                        navText="Nosotros"
                        updateView = {this.props.updateView}
                    />
                    <PixelNavbarElement
                        view="Projects"
                        navText="Proyectos"
                        updateView = {this.props.updateView}
                    />
                    <PixelNavbarElement
                        view="News"
                        navText="Noticias"
                        updateView = {this.props.updateView}
                    />
                    <PixelNavbarElement
                        view="ContactUs"
                        navText="Contáctanos"
                        updateView = {this.props.updateView}
                    />
                </Navbar.Collapse>
            </Navbar>
        )
    }
    
}

export default PixelNavbar;
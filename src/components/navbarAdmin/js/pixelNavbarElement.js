import React from "react";
import { Nav } from "react-bootstrap";

import "../style/pixelNavbarElement.css";

class PixelNavbarElement extends React.Component
{
    
    render(){
        return(
            <Nav>
            <Nav.Link 
                    className="pixelNavbarElementText" 
            >

                {this.props.navText}
                
            </Nav.Link>
            </Nav>
        )
    }
}

export default PixelNavbarElement;
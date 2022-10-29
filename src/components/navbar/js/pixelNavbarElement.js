import React from "react";
import { Nav } from "react-bootstrap";

import "../style/pixelNavbarElement.css";

class PixelNavbarElement extends React.Component
{
    updateView = () =>{
        this.props.updateView(this.props.view);
    }
    
    render(){
        return(
            <Nav>
            <Nav.Link 
                    className="pixelNavbarElementText" 
                    onClick ={this.updateView}
            >

                {this.props.navText}
                
            </Nav.Link>
            </Nav>
        )
    }
}

export default PixelNavbarElement;
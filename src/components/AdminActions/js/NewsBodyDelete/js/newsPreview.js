import React from "react";
import {Image, Accordion} from "react-bootstrap"
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import IconLabelButtons from "./crudButtons"; 

import "../style/newsCard.css"
class NewsPreview extends React.Component{
    render(){
        let transparentBackground = {
            background:'transparent'
        }
        return(
            <Accordion >
                <Accordion.Item eventKey="0" style={{transparentBackground}}>
                    <AccordionHeader style = {{textAlign:'center', background:'pink', color:'red'}}>
                       <h2>{this.props.title}</h2>
                    </AccordionHeader>
                    <Accordion.Body>
                        <h1>{this.props.title}</h1>
                        <div
                            dangerouslySetInnerHTML={{__html:this.props.body}}
                        >  
                        </div>
                    </Accordion.Body>
                    {this.props.delete}
               </Accordion.Item>
            </Accordion>
    
        )
    }
}

export default NewsPreview;
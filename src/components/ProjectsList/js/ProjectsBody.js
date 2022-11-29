import React from "react";
import {Col, Container,Row,Image} from "react-bootstrap";

import "../style/aboutUsBody.css";
import AboutUsImageSection from "./ProjectsImageSection";
import AboutUsTeamBody from "./ProjectsCardBody";
import AboutUsTextSection from "./ProjectsTextSection";

class ProjectsBody extends React.Component{
    render(){
        return(
            <Container fluid>
                <video src='/videos/Projects_AdobeExpress.mp4' autoPlay loop muted />
                <Container>
                    
                    
                    <Row>
                        <Col>
                            <AboutUsTextSection
                                title={"Juegos por Pixel Borregos"}
                                body={"Conoce los juegos desarrollados por el equipo!"}

                                backgroundColor={{background:'rgba(0,0,0,.5)'}}
                                titleColor = "#fff"
                                textColor = "#fff"
                                // titleColor = "-webkit-linear-gradient(90deg, rgba(71,218,228,1) 23%, rgba(45,140,170,1) 53%, rgba(40,101,133,1) 72%)"
                                // textColor = "linear-gradient(9deg, rgba(60,212,226,1) 22%, rgba(66,178,198,1) 50%, rgba(60,212,226,1) 78%)"
                                
                            /> 
                        </Col> 
                    </Row>

                    <Row>
                        <Col>
                            <AboutUsTeamBody
                                backgroundColor={{background:"rgba(0,0,0,.5)"}}
                                titleColor = "#fff"
                                // titleColor = "-webkit-linear-gradient(90deg, rgba(71,218,228,1) 23%, rgba(45,140,170,1) 53%, rgba(40,101,133,1) 72%)"
                                />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default ProjectsBody;
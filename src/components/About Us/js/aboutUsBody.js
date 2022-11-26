import React from "react";
import {Col, Container,Row,Image} from "react-bootstrap";

import "../style/aboutUsBody.css";
import AboutUsImageSection from "./aboutUsImageSection";
import AboutUsTeamBody from "./aboutUsTeamBody";
import AboutUsTextSection from "./aboutUsTextSection";

class AboutUsBody extends React.Component{
    render(){
        return(
            <Container fluid>
                <video src='/videos/P3_AdobeExpress.mp4' autoPlay loop muted />
                <Container>
                    
                    
                    <Row>
                        <Col>
                            <AboutUsTextSection
                                title={"Misión"}
                                body={  
                                        "Ser un espacio para que estudiantes puedan desarrollar sus\n"+ 
                                        "habilidades para tener una carrera en gaming, ya sea uniéndose\n"+ 
                                        "a una empresa o emprendiendo mientras al mismo tiempo se organizan\n"+ 
                                        "eventos para la comunidad estudiantil que promueven una cultura de\n"+ 
                                        "videojuegos."}

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
                            <AboutUsTextSection
                                title={"Visión"}
                                body={  
                                        "Ser un grupo de videojuegos reconocido en la industria por\n"+
                                        "sus proyectos de calidad, impacto en la comunidad estudiantil\n"+
                                        "y creación de talento."
                                }
                                backgroundColor={{background:"rgba(0,0,0,.5)"}}
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

export default AboutUsBody;
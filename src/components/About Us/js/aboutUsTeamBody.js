import React from "react"
import { Card, CardImg, Container, Row , Col} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import AboutUsTeamCard from "./aboutUsTeamCard";
import "../style/aboutUsTeamBody.css"

class AboutUsTeamBody extends React.Component{

    render(){

        let titleStyle = {
            background: this.props.titleColor,
            webkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            textAlign:'center',
            fontFamily:'DotGothic16,sans-serif',
            fontWeight: '900'
        }
        return(
            <Container fluid>
                <Row>
                    <Col>
                        <h1 style={titleStyle}>Conoce al Equipo Fundador</h1>
                    </Col>
                </Row>
                <Row style={{ justifyContent:'space-evenly', alignContent:'flex-start'}}>
                    <AboutUsTeamCard
                        name = "Bernardo Girón Arana"
                        role = "Presidente"
                        descriptionA = {
                            "Futuro SWE en Microsoft. Le apasiona mucho el diseño de "+
                            "videojuegos la IA de NPCs."
                        }

                        descriptionB ={
                            "En el proyecto actual del grupo está en las áreas de diseño, "+
                            "programación y project management, en donde dirige a las demas areas del desarrollo del mismo y desarrolla herramientas para futuros proyectos."
                        }
                    />
                    <AboutUsTeamCard
                        name = "Carlos Mora Madrigal"
                        role = "Vicepresidente"
                        descriptionA = {
                            "Actualmente es Intern en patio21. Se encarga de la logística de los evenetos del grupo y" +
                            "de dirigir a las personas que colaboran en la organizacion de estos."                   
                        }

                        descriptionB = {
                            "Gracias a él fue posible que Pixel Borregos realizara una colaboración con 48toPlay"
                        }
                    />
                </Row>
                <br></br>
                <Row>
                    <AboutUsTeamCard
                        name = "Paloma Villalobos"
                        role = "Narrativa"
                        descriptionA = {
                            "Futuro SWE en Microsoft. Le apasiona mucho el diseño de "+
                            "videojuegos la IA de NPCs."
                        }
                    />
                    <AboutUsTeamCard
                        name = "César Cisneros"
                        role = "Composición Musical"
                        descriptionA = {
                            "Futuro SWE en Microsoft. Le apasiona mucho el diseño de "+
                            "videojuegos la IA de NPCs."
                        }
                    />
                    <AboutUsTeamCard
                        name = "Frida Aranda"
                        role = "Efectos de Sonido"
                        descriptionA = {
                            "Futuro SWE en Microsoft. Le apasiona mucho el diseño de "+
                            "videojuegos la IA de NPCs."
                        }
                    />
                </Row>

                <Row>
                    <AboutUsTeamCard
                        name = "Daniela Acosta"
                        role = "Arte y Modelado 3D"
                        descriptionA = {
                            "Futuro SWE en Microsoft. Le apasiona mucho el diseño de "+
                            "videojuegos la IA de NPCs."
                        }
                    />
                    <AboutUsTeamCard
                        name = "Rodrigo Peña"
                        role = "Narrativa"
                        descriptionA = {
                            "Futuro SWE en Microsoft. Le apasiona mucho el diseño de "+
                            "videojuegos la IA de NPCs."
                        }
                    />
                    <AboutUsTeamCard
                        name = "Valeria Paulín"
                        role = "Imagen y Redes Sociales"
                        descriptionA = {
                            "Futuro SWE en Microsoft. Le apasiona mucho el diseño de "+
                            "videojuegos la IA de NPCs."
                        }
                    />
                </Row>
                <Row>
                    <AboutUsTeamCard
                        name = "Jesús ???"
                        role = "Arte y Modelado 3D"
                        descriptionA = {
                            "Futuro SWE en Microsoft. Le apasiona mucho el diseño de "+
                            "videojuegos la IA de NPCs."
                        }
                    />
                    <AboutUsTeamCard
                        name = "Mario Falcón"
                        role = "Narrativa"
                        descriptionA = {
                            "Futuro SWE en Microsoft. Le apasiona mucho el diseño de "+
                            "videojuegos la IA de NPCs."
                        }
                    />
                    <AboutUsTeamCard
                        name = "José Juan"
                        role = "Finanzas"
                        descriptionA = {
                            "Futuro SWE en Microsoft. Le apasiona mucho el diseño de "+
                            "videojuegos la IA de NPCs."
                        }
                    />
                </Row>
            </Container>
        )
    }

}

export default AboutUsTeamBody;
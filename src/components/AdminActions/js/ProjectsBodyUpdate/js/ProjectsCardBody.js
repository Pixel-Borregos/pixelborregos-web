import React from "react"
import { Card, CardImg, Container, Row , Col} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import IconLabelButtons from "./crudButtons";

import AboutUsTeamCard from "./ProjectsCard";
import "../style/aboutUsTeamBody.css"

class ProjectCardBody extends React.Component{

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
                <br></br>
                <Row>
                    <AboutUsTeamCard
                        name = "The Great Downpour"
                        role = "HD2D Real-Time Action RPG"
                        descriptionA = {
                            "La apartada isla de Omna es lanzada al borde de la destrucción. Cuando el final de la temporada de tempestades llega sin señales de que el diluvio se detenga. Mientras tanto, la noche de Luna Roja se acerca, y con ella el temor echa raíces en los corazones de Omna; todo apunta a que se acerca el Gran Diluvio profetizado a terminar con toda vida en Omna. La devoción de Akri hacia Imbwe, Diosa del Todo que partió los mares para crear Omna, pareciera no tener límites. Es por ello que, en medio de todo el caos y terror, ella busca el socorro de Imbwe. Pero cuando Imbwe le niega a la gente de Omna su misericordia, Akri debe arreglárselas por sí misma. Dispuesta a arriesgarlo todo por su gente, Akri emprende un viaje para separar a Imbwe en las dos entidades que forman el Todo, la Vida y la Muerte, para así pasar a cuchillo a la Muerte."
                        }
                    />
                </Row>
            </Container>
        )
    }

}

export default ProjectCardBody;
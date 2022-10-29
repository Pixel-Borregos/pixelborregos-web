import React from "react";
import { Button, Card } from "react-bootstrap";

class ProjectCard extends React.Component{

    render(){
        let titleStyle = {
            background: '-webkit-linear-gradient(270deg, rgba(0,0,0,0.8) 75%,rgb(255, 255, 255) 96%)',
            webkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            fontWeight:'900'
        }

        let roleStyle = {
            fontWeight:'900',
            background: '-webkit-linear-gradient(270deg, rgba(0,0,0,0.8) 72%,rgb(255, 255, 255) 110%)',
            webkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            
        }

        let textStyle = {
            color:'#334966',
            fontWeight:'600'
        }

        let buttonTextStyle={
            color:"#4cddeb",
            fontWeight:'300'
        }

        return(
            <Card>
                <Card.Img src="/images/the_great_downpour.png"/>
                <Card.Header> 
                    <h1 style = {titleStyle}>The Great Downpour</h1>
                </Card.Header>
                <Card.Header > 
                    <h3 style = {roleStyle}>HD2D Real-Time Action RPG</h3>
                </Card.Header>
                <Card.Body>
                    <h5 style = {textStyle}>
                        La apartada isla de Omna es lanzada al borde de la destrucción. Cuando el final de la temporada de tempestades llega sin señales de que el diluvio se detenga. Mientras tanto, la noche de Luna Roja se acerca, y con ella el temor echa raíces en los corazones de Omna; todo apunta a que se acerca el Gran Diluvio profetizado a terminar con toda vida en Omna. La devoción de Akri hacia Imbwe, Diosa del Todo que partió los mares para crear Omna, pareciera no tener límites. Es por ello que, en medio de todo el caos y terror, ella busca el socorro de Imbwe. Pero cuando Imbwe le niega a la gente de Omna su misericordia, Akri debe arreglárselas por sí misma. Dispuesta a arriesgarlo todo por su gente, Akri emprende un viaje para separar a Imbwe en las dos entidades que forman el Todo, la Vida y la Muerte, para así pasar a cuchillo a la Muerte.
                    </h5>
                    <br></br>
                    <Button> 
                        <h4 style = {buttonTextStyle}>
                            Pruebalo en Itch.io
                        </h4>
                    </Button>
                    <br></br><br></br>
                    <Button > 
                        <h4 style = {buttonTextStyle}>
                            Checa la documentación
                        </h4>
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ProjectCard
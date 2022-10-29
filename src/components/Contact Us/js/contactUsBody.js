import React from "react";
import {Container,Row,Col} from "react-bootstrap"

class ContactUsBody extends React.Component{

    render(){
        return(
            <Container fluid>
                <Row 
                    width = "100%"
                    height = "100vh"
                >
                    <Col>
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLScchkM73gbcCeTSdgC8XT9wHN60pb9DvArwk6M_3WtQ3TYYHg/viewform?embedded=true" 
                        width="100%" 
                        height="790vh" 
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0">
                        Cargando…
                    </iframe>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContactUsBody
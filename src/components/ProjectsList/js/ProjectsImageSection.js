import React from "react";
import {Container,Row,Col, Image} from "react-bootstrap";

class AboutUsImageSection extends React.Component{

    render(){
        return(
            <Container fluid style={this.props.backgroundColor}>
                <Row>
                    <Col style={{justifyContent:'center'}}>
                        <div align="center">
                            <Image fluid src={this.props.source}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default AboutUsImageSection;
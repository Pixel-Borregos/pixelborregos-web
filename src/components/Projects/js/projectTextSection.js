import React from "react";
import {Row,Col, Container} from "react-bootstrap";

import "../style/aboutUsTextSection.css";

class ProjectTextSection extends React.Component
{

    render(){
        let titleStyle = {
            background: this.props.titleColor,
            webkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent'
        }

        let textStyle = {
            background: this.props.textColor,
            webkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent'
        }
        return(
            <Container fluid 
                style={this.props.backgroundColor}
                className = "about-us-text-container"
                >
                <Row className="about-us-row">
                    <Col>
                        <h1 
                            className="about-us-body-text about-us-body-title"
                            style={titleStyle}
                        > 
                            {this.props.title}
                        </h1>
                    </Col>
                </Row>
                <Row  id = "about-us-mission" className="about-us-row">
                    <Col>
                        <h4 
                            className="about-us-body-text" 
                            style={textStyle }
                        > 
                            {this.props.body}
                        </h4>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default ProjectTextSection;
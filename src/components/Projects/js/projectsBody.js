import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./projectCard";

class ProjectBody extends React.Component{
    
    render(){
        return(
            <Container fluid>
                <video src='/videos/Projects_AdobeExpress.mp4' autoPlay loop muted />
                <Row>
                    <Col>
                        <ProjectCard></ProjectCard>
                    </Col>
                    
                </Row>

            </Container>
        )
    }

}

export default ProjectBody;
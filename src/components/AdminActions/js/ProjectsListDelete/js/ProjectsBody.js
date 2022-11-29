import React from "react";
import {Col, Container,Row,Image} from "react-bootstrap";
import IconLabelButtons from "./crudButtons";

import "../style/aboutUsBody.css";

import ProjectCard from "./ProjectsCard";
import ProjectsTextSection from "./ProjectsTextSection";
import { ReadDocument } from "../../../../../js/db/dbOperations";
class ProjectsBodyDelete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    getProjects =async () =>{
        let projectsInfo =  await ReadDocument("pixelProjects")
            .then( (result) => {
                    let projects = []
                    for(let i = 0; i < result.length;i++){
                        projects.push(<Col xs={12} sm={12} md={12} lg ={6} xl={4}><ProjectCard
                                    title={result[i].title}
                                    genre={result[i].genre}
                                    concept={result[i].concept}
                        /></Col>);
                    }
                    return projects;
                } 
            );
        this.setState({projects:projectsInfo})
    }

    componentDidMount = () =>{
       this.getProjects();
    }
    render(){
        return(
            <Container fluid>
                <video src='/videos/Projects_AdobeExpress.mp4' autoPlay loop muted />
                <Container>
                    <Row>
                        <Col>
                            <ProjectsTextSection
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
                        {this.state.projects}
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default ProjectsBodyDelete;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./projectCard";
import { ReadDocument } from "../../../js/db/dbOperations";
class ProjectBody extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    getProjects =async () =>{
        let projectsInfo =  await ReadDocument("pixelProject")
            .then( (result) => {
                    let projects = []
                    for(let i = 0; i < result.length;i++){
                        projects.push(<ProjectCard
                                    title={result[i].title}
                                    body={result[i].body}
                        />);
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
                {this.state.projects}

            </Container>
        )
    }

}

export default ProjectBody;
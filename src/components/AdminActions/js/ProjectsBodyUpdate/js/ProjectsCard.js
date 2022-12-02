import React from "react"
import {Card,Col, ListGroup, Button} from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"

import "../style/aboutUsTeamCard.css"

class ProjectCard extends React.Component{

    render(){

        let titleStyle = {
            background: '-webkit-linear-gradient(270deg, rgb(255, 255, 255) 60%,rgba(0,0,0,1) 77%)',
            webkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            fontWeight:'900'
        }

        let roleStyle = {
            background: '-webkit-linear-gradient(270deg, rgb(255, 255, 255) 76%,rgba(0,0,0,0.8) 90%)',
            webkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            fontWeight:'700'
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
                <Card style={{marginBottom:"10%"}}>
                    <Card.Img src="/images/aboutus.jpg"/>
                    <CardHeader style={titleStyle}>
                        {this.props.title}
                    </CardHeader>
                    <Card.Body>
                        <h3 style={roleStyle}>{this.props.genre}</h3>
                        <hr></hr>
                        <h5 style = {textStyle}>
                            {this.props.concept}
                        </h5>

                        <a hidden={this.props.itch == null}> 
                            <h4 style = {buttonTextStyle}>
                                Pruebalo en Itch.io
                            </h4>
                        </a>
                    <br></br><br></br>
                    <a hidden = {this.props.notion == null}> 
                        <h4 style = {buttonTextStyle} >
                            Checa la documentación
                        </h4>
                    </a>
                    </Card.Body>
                    {this.props.update}
                </Card>
        )
    }
}
export default ProjectCard;
import React from "react"
import {Card,Col, ListGroup} from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"

import "../style/aboutUsTeamCard.css"

class AboutUsTeamCard extends React.Component{

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

        return(
            <Col style={{justifyContent:'center'}} xs={12} sm={6} md={4}>
                <Card style={{marginBottom:"10%"}}>
                    <Card.Img src="/images/aboutus.jpg"/>
                    <CardHeader style={titleStyle}>
                        {this.props.name}
                    </CardHeader>
                    <Card.Body>
                        <h3 style={roleStyle}>{this.props.role}</h3>
                        <hr></hr>
                        <h5 style = {textStyle}>
                            {this.props.descriptionA}
                        </h5>
                        <br></br>
                        <h5 style = {textStyle}>
                            {this.props.descriptionB}
                        </h5>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
export default AboutUsTeamCard;
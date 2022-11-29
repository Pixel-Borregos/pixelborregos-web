import React from 'react';
import { Container,Row,Col, Card, InputGroup, Form } from 'react-bootstrap';
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBTextArea, MDBFile} from 'mdb-react-ui-kit';
import { CreateDocument } from '../../../js/db/dbOperations';

class NewsBodyCreate extends React.Component {

  constructor(props){
    super(props);
    this.state={
      title:"",
      description:""
    }
  }
  updateValue = (event) =>{
    this.setState({[event.target.name]:event.target.value})
  }

  createEntry = () =>{
    CreateDocument("pixelBlog",this.state);
  }
  render(){
    return(
      <MDBContainer fluid>
        <video src='/videos/P2_AdobeExpress.mp4' autoPlay loop muted />
        <MDBRow className='d-flex justify-content-center align-items-center'>
          <MDBCol lg='9' className='my-5'>
  
            <h1 style={{textAlign:"center"}} className="text-white mb-4"> Add an Entry to the Blog</h1>
  
            <MDBCard>
              <MDBCardBody className='px-4'>
  
                <MDBRow className='align-items-center pt-4 pb-3'>
  
                  <MDBCol md='12' className='ps-5'>
                    <h2 className="mb-0">Title of News</h2> <br></br>
                  </MDBCol>
  
                  <MDBCol md='12' className='pe-5'>
                    <MDBInput style={{width:"100%",marginLeft:"4%",padding:"%"}} size='lg' id='form1' type='text' name="title" onChange={this.updateValue}/>
                  </MDBCol>
  
                </MDBRow>
  
                <hr className="mx-n3" />
  
                <MDBRow className='align-items-center pt-4 pb-3'>
  
                  <MDBCol md='12' className='ps-5'>
                    <h2 className="mb-0">Description</h2><br></br>
                  </MDBCol>
  
                  <MDBCol md='12' className='pe-5'>
                    <MDBTextArea  style={{width:"100%",marginLeft:"4%",padding:"%"}} id='textAreaExample' name="description" onChange={this.updateValue}  />
                  </MDBCol>
  
                </MDBRow>
  
                <hr className="mx-n3" />
  
                <MDBBtn className='my-4' size='lg' onClick = {this.createEntry}>Create Entry</MDBBtn>
  
              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
        </MDBRow>
  
      </MDBContainer>
    )
  }
}
export default NewsBodyCreate;

import React from 'react';
import { CreateDocument } from '../../../js/db/dbOperations';
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBTextArea, MDBFile} from 'mdb-react-ui-kit';

class CreateProject extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title:"",
      category:"",
      gameDesc:"",
      imageUrl:"",
      linkItch:"",
      linkDoc:""
    }
  }
  updateValue = (event) =>{
    this.setState({[event.target.name]:event.target.value})
  }

  createEntry = () =>{
    CreateDocument("pixelProjects", this.state);
  }

  render() {  
    return (
        <MDBContainer fluid>
          <video src='/videos/P2_AdobeExpress.mp4' autoPlay loop muted />
          <MDBRow className='d-flex justify-content-center align-items-center'>
            <MDBCol lg='9' className='my-5'>
    
              <h1 class="text-white mb-4">Add a Videogame Project</h1>
    
              <MDBCard>
                <MDBCardBody className='px-4'>
    
                  <MDBRow className='align-items-center pt-4 pb-3'>
    
                    <MDBCol md='3' className='ps-5'>
                      <h6 className="mb-0">Title of Game</h6>
                    </MDBCol>
    
                    <MDBCol md='9' className='pe-5'>
                      <MDBInput label='Name of the Game' size='lg' id='form1' type='text' name='title' onChange={this.updateValue} />
                    </MDBCol>
    
                  </MDBRow>
    
                  <hr className="mx-n3" />
    
                  <MDBRow className='align-items-center pt-4 pb-3'>
    
                    <MDBCol md='3' className='ps-5'>
                      <h6 className="mb-0">Category</h6>
                    </MDBCol>
    
                    <MDBCol md='9' className='pe-5'>
                      <MDBInput label='Game Genre' size='lg' id='form2' type='text' name='category' onChange={this.updateValue}/>
                    </MDBCol>
    
                  </MDBRow>
    
                  <hr className="mx-n3" />
    
                  <MDBRow className='align-items-center pt-4 pb-3'>
    
                    <MDBCol md='3' className='ps-5'>
                      <h6 className="mb-0">Game Description</h6>
                    </MDBCol>
    
                    <MDBCol md='9' className='pe-5'>
                      <MDBTextArea label="What's the game about?" id='textAreaExample' rows={3} name='gameDesc' onChange={this.updateValue}/>
                    </MDBCol>
    
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className='align-items-center pt-4 pb-3'>
    
                    <MDBCol md='3' className='ps-5'>
                      <h6 className="mb-0">Image URL</h6>
                    </MDBCol>
    
                    <MDBCol md='9' className='pe-5'>
                      <MDBInput label='Enter a image address' size='lg' id='form2' type='text' name='imageUrl' onChange={this.updateValue}/>
                    </MDBCol>
    
                  </MDBRow>

                  <hr className="mx-n3" />
    
                  <MDBRow className='align-items-center pt-4 pb-3'>
    
                    <MDBCol md='3' className='ps-5'>
                      <h6 className="mb-0">Link to Itch.io</h6>
                    </MDBCol>
    
                    <MDBCol md='9' className='pe-5'>
                      <MDBInput label='game@itch.io' size='lg' id='form2' type='text' name='linkItch' onChange={this.updateValue}/>
                    </MDBCol>
    
                  </MDBRow>

                  <hr className="mx-n3" />
    
                  <MDBRow className='align-items-center pt-4 pb-3'>
    
                    <MDBCol md='3' className='ps-5'>
                      <h6 className="mb-0">Link to Documentation</h6>
                    </MDBCol>
    
                    <MDBCol md='9' className='pe-5'>
                      <MDBInput label='example@example.com' size='lg' id='form2' type='text' name='linkDoc' onChange={this.updateValue} />
                    </MDBCol>
    
                  </MDBRow>
    
                  <hr className="mx-n3" />
    
                  <MDBBtn className='my-4' size='lg' onClick = {this.createEntry}>Add Project</MDBBtn>
    
                </MDBCardBody>
              </MDBCard>
    
            </MDBCol>
          </MDBRow>
    
        </MDBContainer>
      );
  }
}
  
  export default CreateProject;
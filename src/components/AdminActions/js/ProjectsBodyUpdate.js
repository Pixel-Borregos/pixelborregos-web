import React from 'react';

import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBTextArea, MDBFile} from 'mdb-react-ui-kit';

class UpdateProject extends React.Component {
  render() {
    return (
      <MDBContainer fluid>
        <video src='/videos/P2_AdobeExpress.mp4' autoPlay loop muted />
        <MDBRow className='d-flex justify-content-center align-items-center'>
          <MDBCol lg='9' className='my-5'>
  
            <h1 class="text-white mb-4">Edit an existing Project</h1>
  
            <MDBCard>
              <MDBCardBody className='px-4'>
  
                <MDBRow className='align-items-center pt-4 pb-3'>
  
                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Title of Game</h6>
                  </MDBCol>
  
                  <MDBCol md='9' className='pe-5'>
                    <MDBInput label='Name of the Game' size='lg' id='form1' type='text'/>
                  </MDBCol>
  
                </MDBRow>
  
                <hr className="mx-n3" />
  
                <MDBRow className='align-items-center pt-4 pb-3'>
  
                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Category</h6>
                  </MDBCol>
  
                  <MDBCol md='9' className='pe-5'>
                    <MDBInput label='Game Genre' size='lg' id='form2' type='email'/>
                  </MDBCol>
  
                </MDBRow>
  
                <hr className="mx-n3" />
  
                <MDBRow className='align-items-center pt-4 pb-3'>
  
                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Game Description</h6>
                  </MDBCol>
  
                  <MDBCol md='9' className='pe-5'>
                    <MDBTextArea label="What's the game about?" id='textAreaExample' rows={3} />
                  </MDBCol>
  
                </MDBRow>
  
                <hr className="mx-n3" />
  
                <MDBRow className='align-items-center pt-4 pb-3'>
  
                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Upload Image</h6>
                  </MDBCol>
  
                  <MDBCol md='9' className='pe-5'>
                    <MDBFile size='lg' id='customFile' />
                    <div className="small text-muted mt-2">Upload Videogame Cover. Max file size 50 MB</div>
                  </MDBCol>
  
                </MDBRow>

                <hr className="mx-n3" />
  
                <MDBRow className='align-items-center pt-4 pb-3'>
  
                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Link to Itch.io</h6>
                  </MDBCol>
  
                  <MDBCol md='9' className='pe-5'>
                    <MDBInput label='game@itch.io' size='lg' id='form2' type='email'/>
                  </MDBCol>
  
                </MDBRow>

                <hr className="mx-n3" />
  
                <MDBRow className='align-items-center pt-4 pb-3'>
  
                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Link to Documentation</h6>
                  </MDBCol>
  
                  <MDBCol md='9' className='pe-5'>
                    <MDBInput label='example@example.com' size='lg' id='form2' type='email'/>
                  </MDBCol>
  
                </MDBRow>
  
                <hr className="mx-n3" />
  
                <MDBBtn className='my-4' size='lg'>Edit Project</MDBBtn>
  
              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
        </MDBRow>
  
      </MDBContainer>
    );
  }
}
  export default UpdateProject;
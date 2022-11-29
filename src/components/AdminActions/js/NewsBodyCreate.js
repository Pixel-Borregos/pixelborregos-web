import React from 'react';

import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBTextArea, MDBFile} from 'mdb-react-ui-kit';

function CreateNews() {
    return (
      <MDBContainer fluid>
        <video src='/videos/P2_AdobeExpress.mp4' autoPlay loop muted />
        <MDBRow className='d-flex justify-content-center align-items-center'>
          <MDBCol lg='9' className='my-5'>
  
            <h1 class="text-white mb-4">Add something to Newsfeed</h1>
  
            <MDBCard>
              <MDBCardBody className='px-4'>
  
                <MDBRow className='align-items-center pt-4 pb-3'>
  
                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Title of News</h6>
                  </MDBCol>
  
                  <MDBCol md='9' className='pe-5'>
                    <MDBInput label='Event Name' size='lg' id='form1' type='text'/>
                  </MDBCol>
  
                </MDBRow>
  
                <hr className="mx-n3" />
  
                <MDBRow className='align-items-center pt-4 pb-3'>
  
                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Description</h6>
                  </MDBCol>
  
                  <MDBCol md='9' className='pe-5'>
                    <MDBTextArea label='Message' id='textAreaExample' rows={3} />
                  </MDBCol>
  
                </MDBRow>
  
                <hr className="mx-n3" />
  
                <MDBBtn className='my-4' size='lg'>Add to Newsfeed</MDBBtn>
  
              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
        </MDBRow>
  
      </MDBContainer>
    );
  }
  
  export default CreateNews;
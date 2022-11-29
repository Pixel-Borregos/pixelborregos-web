import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../style/AdminOptionsBody.css'

class AdminActionsBody extends React.Component{
    render() {
        return (
            <>
            <video src='/videos/P2_AdobeExpress.mp4' autoPlay loop muted />
            <div class='content'>
            <span>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    News
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/Admin/CreateNews">Create</Dropdown.Item>
                    <Dropdown.Item href="/Admin/UpdateNews">Update</Dropdown.Item>
                    <Dropdown.Item href="/Admin/DeleteNews">Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </span>
            <span>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Projects
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/Admin/CreateProject">Create</Dropdown.Item>
                    <Dropdown.Item href="/Admin/UpdateProject">Update</Dropdown.Item>
                    <Dropdown.Item href="/Admin/DeleteProject">Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </span>
            </div>
            </>
        );
    }
}

export default AdminActionsBody;
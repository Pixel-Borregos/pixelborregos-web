import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './AdminActionsBody.css'

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
                    <Dropdown.Item href="#/action-1">Create</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Update</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </span>
            <span>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Projects
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Create</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Update</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </span>
            </div>
            </>
        );
    }
}

export default AdminActionsBody;
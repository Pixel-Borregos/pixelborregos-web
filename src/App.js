import 'bootstrap/dist/css/bootstrap.min.css';

import PixelNavbar from './components/navbar/js/pixelNavbar';
import AboutUsBody from './components/About Us/js/aboutUsBody';
import { Container } from 'react-bootstrap';
import "./App.css";
import ProjectBody from './components/Projects/js/projectsBody';
import NewsBody from './components/News/js/newsBody';
import ContactUsBody from './components/Contact Us/js/contactUsBody';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

class App extends React.Component 
{
    render(){
        return (
          <Router>
          <Container fluid
            style={{background:"linear-gradient(90deg, rgba(64,31,49,1) 39%, rgba(94,32,66,1) 70%, rgba(143,30,86,1) 98%)"}}
          >
            <PixelNavbar/>
            <Routes>
              <Route path="/" element = {<AboutUsBody />} />
              <Route path="/Projects"  element = {<ProjectBody />} />
              <Route path="/News" element = {<NewsBody />} />
              <Route path="/ContactUs" exact component = {<ContactUsBody />}/>
            </Routes>
          </Container>
          </Router>
        );
    }
}

export default App;
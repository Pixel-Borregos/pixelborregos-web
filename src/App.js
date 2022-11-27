import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import React from 'react';
import {collection, addDoc, setDoc} from "firebase/firestore";
import { initializeApp } from 'firebase/app';

import PixelNavbar from './components/navbar/js/pixelNavbar';
import AdminNavbar from './components/navbarAdmin/js/pixelNavbar';
import AboutUsBody from './components/About Us/js/aboutUsBody';
import { Container } from 'react-bootstrap';
import "./App.css";
import ProjectBody from './components/Projects/js/projectsBody';
// import ProjectBigBody from './components/Projects/js/projectsBigBody';
import NewsBody from './components/News/js/newsBody';
import NewsAdmin from './components/NewsAdmin/js/newsBody';
import Landing from './components/Landing/js/landingBody';
import ContactUsBody from './components/Contact Us/js/contactUsBody';
import LogIn from './components/Admin/js/LogIn';
import AddDocument, { DeleteDocument, ReadDocument, UpdateDocument } from './js/db/dbOperations';

class App extends React.Component 
{ 
  constructor(props){
    super(props);
  }
  
  render(){

    return (
      <Router>
        <PixelNavbar/>
        {/* <AdminNavbar /> */}
        <Routes>
          <Route path="/" element = {<AboutUsBody />} />
          <Route path="/Projects"  element = {<ProjectBody />} />
          {/* ProjectBigBody */}
          {/* <Route path="/News" element = {<NewsBody />} /> */}
          <Route path="/News" element = {<NewsAdmin />} />
          <Route path="/ContactUs" element = {<ContactUsBody />}/>
          <Route path="/LogIn" element = {<LogIn />} />
          <Route path="/Landing"element = {<Landing />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
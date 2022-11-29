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
import ProjectBody from './components/ProjectsList/js/ProjectsBody';
// import ProjectBigBody from './components/Projects/js/projectsBigBody';
import NewsBody from './components/News/js/newsBody';
import NewsAdmin from './components/NewsAdmin/js/newsBody';
import Landing from './components/Landing/js/landingBody';
import ContactUsBody from './components/Contact Us/js/contactUsBody';
import LogIn from './components/Admin/js/LogIn';
import AdminActionsBody from './components/AdminOptions/js/AdminOptionsBody';
import AddDocument, { DeleteDocument, ReadDocument, UpdateDocument } from './js/db/dbOperations';
import NewsBigBody from './components/News/js/newsBigBody';
import CreateNews from './components/AdminActions/js/NewsBodyCreate';
import UpdateNews from './components/AdminActions/js/NewsBodyUpdate';
import CreateProject from './components/AdminActions/js/ProjectsBodyCreate';
import UpdateProject from './components/AdminActions/js/ProjectsBodyUpdate';
import DeleteNews from './components/AdminActions/js/NewsBodyDelete/js/newsBigBody';
class App extends React.Component 
{ 
  constructor(props){
    super(props);
  }
  
  render(){

    return (
      <Router>
        <PixelNavbar/>
        <Routes>
          <Route path="/" element = {<AboutUsBody />} />
          <Route path="/Projects"  element = {<ProjectBody />} />
          {/* ProjectBigBody */}
          {/* <Route path="/News" element = {<NewsBody />} /> */}
          <Route path="/News" element = {<NewsBigBody />} />
          <Route path="/Admin/DeleteNews" element = {<DeleteNews />} />
          <Route path="/ContactUs" element = {<ContactUsBody />}/>
          <Route path="/LogIn" element = {<LogIn />} />
          <Route path="/Landing"element = {<Landing />} />
          <Route path="/Admin/Actions"element = {<AdminActionsBody />} />
          <Route path="/Admin/CreateNews"element = {<CreateNews />} />
          <Route path="/Admin/UpdateNews"element = {<UpdateNews />} />
          <Route path="/Admin/CreateProject"element = {<CreateProject />} />
          <Route path="/Admin/UpdateProject"element = {<UpdateProject />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
import 'bootstrap/dist/css/bootstrap.min.css';

import PixelNavbar from './components/navbar/js/pixelNavbar';
import AboutUsBody from './components/About Us/js/aboutUsBody';
import { Container } from 'react-bootstrap';
import "./App.css";
import ProjectBody from './components/Projects/js/projectsBody';
import NewsBody from './components/News/js/newsBody';
import ContactUsBody from './components/Contact Us/js/contactUsBody';
import React from 'react';

class App extends React.Component 
{
    constructor(props){
        super(props);

        this.state = {
          navBar: <PixelNavbar updateView={this.updateView}/>,
          currentView : <AboutUsBody/>
        }
    }

    updateView = ( view ) =>{
        let nextView = null;

        switch( view ){
            case "AboutUs":{

                nextView = <AboutUsBody/>
                break;
            }

            case "Projects":{
                nextView = <ProjectBody/>
                break;
            }

            case "News":{

                nextView = <NewsBody/>
                break;

            }

            case "ContactUs":{

                nextView = <ContactUsBody/>
                break;
            }
        }

        this.setState({
            currentView:nextView
          })
        
    }

    render(){
        return (
          <Container fluid
            style={{background:"linear-gradient(90deg, rgba(64,31,49,1) 39%, rgba(94,32,66,1) 70%, rgba(143,30,86,1) 98%)"}}
          >
            {this.state.navBar}
            {this.state.currentView}
          </Container>
        );
    }
}

export default App;
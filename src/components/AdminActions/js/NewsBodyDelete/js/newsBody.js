import React from "react";
import {Col, Container,Row} from "react-bootstrap"

import NewsPreview from "./newsPreview";
import { ReadDocument } from "../../../../../js/db/dbOperations";
import IconLabelButtons from "./crudButtons";

class NewsAdmin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    getNews =async () =>{
        let newsInfo =  await ReadDocument("pixelBlog")
            .then( (result) => {
                    let news = []
                    for(let i = 0; i < result.length;i++){
                        news.push(<NewsPreview
                                    title={result[i].title}
                                    body={result[i].body}
                                    delete={<IconLabelButtons />}
                        />);
                    }
                    return news;
                } 
            );
        this.setState({news:newsInfo})
    }

    componentDidMount = () =>{
       this.getNews();
    }

    render(){
        
        return(
            <Container fluid>            
                {this.state.news}
            </Container>
        )
    }
}

export default NewsAdmin;
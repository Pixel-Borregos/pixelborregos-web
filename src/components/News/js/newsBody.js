import React from "react";
import {Col, Container,Row} from "react-bootstrap"

import NewsPreview from "./newsPreview";
class NewsBody extends React.Component{
    render(){
        let news = []
        for(let i =0; i < 10; i++){
            news.push(<Row>
                <Col>
                    <NewsPreview
                        title="Pixel Borregos and 48toPlay"
                        body = "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
                    />
                </Col>
            </Row>)
        }
        return(
            <Container fluid>            
                {news}
            </Container>
        )
    }
}

export default NewsBody;
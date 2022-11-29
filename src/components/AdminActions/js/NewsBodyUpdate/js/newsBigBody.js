import React from "react";

import "../style/newsCard.css"
import NewsBody from "./newsBody";
class UpdateElementNews extends React.Component{
    render(){
        return(
            <>
                <video src='/videos/P2_AdobeExpress.mp4' autoPlay loop muted />
                <NewsBody />
            </>
        );
    }
}

export default UpdateElementNews;
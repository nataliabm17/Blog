import React from "react";
import Item from "./Item";
import Footer from "./Footer";
import articles from "../articles"


function Home(){
    return(
        <div>   
            {articles.map( (article)=>{
                return(<Item title={article.title} content={article.content} img={article.img}></Item>);
            })}
            <Footer></Footer>
        </div>
        );
}

export default Home;
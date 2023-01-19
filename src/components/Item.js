import React from "react";

function Item(props) {
    return(
    <div class="blog-item">
        <div>
            <h1>{props.title}</h1>
            <img align="right" alt="oranges" class="entry-icon" src={props.img}/> 
            <p>{props.content}</p>
        </div>
        
    </div>);
}

export default Item;
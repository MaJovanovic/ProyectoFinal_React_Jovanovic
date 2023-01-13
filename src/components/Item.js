import React from "react";



function Item (props){
    
    return(

        <li><a className="dropdown-item" href="#" >{props.nombre}</a></li>   

    );
}

export default Item;
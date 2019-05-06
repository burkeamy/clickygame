import React from "react";
import "./style.css"
import Col from "../Col";

function PokemonCard(props) {

   return (
      <Col size = "md-4">
      
        <div className = "card">
                <div className ="img-container" alt="Responsive image">
                <span onClick={() => props.changeStatus(props.id)
                }>
                    <img alt = {props.name} src = {props.image} />
                    
                        
                    </span>
                </div>
            </div>
     
       </Col>
    );
}

export default PokemonCard;

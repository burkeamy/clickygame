import React from "react";
import "./style.css"
import Col from "../Col";

function PokemonCard(props) {
    return (
      <Col size = "md-4">
        <div className = "card">
                <div className ="img-container" alt="Responsive image">
                    <img alt = {props.name} src = {props.image}
                    onClick={() => props.changeScore(props.status)} className="score"/>
                </div>
            </div>
       </Col>
    );
}

export default PokemonCard;
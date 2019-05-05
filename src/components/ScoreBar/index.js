import React from "react";
//import "./stle.css";

function ScoreBar(props) {

    return (     
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>PokeClick</h1>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <h3 onClick={() => props.changeStatus(props.children)}>| Score {props.children} |</h3>
                    <h3>High Score {props.children} </h3>
                </div>
            </div>
        </nav>
    )
}

export default ScoreBar;
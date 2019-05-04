import React from "react";
//import "./stle.css";

function ScoreBar(props) {

    return (     
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>Pokemon Clicky Game</h1>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <h3>| Score {props.childern} |</h3>
                    <h3>High Score {props.childern} </h3>
                </div>
            </div>
        </nav>
    )
}

export default ScoreBar;
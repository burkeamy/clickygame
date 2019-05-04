import React from "react";

function PokeBall (props) {
    return <div className = "wrapper">
        {props.children}
    </div>;
}

export default PokeBall;
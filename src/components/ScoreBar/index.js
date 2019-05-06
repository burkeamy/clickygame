import React from 'react';
import Row from '../Row';
import Col from '../Col';

//keeping score, high score is currently not avilable
function ScoreBar(props) {
    return (     
        < Row>
            <Col size = "md-5">
                <h1>PokeClick</h1>
            </Col>
            <Col size = "md-2">  
                <h3>| Score {props.score} </h3>
            </Col>
            <Col size = "md-4">
                <h3>| High Score {props.children} </h3>
            </Col>
        </Row>
    )
}

export default ScoreBar;
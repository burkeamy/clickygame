import React, { Component } from 'react';
import './App.css';
import ScoreBar from './components/ScoreBar';
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import pokemon from './pokedex.json';
import PokeBall from './components/PokeBall';
import Container from './components/Container';
import Row from './components/Row';

//you store your pokemon in a pokedex, to keep track of what you have caught
let myPokedex= [];

class App extends Component {
  //setting state for pokemon
  state = {
    pokemon,
    selected: pokemon.id,
    score: 0,
    highScore: 0,
  };

  changeStatus = (id) =>{
    //capturing the id of the selected pokemon
    const caught = this.state.pokemon.filter(pokemon => pokemon.id === id);
    
    //setting state for react
    this.setState({
        score: this.state.score + 1,
        selected: this.state.selected + id,
      });

      //pushing caught pokemon to an array
      myPokedex.push(id);

      //because react wanted all variables to be used
      console.log(caught);

    //trying to check array for duplicates, but it breaks the app.
    /*function checkPokedex (id) {
      for (let i = 0; i <myPokedex.length; i+1) {
        if (id === i) {
          myPokedex = [];
          this.setState ({
            score: 0
          })
        } 
      }
      } if (score >= highScore) {
        this.setState({
          highScore: score
        })
      }
    myPokedex.forEach(checkPokedex)*/
};

  render() {
  return (
    <PokeBall>
      <Container>
      <ScoreBar 
        score = {this.state.score}/>
      </Container>
      <Header />
      <Container >
        <Row>
          {this.state.pokemon.map(pokemon =>(      
            <PokemonCard 
              id = {pokemon.id}
              key = {pokemon.id}
              name = {pokemon.name}
              image = {pokemon.image}
              selected = {pokemon.id}
              changeStatus = {this.changeStatus}
            />
          ))}
        </Row>
      </Container>
    </PokeBall>
    );
  }
}

export default App;

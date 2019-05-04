import React, { Component } from 'react';
import './App.css';
import ScoreBar from './components/ScoreBar';
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import pokemon from './pokedex.json';
import PokeBall from './components/PokeBall';
import Container from './components/Container';
import Row from './components/Row';

class App extends Component {
  //setting state for pokemon
  state = {
    pokemon,
    status: "wild",
    score: 0
  };

  changeScore = () => {
    const caught = this.state.pokemon.status
    this.setState({
         score: this.state.score + 1
      });
    console.log(this.state.score, caught)
  }

  render() {
  return (
    <PokeBall>
      <ScoreBar />
      <Header />

      <Container >
        <Row>
          {this.state.pokemon.map(pokemon =>(      
          <PokemonCard 
            id = {pokemon.id}
            key = {pokemon.id}
            name = {pokemon.name}
            image = {pokemon.image}
            status = {pokemon.status}
            onClick={this.changeScore}
          />
         ))}
        </Row>
      </Container>
    </PokeBall>

  );
}
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ScoreBar from './components/ScoreBar';
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import pokedex from './pokedex.json';
import PokeBall from './components/PokeBall';

class App extends Component() {
  //setting state for pokemon
  state = {
    pokemon
  };

  render() {
  return (
    <PokeBall>
      <ScoreBar />
      <Header />

       {this.state.pokemon.map(pokemon =>(      
      <PokemonCard 
        key = {pokedex.id}
        name = {pokedex.name}
        imge = {pokedex.image}
      />
      ))}
    </PokeBall>
  );
}
}

export default App;

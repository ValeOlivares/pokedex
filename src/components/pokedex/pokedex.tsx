import React from "react";
import './pokedex.css';

export default class Pokedex extends React.Component {
  render(){
    return (
      <div>
         <section className="pokedex-header">Pokédex</section>
         <div>Elemento de búsqueda</div>
         <div>Búsqueda avanzada</div>
         <div>Ordenar por</div>
         <div>pokemon</div>
      </div>
     
    )
  }
}
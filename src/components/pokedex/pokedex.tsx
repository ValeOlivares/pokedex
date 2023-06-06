import React from "react";
import './pokedex.css';

export default class Pokedex extends React.Component {
  render(){
    return (
      <div>
         <section className="pokedex-header">
          <h1 className="pokedex-header-container">Pokédex</h1>
         </section>
         <section>Elemento de búsqueda</section>
         <div>Búsqueda avanzada</div>
         <div>Ordenar por</div>
         <div>pokemon</div>
      </div>
     
    )
  }
}
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final'; 
import styled from 'styled-components';


export default class App extends React.Component {
  state = {
    proximaEtapa: 1
  }
  proximaPagina = () => {

    this.setState({ proximaEtapa: this.state.proximaEtapa + 1 });
  }

  render() {

    const paginaDois = () => {

      switch (this.state.proximaEtapa) {
        case 1:
          return < Etapa1 proximaEtapa={this.proximaPagina} />
        case 2:
          return <Etapa2 proximaEtapa={this.proximaPagina} />
        case 3:
          return <Etapa3 proximaEtapa={this.proximaPagina} />
        case 4:
          return <Final/>
        default:
          return <div> Pagina não encontrada! </div>;

      };
    }
      return(
         <div>
         {paginaDois()}
        </div>
    );
  };
};








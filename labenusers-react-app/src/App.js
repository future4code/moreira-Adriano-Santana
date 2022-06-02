import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListaUsuarios";
import styled from "styled-components";

const AppContainer = styled.div`
width:60vw;
background-image: linear-gradient(#2561A8,#A5E5E7,#5ABBDD);
margin:auto;
margin-top: 25px;
position:relative;

`
export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
  };

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro} />
        default:
          return <div>Erro! Página não Encontrada!</div>
    }
  }

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" })
  }

  irParaLista = () => {
    this.setState({ telaAtual: "lista"});
  }

  render() {
    return (
      <AppContainer> 
          {this.escolheTela()}
      </AppContainer>
      )
    }
  }

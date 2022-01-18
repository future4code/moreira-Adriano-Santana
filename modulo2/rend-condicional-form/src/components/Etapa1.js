import React from "react";
import styled from'styled-components';


const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
    background-color:green;
  height: 100vh;
  width: 80%;
  margin: 0 auto;

  ul{
    list-style:none;
    padding: 5px;
  }
    li{
      padding:10px;
    }
  `


export default class Etapa1 extends React.Component {

  

  render() {

    return (

      <Container>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <form>
          <ul>
            <li><h4>1. Qual o seu nome?</h4> <input /></li>
            <li><h4>2. Qual sua idade?</h4><input /></li>
            <li><h4>3. Qual seu email?</h4><input /></li>
            <li><h4>4. Qual a sua escolaridade?</h4></li>




            <li><select>
              <option>Ensino Médio Incompleto </option>
              <option>Ensino Médio Completo </option>
              <option>Ensino Superior Incompleto </option>
              <option>Ensino Superior Completo </option>
            </select></li>

              <li><button onClick={this.props.proximaEtapa}>Próxima etapa</button></li>
          </ul>
        </form>
      </Container>
    );
  }

}

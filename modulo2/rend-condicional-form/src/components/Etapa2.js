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



class Etapa2 extends React.Component {

    render() {

        return (
            <Container>
                <h1> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                <h4>5. Qual curso?</h4>
                <input />

                <h4>6.Qual a unidade de ensino?</h4>
                <input/>
                

                <button onClick={this.props.proximaEtapa}>Próxima etapa</button>


            </Container>
        );


    }

}


export default Etapa2; 
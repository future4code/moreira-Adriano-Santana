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

class Etapa3 extends React.Component {

    render() {

        return (
            <Container>
                <h1> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

                <h4>5. Por que você não terminou um curso de graduação?</h4>
                <input type="" name="name" />

                <h4>6. Você fez algum curso complementar?</h4>
                <input type="" name="name" />
                

                <button onClick={this.props.proximaEtapa}>Próxima etapa</button>


            </Container>
        );


    }

}


export default Etapa3;
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

class Final extends React.Component {
    
    render(){  
    
    return (
          <Container> 
          <h1> O FORMULÁRIO ACABOU </h1>
          
          <h4>1. Muito obrigado por participar! Entraremos em contato!</h4>
            
          </Container>
      );
    
    
    }
  
  }
  export default Final;
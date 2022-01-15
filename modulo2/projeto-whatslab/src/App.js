import React from 'react'
import Whatsf4 from './Conponents/Whatsf4';
import Header from './Conponents/Header';
import Main from './Conponents/Main';
import styled from 'styled-components'


const ContainerApp = styled.div`
width: 40%;
height: 100vh;
display:flex;
background-color:grey;
border: 1px solid grey;
margin: 0 auto;
flex-direction: column;
justify-content: space-between;

`
function App() {
  return (

    <ContainerApp>

      <Header />
      <Main />
      <Whatsf4 />

    </ContainerApp>


  );
}

export default App;

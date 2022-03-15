import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import InputFooter from './components/InputFooter';
import styled from 'styled-components'


const AppContainer = styled.div`
  border: 1px solid green;
  height: 100vh;
  box-sizing: border-box;
  width: 660px;
  margin: auto;
  display: flex;
  flex-direction: column;
  
`



export default function App() {
  

  return( 
    <AppContainer>
      <Header/>
      <Main/>
      <InputFooter/>
    </AppContainer>
  );
}







  

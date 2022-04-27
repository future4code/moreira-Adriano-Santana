import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import InputFooter from './components/InputFooter';
import styled from 'styled-components'
import useForm from './Hooks/UseForm'

const AppContainer = styled.div`
  border: 1px solid green;
  height: 100vh;
  box-sizing: border-box;
  width: 660px;
  margin: auto;
  display: flex;
  flex-direction: column;
  
`
const StyleContainer = styled.div`

`



export default function App() {
  const { form, onChange, cleanFields } = useForm({ usuario: "", mensagem: "" });
  const [lista, setLista] = useState([])
  console.log("lista", lista)
  const enviarMensagem = (event) => {
    event.preventDefault()
    console.log(form);
    const novaLista = [...lista, form]
    setLista(novaLista)
    cleanFields();


  }
  const mensagens = lista.map((msn) => {
    return (
      <div>
        <p>{msn.usuario}</p>
        <p>{msn.mensagem}</p>
      </div>
    )

  })


  return (
    <StyleContainer>
      <AppContainer>
        <Header />
        <Main mensagem={mensagens}
        />
        <InputFooter enviarMensagem={enviarMensagem}
          onChange={onChange}
          form={form} />
      </AppContainer>
    </StyleContainer>
  );
}









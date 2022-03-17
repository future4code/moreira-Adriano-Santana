import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const TextTitle = styled.h2`
display:flex;
justify-content:center;
`
const Botao = styled.button`
:hover{
  background-color: black;
  color:white;
}
`
const Input = styled.input`
position:relative;
display:flex;
justify-content:center; 

`

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    } 

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    createUsers = () => {
        const urlCadastroUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
          name: this.state.nome,
          email: this.state.email
        }

        axios.post(urlCadastroUsers, body, { 
            headers: {
                Authorization: "adriano-brito-moreira"
            }
        })

        .then((res) => {
          alert(`Usuário ${this.state.nome} foi criado com sucesso!`);
          this.setState({ nome: "" }); //Limpar o input
          this.setState({ email: "" }); //Limpar o input
          this.getAllUsers();
        })
        .catch((err) => {
          alert(err.response.data.message); //Msg de erro vinda do console para o usuário caso algo de errado
        })
    }

    render() {
        return (
          <div> 
              <Botao onClick={this.props.irParaLista}>Lista de Usuários</Botao>
              <TextTitle>Cadastro</TextTitle>
              <Input
                value={this.state.nome} 
                onChange={this.handleNome} 
                placeholder="Seu Nome"
              />
              <Input
                value={this.state.email} 
                onChange={this.handleEmail} 
                placeholder="Seu e-mail"
              />
              <button onClick={this.createUsers}>Adicionar Usuários</button>
          </div>
          )
        }
      }
import axios from "axios";
import React from "react";

const urlCadastroUsers =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "adriano-brito-moreira"
  }
};

export default class App extends React.Component {
  state = {
    usuarios: [],
    nomeUsuarioInput: "",
    emailUsuarioInput: ""
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(urlCadastroUsers, headers)
      .then((res) => {
        this.setState({ usuarios:res.data});
        
      })
      .catch((err) => {
        alert("Usuario não encontrado!");
      });
  };

  createUsers = () => {
    const body = {
      name: this.state.nomeUsuarioInput,
      email: this.state.emailUsuarioInput,
    };

    axios
      .post(urlCadastroUsers, body, headers)
      .then((res) => {
        alert(`Usuário ${this.state.nomeUserInput} foi criado com sucesso!`);
        this.setState({ nomeUsuarioInput: "" });
        this.setState({ emailUsuarioInput: "" });
        this.getAllUsers();

      })
      .catch((err) => {
        alert("Nome de usuario não encontrado");
        this.setState({ nomeUsuarioInput: "" });
      });
  };

  onTypeNameChange = (event) => {
    this.setState({ nomeUsuarioInput: event.target.value });
  };

  onTypeNameEmail = (event) => {
    this.setState({ emailUsuarioInput: event.target.value });
  };

  render() {
    const usersComponents = this.state.usuarios.map((cad) => {
      return <li key={cad.id}>{cad.name}</li>;
    
    });

    return (
      <div>
        <h1>Labenusers</h1>
        {usersComponents}
        
        <input
          value={this.state.nomeUsuarioInput}
          onChange={this.onTypeNameChange}
          placeholder="Seu Nome"
        />
        <input
          value={this.state.emailUsuarioInput}
          onChange={this.onTypeNameEmail}
          placeholder="Seu e-mail"
        />
        <button onClick={this.createUsers}>Adicionar Usuários</button>
        <div>
        <button>Tela Adicional</button>
        </div>
      </div>
    );
  }
}
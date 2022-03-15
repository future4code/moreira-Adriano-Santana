import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`

const FormContainer = styled.div`
  display:flex;
  justify-content:center;
  height: 30px;
  width: 450px;
  margin: 0px;
  padding: 20px;
  
  
`


const arrayPosts = [
  {
    nomeUsuario: "Adriano",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150"
  },
  {
    nomeUsuario: "Jaime",
    fotoUsuario: "https://picsum.photos/50/51",
    fotoPost: "https://picsum.photos/200/151"
  },
  {
    nomeUsuario: "Caca",
    fotoUsuario: "https://picsum.photos/50/52",
    fotoPost: "https://picsum.photos/200/152"
  }
];
class App extends React.Component {
  state = {
    posts: arrayPosts,
    usuario: "",
    fotoUsuario: "",
    fotoDoPost: ""
  };
  changeUsuario = (event) => {
    this.setState({ usuario: event.target.value });
  };

  changeFotoUsuario = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };

  changeFotoDoPost = (event) => {
    this.setState({ fotoDoPost: event.target.value });
  };

  adicionarNovoPost = () => {
    const novoPost = {
      nomeUsuario: this.state.userName,
      fotoUsuario: this.state.userPhoto,
      fotoPost: this.state.postPhoto
    };

    this.setState({
      posts: [...this.state.posts, novoPost],
      usuario: "",
      fotoUsuario: "",
      fotoDoPost: ""
    });
  };
  render() {
    
      const componentesPost = this.state.posts.map((p) => {
        return (
          <Post
            nomeUsuario={p.nomeUsuario}
            fotoUsuario={p.fotoUsuario}
            fotoPost={p.fotoPost}
          />
        );
      });
    return (
      <AppContainer>
        <FormContainer>
          <input
            placeholder={"Nome do Usuário"}
            value={this.state.userName}
            onChange={this.changeUserName}
          />
          <input
            placeholder={"Foto do Usuário"}
            value={this.state.userPhoto}
            onChange={this.changeUserPhoto}
          />
          <input
            placeholder={"Foto do Post"}
            value={this.state.postPhoto}
            onChange={this.changePostPhoto}
          />
          <button onClick={this.adicionarNovoPost}>Criar Post</button>
        </FormContainer>
        {componentesPost}
      </AppContainer>
    );
  }
}
export default App;

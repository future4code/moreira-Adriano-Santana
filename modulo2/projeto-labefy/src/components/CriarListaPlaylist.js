import React from "react";
import axios from "axios";

export default class CriarListaPlaylis extends React.Component {
  state = {
    nomeDaPlaylist: "",
  };
     pegarNomeDaPlaylist = (event) => {
    this.setState({nome: event.target.value})


    
}

  CriarPlaylist = () => {
    const urlCriaPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const body = {
        "name": this.state.nomeDaPlaylist
    }
    const autorization = {
      headers: {
        Authorization: "adriano-brito-moreira"
      }
    }

    axios.post(urlCriaPlaylist, body, autorization)
    .then((response) => {
      this.setState({nomeDaPlaylist:""})
      alert("Playlist Criada com sucesso!")

    })
    .catch((err) => {alert(err)})
  }
  render(){
      return(
      <div>
          
          <input type="text" placeholder="Criar Playlist"></input>
          <button onClick={this.pegarNomeDaPlaylist}>Criar Playlist </button>
              
      </div>)
  }
}

import React from "react";
import axios from "axios";





  const playlistUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

  const headers = {
      headers:
      {Authorization: "adriano-santana-moreira"}
  }

export default class CriarListaPlaylist extends React.Component {
  state = {

    nomePlaylist: ""
    

  }

  onChangeNomePlaylist = (event) => {

    this.setState({nomePlaylist: event.target.value})

  }

  criarPlaylist = () => {

    const body = {
          name: this.state.nomePlaylist
    }

    axios.post(playlistUrl, body, headers)
    .then((res) => {
        alert("Playlist criada com sucesso")
        this.setState({nomePlaylist: ""})
        
    })
    .catch(() => {
        alert('página não encontrada')
    })

  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Playlist"
          value={this.state.nomePlaylist}
          onChange={this.onChangeNomePlaylist}
        />
        <button onClick={this.criarPlaylist}>Criar</button>

        <button onClick={this.props.irTelaPlaylist}>Ir para playlists</button>
      </div>
    );
  }
}

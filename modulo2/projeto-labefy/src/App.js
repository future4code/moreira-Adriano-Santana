import React from "react";
import CriarPlaylist from "./components/CriarListaPlaylist";

export default class App extends React.Component {
  state = {
    telaAtual:"home",
  }
  render() {
    return (
      <div ClassName="container">
        <h1>Playlist</h1>
        <CriarPlaylist/>
      </div>
    );
  }
}


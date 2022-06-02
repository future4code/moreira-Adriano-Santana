import React from "react";






export default class TelaPlaylists extends React.Component {
  render() {
    return <div>
      <h4>playlist</h4>
      <button onClick={this.props.irParaTelaInicial}>Voltar</button>
    </div>;
  }
}

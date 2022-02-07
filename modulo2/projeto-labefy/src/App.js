import React from "react";
import CriarPlaylist from "./components/CriarListaPlaylist";
import TelaPlaylists from "./components/TelaPlaylists";


export default class App extends React.Component {
 state ={
    telaAtual:"telaInicial"
 }

 irParaTelaInicial = () =>{
   this.setState({telaAtual:"telaInicial"})
 }
 irTelaPlaylist = () =>{
  this.setState({telaAtual:"listaPlaylists"})
}
  mudarPagina = () =>{
    switch (this.state.telaAtual){
      case "telaInicial":
      return <CriarPlaylist
      irTelaPlaylist={this.irTelaPlaylist}
      />
      case "listaPlaylists":
      return <TelaPlaylists
      irParaTelaInicial={this.irParaTelaInicial}
      />
      default:
        return "Pagina não encontrada ! "
        
    }

}

  render() {
    return(<div>
      {this.mudarPagina()}
    </div>) 
  }
}

import React, { Component } from "react";
import axios from "axios";
export default class TelaPlaylists extends Component {
  state = {
    mostrarPlayslist: false,
  };
  
  componentDidMount() {
    this.getAllPlaylists();
  }

  
  
  getAllPlaylists = () => {
    
    const headers = {
      headers: {
        Authorization: "adriano-brito-moreira"
      }
    }

    axios

      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        headers)
        
        

      .then((res) => {
        this.setState({ usuarios: res.data});
      })
      .catch((err) => {
        alert("Ops, algo de errado ocorreu, tente novamente!");
        console.log(err.message);
      });
  };

  render() {
    return( <div>
            
          </div>)
  }
} 

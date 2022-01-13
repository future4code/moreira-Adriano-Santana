import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts:[
      {
        nomeUsuario: 'Adriano',
        fotoUsuario: 'https://cdn.discordapp.com/attachments/912387748944552005/930940145962737664/P_20200222_170631_EFF.jpg',
        fotoPost: 'https://cdn.discordapp.com/attachments/912387748944552005/930938511169830963/photo-1525169927571-60302db35f05.jpg',
      },

      {
        nomeUsuario: 'Jaime',
        fotoUsuario: 'https://cdn.discordapp.com/attachments/912387748944552005/930940866527363103/photo-1495583588857-9525ac65f1d0.jpg',
        fotoPost: 'https://cdn.discordapp.com/attachments/912387748944552005/930939253041557524/photo-1494603976222-89db76b28a3f.jpg'
      },

      {
        nomeUsuario: 'Henrique',
        fotoUsuario: 'https://cdn.discordapp.com/attachments/912387748944552005/930940402977095710/photo-1524350681568-631cf6f73569.jpg',
        fotoPost: 'https://cdn.discordapp.com/attachments/912387748944552005/930938834470965248/photo-1504884109755-c79cbd7de514.jpg',
      }
    ]
  };


  render() {
    const postLista = this.state.posts.map((posts) => {
      render()

        

export default App;

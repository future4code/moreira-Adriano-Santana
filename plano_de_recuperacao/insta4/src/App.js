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
  state ={
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'nicoly',
        fotoUsuario:'https://media-manager.noticiasaominuto.com.br/gallery/1920/naom_5b5ae8f21be67.jpg',
        fotoPost:'https://freeway.tur.br/userfiles/images/viagens-autoconhecimento-como-por-que-influenciam.jpg'
      },
      {
        nomeUsuario: 'gustavo',
        fotoUsuario:'https://i0.wp.com/blog.seja2share.com.br/wp-content/uploads/2021/07/como-aproveitar-suas-ferias-com-a-rci-viagens-740x379.png',
        fotoPost:'https://catracalivre.com.br/wp-content/uploads/2019/10/pacotes-viagem-cvc-esquenta-black-friday-910x607.jpg'
      }
    ],
  }
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Adriano'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        
      </MainContainer>
    );
  }
}

export default App;

import React from 'react'
import styled from 'styled-components'
import imagemfundo from "../assets/img/fundo.png"


const MensagensInput = styled.p`
display:flex;
font-weight: bold;
background-color:#C3FFA2;
width:400px;
height:100px;
left:15px;
border-radius: 5px;
`

const ContainerMain = styled.div`
position:relative;
display:flex;

background-image: url(${imagemfundo}); 
background-size:cover;
height: 600px;
`


export default function Main(props) {
  return (
    <ContainerMain >
      <MensagensInput>{props.mensagem}</MensagensInput>
    </ContainerMain>
  )
} 
import React from 'react'
import styled from 'styled-components'

const ListaContainer = styled.div`
padding-left: 20px;
margin-top: 10px;
border-bottom: 1px solid lightgray;

:hover{
    background-color:#D1EEEB;
}
`
const Avatar = styled.img`
border-radius: 50%;
`
export default function MatchListItem() {
  return (
    <ListaContainer>
        <Avatar src={'https://picsum.photos/30/30'}/>
        <p>Nome da Pessoa</p>
    </ListaContainer>
  )
}

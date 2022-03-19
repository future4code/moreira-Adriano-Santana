import React from 'react'
import styled from 'styled-components'

const DivCard = styled.div`
margin: 16px;
`
const ImageCard = styled.img`
display:block;
width:100%;
height: 60vh;
`
const InfoPessoa = styled.p`
display:flex;
justify-content:center;
`
const Bordatexto= styled.div`
border: 1px solid gray;
`


export default function ProfileCard(props) {
    const profile = props.profile
  return (
    <DivCard>
      <ImageCard src={profile.photo}/>
      <Bordatexto>
      <InfoPessoa>{profile.name},{profile.age}</InfoPessoa>
      <InfoPessoa>{profile.bio}</InfoPessoa>   
      </Bordatexto>
    </DivCard>
  )
}

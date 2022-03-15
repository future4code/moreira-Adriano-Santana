import React from 'react'
import styled from 'styled-components'

const DivHeader = styled.h1`
padding:0;
margin:0;
display:flex;
justify-content:center;
background-color:black;
color:white;
`
export default function Header() {
  return (
    <DivHeader>Whatslab</DivHeader>
  )
}

import React from 'react'
import AppBar from '../AppBar/AppBar'
import ChooseProfilePage from '../ChooseProfilePgage/ChooseProfilePage'
import MatchListPage from '../MatchListPage/MatchListPage'
import styled from 'styled-components'

const DivMain = styled.div`
margin:5px;
border: 2px solid gray;
border-radius: 10px;
width: 400px;
height:610px;
background-image: linear-gradient(to right,#2561A8,#1DB8AA,#5ABBDD);
`

export default function Main() {
  return (
    <DivMain>
      <AppBar/>
     <ChooseProfilePage/>
    {/* <MatchListPage/>  */}
    </DivMain>
  )
}

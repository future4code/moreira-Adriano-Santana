import React from "react";
import styled from "styled-components";

const AppBarContainer = styled.div`
display:flex;
height:80px;
justify-content:space-between;
border-bottom:1px solid lightgray;
align-items:center;
padding: 0 8px;
`
const ImgLogo = styled.img`
width:80%;
height:80%px;
`
export default function AppBar() {
  return (
    <AppBarContainer >
      <button>Escolher Pessoa</button>
      <ImgLogo src="https://i.postimg.cc/k4v7hsLT/Labeddit-6.png"/>
      <button>Lista</button>
    </AppBarContainer >
  );
}

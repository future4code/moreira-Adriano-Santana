import React from "react";
import { Perfil, Container } from "./components/styled";
import { AiFillHeart } from "react-icons/ai";
import { BsHandThumbsDownFill } from "react-icons/bs";
import styled from "styled-components";
import Logo from "./assets/img/logo.png";



const UnMatch = styled.button`
  font-size: 30px;
  border: 1px solid transparent;
  margin-top: 430px;
  margin-left:10px;
  width: 50px;
  height: 50px;
  display: flex;
  
  align-items: center;

  :hover {
    background-color: transparent;
    color: blue;
    transform: scale(2.5);
  }
`;
const LogoAstroMatch = styled.img`
  display: flex;
  width: 180px;
  height: 180px;
  margin-left: 65px;
  margin-top:10px;
`;
const Match = styled.button`
  font-size: 30px;
  border: 1px solid transparent;
  width: 50px;
  margin-top: 430px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: transparent;
    color: red;
    transform: scale(2.5);
  }
`;

export default function App() {
  return (
    <Container>
      <Perfil>
        <LogoAstroMatch src={Logo} />
        <UnMatch>
          <BsHandThumbsDownFill />
        </UnMatch>
        <Match>
          <AiFillHeart />
        </Match>
      </Perfil>
    </Container>
  );
}

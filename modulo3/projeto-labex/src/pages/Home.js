import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BottonHome = styled.button`
  font-family: 'Space Mono', monospace;
  color:blue;
  position: absolute;
  padding:10px;
  top: 500px;
  left: 500px;
  background-color: #8f3eec;
  border-radius: 10px;
  border:hidden;
  :hover {
    color: white;
    border:solid;
    border-color:blue;
  }
`;
const BottonAdm = styled.button`
  font-family: 'Space Mono', monospace;
  color:blue;
  position: absolute;
  padding:10px;
  border:#8f3eec;
  top: 500px;
  left: 650px;
  background-color: #8f3eec;
  border-radius: 10px;
  border:hidden;
  :hover {
    color: white;
    border:solid;
    border-color:blue;
  }
`;
const StyleLogin = styled.input`
display:flex;
flex-direction:column;
border: solid 2px #63A1E6;
`

const Home = () => {
  const navigate = useNavigate()
  
  const onChangeList = () =>{
    navigate("/ListTravel")
  };
  const onChangeAdmin = () =>{
    navigate("/Login")
  };
  return (
    <div>
    <div>
        <BottonHome onClick={onChangeList}>List travel</BottonHome>
      </div>
      <div>
        <BottonAdm onClick={onChangeAdmin}>Admin area</BottonAdm >
      </div>
    </div>
  );
};

export default Home;

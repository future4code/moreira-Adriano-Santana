import React from "react";
import styled from "styled-components";

const BottonHome = styled.button`
  position: absolute;
  padding:15px;
  border:none;
  top: 500px;
  left: 500px;
  background-color: violet;
  border-radius: 20px;
  :hover {
    color: white;
    background-color:pink;
  }
`;
const BottonAdm = styled.button`
  position: absolute;
  padding:15px;
  border:none;
  top: 500px;
  left: 650px;
  background-color: violet;
  border-radius: 20px;
  :hover {
    color: white;
  }
`;

const Home = () => {
  return (
    <div>
      <div>
        <BottonHome>List travel</BottonHome>
      </div>
      <div>
        <BottonAdm >Admin area</BottonAdm >
      </div>
    </div>
  );
};

export default Home;

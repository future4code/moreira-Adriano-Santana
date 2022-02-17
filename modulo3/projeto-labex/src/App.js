import React from "react";
import styled from "styled-components";
import RouterDirection from "./route/Router";

const BackgroundImg = styled.div`
  width: 100%;
`;
const LogoImg = styled.img`
  position: absolute; 
  bottom: 150px;
  left: 400px;
`;
const PlanodeFundo = styled.img`
  width: 100%;
`;

const App =()=> {
 
  return (
    <div>
      <BackgroundImg>
        <div>
          <RouterDirection/>
          <PlanodeFundo src="https://i.postimg.cc/3xr8PZP7/Spaceship.png" />
        </div>

        <LogoImg src="https://i.postimg.cc/dQdG1qD3/Design-sem-nome-13.png" />
      </BackgroundImg>
      
    </div>
  );
}

export default App;

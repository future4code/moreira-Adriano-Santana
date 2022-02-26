import React from "react";
import RoutesApp from "./routes";
import styled from "styled-components";

const Container = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function App() {
  return (
    <Container>
      <RoutesApp />
    </Container>
  );
}

export default App;

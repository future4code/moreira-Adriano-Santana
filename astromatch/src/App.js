import "./App.css";
import Main from "./components/Main/Main";
import ResetBotao from "./components/ResetBotao/ResetBotao";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <Main />
      <ResetBotao />
    </AppContainer>
  );
}

export default App;

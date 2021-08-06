// import './App.css';
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./styles/global";
// import styled from 'styled-components';

// const Title = styled.h1`
//   color: #8257e6;
//   font-size: 64px;
// `

export function App() {
  return (
    <>
      {/* <Title >Hey td bem</Title> */}
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}


import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import styled from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Home from './components/Home'

const Container = styled.div`
  display: flex;
  width: 100vw;
`

const Main = styled.div`
  flex:7;
`

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #202020;
  color: aliceblue;
`
function App() {
  return (
    <BrowserRouter>
      <Container >
        <Menu />
        <Main>
          <Wrapper>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </BrowserRouter>
  );
}

export default App;

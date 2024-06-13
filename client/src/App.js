import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { darkTheme, lightTheme } from './utils/Theme.js'
import styled, { ThemeProvider } from 'styled-components'
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
  const [darkMode, setDarkMode] = useState(true)
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container >
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Wrapper>
              <Navbar />
              <Routes>
                <Route exact path='/' element={<Home />} />
              </Routes>
            </Wrapper>
          </Main>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

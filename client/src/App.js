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
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`
function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [text, setText] = useState('Use Search to view text here')
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Container >
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
              <Wrapper>
                <Navbar text={text} setText={setText} />
                <Routes>
                  <Route exact path='/' element={<Home text={text} />} />
                </Routes>
              </Wrapper>
            </Main>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

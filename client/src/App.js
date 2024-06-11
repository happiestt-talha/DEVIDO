import styled from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

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
    <Container >
      <Menu />
      <Main>
        <Wrapper>
          <Navbar />
          Card items
        </Wrapper>
      </Main>
    </Container>
  );
}

export default App;

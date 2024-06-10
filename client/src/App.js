import styled from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

const Container = styled.div`
  display: flex;
  `

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
function App() {
  return (
    <Container >
      <Menu />
      <Wrapper>
        <Navbar />
        Card items
      </Wrapper>
    </Container>
  );
}

export default App;

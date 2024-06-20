import React from 'react'
import Video from '../pages/Video'
import styled from 'styled-components'

const Container = styled.div`
  
`
const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      Text: {props.text}

      <Container>
        <Video />
      </Container>
    </>
  )
}

export default Home

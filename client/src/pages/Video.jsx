import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: ${({ theme }) => theme.text};
`
const Video = () => {
  return (
    <>
      <Container>
        <div>Video</div>
      </Container>
    </>
  )
}

export default Video
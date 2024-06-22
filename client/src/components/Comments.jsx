import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  color: ${({ theme }) => theme.text};
`
const Comments = () => {
  return (
    <>
      <Container>
        Comments
      </Container>
    </>
  )
}

export default Comments
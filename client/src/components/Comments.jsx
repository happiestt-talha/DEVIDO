import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'


const Container = styled.div`
  color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
  padding: 0.6rem 0.6rem;
  display: flex;
  gap:1rem ;
`
const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  width: 100%;
`
const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`
const Comments = () => {
  return (
    <>
      <Container>

        <Wrapper>
          <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Input placeholder="Add a comment..." />
        </Wrapper>


        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Container>
    </>
  )
}

export default Comments
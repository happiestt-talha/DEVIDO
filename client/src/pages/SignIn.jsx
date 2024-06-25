import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 4.5rem);
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
  width: 18rem;
  border: 2px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  box-shadow: 14px 19px 15px 9px ${({ theme }) => theme.bgLighter};
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`
const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
`
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  outline: none;
  width: 100%;
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border: 2px solid #3ea6ff;
    background-color: transparent;
  }
`
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  /* background-color: red; */
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
const SignIn = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Sign in</Title>
          <SubTitle>to continue to YouTube</SubTitle>
          <InputBox>
            <Input type='text' placeholder='Enter your username' />
            <Input type='password' placeholder='password' />
          </InputBox>
          <Button>Sign in</Button>
          <Title>OR</Title>
          <Input type='text' placeholder='Enter your username' />
          <Input type='email' placeholder='Enter your email' />
          <Flex>
            <Input type='password' placeholder='password' />
            <Input type='password' placeholder='confirm password' />
          </Flex>
          <Button>Sign up</Button>
        </Wrapper>
      </Container>
    </>
  )
}

export default SignIn
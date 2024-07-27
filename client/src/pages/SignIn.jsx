import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'

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

  transition: all 0.2s ease;

  &:hover {
    background-color: #3ea6ff;
    color: white;
  }
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
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const navigate=useNavigate()

  const handleOnChange = (e) => {
    console.log('OnChange: ', e.target.value)
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  const handleLogin = async (e) => {
    dispatch(loginStart())
    e.preventDefault()
    try {
      const res = await axios.post('/auth/login', { name:details.name, password:details.password })
      dispatch(loginSuccess(res.data))
      console.log('res: ', res)

      navigate('/')
    } catch (error) {
      console.log('Error: ', error)
      dispatch(loginFailure())

      alert(error.response.data.message)
    }
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Title>Sign in</Title>
          <SubTitle>to continue to YouTube</SubTitle>
          <InputBox>
            <Input type='text' placeholder='Enter your username' name='name' value={details.name} onChange={handleOnChange} />
            <Input type='password' placeholder='password' name='password' value={details.password} onChange={handleOnChange} />
          </InputBox>
          <Button onClick={handleLogin}>Sign in</Button>
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
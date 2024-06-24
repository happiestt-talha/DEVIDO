import React from 'react'
import styled from 'styled-components'
import Dummy from '../images/Dummy.jpg'

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Details = styled.div`
  display: flex;  
  flex-direction: column;
  gap: 10px;
`

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`
const Text = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
`


const Comment = () => {
  return (
    <>
      <Container>
        <Avatar src={Dummy} />
        <Details>
          <Name>Bhila Bhai</Name>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. At exercitationem consequuntur beatae earum cumque doloremque!</Text>
        </Details>
      </Container>
    </>
  )
}

export default Comment
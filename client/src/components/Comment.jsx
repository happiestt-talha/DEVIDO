import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Dummy from '../images/Dummy.jpg'
import axios from 'axios'

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


const Comment = ({comment}) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/user/find/${comment.userId}`);
      setChannel(res.data)
    };
    fetchComment();
  }, [comment.userId]);
  return (
    <>
      <Container>
        <Avatar src={channel.img || Dummy} />
        <Details>
          <Name>{channel.name}</Name>
          <Text>{comment.desc}</Text>
        </Details>
      </Container>
    </>
  )
}

export default Comment
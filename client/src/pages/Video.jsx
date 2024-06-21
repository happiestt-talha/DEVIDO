import { GoReport } from "react-icons/go";
import { ImShare } from "react-icons/im";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import Dummy from '../images/Dummy.jpg'
import React from 'react'
import styled from 'styled-components'

import { CgLogOff } from 'react-icons/cg'
const Container = styled.div`
  display: flex;
  width: 100%;
  color: ${({ theme }) => theme.text};
`

const Content = styled.div`
  flex: 7;
`

const VideoWrapper = styled.div``

const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const ChannelName = styled.h2`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`

const Description = styled.p`
  font-size: 14px;
`

const Subscribe = styled.button`
  background-color: #cc1a00;  
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`

const Recommendation = styled.div`
  flex: 2;
`
const Video = () => {
  return (
    <>
      <Container>
        <Content>
          <VideoWrapper>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/9bZkp7q19f0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </VideoWrapper>

          <Title>Test Video</Title>

          <Details>
            <Info>7,252,000 views • Jul 23, 2021</Info>
            <Buttons>
              <Button>
                <AiFillLike />
                Like
              </Button>
              <Button>
                <AiFillDislike />
                Dislike
              </Button>
              <Button>
                <ImShare />
                Share
              </Button>
              <Button>
                <GoReport />
                Report
              </Button>
            </Buttons>
          </Details>

          <Hr />

          <Channel>
            <ChannelInfo>
              <Image src={Dummy} />
              <ChannelName>CodeWithHarry</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Subscribe>Subscribe</Subscribe>
            </ChannelInfo>
          </Channel>
        </Content>

        <Recommendation>
          Recommendation Section
        </Recommendation>
      </Container>
    </>
  )
}

export default Video
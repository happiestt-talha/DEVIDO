import React from 'react'
import styled from 'styled-components'
import Comments from '../components/Comments'
import Dummy from '../images/Dummy.jpg'
import { BiBookmarkPlus } from "react-icons/bi";
import { FaShareSquare } from "react-icons/fa";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";

const Container = styled.div`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Content = styled.div`
  flex: 7;
`
const Reccomendation = styled.div`
  flex: 2;
`

const VideoWrapper = styled.div`
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 0.4rem;
  color: ${({ theme }) => theme.text};
`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.5rem 0.4rem;
  border-radius: 0.5rem;

  transition: all 0.2s ease;

  &:hover{
    background-color: ${({ theme }) => theme.bgLighter};
    /* background-color: #485867; */
  }
`

const HR = styled.hr`
  height: 2px;
  background-color: ${({ theme }) => theme.soft};
  border: none;
  margin: 0.6rem 0;
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ChannelInfo = styled.div`
  display: flex;
  gap: 1rem;
  /* align-items: center; */
`
const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`
const ChannelName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
`
const ChannelCounter = styled.span`
  margin: 0.3rem 0;
  color: ${({ theme }) => theme.textSoft};
  font-size: 1rem;
`
const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
const Description = styled.p`
  width: 70%;
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSoft};
`
const Subscribe = styled.button`
  background-color: #cc1a00;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`
const Video = () => {
  return (
    <>
      <Container>
        <Content>
          <VideoWrapper>
            <iframe
              width="100%"
              height="450rem"
              src="https://www.youtube.com/embed/id7qgnqIZtg?si=_bgPx6_13Uo7XUG3"
              title="YouTube video player"
              allowFullScreen
              frameBorder={0}
            ></iframe>
            <Title>Tom and Jerry</Title>
            <Details>
              <Info>8,000,000 views • 1 day ago</Info>
              <Buttons>
                <Button>
                  <BiLike /> Like
                </Button>
                <Button>
                  <BiDislike /> Dislike
                </Button>
                <Button>
                  <FaShareSquare /> Share
                </Button>
                <Button>
                  <BiBookmarkPlus /> Save
                </Button>
              </Buttons>
            </Details>
            <HR />
            <Channel>
              <ChannelInfo>
                <ChannelImage src={Dummy} />
                <ChannelDetails>
                  <ChannelName>Tom and Jerry</ChannelName>
                  <ChannelCounter>200,000 subscribers</ChannelCounter>
                  <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta voluptas quo quae quos sunt! Officiis placeat molestiae?
                  </Description>
                </ChannelDetails>
              </ChannelInfo>
              <Subscribe>Subscribe</Subscribe>
            </Channel>
            <HR />
          </VideoWrapper>
          <>
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
          </>
        </Content>
        <Reccomendation>
          Reccomendation
        </Reccomendation>
      </Container >
    </>
  )
}

export default Video
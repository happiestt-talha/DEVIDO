import { BiBookmarkPlus } from "react-icons/bi";
import { FaShareSquare } from "react-icons/fa";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.text};
`
const Content = styled.div`
  flex: 7;
`
const Reccomendation = styled.div`
  flex: 2;
`

const VideoWrapper = styled.div``

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;`

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
  gap: 1rem;
  color: ${({ theme }) => theme.text};`

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.5rem 0.2rem;
  border-radius: 0.5rem;

  transition: all 0.3s ease;

  &:hover{
    background-color: ${({ theme }) => theme.bgLighter};
    /* background-color: #485867; */
  }
`
const Video = () => {
  return (
    <>
      <Container>
        <Content>
          <VideoWrapper>
            <iframe
              width="100%"
              height="500rem"
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
          </VideoWrapper>
        </Content>
        <Reccomendation>
          Reccomendation
        </Reccomendation>
      </Container>
    </>
  )
}

export default Video
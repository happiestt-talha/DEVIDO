import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Comments from '../components/Comments'
import Card from '../components/Card'
import { BiBookmarkPlus, BiSolidDislike, BiSolidLike, BiDislike, BiLike } from "react-icons/bi";
import { FaShareSquare } from "react-icons/fa";
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { dislike, fetchStart, fetchSuccess, like } from '../redux/videoSlice'
import { formatDistanceToNow } from 'date-fns'
import { subscription } from '../redux/userSlice';

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 0.4rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 992px) {
    flex-direction: column;
  }
`
const Content = styled.div`
  flex: 7;
`
const Reccomendation = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
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
  margin-top: .3rem;
  margin-bottom: .2rem;
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

  transition: background-color 0.2s ease;
  transition: transform 2s cubic-bezier(0.43, 0.42, 0.45, 0.94);

  &:hover{
    background-color: ${({ theme }) => theme.bgLighter};
  }
`
const LButton = styled(Button)`
  &:active{
    animation: popup 1s cubic-bezier(0.43, 0.42, 0.45, 0.94);
  }
  
  @keyframes popup {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.6);
    }
    100% {
      transform: scale(1);
    }
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

  &:active{
    animation: changeColor 2s;
  }

  @keyframes changeColor {
    0% {
      background-color: #cc1a00;
    }
    50% {
      background: linear-gradient(45deg, #cc1a00, #ec7316);
    }
    100% {
      background-color: #cc1a00;
    }
  }
`
const VideoFrame = styled.iframe`
  width: 100%;
  height:28rem;

  @media (max-width: 768px) {
    height: 20rem;
  }
`
const Video = () => {
  const path = useLocation().pathname.split("/")[2]
  const dispatch = useDispatch()
  const [channel, setChannel] = useState({})
  const { currentVideo } = useSelector((state) => state.video)
  const { currentUser } = useSelector((state) => state.user)

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchVideos = async () => {
      dispatch(fetchStart())
      try {
        const videoRes = await axios.get(`/video/find/${path}`);
        const channelRes = await axios.get(`/user/find/${videoRes.data.userId}`);
        console.log('videoRes: ', videoRes.data)
        console.log('channelRes: ', channelRes.data)
        dispatch(fetchSuccess(videoRes.data))
        setChannel(channelRes.data)
      } catch (error) {
        console.error('Failed to fetch video or channel data:', error);
      }
    };
    fetchVideos();
  }, [path, dispatch]);

  const handleLike = async () => {
    try {
      dispatch(like(currentUser?._id))
      await axios.put(`/user/like/${path}`)
    } catch (error) {
      console.error('Failed to like video:', error);
    }
  }

  const handleDislike = async () => {
    try {
      dispatch(dislike(currentUser?._id))
      await axios.put(`/user/dislike/${path}`)
    } catch (error) {
      console.error('Failed to dislike video:', error);
    }
  }

  const handleSub = async () => {
    try {
      dispatch(subscription(channel._id))
      if (currentUser.subscribedUsers.includes(channel._id)) {
        await axios.put(`/user/unsub/${channel._id}`)
      } else {
        await axios.put(`/user/sub/${channel._id}`)
      }
    } catch (error) {
      console.error('Failed to subscribe/unsubscribe:', error);
    }
  }

  return (
    <>
      <Container>
        <Content>
          <VideoWrapper>
            <VideoFrame src={`https://www.youtube.com/embed/${path}`} />
          </VideoWrapper>
          <Title>{currentVideo?.title}</Title>
          <Details>
            <Info>{currentVideo?.views} views • {formatDistanceToNow(new Date(currentVideo?.createdAt), { addSuffix: true })}</Info>
            <Buttons>
              <LButton onClick={handleLike}>
                {currentVideo?.likes.includes(currentUser?._id)
                  ? <BiSolidLike />
                  : <BiLike />}
                {currentVideo?.likes.length} Like
              </LButton>
              <LButton onClick={handleDislike}>
                {currentVideo?.dislikes.includes(currentUser?._id)
                  ? <BiSolidDislike />
                  : <BiDislike />}
                {currentVideo?.dislikes.length} Dislike
              </LButton>
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
              <ChannelImage src={channel?.img} />
              <ChannelDetails>
                <ChannelName>{channel?.name}</ChannelName>
                <ChannelCounter>{channel?.subscribers} subscribers</ChannelCounter>
                <Description>
                  {currentVideo?.desc}
                </Description>
              </ChannelDetails>
            </ChannelInfo>
            <Subscribe onClick={handleSub}>
              {currentUser?.subscribedUsers?.includes(channel?._id)
                ? 'SUBSCRIBED'
                : 'SUBSCRIBE'}
            </Subscribe>
          </Channel>
          <HR />
          <Comments />
        </Content>
        <Reccomendation>
          {Array.from({ length: 14 }).map((_, index) => (
            <Card key={index} type="sm" />
          ))}
        </Reccomendation>
      </Container>
    </>
  )
}

export default Video

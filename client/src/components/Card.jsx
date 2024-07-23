import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dummy from '../images/Dummy.jpg'
import Dummy2 from '../images/Dummy2.jpg'
import axios from "axios";
//eslint-disable-next-line import/no-unresolved
import { format } from 'timeago.js'

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "320px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : ".8rem")};
  cursor: pointer;
  display: ${(props) => props.type ===  "sm" && "flex"};
  /* gap: 10px; */
`;
const Image = styled.img`
  /* width: 100%; */
  width:  ${(props) => (props.type  === "sm" ? "200px" : "100%")};
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 6;
`;
const Details = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bgLighter};
  gap: 12px;
  flex: 19;
  padding:  ${(props) => (props.type === "sm" ? "0px 8px" : "8px .5rem")};
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};

  display: ${(props) => props.type === "sm" && "none"} ;
  
  @media (max-width: 992px) {
    display: ${(props) => props.type === "sm" && "flex"} ;
  };
`

const Card = ({ type, video }) => {

  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user/find/${video.userId}`)
      // console.log('Res from channel: ', res.data)
      setUser(res.data)
    }

    type !== "sm" && fetchUser()

    //eslint-disable-next-line
  }, [])
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src={Dummy}
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src={Dummy2}
          />
          <Texts>
            {
              type === "sm" ? <Title>Card Title</Title> : <Title>{video.title.length > 30 ? video.title.slice(0, 30) + "..." : video.title}</Title>
            }
            {
              type === "sm" ? <ChannelName type={type}>Channel Name</ChannelName> : <ChannelName>{user.name}</ChannelName>
            }
            {
              //eslint-disable-next-line
              type === "sm" ? <Info type={type}>8,000,000 views • 18 days ago</Info> : <Info type={type}>{video.views} views • {format(video.createdAt)}</Info>
            }
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
import React, { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dummy from '../images/Dummy.jpg';
import Dummy2 from '../images/Dummy2.jpg';
import axios from "axios";
import { formatDistanceToNow } from 'date-fns';

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "320px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : ".8rem")};
  display: ${(props) => props.type === "sm" && "flex"};
  /* background-color: red; */
  cursor: pointer;
  border-radius:.5rem ;
  padding: 0;
`;

const Image = styled.img`
  width:  ${(props) => (props.type === "sm" ? "200px" : "100%")};
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  /* border-radius: .5rem .5rem 0 0; */
  border-radius: .5rem;
  object-fit: cover;
  margin: 0;
  /* flex: 6; */
`;

const Details = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bgLighter};
  gap: .5rem;
  /* flex: 19; */
  padding:  ${(props) => (props.type === "sm" ? "0px 8px" : ".4rem")};

  margin: 0;
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
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: .8rem;
  color: ${({ theme }) => theme.textSoft};
  margin: .2rem 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  display: ${(props) => props.type === "sm" && "none"};
  
  @media (max-width: 992px) {
    display: ${(props) => props.type === "sm" && "flex"};
  };
`;

const Card = ({ type, video }) => {
  const [user, setUser] = useState({});
  

  useEffect(() => {
    if (video && video.userId) {
      const fetchUser = async () => {
        try {
          const res = await axios.get(`/user/find/${video.userId}`);
          // console.log('User: ', res.data);
          setUser(res.data);
        } catch (error) {
          console.error('Failed to fetch user:', error);
        }
      };

        fetchUser();
    }
  }, [video, type]);

  if (!video) {
    return null; // or a loading indicator, if appropriate
  }

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl ? video.imgUrl : Dummy} />
        <Details type={type}>
          <ChannelImage type={type} src={user.img ? user.img : Dummy2} />
          <Texts>
            <Title>
              {video.title.length > 30 ? video.title.substring(0, 30) + "..." : video.title}
            </Title>
            <ChannelName type={type}>
              {user.name || "Unknown"}
            </ChannelName>
            <Info type={type}>
              {`${video.views} views • ${formatDistanceToNow(new Date(video.createdAt), { addSuffix: true })}`}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;

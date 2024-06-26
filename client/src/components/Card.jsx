import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dummy from '../images/Dummy.jpg'
import Dummy2 from '../images/Dummy2.jpg'

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "320px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : ".8rem")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  /* gap: 10px; */
`;
const Image = styled.img`
  /* width: 100%; */
  width:  ${(props) => (props.type === "sm" ? "200px" : "100%")};
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 6;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 19;
  padding:  ${(props) => (props.type === "sm" && "0px 8px")};

  /* background-color: ${(props) => props.type === "sm" && "red"}; ; */
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

const Card = ({ type }) => {
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
            <Title>{"Test Video just to be used in public other wise will be deleted later soon".length > 30 ? "Test Video just to be used in public other wise will be deleted later soon".slice(0, 30) + "..." : "Test Video just to be used in public other wise will be deleted later soon"}</Title>
            <ChannelName>Lama Dev</ChannelName>
            <Info type={type}>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
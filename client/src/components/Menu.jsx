import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { IoHomeSharp, IoCompass, IoGameController, IoNewspaperSharp, IoSettings, IoHelpCircleSharp, IoMdAdd } from "react-icons/io5";
import { MdSubscriptions, MdVideoLibrary, MdHistory, MdOutlineSportsBasketball, MdLibraryMusic, MdLiveTv, MdFlag } from "react-icons/md";
import { BiSolidMovie } from "react-icons/bi";
import { CgDarkMode, CgLogOff } from "react-icons/cg";
import logo from '../images/logo.png'

const Container = styled.div`
  flex: 1.3;
  background-color:${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  height: 100vh;

  overflow-y: scroll;

  &::-webkit-scrollbar{
    display: none;
  }

  @media (max-width: 992px ) {
    display: none;
  }

`

const Wrapper = styled.div`
  padding: 20px 10px;

`

const Logo = styled.div`
  padding: 0 0 0 5px;
  display: flex;
  align-items: center;
  gap: .5rem;
`

const Img = styled.img`
  height: 25px;
`

const Item = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.2rem;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  padding: .6rem;
  &:hover{
    background-color: ${({ theme }) => theme.bgLighter};
    /* background-color: hsla(0, 0%, 00%, 0.3); */
  }
`

const HR = styled.hr`
  height: 1px;
  /* border: 0.5px solid rgba(255, 255, 255, 0.5); */
  background-color:${({ theme }) => theme.soft}; ;
  margin: 15px 0; 

`
const LoginSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  padding: .6rem;
  
  /* &:hover{
    background-color: rgba(255, 255, 255, 0.5);
    background-color: hsla(0, 0%, 00%, 0.3);
  } */
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
  display: flex;
  align-items: center;
  gap: .5rem;
  transition: all .3s ease;
  z-index: 5;
  
  &:hover{
    box-shadow: 0 0 10px 5px #3ea6ff;
  }
`

const Menu = ({ darkMode, setDarkMode }) => {

  const navMainItems = [
    {
      title: "Home",
      icon: <IoHomeSharp />
    },
    {
      title: "Explore",
      icon: <IoCompass />
    },
    {
      title: "Subscription",
      icon: <MdSubscriptions />
    },
    {
      title: "Library",
      icon: <MdVideoLibrary />
    },
    {
      title: "History",
      icon: <MdHistory />
    },
  ]
  const navCatItems = [
    {
      title: "Music",
      icon: <MdLibraryMusic />
    },
    {
      title: "Sports",
      icon: <MdOutlineSportsBasketball />
    },
    {
      title: "Gaming",
      icon: <IoGameController />
    },
    {
      title: "News",
      icon: <IoNewspaperSharp />
    },
    {
      title: "Movies",
      icon: <BiSolidMovie />
    },
    {
      title: "Live",
      icon: <MdLiveTv />
    },
  ]
  const navHelpers = [
    {
      title: "Settings",
      icon: <IoSettings />
    },
    {
      title: "Report",
      icon: <MdFlag />
    },
    {
      title: "Help",
      icon: <IoHelpCircleSharp />
    },
  ]

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logo} />
          <span>Devido</span>
        </Logo>
        {
          navMainItems.map((item, index) => (
            <Link to={`/${item.title.toLowerCase()}`} key={index} style={{ textDecoration: "none", color: "none" }}>
              <Item>
                {item.icon}
                {item.title}
              </Item>
            </Link>
          ))
        }
        <HR />
        <LoginSec>
          <p>Log in to like, comment, and subscribe</p>
          <Button>
            <FaRegUserCircle /> Login
          </Button>
        </LoginSec>
        <HR />
        {
          navCatItems.map((item, index) => (
            <Item key={index}>
              {item.icon}
              {item.title}
            </Item>
          ))
        }
        <HR />
        {
          navHelpers.map((item, index) => (
            <Item key={index}>
              {item.icon}
              {item.title}
            </Item>
          ))
        }
        <Item>
          <CgDarkMode />
          <span onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light" : "Dark"} Mode</span>
        </Item>
        <HR />
        <Item>
          <CgLogOff />
          Log Out
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
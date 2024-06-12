import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IoHomeSharp, IoCompass, IoGameController, IoNewspaperSharp, IoSettings, IoHelpCircleSharp } from "react-icons/io5";
import { MdSubscriptions, MdVideoLibrary, MdHistory, MdOutlineSportsBasketball, MdLibraryMusic, MdLiveTv, MdFlag } from "react-icons/md";
import { BiSolidMovie } from "react-icons/bi";
import { CgDarkMode } from "react-icons/cg";
import logo from '../images/logo.png'

const Conntainer = styled.div`
  flex: 1.3;
  background-color: black;
  color: aliceblue;
  height: 100vh;

  overflow-y: scroll;

  &::-webkit-scrollbar{
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
  padding: .6rem;
  &:hover{
    background-color: rgba(255, 255, 255, 0.5);
    /* background-color: hsla(0, 0%, 00%, 0.3); */
  }
`

const HR = styled.hr`
  height: 1px;
  /* border: 0.5px solid rgba(255, 255, 255, 0.5); */
  background-color:rgba(255, 255, 255, 0.5); ;
  margin: 15px 0; 

`
const Menu = () => {
  const navMenu = [
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
    {
      title: "Switch mode",
      icon: <CgDarkMode />
    },
  ]

  return (
    <Conntainer>
      <Wrapper>
        <Logo>
          <Img src={logo} />
          <span>Devido</span>
        </Logo>
        {
          navMenu.map((item, index) => (
            <div key={index}>
              <Link to={`/${item.title.toLowerCase()}`} key={index} style={{ textDecoration: "none", color: "none" }}>
                <Item>
                  {item.icon}
                  {item.title}
                </Item>
              </Link>

              {(index === 5) && <HR />}
            </div>
          ))
        }
      </Wrapper>
    </Conntainer>
  )
}

export default Menu
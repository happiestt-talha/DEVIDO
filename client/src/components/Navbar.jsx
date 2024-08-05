import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Flex } from "../pages/SignIn";
const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.soft};
  /* height: 2.3rem; */
  padding: 0.2rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const Search = styled.div`
  width: 40%;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;

@media (max-width: 768px) {
  margin: 0;

}
`;
const Input = styled.input`
  width: 60%;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Text = styled.div`
  font-size: .8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`
const Img = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  background-color: burlywood;
`
const Navbar = () => {
  const [q, setQ] = useState('')
  const { currentUser } = useSelector((state) => state.user);

  const navigate=useNavigate()
  const handleOnchange = (e) => {
    console.log('Q: ', q)
    setQ(e.target.value)
  };

  const handleSearch = () => {
    navigate(`/search?q=${q}`)
    setQ('')
  }
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" onChange={handleOnchange} value={q} />
          <IoSearchSharp onClick={handleSearch } style={{ cursor: "pointer", color: "#3ea6ff" }} />
        </Search>
        {
          currentUser
            ? <>
              <Link to="profile" style={{ textDecoration: "none" }}>
                <Flex>
                  <Img src={currentUser.img} alt="" />
                  <Text>Hello {currentUser.name}</Text>
                </Flex>
              </Link>
            </>
            : <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <RiAccountPinCircleFill />
                SIGN IN
              </Button>
            </Link>
        }
      </Wrapper>
    </Container>
  );
};

export default Navbar;
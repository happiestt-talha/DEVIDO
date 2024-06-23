import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { RiAccountPinCircleFill } from "react-icons/ri";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
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
const Navbar = () => {
  const [text, setText] = useState('')
  const handleOnchange = (e) => {
    setText(" ")
    console.log('Text: ', text)
    setText(e.target.value)
  };
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" onChange={handleOnchange} value={text} />
          <IoSearchSharp/>
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <RiAccountPinCircleFill/>
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
import React from "react";
import styled from "styled-components";
import Search from "./SearchBar";
import { TitleLogo, Heart, LoginIcon, Pencil, Profile } from "./Icons";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import useInput from "../Hooks/useInput";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  height: 64px;
  width: 100%;
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SearchDiv = styled.div`
  height: 32px;
  width: 27vw;
`;
const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
const Icons = styled.div`
  & > div {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`;

const QUERY = gql`
  {
    LoggedBool @client
  }
`;

const Header = () => {
  const {
    data: { LoggedBool },
  } = useQuery(QUERY);
  const search = useInput("");

  return (
    <HeaderWrapper>
      <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        <Logo>
          <TitleLogo /> 커리어스팟
        </Logo>
      </Link>
      <SearchDiv>
        <Search />
      </SearchDiv>
      <Icons>
        {LoggedBool ? (
          <>
            <div>
              <Pencil />
            </div>
            <div>
              <Heart />
            </div>
            <div>
              <Profile />
            </div>
          </>
        ) : (
          <LoginIcon />
        )}
      </Icons>
    </HeaderWrapper>
  );
};

// 헤더. 홈페이지의 맨 위에 들어가는 부분입니다.

export default Header;

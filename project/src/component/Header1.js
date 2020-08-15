import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { TitleLogo, Pencil, Profile, Heart, LoginIcon } from "./Icons";
import useInput from "../Hooks/useInput";
import Input from "./Input";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  min-height: 50px;
  padding: 0 11%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderColumn = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  &:first-child {
    width: 20%;
    background-color: white;
  }
  &:nth-child(2) {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5vw;
  }
  &:last-child {
    width: 20%;
    display: flex;
    justify-content: space-around;
    padding-left: 5%;
  }
`;
const Title = styled.div`
  font-size: 1.7vw;
  vertical-align: bottom;
  padding-top: 1.4%;
  font-family: Tmoney RoundWind;
  font-weight: 800;
  margin-left: 11px;
`;

const SearchInput = styled(Input)`
  width: 100%;
  border: 1px solid #f04e44;
  border-radius: 40px;
  &:focus {
    outline: none;
  }
`;

const QUERY = gql`
  {
    LoggedBool @client
  }
`;

const Header1 = () => {
  const {
    data: { LoggedBool },
  } = useQuery(QUERY);
  const search = useInput("");

  return (
    <Container>
      <HeaderColumn>
        <TitleLogo></TitleLogo>
        <Title>커리어 스팟</Title>
      </HeaderColumn>
      <HeaderColumn>
        <SearchInput placeholder={"검색해보세요"} {...search} />
      </HeaderColumn>
      <HeaderColumn>
        {LoggedBool ? (
          <>
            <Pencil />
            <Heart />
            <Profile />
          </>
        ) : (
          <LoginIcon />
        )}
      </HeaderColumn>
    </Container>
  );
};

// 헤더. 홈페이지의 맨 위에 들어가는 부분입니다.

export default Header1;

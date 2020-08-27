import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Modal from "../component/Modal";
import MyDropzone from "../component/MyDropzone";
import SearchPost from "../component/SearchPost";
import UploadBtn from "../component/UploadBtn";

const Container = styled.div`
  width: 72%;
  height: 100%;
  padding: 64px 0 0 0;
  margin:0px auto;
`;

const ClassificationBox = styled.div`
  width: 100%;
  font-family: Noto Sans KR;
  display: flex;
  align-items: center;
  font-size: 28px;
  & > div:not(:last-child) {
    margin-right: 20px;
  }
  & > div {
  }
`;

const Text = styled.div`
  font-size: ${(props) => (props.type ? "28px" : "24px")};
  font-weight: ${(props) => (props.type ? "bold" : "normal")};
  transition: all 0.1s ease-in-out;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SearchResultText = styled.div`
  text-align: center;
  padding-top: 1%;
  padding-bottom: 1%;
  color: gray;
`;

const CHECK_USER = gql`
  query {
    checkUser
  }
`;

const Search = () => {
  const [type, setType] = useState("all");

  const SearchText = "이것"
  // 백엔드 연결 전에 임시로 쓰는 데이터

  const onClick = (e) => {
    setType(e.target.id);
  };

  return (
    <Container>
      <SearchResultText>
        '{SearchText}'을(를) 포함한 포스팅입니다.
      </SearchResultText>
      <ClassificationBox>
        <Text id={"all"} type={type === "all"} onClick={onClick}>
          전체
        </Text>
        <Text id={"location"} type={type === "location"} onClick={onClick}>
          지역
        </Text>
        <Text id={"field"} type={type === "field"} onClick={onClick}>
          분야
        </Text>
      </ClassificationBox>
      <ContentWrapper>
        <UploadBtn></UploadBtn>
      </ContentWrapper>
      <SearchPost/>
      <SearchPost/>
      <SearchPost/>
      <SearchPost/>
      <SearchPost/>
    </Container>
  );
};

export default Search;
